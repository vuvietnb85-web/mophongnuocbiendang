import * as THREE from "three";
import {
  COLS,
  REGION_MEKONG,
  ROWS,
  buildTerrain,
  colLon,
  lonLatToWorld,
  rowLat,
  visualHeight,
  type Terrain,
} from "@/sim/geo";
import { PLACES, VIEWS, type ViewId } from "@/sim/places";

export type SimHandle = {
  setSea: (meters: number) => void;
  setSubsidence: (meters: number) => void;
  setView: (id: ViewId) => void;
  resize: () => void;
  dispose: () => void;
};

type Opts = {
  canvas: HTMLCanvasElement;
  pins: HTMLElement;
  compass: HTMLElement;
  onStats: (km2: number) => void;
};

const TERRAIN_VERT = /* glsl */ `
precision highp float;
attribute float aElev;
attribute float aRegion;
varying float vElev;
varying float vRegion;
varying vec3 vNormal;
varying float vLon;
varying float vLat;
uniform float uLon0;
uniform float uLon1;
uniform float uLat0;
uniform float uLat1;
uniform float uWorldW;
uniform float uWorldD;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vElev = aElev;
  vRegion = aRegion;
  vNormal = normalize(normalMatrix * normal);
  float u = position.x / uWorldW + 0.5;
  float v = position.z / uWorldD + 0.5;
  vLon = mix(uLon0, uLon1, u);
  vLat = mix(uLat1, uLat0, v);
  gl_Position = projectionMatrix * mv;
}
`;

const TERRAIN_FRAG = /* glsl */ `
precision highp float;
varying float vElev;
varying float vRegion;
varying vec3 vNormal;
varying float vLon;
varying float vLat;
uniform float uSea;
uniform float uSub;
void main() {
  float sea = uSea + (vRegion > 0.5 && vRegion < 1.5 ? uSub : 0.0);
  bool land = vElev >= 0.0;
  bool flooded = land && vElev < sea;
  vec3 col;
  if (!land) {
    float d = clamp((-vElev) / 4200.0, 0.0, 1.0);
    float shelf = clamp((-vElev) / 90.0, 0.0, 1.0);
    vec3 shallow = vec3(0.16, 0.55, 0.58);
    vec3 mid = vec3(0.05, 0.24, 0.36);
    vec3 deep = vec3(0.02, 0.07, 0.12);
    col = mix(shallow, mid, smoothstep(0.0, 0.35, shelf));
    col = mix(col, deep, smoothstep(0.15, 1.0, d));
  } else if (flooded) {
    float depth = clamp((sea - vElev) / 2.4, 0.0, 1.0);
    col = mix(vec3(0.86, 0.58, 0.28), vec3(0.55, 0.18, 0.13), depth);
  } else if (vElev < 12.0) {
    float t = vElev / 12.0;
    col = mix(vec3(0.80, 0.72, 0.50), vec3(0.36, 0.55, 0.32), t);
  } else if (vElev < 500.0) {
    float t = clamp((vElev - 12.0) / 488.0, 0.0, 1.0);
    col = mix(vec3(0.33, 0.50, 0.30), vec3(0.34, 0.38, 0.28), t);
  } else if (vElev < 1800.0) {
    float t = clamp((vElev - 500.0) / 1300.0, 0.0, 1.0);
    col = mix(vec3(0.40, 0.38, 0.32), vec3(0.62, 0.60, 0.56), t);
  } else {
    float t = clamp((vElev - 1800.0) / 1200.0, 0.0, 1.0);
    col = mix(vec3(0.62, 0.60, 0.56), vec3(0.90, 0.91, 0.90), t);
  }
  vec3 L = normalize(vec3(-0.38, 0.86, 0.32));
  float ndl = clamp(dot(normalize(vNormal), L), 0.0, 1.0);
  col *= 0.40 + 0.66 * ndl;
  float gx = abs(fract(vLon * 0.5) - 0.5);
  float gy = abs(fract(vLat * 0.5) - 0.5);
  float grid = 1.0 - smoothstep(0.0, 0.02, min(gx, gy));
  col = mix(col, col + vec3(0.18, 0.13, 0.04), grid * 0.28);
  gl_FragColor = vec4(col, 1.0);
}
`;

