import { chromium } from "playwright";
import { writeFileSync } from "node:fs";

const VN = [
  [103.02, 22.38],[103.85, 22.55],[104.55, 22.72],[105.25, 23.02],[105.9, 22.9],
  [106.45, 22.62],[106.95, 22.05],[107.4, 21.62],[107.97, 21.52],[107.58, 21.15],
  [107.12, 20.92],[106.72, 20.82],[106.45, 20.5],[106.22, 20.12],[105.95, 19.7],
  [105.75, 19.25],[105.68, 18.75],[105.95, 18.2],[106.4, 17.65],[106.62, 17.35],
  [107.08, 16.85],[107.55, 16.5],[108.02, 16.28],[108.28, 16.05],[108.52, 15.78],
  [108.78, 15.28],[109.0, 14.75],[109.18, 14.15],[109.28, 13.7],[109.3, 13.25],
  [109.25, 12.7],[109.18, 12.2],[109.1, 11.65],[108.85, 11.25],[108.35, 10.93],
  [107.75, 10.62],[107.18, 10.38],[106.85, 10.15],[106.5, 9.7],[106.12, 9.28],
  [105.65, 8.95],[105.15, 8.58],[104.78, 8.72],[104.55, 9.2],[104.48, 9.75],
  [104.5, 10.28],[105.05, 10.58],[105.7, 10.92],[106.35, 11.28],[106.95, 11.72],
  [107.38, 12.45],[107.55, 13.25],[107.5, 14.2],[107.35, 15.05],[107.05, 15.75],
  [106.6, 16.45],[106.1, 17.05],[105.4, 17.9],[104.85, 18.75],[104.35, 19.55],
  [103.95, 20.3],[103.35, 21.05],[102.98, 21.75],[102.92, 22.2],
];
const MEKONG = [
  [104.55, 10.45],[105.15, 10.78],[105.85, 10.98],[106.45, 10.95],[106.95, 10.7],
  [107.05, 10.4],[106.7, 10.05],[106.25, 9.45],[105.75, 8.95],[105.15, 8.6],
  [104.75, 8.85],[104.5, 9.45],[104.48, 10.05],
];
const RED = [
  [105.55, 21.15],[105.95, 21.32],[106.55, 21.28],[107.05, 21.12],[107.15, 20.75],
  [106.7, 20.35],[106.2, 20.12],[105.75, 20.2],[105.5, 20.55],[105.48, 20.95],
];
const tip = VN.findIndex((p) => p[0] === 105.15 && p[1] === 8.58);
const EAST = VN.slice(0, tip + 1);

const COS = Math.cos((15 * Math.PI) / 180);

