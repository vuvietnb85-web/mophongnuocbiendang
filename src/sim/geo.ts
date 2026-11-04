/** Khung nhìn Biển Đông — độ kinh/vĩ và mặt nạ đất liền minh họa. */

export const LON_MIN = 102.2;
export const LON_MAX = 121.15;
export const LAT_MIN = 5.55;
export const LAT_MAX = 23.35;

export const COLS = 228;
export const ROWS = 204;

const DEG = Math.PI / 180;

export type RegionId = 0 | 1 | 2 | 3;

/** 0 biển / đất ngoài, 1 ĐBSCL, 2 đồng bằng sông Hồng, 3 đất liền VN khác */
export const REGION_OTHER = 0;
export const REGION_MEKONG = 1;
export const REGION_RED = 2;
export const REGION_VN = 3;

const VIETNAM: ReadonlyArray<readonly [number, number]> = [
  [103.02, 22.38],
  [103.85, 22.55],
  [104.55, 22.72],
  [105.25, 23.02],
  [105.9, 22.9],
  [106.45, 22.62],
  [106.95, 22.05],
  [107.4, 21.62],
  [107.97, 21.52],
  [107.58, 21.15],
  [107.12, 20.92],
  [106.72, 20.82],
  [106.45, 20.5],
  [106.22, 20.12],
  [105.95, 19.7],
  [105.75, 19.25],
  [105.68, 18.75],
  [105.95, 18.2],
  [106.4, 17.65],
  [106.62, 17.35],
  [107.08, 16.85],
  [107.55, 16.5],
  [108.02, 16.28],
  [108.28, 16.05],
  [108.52, 15.78],
  [108.78, 15.28],
  [109.0, 14.75],
  [109.18, 14.15],
  [109.28, 13.7],
  [109.3, 13.25],
  [109.25, 12.7],
  [109.18, 12.2],
  [109.1, 11.65],
  [108.85, 11.25],
  [108.35, 10.93],
  [107.75, 10.62],
  [107.18, 10.38],
  [106.85, 10.15],
  [106.5, 9.7],
  [106.12, 9.28],
  [105.65, 8.95],
  [105.15, 8.58],
  [104.78, 8.72],
  [104.55, 9.2],
  [104.48, 9.75],
  [104.5, 10.28],
  [105.05, 10.58],
  [105.7, 10.92],
  [106.35, 11.28],
  [106.95, 11.72],
  [107.38, 12.45],
  [107.55, 13.25],
  [107.5, 14.2],
  [107.35, 15.05],
  [107.05, 15.75],
  [106.6, 16.45],
  [106.1, 17.05],
  [105.4, 17.9],
  [104.85, 18.75],
  [104.35, 19.55],
  [103.95, 20.3],
  [103.35, 21.05],
  [102.98, 21.75],
  [102.92, 22.2],
];

const MEKONG: ReadonlyArray<readonly [number, number]> = [
  [104.55, 10.45],
  [105.15, 10.78],
  [105.85, 10.98],
  [106.45, 10.95],
  [106.95, 10.7],
  [107.05, 10.4],
  [106.7, 10.05],
  [106.25, 9.45],
  [105.75, 8.95],
  [105.15, 8.6],
  [104.75, 8.85],
  [104.5, 9.45],
  [104.48, 10.05],
];

const RED: ReadonlyArray<readonly [number, number]> = [
  [105.55, 21.15],
  [105.95, 21.32],
  [106.55, 21.28],
  [107.05, 21.12],
  [107.15, 20.75],
  [106.7, 20.35],
  [106.2, 20.12],
  [105.75, 20.2],
  [105.5, 20.55],
  [105.48, 20.95],
];

const CHINA: ReadonlyArray<readonly [number, number]> = [
  [108.02, 21.48],
  [108.55, 21.42],
  [109.05, 21.35],
  [109.45, 21.05],
  [109.7, 20.35],
  [110.05, 20.22],
  [110.45, 20.55],
  [110.6, 21.25],
  [111.3, 21.55],
  [112.4, 21.75],
  [113.5, 22.15],
  [114.3, 22.55],
  [115.4, 22.75],
  [116.6, 23.05],
  [117.4, 23.32],
  [121.15, 23.35],
  [121.15, 23.35],
  [108.02, 23.35],
];

const CAMBODIA: ReadonlyArray<readonly [number, number]> = [
  [102.2, 10.35],
  [102.2, 12.4],
  [103.1, 13.4],
  [104.2, 14.0],
  [105.4, 14.2],
  [106.2, 13.6],
  [106.6, 12.6],
  [106.4, 11.6],
  [105.7, 11.05],
  [104.7, 10.55],
  [104.45, 10.15],
  [103.6, 10.45],
  [102.7, 10.35],
];