const WATER_VERT = /* glsl */ `
precision highp float;
uniform float uTime;
uniform float uAmp;
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec3 p = position;
  float sx = sin(p.x * 1.6 + uTime * 0.75);
  float cx = cos(p.x * 1.6 + uTime * 0.75);
  float sy = sin(p.y * 1.35 - uTime * 0.55);
  float cy = cos(p.y * 1.35 - uTime * 0.55);
  float disp = (sx * 0.62 + cy * 0.38) * uAmp;
  p.z += disp;
  float dzdx = uAmp * 0.62 * 1.6 * cx;
  float dzdy = uAmp * 0.38 * 1.35 * -sy;
  vec3 n = normalize(vec3(-dzdx, -dzdy, 1.0));
  vec4 world = modelMatrix * vec4(p, 1.0);
  vWorld = world.xyz;
  vNormalW = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const WATER_FRAG = /* glsl */ `
precision highp float;
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 N = normalize(vNormalW);
  float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 2.6);
  vec3 deep = vec3(0.03, 0.18, 0.26);
  vec3 face = vec3(0.10, 0.42, 0.48);
  vec3 col = mix(face, deep, 0.45);
  col = mix(col, vec3(0.78, 0.88, 0.90), fres * 0.72);
  float alpha = mix(0.46, 0.78, fres);
  gl_FragColor = vec4(col, alpha);
}
`;

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

export function mountSea(opts: Opts): SimHandle {
  const { canvas, pins, compass, onStats } = opts;
  const terrain = buildTerrain();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
  } catch {
    return mountFallback(canvas, terrain, onStats);
  }
  if (!renderer.getContext()) {
    renderer.dispose();
    return mountFallback(canvas, terrain, onStats);
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setClearColor(0x07141c, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07141c, 0.011);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.05, 80);

  const { geometry, mekong } = makeTerrainGeometry(terrain);
  const { worldW, worldD } = terrain;
  const tMat = new THREE.ShaderMaterial({
    vertexShader: TERRAIN_VERT,
    fragmentShader: TERRAIN_FRAG,
    uniforms: {
      uSea: { value: 0 },
      uSub: { value: 0 },
      uLon0: { value: 102.2 },
      uLon1: { value: 121.15 },
      uLat0: { value: 5.55 },
      uLat1: { value: 23.35 },
      uWorldW: { value: worldW },
      uWorldD: { value: worldD },
    },
  });
  const landMesh = new THREE.Mesh(geometry, tMat);
  scene.add(landMesh);

  const waterGeo = new THREE.PlaneGeometry(worldW * 1.04, worldD * 1.04, 80, 70);
  const wMat = new THREE.ShaderMaterial({
    vertexShader: WATER_VERT,
    fragmentShader: WATER_FRAG,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uAmp: { value: reduced ? 0 : 0.012 },
    },
  });
  const water = new THREE.Mesh(waterGeo, wMat);
  water.rotation.x = -Math.PI / 2;
  water.renderOrder = 2;
  scene.add(water);

  const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
  const elevAttr = geometry.getAttribute("aElev") as THREE.BufferAttribute;

  let sea = 0;
  let sub = 0;
  const wide = VIEWS[0];
  const aim = {
    theta: wide.theta,
    phi: wide.phi,
    radius: wide.radius,
    target: new THREE.Vector3(),
  };
  const cur = {
    theta: wide.theta,
    phi: wide.phi,
    radius: wide.radius,
    target: new THREE.Vector3(),
  };
  const placeAim = (id: ViewId, snap: boolean) => {
    const view = VIEWS.find((v) => v.id === id) ?? VIEWS[0];
    const p = lonLatToWorld(view.lon, view.lat);
    aim.theta = view.theta;
    aim.phi = view.phi;
    aim.radius = view.radius;
    aim.target.set(p.x, 0, p.z);
    if (snap) {
      cur.theta = aim.theta;
      cur.phi = aim.phi;
      cur.radius = aim.radius;
      cur.target.copy(aim.target);
    }
  };
  placeAim("wide", true);

  const pinEls = new Map<string, HTMLElement>();
  for (const place of PLACES) {
    const el = document.createElement("span");
    el.className = "pin";
    el.textContent = place.name;
    pins.appendChild(el);
    pinEls.set(place.id, el);
  }

  const pointers = new Map<number, { x: number; y: number }>();
  let pinch: number | null = null;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  const grab = () => {
    aim.theta = cur.theta;
    aim.phi = cur.phi;
    aim.radius = cur.radius;
    aim.target.copy(cur.target);
  };

  const onDown = (e: PointerEvent) => {
    canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    grab();
    if (pointers.size === 1) {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      pinch = null;
    }
  };
  const onMove = (e: PointerEvent) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1 && dragging) {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      cur.theta -= dx * 0.0052;
      cur.phi = clamp(cur.phi + dy * 0.0036, 0.22, 1.18);
      grab();
    } else if (pointers.size >= 2) {
      const pts = [...pointers.values()];
      const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (pinch && pinch > 0) {
        cur.radius = clamp(cur.radius * (pinch / d), 1.7, 22);
        grab();
      }
      pinch = d;
    }
  };
  const onUp = (e: PointerEvent) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) dragging = false;
  };
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    cur.radius = clamp(cur.radius * Math.exp(e.deltaY * 0.0011), 1.7, 22);
    grab();
  };

  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  canvas.addEventListener("wheel", onWheel, { passive: false });

  const tmp = new THREE.Vector3();
  const north = new THREE.Vector3();
  const origin = new THREE.Vector3();
  const timer = new THREE.Timer();
  timer.connect(document);

  const paint = () => {
    tMat.uniforms.uSea.value = sea;
    tMat.uniforms.uSub.value = sub;
    water.position.y = visualHeight(sea) + 0.004;
    onStats(terrain.floodedKm2(sea, sub));
    for (const place of PLACES) {
      const el = pinEls.get(place.id);
      if (!el) continue;
      const hit = place.elev < sea + (place.group === "ĐBSCL" ? sub : 0);
      el.classList.toggle("is-flood", hit);
    }
  };

  const deformMekong = () => {
    for (const i of mekong) {
      posAttr.setY(i, visualHeight(elevAttr.getX(i) - sub));
    }
    posAttr.needsUpdate = true;
    geometry.computeVertexNormals();
  };

  const resize = () => {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  deformMekong();
  paint();

  let alive = true;
  renderer.setAnimationLoop(() => {
    if (!alive) return;
    timer.update();
    const dt = Math.min(timer.getDelta(), 0.05);
    const k = 1 - Math.exp(-3.4 * dt);
    cur.theta += (aim.theta - cur.theta) * k;
    cur.phi += (aim.phi - cur.phi) * k;
    cur.radius += (aim.radius - cur.radius) * k;
    cur.target.lerp(aim.target, k);
    const sp = Math.sin(cur.phi);
    camera.position.set(
      cur.target.x + cur.radius * sp * Math.sin(cur.theta),
      cur.target.y + cur.radius * Math.cos(cur.phi),
      cur.target.z + cur.radius * sp * Math.cos(cur.theta),
    );
    camera.up.set(0, 1, 0);
    camera.lookAt(cur.target);
    wMat.uniforms.uTime.value += dt;
    renderer.render(scene, camera);

    const rect = canvas.getBoundingClientRect();
    for (const place of PLACES) {
      const el = pinEls.get(place.id);
      if (!el) continue;
      const wpt = lonLatToWorld(place.lon, place.lat);
      const lift = visualHeight(Math.max(place.elev, sea)) + 0.05;
      tmp.set(wpt.x, lift, wpt.z).project(camera);
      const behind = tmp.z > 1;
      const x = (tmp.x * 0.5 + 0.5) * rect.width;
      const y = (-tmp.y * 0.5 + 0.5) * rect.height;
      const on = !behind && x > -20 && y > -12 && x < rect.width + 20 && y < rect.height + 12;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.opacity = on ? "1" : "0";
    }
    origin.copy(cur.target);
    north.copy(cur.target);
    north.z -= 1.2;
    origin.project(camera);
    north.project(camera);
    const ang = Math.atan2(-(north.y - origin.y), north.x - origin.x);
    compass.style.transform = `rotate(${ang + Math.PI / 2}rad)`;
  });

  return {
    setSea(meters: number) {
      sea = clamp(meters, 0, 8);
      paint();
    },
    setSubsidence(meters: number) {
      sub = clamp(meters, 0, 3);
      deformMekong();
      paint();
    },
    setView(id: ViewId) {
      placeAim(id, false);
    },
    resize,
    dispose() {
      alive = false;
      renderer.setAnimationLoop(null);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("wheel", onWheel);
      pins.replaceChildren();
      geometry.dispose();
      tMat.dispose();
      waterGeo.dispose();
      wMat.dispose();
      renderer.dispose();
      timer.dispose();
    },
  };
}

function makeTerrainGeometry(terrain: Terrain) {
  const { elev, region, worldW, worldD } = terrain;
  const count = COLS * ROWS;
  const positions = new Float32Array(count * 3);
  const aElev = new Float32Array(count);
  const aRegion = new Float32Array(count);
  const mekong: number[] = [];
  for (let r = 0; r < ROWS; r++) {
    const lat = rowLat(r);
    for (let c = 0; c < COLS; c++) {
      const k = r * COLS + c;
      const lon = colLon(c);
      const w = lonLatToWorld(lon, lat);
      const h = elev[k];
      positions[k * 3] = w.x;
      positions[k * 3 + 1] = visualHeight(h);
      positions[k * 3 + 2] = w.z;
      aElev[k] = h;
      aRegion[k] = region[k];
      if (region[k] === REGION_MEKONG) mekong.push(k);
    }
  }
  const indices = new Uint32Array((COLS - 1) * (ROWS - 1) * 6);
  let p = 0;
  for (let r = 0; r < ROWS - 1; r++) {
    for (let c = 0; c < COLS - 1; c++) {
      const a = r * COLS + c;
      const b = a + 1;
      const d = a + COLS;
      const e = d + 1;
      indices[p++] = a;
      indices[p++] = d;
      indices[p++] = b;
      indices[p++] = b;
      indices[p++] = d;
      indices[p++] = e;
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aElev", new THREE.BufferAttribute(aElev, 1));
  geometry.setAttribute("aRegion", new THREE.BufferAttribute(aRegion, 1));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeVertexNormals();
  void worldW;
  void worldD;
  return { geometry, mekong };
}

function mountFallback(canvas: HTMLCanvasElement, terrain: Terrain, onStats: (km2: number) => void): SimHandle {
  const ctx = canvas.getContext("2d");
  let sea = 0;
  let sub = 0;
  const draw = () => {
    if (!ctx) return;
    const w = canvas.clientWidth || 320;
    const h = canvas.clientHeight || 480;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const img = ctx.createImageData(terrain.cols, terrain.rows);
    for (let i = 0; i < terrain.elev.length; i++) {
      const elev = terrain.elev[i];
      const reg = terrain.region[i];
      const limit = sea + (reg === REGION_MEKONG ? sub : 0);
      let r = 8, g = 28, b = 42;
      if (elev >= 0 && elev < limit) {
        r = 212; g = 101; b = 74;
      } else if (elev < 0) {
        const t = Math.min(1, -elev / 4000);
        r = 20 + (1 - t) * 40;
        g = 70 + (1 - t) * 80;
        b = 90 + (1 - t) * 40;
      } else if (elev < 20) {
        r = 90; g = 130; b = 70;
      } else {
        r = 70; g = 78; b = 64;
      }
      const o = i * 4;
      img.data[o] = r;
      img.data[o + 1] = g;
      img.data[o + 2] = b;
      img.data[o + 3] = 255;
    }
    const off = document.createElement("canvas");
    off.width = terrain.cols;
    off.height = terrain.rows;
    off.getContext("2d")?.putImageData(img, 0, 0);
    ctx.fillStyle = "#07141c";
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(off, 0, 0, w, h);
    onStats(terrain.floodedKm2(sea, sub));
  };
  draw();
  const ro = new ResizeObserver(draw);
  ro.observe(canvas);
  return {
    setSea(m) {
      sea = m;
      draw();
    },
    setSubsidence(m) {
      sub = m;
      draw();
    },
    setView() {},
    resize: draw,
    dispose() {
      ro.disconnect();
    },
  };
}