function project(poly, { lon0, lat0, sy, ox, oy }) {
  const sx = sy * COS;
  return poly
    .map(([lon, lat]) => {
      const x = ox + (lon - lon0) * sx;
      const y = oy + (lat0 - lat) * sy;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function grid({ lon0, lat0, sy, ox, oy, w, h }) {
  const sx = sy * COS;
  const lines = [];
  for (let lon = 104; lon <= 120; lon += 2) {
    const x = ox + (lon - lon0) * sx;
    if (x < 20 || x > w - 20) continue;
    lines.push(`<line x1="${x.toFixed(1)}" y1="36" x2="${x.toFixed(1)}" y2="${h - 36}" />`);
  }
  for (let lat = 8; lat <= 22; lat += 2) {
    const y = oy + (lat0 - lat) * sy;
    if (y < 20 || y > h - 20) continue;
    lines.push(`<line x1="36" y1="${y.toFixed(1)}" x2="${w - 36}" y2="${y.toFixed(1)}" />`);
  }
  return lines.join("\n");
}

function chartLayers(frame, w, h) {
  const vn = project(VN, frame);
  const east = project(EAST, frame);
  const mekong = project(MEKONG, frame);
  const red = project(RED, frame);
  const dot = (lon, lat, r) => {
    const sx = frame.sy * COS;
    const x = frame.ox + (lon - frame.lon0) * sx;
    const y = frame.oy + (frame.lat0 - lat) * frame.sy;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" />`;
  };
  return `
    <g class="grid">${grid({ ...frame, w, h })}</g>
    <polygon class="land" points="${vn}" />
    <polygon class="red" points="${red}" />
    <polygon class="flood" points="${mekong}" />
    <polyline class="reef" points="${east}" />
    <polygon class="shore" points="${vn}" />
    <g class="isles">
      ${dot(112.34, 16.83, 3.2)}
      ${dot(111.92, 8.64, 2.6)}
      ${dot(103.99, 10.22, 2.4)}
    </g>
  `;
}

const compass = (x, y, s) => `
  <g transform="translate(${x} ${y})" fill="none" stroke="#E0B15A" stroke-linecap="round">
    <circle cx="0" cy="0" r="${s}" stroke-width="1.25" opacity="0.9"/>
    <circle cx="0" cy="0" r="${s * 0.72}" stroke-width="0.6" opacity="0.55"/>
    <path d="M0 ${-s + 2} L${s * 0.12} ${-s * 0.18} L0 ${-s * 0.34} L${-s * 0.12} ${-s * 0.18} Z" fill="#E0B15A" stroke="none"/>
    <path d="M0 ${s * 0.34} L0 ${s - 3}" stroke-width="1.2"/>
    <path d="M${-s + 3} 0 L${s - 3} 0" stroke-width="0.7" opacity="0.7"/>
    <circle cx="0" cy="0" r="2.2" fill="#E7EEF4" stroke="none"/>
  </g>`;

const sextant = (x, y, s) => `
  <g transform="translate(${x} ${y})" fill="none" stroke="#E0B15A" stroke-linecap="round">
    <path d="M${-s} 0 A${s} ${s} 0 0 1 ${s} 0" stroke-width="2.2"/>
    <path d="M${-s} 0 H${s}" stroke-width="1.3"/>
    <path d="M0 0 L${s * 0.55} ${-s * 0.72}" stroke-width="1.6"/>
    <circle cx="0" cy="0" r="3" fill="#07141C" stroke-width="1.4"/>
    <circle cx="${s * 0.55}" cy="${-s * 0.72}" r="2.4" fill="#E7EEF4" stroke="none"/>
  </g>`;

const ogFrame = { lon0: 101.7, lat0: 23.62, sy: 35.6, ox: 42, oy: 46 };
const ogW = 1200;
const ogH = 630;

const ogHtml = `<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  html, body { margin: 0; width: ${ogW}px; height: ${ogH}px; overflow: hidden; background: #07141C; }
  .stage { position: relative; width: ${ogW}px; height: ${ogH}px; }
  svg.chart { position: absolute; inset: 0; width: ${ogW}px; height: ${ogH}px; }
  .sea { position: absolute; inset: 0; background:
    radial-gradient(ellipse 520px 280px at 78% 72%, rgba(8,28,38,0.2) 0%, rgba(7,20,28,0) 70%),
    radial-gradient(ellipse 900px 520px at 62% 48%, #12303a 0%, #0a1c26 42%, #07141C 78%);
  }
  .vignette { position: absolute; inset: 0; background:
    radial-gradient(ellipse at center, rgba(7,20,28,0) 40%, rgba(7,20,28,0.55) 100%);
    pointer-events: none; }
  .grid line { stroke: rgba(28,124,134,0.22); stroke-width: 1; }
  .land { fill: #102833; stroke: none; }
  .red { fill: rgba(28,124,134,0.28); stroke: none; }
  .flood { fill: #D4654A; opacity: 0.88; stroke: none; }
  .reef { fill: none; stroke: #1C7C86; stroke-width: 7; stroke-linejoin: round; stroke-linecap: round; opacity: 0.95; }
  .shore { fill: none; stroke: #E0B15A; stroke-width: 1.35; stroke-linejoin: round; opacity: 0.85; }
  .isles { fill: #E0B15A; }
  .frame { position: absolute; inset: 28px; border: 1px solid rgba(224,177,90,0.38); pointer-events: none; }
  .frame:before, .frame:after { content: ""; position: absolute; background: #E0B15A; opacity: 0.7; }
  .ticks { position: absolute; inset: 22px; pointer-events: none; }
  .veil {
    position: absolute; left: 50%; top: 50%; width: 820px; height: 360px;
    transform: translate(-50%, -52%);
    background: radial-gradient(ellipse at center, rgba(7,20,28,0.78) 0%, rgba(7,20,28,0.42) 48%, rgba(7,20,28,0) 72%);
  }
  .lockup {
    position: absolute; left: 50%; top: 50%; transform: translate(-50%, -52%);
    text-align: center; color: #E0B15A; width: 760px;
  }
  .rule { height: 1px; background: linear-gradient(90deg, transparent, #E0B15A, transparent); opacity: 0.85; margin: 0 80px; }
  .l1, .l2 {
    font-family: "DejaVu Serif", serif; font-weight: 700; color: #E0B15A;
    line-height: 0.92; margin: 0;
  }
  .l1 { font-size: 86px; letter-spacing: 0.2em; padding-left: 0.2em; }
  .l2 { font-size: 64px; letter-spacing: 0.14em; padding-left: 0.14em; margin-top: 8px; }
  .sub {
    font-family: "DejaVu Sans", sans-serif; font-weight: 400;
    font-size: 22px; letter-spacing: 0.22em; padding-left: 0.22em;
    color: #E7EEF4; margin: 16px 0 0;
  }
</style>
</head>
<body>
  <div class="stage">
    <div class="sea"></div>
    <svg class="chart" viewBox="0 0 ${ogW} ${ogH}" xmlns="http://www.w3.org/2000/svg">
      ${chartLayers(ogFrame, ogW, ogH)}
      <ellipse cx="860" cy="455" rx="150" ry="62" fill="none" stroke="#071820" stroke-width="18" opacity="0.45"/>
      <ellipse cx="860" cy="455" rx="108" ry="40" fill="none" stroke="rgba(28,124,134,0.35)" stroke-width="1.2"/>
      ${compass(1088, 108, 36)}
      ${sextant(1010, 500, 54)}
    </svg>
    <div class="vignette"></div>
    <div class="frame"></div>
    <div class="veil"></div>
    <div class="lockup" id="lockup">
      <div class="rule"></div>
      <p class="l1">VỰC</p>
      <p class="l2">BIỂN ĐÔNG</p>
      <p class="sub">mô phỏng nước biển dâng</p>
      <div class="rule" style="margin-top:16px"></div>
    </div>
  </div>
</body>
</html>`;

const banFrame = { lon0: 102.4, lat0: 23.5, sy: 15.15, ox: 430, oy: 16 };
const banW = 1200;
const banH = 264;

const banHtml = `<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  html, body { margin: 0; width: ${banW}px; height: ${banH}px; overflow: hidden; background: #07141C; }
  .stage { position: relative; width: ${banW}px; height: ${banH}px; }
  svg.chart { position: absolute; inset: 0; }
  .sea { position: absolute; inset: 0; background:
    linear-gradient(90deg, #07141C 0%, #07141C 38%, #0c2430 62%, #07141C 100%);
  }
  .grid line { stroke: rgba(28,124,134,0.2); stroke-width: 1; }
  .land { fill: #102833; }
  .red { fill: rgba(28,124,134,0.3); }
  .flood { fill: #D4654A; opacity: 0.9; }
  .reef { fill: none; stroke: #1C7C86; stroke-width: 4; stroke-linejoin: round; stroke-linecap: round; }
  .shore { fill: none; stroke: #E0B15A; stroke-width: 1.1; stroke-linejoin: round; opacity: 0.9; }
  .isles { fill: #E0B15A; }
  .lockup {
    position: absolute; left: 52px; top: 28px; width: 500px; color: #E0B15A; text-align: left;
  }
  .l1, .l2 {
    font-family: "DejaVu Serif", serif; font-weight: 700; margin: 0; line-height: 0.92; color: #E0B15A;
  }
  .l1 { font-size: 40px; letter-spacing: 0.16em; }
  .l2 { font-size: 32px; letter-spacing: 0.12em; margin-top: 4px; }
  .sub {
    font-family: "DejaVu Sans", sans-serif; font-size: 15px; letter-spacing: 0.16em;
    color: #E7EEF4; margin: 10px 0 0;
  }
  .rule { width: 220px; height: 1px; background: #E0B15A; opacity: 0.8; margin-top: 10px; }
</style>
</head>
<body>
  <div class="stage">
    <div class="sea"></div>
    <svg class="chart" viewBox="0 0 ${banW} ${banH}" xmlns="http://www.w3.org/2000/svg">
      ${chartLayers(banFrame, banW, banH)}
      ${sextant(1048, 168, 42)}
    </svg>
    <div class="lockup" id="lockup">
      <p class="l1">VỰC</p>
      <p class="l2">BIỂN ĐÔNG</p>
      <p class="sub">mô phỏng nước biển dâng</p>
      <div class="rule"></div>
    </div>
  </div>
</body>
</html>`;

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Vực Biển Đông">
  <rect width="32" height="32" rx="7" fill="#07141C"/>
  <path d="M4 21.2h24v6.2c0 1.6-2.2 2.6-5.4 2.6h-13.2c-3.2 0-5.4-1-5.4-2.6z" fill="#1C7C86"/>
  <path d="M5 20.6c2.8 1.5 4.6-1.1 7.4.1 2.7 1.2 4.6-.9 7.3.1 2.5.9 4.4-.7 7.3.3" fill="none" stroke="#E7EEF4" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M9.2 6.6c4.6-.2 6.8 2.8 4.8 5.6-2.1 2.9-6 2.4-4.6 5.6 1.1 2.5 4.8 3.2 7.8 2.1" fill="none" stroke="#E0B15A" stroke-width="2.7" stroke-linecap="round"/>
  <circle cx="23.4" cy="24.4" r="1.85" fill="#D4654A"/>
</svg>`;

writeFileSync("/workspace/.grok/og-card.html", ogHtml);
writeFileSync("/workspace/.grok/banner-card.html", banHtml);
writeFileSync("/workspace/.grok/favicon.svg", faviconSvg);

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage({ viewport: { width: ogW, height: ogH }, deviceScaleFactor: 1 });
await page.goto("file:///workspace/.grok/og-card.html");
await page.screenshot({ path: "/workspace/.grok/og-raw.png" });
const ogBox = await page.locator("#lockup").boundingBox();
console.log("OG lockup", JSON.stringify(ogBox));

await page.setViewportSize({ width: banW, height: banH });
await page.goto("file:///workspace/.grok/banner-card.html");
await page.screenshot({ path: "/workspace/.grok/banner-raw.png" });
const banBox = await page.locator("#lockup").boundingBox();
const lines = await page.locator("#lockup p").evaluateAll((els) =>
  els.map((el) => {
    const r = el.getBoundingClientRect();
    return { t: el.textContent, x: r.x, y: r.y, r: r.right, b: r.bottom, w: r.width, h: r.height };
  }),
);
console.log("BANNER lockup", JSON.stringify(banBox));
console.log("BANNER lines", JSON.stringify(lines));

await page.setViewportSize({ width: 64, height: 64 });
await page.setContent(
  `<html><body style="margin:0;background:#07141C">${faviconSvg.replace(
    "<svg ",
    '<svg width="64" height="64" ',
  )}</body></html>`,
  { waitUntil: "load" },
);
await page.screenshot({ path: "/workspace/.grok/favicon-64.png" });
await browser.close();
console.log("screenshots done");