const BORNEO: ReadonlyArray<readonly [number, number]> = [
  [108.6, 5.55],
  [109.2, 6.55],
  [110.6, 7.05],
  [112.4, 7.2],
  [114.5, 7.05],
  [116.2, 6.85],
  [117.6, 6.55],
  [119.0, 7.0],
  [119.6, 6.2],
  [121.15, 5.55],
];

const LUZON: ReadonlyArray<readonly [number, number]> = [
  [119.95, 13.55],
  [120.05, 14.6],
  [119.9, 15.8],
  [119.95, 16.9],
  [120.3, 18.2],
  [120.85, 18.65],
  [121.15, 18.4],
  [121.15, 14.2],
  [120.85, 13.45],
  [120.35, 13.35],
];

const TAIWAN: ReadonlyArray<readonly [number, number]> = [
  [120.0, 21.95],
  [120.1, 22.7],
  [120.45, 23.15],
  [121.0, 23.35],
  [121.15, 23.35],
  [121.15, 22.05],
  [120.55, 21.9],
];

const LAOS: ReadonlyArray<readonly [number, number]> = [
  [102.2, 17.6],
  [102.2, 21.6],
  [103.0, 22.35],
  [104.2, 21.4],
  [104.8, 20.2],
  [105.2, 19.0],
  [105.8, 17.8],
  [106.5, 16.6],
  [107.2, 15.5],
  [107.45, 14.3],
  [106.4, 14.0],
  [105.2, 14.3],
  [104.0, 14.6],
  [103.0, 16.0],
];

const PALAWAN: ReadonlyArray<readonly [number, number]> = [
  [117.05, 8.15],
  [117.7, 9.05],
  [118.45, 10.05],
  [119.15, 11.05],
  [119.55, 11.55],
];

type Islet = { lon: number; lat: number; elev: number; reef: number };

const ISLETS: Islet[] = [
  { lon: 112.34, lat: 16.83, elev: 3.1, reef: 0.42 },
  { lon: 111.62, lat: 16.45, elev: 2.4, reef: 0.28 },
  { lon: 112.85, lat: 16.53, elev: 2.2, reef: 0.26 },
  { lon: 111.2, lat: 16.98, elev: 2.0, reef: 0.22 },
  { lon: 111.92, lat: 8.64, elev: 2.3, reef: 0.3 },
  { lon: 114.36, lat: 10.38, elev: 2.6, reef: 0.28 },
  { lon: 114.33, lat: 11.45, elev: 2.1, reef: 0.24 },
  { lon: 114.0, lat: 9.9, elev: 1.8, reef: 0.22 },
  { lon: 112.83, lat: 9.75, elev: 1.6, reef: 0.2 },
  { lon: 115.53, lat: 9.9, elev: 1.4, reef: 0.26 },
  { lon: 113.7, lat: 9.2, elev: 1.5, reef: 0.18 },
];

export type Terrain = {
  cols: number;
  rows: number;
  elev: Float32Array;
  region: Uint8Array;
  lon: (col: number) => number;
  lat: (row: number) => number;
  worldW: number;
  worldD: number;
  floodedKm2: (sea: number, subsidence: number) => number;
  index: (col: number, row: number) => number;
};

export function span() {
  const spanLon = LON_MAX - LON_MIN;
  const spanLat = LAT_MAX - LAT_MIN;
  const mid = ((LAT_MIN + LAT_MAX) / 2) * DEG;
  const worldW = (spanLon * 111.32 * Math.cos(mid)) / 100;
  const worldD = (spanLat * 110.57) / 100;
  return { spanLon, spanLat, worldW, worldD };
}

export function colLon(col: number) {
  return LON_MIN + (col / (COLS - 1)) * (LON_MAX - LON_MIN);
}

export function rowLat(row: number) {
  return LAT_MAX - (row / (ROWS - 1)) * (LAT_MAX - LAT_MIN);
}

export function lonLatToWorld(lon: number, lat: number) {
  const { worldW, worldD } = span();
  const u = (lon - LON_MIN) / (LON_MAX - LON_MIN);
  const v = (LAT_MAX - lat) / (LAT_MAX - LAT_MIN);
  return { x: (u - 0.5) * worldW, z: (v - 0.5) * worldD };
}

