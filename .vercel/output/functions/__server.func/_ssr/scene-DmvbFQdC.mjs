import { n as PLACES, r as VIEWS } from "./routes-BT40lu7u.mjs";
import { a as Mesh, c as SRGBColorSpace, d as Timer, f as Vector3, i as FogExp2, l as Scene, n as BufferAttribute, o as PerspectiveCamera, r as BufferGeometry, s as PlaneGeometry, t as WebGLRenderer, u as ShaderMaterial } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scene-DmvbFQdC.js
/** Khung nhìn Biển Đông — độ kinh/vĩ và mặt nạ đất liền minh họa. */
var LON_MIN = 102.2;
var LAT_MAX = 23.35;
var DEG = Math.PI / 180;
var VIETNAM = [
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
	[109, 14.75],
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
	[102.92, 22.2]
];
var MEKONG = [
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
	[104.48, 10.05]
];
var RED = [
	[105.55, 21.15],
	[105.95, 21.32],
	[106.55, 21.28],
	[107.05, 21.12],
	[107.15, 20.75],
	[106.7, 20.35],
	[106.2, 20.12],
	[105.75, 20.2],
	[105.5, 20.55],
	[105.48, 20.95]
];
var CHINA = [
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
	[108.02, 23.35]
];
var CAMBODIA = [
	[102.2, 10.35],
	[102.2, 12.4],
	[103.1, 13.4],
	[104.2, 14],
	[105.4, 14.2],
	[106.2, 13.6],
	[106.6, 12.6],
	[106.4, 11.6],
	[105.7, 11.05],
	[104.7, 10.55],
	[104.45, 10.15],
	[103.6, 10.45],
	[102.7, 10.35]
];
var BORNEO = [
	[108.6, 5.55],
	[109.2, 6.55],
	[110.6, 7.05],
	[112.4, 7.2],
	[114.5, 7.05],
	[116.2, 6.85],
	[117.6, 6.55],
	[119, 7],
	[119.6, 6.2],
	[121.15, 5.55]
];
var LUZON = [
	[119.95, 13.55],
	[120.05, 14.6],
	[119.9, 15.8],
	[119.95, 16.9],
	[120.3, 18.2],
	[120.85, 18.65],
	[121.15, 18.4],
	[121.15, 14.2],
	[120.85, 13.45],
	[120.35, 13.35]
];
var TAIWAN = [
	[120, 21.95],
	[120.1, 22.7],
	[120.45, 23.15],
	[121, 23.35],
	[121.15, 23.35],
	[121.15, 22.05],
	[120.55, 21.9]
];
var LAOS = [
	[102.2, 17.6],
	[102.2, 21.6],
	[103, 22.35],
	[104.2, 21.4],
	[104.8, 20.2],
	[105.2, 19],
	[105.8, 17.8],
	[106.5, 16.6],
	[107.2, 15.5],
	[107.45, 14.3],
	[106.4, 14],
	[105.2, 14.3],
	[104, 14.6],
	[103, 16]
];
var PALAWAN = [
	[117.05, 8.15],
	[117.7, 9.05],
	[118.45, 10.05],
	[119.15, 11.05],
	[119.55, 11.55]
];
var ISLETS = [
	{
		lon: 112.34,
		lat: 16.83,
		elev: 3.1,
		reef: .42
	},
	{
		lon: 111.62,
		lat: 16.45,
		elev: 2.4,
		reef: .28
	},
	{
		lon: 112.85,
		lat: 16.53,
		elev: 2.2,
		reef: .26
	},
	{
		lon: 111.2,
		lat: 16.98,
		elev: 2,
		reef: .22
	},
	{
		lon: 111.92,
		lat: 8.64,
		elev: 2.3,
		reef: .3
	},
	{
		lon: 114.36,
		lat: 10.38,
		elev: 2.6,
		reef: .28
	},
	{
		lon: 114.33,
		lat: 11.45,
		elev: 2.1,
		reef: .24
	},
	{
		lon: 114,
		lat: 9.9,
		elev: 1.8,
		reef: .22
	},
	{
		lon: 112.83,
		lat: 9.75,
		elev: 1.6,
		reef: .2
	},
	{
		lon: 115.53,
		lat: 9.9,
		elev: 1.4,
		reef: .26
	},
	{
		lon: 113.7,
		lat: 9.2,
		elev: 1.5,
		reef: .18
	}
];
function span() {
	const spanLon = 18.950000000000003;
	const spanLat = 17.8;
	const mid = 28.900000000000002 / 2 * DEG;
	return {
		spanLon,
		spanLat,
		worldW: spanLon * 111.32 * Math.cos(mid) / 100,
		worldD: spanLat * 110.57 / 100
	};
}
function colLon(col) {
	return LON_MIN + col / 227 * 18.950000000000003;
}
function rowLat(row) {
	return LAT_MAX - row / 203 * 17.8;
}
function lonLatToWorld(lon, lat) {
	const { worldW, worldD } = span();
	const u = (lon - LON_MIN) / 18.950000000000003;
	const v = (LAT_MAX - lat) / 17.8;
	return {
		x: (u - .5) * worldW,
		z: (v - .5) * worldD
	};
}
/** Thang cao phi tuyến — mét thấp được phóng để thấy ngập, núi và vực bị nén. */
function visualHeight(meters) {
	if (meters >= 0) return Math.min(meters, 15) / 15 * .3 + Math.log1p(Math.max(0, meters - 15)) / Math.log1p(3500) * 1.02;
	const d = -meters;
	return -(Math.min(d, 100) / 100 * .16 + Math.log1p(Math.max(0, d - 100)) / Math.log1p(5200) * 1.5);
}
function pip(lon, lat, poly) {
	let inside = false;
	for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
		const yi = poly[i][1];
		const yj = poly[j][1];
		if (yi > lat === yj > lat) continue;
		const xi = poly[i][0];
		if (lon < (poly[j][0] - xi) * (lat - yi) / (yj - yi + 1e-12) + xi) inside = !inside;
	}
	return inside;
}
function inEllipse(lon, lat, cx, cy, rx, ry) {
	const dx = (lon - cx) / rx;
	const dy = (lat - cy) / ry;
	return dx * dx + dy * dy <= 1;
}
function hash(ix, iy) {
	let n = Math.imul(ix, 374761393) + Math.imul(iy, 668265263);
	n = Math.imul(n ^ n >>> 13, 1274126177);
	return ((n ^ n >>> 16) >>> 0) / 4294967295;
}
function noise(x, y) {
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
function fbm(x, y) {
	return noise(x, y) * .62 + noise(x * 2.1, y * 2.1) * .28 + noise(x * 4.3, y * 4.3) * .1;
}
function distPointSeg(lon, lat, ax, ay, bx, by) {
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
function nearPalawan(lon, lat) {
	let best = 99;
	for (let i = 0; i < PALAWAN.length - 1; i++) {
		const a = PALAWAN[i];
		const b = PALAWAN[i + 1];
		best = Math.min(best, distPointSeg(lon, lat, a[0], a[1], b[0], b[1]));
	}
	return best < .16;
}
function isletAt(lon, lat) {
	let best = null;
	let bestD = 99;
	for (const isle of ISLETS) {
		const dx = (lon - isle.lon) * Math.cos(lat * DEG);
		const dy = lat - isle.lat;
		const d = Math.hypot(dx, dy);
		if (d < .09 && d < bestD) {
			best = isle;
			bestD = d;
		}
	}
	return best;
}
function reefShallowness(lon, lat) {
	let s = 0;
	for (const isle of ISLETS) {
		const dx = (lon - isle.lon) * Math.cos(lat * DEG);
		const dy = lat - isle.lat;
		const d = Math.hypot(dx, dy);
		if (d < isle.reef) s = Math.max(s, 1 - d / isle.reef);
	}
	const mx = (lon - 114.75) * Math.cos(16 * DEG);
	const my = lat - 15.95;
	const md = Math.hypot(mx / 1.35, my / .72);
	if (md < 1) s = Math.max(s, (1 - md) * .85);
	return s;
}
function classify(lon, lat) {
	if (isletAt(lon, lat)) return {
		land: true,
		region: 3,
		islet: true
	};
	if (pip(lon, lat, MEKONG)) return {
		land: true,
		region: 1,
		islet: false
	};
	if (pip(lon, lat, RED)) return {
		land: true,
		region: 2,
		islet: false
	};
	if (pip(lon, lat, VIETNAM)) return {
		land: true,
		region: 3,
		islet: false
	};
	if (inEllipse(lon, lat, 104, 10.22, .16, .34)) return {
		land: true,
		region: 3,
		islet: false
	};
	if (inEllipse(lon, lat, 106.6, 8.69, .09, .08)) return {
		land: true,
		region: 3,
		islet: false
	};
	if (inEllipse(lon, lat, 109.62, 19.15, .95, .78)) return {
		land: true,
		region: 0,
		islet: false
	};
	if (pip(lon, lat, CHINA) || pip(lon, lat, CAMBODIA) || pip(lon, lat, LAOS) || pip(lon, lat, BORNEO) || pip(lon, lat, LUZON) || pip(lon, lat, TAIWAN) || nearPalawan(lon, lat)) return {
		land: true,
		region: 0,
		islet: false
	};
	return {
		land: false,
		region: 0,
		islet: false
	};
}
function buildTerrain() {
	const elev = /* @__PURE__ */ new Float32Array(46512);
	const region = /* @__PURE__ */ new Uint8Array(46512);
	const land = /* @__PURE__ */ new Uint8Array(46512);
	const idx = (c, r) => r * 228 + c;
	for (let r = 0; r < 204; r++) {
		const lat = rowLat(r);
		for (let c = 0; c < 228; c++) {
			const lon = colLon(c);
			const k = idx(c, r);
			const cls = classify(lon, lat);
			land[k] = cls.land ? 1 : 0;
			region[k] = cls.region;
		}
	}
	const dist = /* @__PURE__ */ new Float32Array(46512);
	const qx = /* @__PURE__ */ new Int16Array(46512);
	const qy = /* @__PURE__ */ new Int16Array(46512);
	let qh = 0;
	let qt = 0;
	for (let r = 0; r < 204; r++) for (let c = 0; c < 228; c++) {
		const k = idx(c, r);
		if (!land[k]) {
			dist[k] = 0;
			continue;
		}
		let coast = false;
		for (let dy = -1; dy <= 1 && !coast; dy++) for (let dx = -1; dx <= 1; dx++) {
			const cc = c + dx;
			const rr = r + dy;
			if (cc < 0 || rr < 0 || cc >= 228 || rr >= 204) continue;
			if (!land[idx(cc, rr)]) {
				coast = true;
				break;
			}
		}
		if (coast) {
			dist[k] = 0;
			qx[qt] = c;
			qy[qt] = r;
			qt++;
		} else dist[k] = -1;
	}
	while (qh < qt) {
		const c = qx[qh];
		const r = qy[qh];
		qh++;
		const base = dist[idx(c, r)];
		for (const [dx, dy] of [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1]
		]) {
			const cc = c + dx;
			const rr = r + dy;
			if (cc < 0 || rr < 0 || cc >= 228 || rr >= 204) continue;
			const nk = idx(cc, rr);
			if (!land[nk] || dist[nk] >= 0) continue;
			dist[nk] = base + 1;
			qx[qt] = cc;
			qy[qt] = rr;
			qt++;
		}
	}
	const seaDist = /* @__PURE__ */ new Float32Array(46512);
	seaDist.fill(-1);
	qh = 0;
	qt = 0;
	for (let r = 0; r < 204; r++) for (let c = 0; c < 228; c++) {
		if (land[idx(c, r)]) continue;
		let shore = false;
		for (let dy = -1; dy <= 1 && !shore; dy++) for (let dx = -1; dx <= 1; dx++) {
			const cc = c + dx;
			const rr = r + dy;
			if (cc < 0 || rr < 0 || cc >= 228 || rr >= 204) continue;
			if (land[idx(cc, rr)]) shore = true;
		}
		if (shore) {
			seaDist[idx(c, r)] = 0;
			qx[qt] = c;
			qy[qt] = r;
			qt++;
		}
	}
	while (qh < qt) {
		const c = qx[qh];
		const r = qy[qh];
		qh++;
		const base = seaDist[idx(c, r)];
		for (const [dx, dy] of [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1]
		]) {
			const cc = c + dx;
			const rr = r + dy;
			if (cc < 0 || rr < 0 || cc >= 228 || rr >= 204) continue;
			const nk = idx(cc, rr);
			if (land[nk] || seaDist[nk] >= 0) continue;
			seaDist[nk] = base + 1;
			qx[qt] = cc;
			qy[qt] = rr;
			qt++;
		}
	}
	const kmX = 9.293013215859032 * Math.cos(14.5 * DEG);
	const kmY = 17.8 / 203 * 110.57;
	for (let r = 0; r < 204; r++) {
		const lat = rowLat(r);
		for (let c = 0; c < 228; c++) {
			const lon = colLon(c);
			const k = idx(c, r);
			const n = fbm(lon * 1.55, lat * 1.55);
			const cellKm = (kmX + kmY) * .5;
			if (land[k]) {
				const isle = isletAt(lon, lat);
				if (isle) {
					elev[k] = isle.elev;
					continue;
				}
				const dkm = dist[k] < 0 ? 180 : dist[k] * cellKm;
				const inland = Math.min(dkm, 50) / 50;
				if (region[k] === 1) {
					let h = .18 + inland * 1.85 + (n - .4) * .75;
					const dx = (lon - 106.7) * Math.cos(lat * DEG);
					const dy = lat - 10.76;
					const city = Math.hypot(dx, dy);
					if (city < .38) h = Math.max(h, 1.5 + (.38 - city) * 7);
					const dx2 = (lon - 105.75) * Math.cos(lat * DEG);
					if (Math.hypot(dx2, lat - 10.03) < .16) h = Math.max(h, 1.35);
					elev[k] = Math.min(3.4, Math.max(.15, h));
					continue;
				}
				if (region[k] === 2) {
					let h = .45 + inland * 3.4 + (n - .35) * .8;
					const dx = (lon - 105.85) * Math.cos(lat * DEG);
					const dy = lat - 21.03;
					const hn = Math.hypot(dx, dy);
					if (hn < .28) h = Math.max(h, 6 + (.28 - hn) * 14);
					if (Math.hypot((lon - 106.68) * Math.cos(lat * DEG), lat - 20.86) < .14) h = Math.max(h, 1.8);
					elev[k] = Math.max(.35, h);
					continue;
				}
				const dxf = (lon - 103.84) * Math.cos(22.3 * DEG);
				const fansipan = Math.hypot(dxf, lat - 22.3);
				let h = 40 + (1 - Math.exp(-dkm / 26)) * 1100;
				h *= .82 + n * .36;
				if (lat > 11.4 && lat < 15.3 && lon < 108.15 && dkm > 45) h += 380 + n * 420;
				if (lat > 20.6 && lon < 105.1) h += 500 + n * 700;
				if (fansipan < .42 && region[k] === 3) h = 900 + (1 - fansipan / .42) * 2200;
				if (dkm < 12) {
					const apron = .7 + dkm * .48 + n * 1.1;
					h = Math.min(h, apron);
				}
				if (region[k] === 0) {
					h = Math.max(h, 30 + n * 400);
					if (inEllipse(lon, lat, 109.7, 18.9, .35, .25)) h = Math.max(h, 900);
				}
				elev[k] = Math.max(.4, h);
				continue;
			}
			const sdk = (seaDist[k] < 0 ? 48 : seaDist[k]) * cellKm;
			let depth = Math.min(sdk / 32, 1) * 60;
			if (sdk > 32) depth = 60 + Math.min((sdk - 32) / 80, 1) * 1600;
			if (sdk > 112) depth = 1660 + Math.min((sdk - 112) / 170, 1) * 1700;
			const bx = (lon - 114.15) / 5;
			const by = (lat - 14.3) / 3.6;
			const basin = Math.exp(-(bx * bx + by * by));
			depth = Math.max(depth, basin * 4700);
			if (lon < 108.3 && lat > 17.6 && lat < 21.35) depth = Math.min(depth, 28 + sdk * .8);
			if (lat < 8.6 && lon < 111.5 && lon > 105) depth = Math.min(depth, 36 + (8.6 - lat) * 10);
			const reef = reefShallowness(lon, lat);
			if (reef > 0) depth = Math.min(depth, 6 + (1 - reef) * 48);
			elev[k] = -Math.max(2, depth);
		}
	}
	const dLon = 18.950000000000003 / 227;
	const dLat = 17.8 / 203;
	return {
		cols: 228,
		rows: 204,
		elev,
		region,
		lon: colLon,
		lat: rowLat,
		...span(),
		index: idx,
		floodedKm2(sea, subsidence) {
			let area = 0;
			for (let r = 0; r < 204; r++) {
				const lat = rowLat(r);
				const kmY = dLat * 110.57;
				const cell = dLon * 111.32 * Math.cos(lat * DEG) * kmY;
				for (let c = 0; c < 228; c++) {
					const k = idx(c, r);
					const reg = region[k];
					if (reg !== 1 && reg !== 2 && reg !== 3) continue;
					const h = elev[k];
					if (h < 0) continue;
					if (h < sea + (reg === 1 ? subsidence : 0)) area += cell;
				}
			}
			return area;
		}
	};
}
var TERRAIN_VERT = `
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
var TERRAIN_FRAG = `
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
var WATER_VERT = `
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
var WATER_FRAG = `
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
function clamp(v, a, b) {
	return Math.max(a, Math.min(b, v));
}
function mountSea(opts) {
	const { canvas, pins, compass, onStats } = opts;
	const terrain = buildTerrain();
	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	let renderer;
	try {
		renderer = new WebGLRenderer({
			canvas,
			antialias: true,
			alpha: false,
			powerPreference: "high-performance"
		});
	} catch {
		return mountFallback(canvas, terrain, onStats);
	}
	if (!renderer.getContext()) {
		renderer.dispose();
		return mountFallback(canvas, terrain, onStats);
	}
	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
	renderer.setClearColor(463900, 1);
	renderer.outputColorSpace = SRGBColorSpace;
	const scene = new Scene();
	scene.fog = new FogExp2(463900, .011);
	const camera = new PerspectiveCamera(36, 1, .05, 80);
	const { geometry, mekong } = makeTerrainGeometry(terrain);
	const { worldW, worldD } = terrain;
	const tMat = new ShaderMaterial({
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
			uWorldD: { value: worldD }
		}
	});
	const landMesh = new Mesh(geometry, tMat);
	scene.add(landMesh);
	const waterGeo = new PlaneGeometry(worldW * 1.04, worldD * 1.04, 80, 70);
	const wMat = new ShaderMaterial({
		vertexShader: WATER_VERT,
		fragmentShader: WATER_FRAG,
		transparent: true,
		depthWrite: false,
		uniforms: {
			uTime: { value: 0 },
			uAmp: { value: reduced ? 0 : .012 }
		}
	});
	const water = new Mesh(waterGeo, wMat);
	water.rotation.x = -Math.PI / 2;
	water.renderOrder = 2;
	scene.add(water);
	const posAttr = geometry.getAttribute("position");
	const elevAttr = geometry.getAttribute("aElev");
	let sea = 0;
	let sub = 0;
	const wide = VIEWS[0];
	const aim = {
		theta: wide.theta,
		phi: wide.phi,
		radius: wide.radius,
		target: new Vector3()
	};
	const cur = {
		theta: wide.theta,
		phi: wide.phi,
		radius: wide.radius,
		target: new Vector3()
	};
	const placeAim = (id, snap) => {
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
	const pinEls = /* @__PURE__ */ new Map();
	for (const place of PLACES) {
		const el = document.createElement("span");
		el.className = "pin";
		el.textContent = place.name;
		pins.appendChild(el);
		pinEls.set(place.id, el);
	}
	const pointers = /* @__PURE__ */ new Map();
	let pinch = null;
	let dragging = false;
	let lastX = 0;
	let lastY = 0;
	const grab = () => {
		aim.theta = cur.theta;
		aim.phi = cur.phi;
		aim.radius = cur.radius;
		aim.target.copy(cur.target);
	};
	const onDown = (e) => {
		canvas.setPointerCapture(e.pointerId);
		pointers.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		grab();
		if (pointers.size === 1) {
			dragging = true;
			lastX = e.clientX;
			lastY = e.clientY;
			pinch = null;
		}
	};
	const onMove = (e) => {
		if (!pointers.has(e.pointerId)) return;
		pointers.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (pointers.size === 1 && dragging) {
			const dx = e.clientX - lastX;
			const dy = e.clientY - lastY;
			lastX = e.clientX;
			lastY = e.clientY;
			cur.theta -= dx * .0052;
			cur.phi = clamp(cur.phi + dy * .0036, .22, 1.18);
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
	const onUp = (e) => {
		pointers.delete(e.pointerId);
		if (pointers.size < 2) pinch = null;
		if (pointers.size === 0) dragging = false;
	};
	const onWheel = (e) => {
		e.preventDefault();
		cur.radius = clamp(cur.radius * Math.exp(e.deltaY * .0011), 1.7, 22);
		grab();
	};
	canvas.addEventListener("pointerdown", onDown);
	canvas.addEventListener("pointermove", onMove);
	canvas.addEventListener("pointerup", onUp);
	canvas.addEventListener("pointercancel", onUp);
	canvas.addEventListener("wheel", onWheel, { passive: false });
	const tmp = new Vector3();
	const north = new Vector3();
	const origin = new Vector3();
	const timer = new Timer();
	timer.connect(document);
	const paint = () => {
		tMat.uniforms.uSea.value = sea;
		tMat.uniforms.uSub.value = sub;
		water.position.y = visualHeight(sea) + .004;
		onStats(terrain.floodedKm2(sea, sub));
		for (const place of PLACES) {
			const el = pinEls.get(place.id);
			if (!el) continue;
			const hit = place.elev < sea + (place.group === "ĐBSCL" ? sub : 0);
			el.classList.toggle("is-flood", hit);
		}
	};
	const deformMekong = () => {
		for (const i of mekong) posAttr.setY(i, visualHeight(elevAttr.getX(i) - sub));
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
		const dt = Math.min(timer.getDelta(), .05);
		const k = 1 - Math.exp(-3.4 * dt);
		cur.theta += (aim.theta - cur.theta) * k;
		cur.phi += (aim.phi - cur.phi) * k;
		cur.radius += (aim.radius - cur.radius) * k;
		cur.target.lerp(aim.target, k);
		const sp = Math.sin(cur.phi);
		camera.position.set(cur.target.x + cur.radius * sp * Math.sin(cur.theta), cur.target.y + cur.radius * Math.cos(cur.phi), cur.target.z + cur.radius * sp * Math.cos(cur.theta));
		camera.up.set(0, 1, 0);
		camera.lookAt(cur.target);
		wMat.uniforms.uTime.value += dt;
		renderer.render(scene, camera);
		const rect = canvas.getBoundingClientRect();
		for (const place of PLACES) {
			const el = pinEls.get(place.id);
			if (!el) continue;
			const wpt = lonLatToWorld(place.lon, place.lat);
			const lift = visualHeight(Math.max(place.elev, sea)) + .05;
			tmp.set(wpt.x, lift, wpt.z).project(camera);
			const behind = tmp.z > 1;
			const x = (tmp.x * .5 + .5) * rect.width;
			const y = (-tmp.y * .5 + .5) * rect.height;
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
		setSea(meters) {
			sea = clamp(meters, 0, 8);
			paint();
		},
		setSubsidence(meters) {
			sub = clamp(meters, 0, 3);
			deformMekong();
			paint();
		},
		setView(id) {
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
		}
	};
}
function makeTerrainGeometry(terrain) {
	const { elev, region, worldW, worldD } = terrain;
	const count = 46512;
	const positions = new Float32Array(count * 3);
	const aElev = new Float32Array(count);
	const aRegion = new Float32Array(count);
	const mekong = [];
	for (let r = 0; r < 204; r++) {
		const lat = rowLat(r);
		for (let c = 0; c < 228; c++) {
			const k = r * 228 + c;
			const w = lonLatToWorld(colLon(c), lat);
			const h = elev[k];
			positions[k * 3] = w.x;
			positions[k * 3 + 1] = visualHeight(h);
			positions[k * 3 + 2] = w.z;
			aElev[k] = h;
			aRegion[k] = region[k];
			if (region[k] === 1) mekong.push(k);
		}
	}
	const indices = /* @__PURE__ */ new Uint32Array(276486);
	let p = 0;
	for (let r = 0; r < 203; r++) for (let c = 0; c < 227; c++) {
		const a = r * 228 + c;
		const b = a + 1;
		const d = a + 228;
		const e = d + 1;
		indices[p++] = a;
		indices[p++] = d;
		indices[p++] = b;
		indices[p++] = b;
		indices[p++] = d;
		indices[p++] = e;
	}
	const geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	geometry.setAttribute("aElev", new BufferAttribute(aElev, 1));
	geometry.setAttribute("aRegion", new BufferAttribute(aRegion, 1));
	geometry.setIndex(new BufferAttribute(indices, 1));
	geometry.computeVertexNormals();
	return {
		geometry,
		mekong
	};
}
function mountFallback(canvas, terrain, onStats) {
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
			const limit = sea + (reg === 1 ? sub : 0);
			let r = 8, g = 28, b = 42;
			if (elev >= 0 && elev < limit) {
				r = 212;
				g = 101;
				b = 74;
			} else if (elev < 0) {
				const t = Math.min(1, -elev / 4e3);
				r = 20 + (1 - t) * 40;
				g = 70 + (1 - t) * 80;
				b = 90 + (1 - t) * 40;
			} else if (elev < 20) {
				r = 90;
				g = 130;
				b = 70;
			} else {
				r = 70;
				g = 78;
				b = 64;
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
		}
	};
}
//#endregion
export { mountSea };