/** Thang cao phi tuyến — mét thấp được phóng để thấy ngập, núi và vực bị nén. */
export function visualHeight(meters: number): number {
  if (meters >= 0) {
    const low = (Math.min(meters, 15) / 15) * 0.3;
    const high = (Math.log1p(Math.max(0, meters - 15)) / Math.log1p(3500)) * 1.02;
    return low + high;
  }
  const d = -meters;
  const shelf = (Math.min(d, 100) / 100) * 0.16;
  const deep = (Math.log1p(Math.max(0, d - 100)) / Math.log1p(5200)) * 1.5;
  return -(shelf + deep);
}

function pip(lon: number, lat: number, poly: ReadonlyArray<readonly [number, number]>) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const yi = poly[i][1];
    const yj = poly[j][1];
    if (yi > lat === yj > lat) continue;
    const xi = poly[i][0];
    const xj = poly[j][0];
    const x = ((xj - xi) * (lat - yi)) / (yj - yi + 1e-12) + xi;
    if (lon < x) inside = !inside;
  }
  return inside;
}

function inEllipse(lon: number, lat: number, cx: number, cy: number, rx: number, ry: number) {
  const dx = (lon - cx) / rx;
  const dy = (lat - cy) / ry;
  return dx * dx + dy * dy <= 1;
}

function hash(ix: number, iy: number) {
  let n = Math.imul(ix, 374761393) + Math.imul(iy, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}

function noise(x: number, y: number) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const a = hash(x0, y0);
  const b = hash(x0 + 1, y0);
  const c = hash(x0, y0 + 1);
  const d = hash(x0 + 1, y0 + 1);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}

function fbm(x: number, y: number) {
  return noise(x, y) * 0.62 + noise(x * 2.1, y * 2.1) * 0.28 + noise(x * 4.3, y * 4.3) * 0.1;
}

function distPointSeg(
  lon: number,
  lat: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
) {
  const dx = bx - ax;
  const dy = by - ay;
  const l2 = dx * dx + dy * dy || 1e-6;
  let t = ((lon - ax) * dx + (lat - ay) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  const px = ax + t * dx;
  const py = ay + t * dy;
  const mx = (lon - px) * Math.cos(lat * DEG);
  const my = lat - py;
  return Math.hypot(mx, my);
}

function nearPalawan(lon: number, lat: number) {
  let best = 99;
  for (let i = 0; i < PALAWAN.length - 1; i++) {
    const a = PALAWAN[i];
    const b = PALAWAN[i + 1];
    best = Math.min(best, distPointSeg(lon, lat, a[0], a[1], b[0], b[1]));
  }
  return best < 0.16;
}

function isletAt(lon: number, lat: number): Islet | null {
  let best: Islet | null = null;
  let bestD = 99;
  for (const isle of ISLETS) {
    const dx = (lon - isle.lon) * Math.cos(lat * DEG);
    const dy = lat - isle.lat;
    const d = Math.hypot(dx, dy);
    if (d < 0.09 && d < bestD) {
      best = isle;
      bestD = d;
    }
  }
  return best;
}

function reefShallowness(lon: number, lat: number) {
  let s = 0;
  for (const isle of ISLETS) {
    const dx = (lon - isle.lon) * Math.cos(lat * DEG);
    const dy = lat - isle.lat;
    const d = Math.hypot(dx, dy);
    if (d < isle.reef) s = Math.max(s, 1 - d / isle.reef);
  }
  const mx = (lon - 114.75) * Math.cos(16 * DEG);
  const my = lat - 15.95;
  const md = Math.hypot(mx / 1.35, my / 0.72);
  if (md < 1) s = Math.max(s, (1 - md) * 0.85);
  return s;
}

function classify(lon: number, lat: number): { land: boolean; region: RegionId; islet: boolean } {
  if (isletAt(lon, lat)) return { land: true, region: REGION_VN, islet: true };
  if (pip(lon, lat, MEKONG)) return { land: true, region: REGION_MEKONG, islet: false };
  if (pip(lon, lat, RED)) return { land: true, region: REGION_RED, islet: false };
  if (pip(lon, lat, VIETNAM)) return { land: true, region: REGION_VN, islet: false };
  if (inEllipse(lon, lat, 104.0, 10.22, 0.16, 0.34))
    return { land: true, region: REGION_VN, islet: false };
  if (inEllipse(lon, lat, 106.6, 8.69, 0.09, 0.08))
    return { land: true, region: REGION_VN, islet: false };
  if (inEllipse(lon, lat, 109.62, 19.15, 0.95, 0.78))
    return { land: true, region: REGION_OTHER, islet: false };
  if (
    pip(lon, lat, CHINA) ||
    pip(lon, lat, CAMBODIA) ||
    pip(lon, lat, LAOS) ||
    pip(lon, lat, BORNEO) ||
    pip(lon, lat, LUZON) ||
    pip(lon, lat, TAIWAN) ||
    nearPalawan(lon, lat)
  ) {
    return { land: true, region: REGION_OTHER, islet: false };
  }
  return { land: false, region: REGION_OTHER, islet: false };
}

export function buildTerrain(): Terrain {
  const elev = new Float32Array(COLS * ROWS);
  const region = new Uint8Array(COLS * ROWS);
  const land = new Uint8Array(COLS * ROWS);
  const idx = (c: number, r: number) => r * COLS + c;

  for (let r = 0; r < ROWS; r++) {
    const lat = rowLat(r);
    for (let c = 0; c < COLS; c++) {
      const lon = colLon(c);
      const k = idx(c, r);
      const cls = classify(lon, lat);
      land[k] = cls.land ? 1 : 0;
      region[k] = cls.region;
    }
  }

  const dist = new Float32Array(COLS * ROWS);
  const qx = new Int16Array(COLS * ROWS);
  const qy = new Int16Array(COLS * ROWS);
  let qh = 0;
  let qt = 0;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const k = idx(c, r);
      if (!land[k]) {
        dist[k] = 0;
        continue;
      }
      let coast = false;
      for (let dy = -1; dy <= 1 && !coast; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const cc = c + dx;
          const rr = r + dy;
          if (cc < 0 || rr < 0 || cc >= COLS || rr >= ROWS) continue;
          if (!land[idx(cc, rr)]) {
            coast = true;
            break;
          }
        }
      }
      if (coast) {
        dist[k] = 0;
        qx[qt] = c;
        qy[qt] = r;
        qt++;
      } else {
        dist[k] = -1;
      }
    }
  }

  while (qh < qt) {
    const c = qx[qh];
    const r = qy[qh];
    qh++;
    const base = dist[idx(c, r)];
    const steps: ReadonlyArray<readonly [number, number]> = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (const [dx, dy] of steps) {
      const cc = c + dx;
      const rr = r + dy;
      if (cc < 0 || rr < 0 || cc >= COLS || rr >= ROWS) continue;
      const nk = idx(cc, rr);
      if (!land[nk] || dist[nk] >= 0) continue;
      dist[nk] = base + 1;
      qx[qt] = cc;
      qy[qt] = rr;
      qt++;
    }
  }

  const seaDist = new Float32Array(COLS * ROWS);
  seaDist.fill(-1);
  qh = 0;
  qt = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (land[idx(c, r)]) continue;
      let shore = false;
      for (let dy = -1; dy <= 1 && !shore; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const cc = c + dx;
          const rr = r + dy;
          if (cc < 0 || rr < 0 || cc >= COLS || rr >= ROWS) continue;
          if (land[idx(cc, rr)]) shore = true;
        }
      }
      if (shore) {
        seaDist[idx(c, r)] = 0;
        qx[qt] = c;
        qy[qt] = r;
        qt++;
      }
    }
  }
  while (qh < qt) {
    const c = qx[qh];
    const r = qy[qh];
    qh++;
    const base = seaDist[idx(c, r)];
    const steps: ReadonlyArray<readonly [number, number]> = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (const [dx, dy] of steps) {
      const cc = c + dx;
      const rr = r + dy;
      if (cc < 0 || rr < 0 || cc >= COLS || rr >= ROWS) continue;
      const nk = idx(cc, rr);
      if (land[nk] || seaDist[nk] >= 0) continue;
      seaDist[nk] = base + 1;
      qx[qt] = cc;
      qy[qt] = rr;
      qt++;
    }
  }

  const kmX = ((LON_MAX - LON_MIN) / (COLS - 1)) * 111.32 * Math.cos(14.5 * DEG);
  const kmY = ((LAT_MAX - LAT_MIN) / (ROWS - 1)) * 110.57;

  for (let r = 0; r < ROWS; r++) {
    const lat = rowLat(r);
    for (let c = 0; c < COLS; c++) {
      const lon = colLon(c);
      const k = idx(c, r);
      const n = fbm(lon * 1.55, lat * 1.55);
      const cellKm = (kmX + kmY) * 0.5;
      if (land[k]) {
        const isle = isletAt(lon, lat);
        if (isle) {
          elev[k] = isle.elev;
          continue;
        }
        const dkm = dist[k] < 0 ? 180 : dist[k] * cellKm;
        const inland = Math.min(dkm, 50) / 50;
        if (region[k] === REGION_MEKONG) {
          let h = 0.18 + inland * 1.85 + (n - 0.4) * 0.75;
          const dx = (lon - 106.7) * Math.cos(lat * DEG);
          const dy = lat - 10.76;
          const city = Math.hypot(dx, dy);
          if (city < 0.38) h = Math.max(h, 1.5 + (0.38 - city) * 7);
          const dx2 = (lon - 105.75) * Math.cos(lat * DEG);
          const cantho = Math.hypot(dx2, lat - 10.03);
          if (cantho < 0.16) h = Math.max(h, 1.35);
          elev[k] = Math.min(3.4, Math.max(0.15, h));
          continue;
        }
        if (region[k] === REGION_RED) {
          let h = 0.45 + inland * 3.4 + (n - 0.35) * 0.8;
          const dx = (lon - 105.85) * Math.cos(lat * DEG);
          const dy = lat - 21.03;
          const hn = Math.hypot(dx, dy);
          if (hn < 0.28) h = Math.max(h, 6 + (0.28 - hn) * 14);
          const hp = Math.hypot((lon - 106.68) * Math.cos(lat * DEG), lat - 20.86);
          if (hp < 0.14) h = Math.max(h, 1.8);
          elev[k] = Math.max(0.35, h);
          continue;
        }
        const dxf = (lon - 103.84) * Math.cos(22.3 * DEG);
        const fansipan = Math.hypot(dxf, lat - 22.3);
        let h = 40 + (1 - Math.exp(-dkm / 26)) * 1100;
        h *= 0.82 + n * 0.36;
        if (lat > 11.4 && lat < 15.3 && lon < 108.15 && dkm > 45) h += 380 + n * 420;
        if (lat > 20.6 && lon < 105.1) h += 500 + n * 700;
        if (fansipan < 0.42 && region[k] === REGION_VN) {
          h = 900 + (1 - fansipan / 0.42) * 2200;
        }
        if (dkm < 12) {
          const apron = 0.7 + dkm * 0.48 + n * 1.1;
          h = Math.min(h, apron);
        }
        if (region[k] === REGION_OTHER) {
          h = Math.max(h, 30 + n * 400);
          if (inEllipse(lon, lat, 109.7, 18.9, 0.35, 0.25)) h = Math.max(h, 900);
        }
        elev[k] = Math.max(0.4, h);
        continue;
      }

      const sdk = (seaDist[k] < 0 ? 48 : seaDist[k]) * cellKm;
      let depth = Math.min(sdk / 32, 1) * 60;
      if (sdk > 32) depth = 60 + Math.min((sdk - 32) / 80, 1) * 1600;
      if (sdk > 112) depth = 1660 + Math.min((sdk - 112) / 170, 1) * 1700;
      const bx = (lon - 114.15) / 5.0;
      const by = (lat - 14.3) / 3.6;
      const basin = Math.exp(-(bx * bx + by * by));
      depth = Math.max(depth, basin * 4700);
      if (lon < 108.3 && lat > 17.6 && lat < 21.35) depth = Math.min(depth, 28 + sdk * 0.8);
      if (lat < 8.6 && lon < 111.5 && lon > 105) depth = Math.min(depth, 36 + (8.6 - lat) * 10);
      const reef = reefShallowness(lon, lat);
      if (reef > 0) depth = Math.min(depth, 6 + (1 - reef) * 48);
      elev[k] = -Math.max(2, depth);
    }
  }

  const dLon = (LON_MAX - LON_MIN) / (COLS - 1);
  const dLat = (LAT_MAX - LAT_MIN) / (ROWS - 1);

  return {
    cols: COLS,
    rows: ROWS,
    elev,
    region,
    lon: colLon,
    lat: rowLat,
    ...span(),
    index: idx,
    floodedKm2(sea: number, subsidence: number) {
      let area = 0;
      for (let r = 0; r < ROWS; r++) {
        const lat = rowLat(r);
        const kmY = dLat * 110.57;
        const kmX = dLon * 111.32 * Math.cos(lat * DEG);
        const cell = kmX * kmY;
        for (let c = 0; c < COLS; c++) {
          const k = idx(c, r);
          const reg = region[k];
          if (reg !== REGION_MEKONG && reg !== REGION_RED && reg !== REGION_VN) continue;
          const h = elev[k];
          if (h < 0) continue;
          const limit = sea + (reg === REGION_MEKONG ? subsidence : 0);
          if (h < limit) area += cell;
        }
      }
      return area;
    },
  };
}
