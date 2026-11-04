import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Compass, i as Pause, n as RotateCcw, r as Play } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BT40lu7u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var PLACES = [
	{
		id: "camau",
		name: "Cà Mau",
		lon: 105.15,
		lat: 9.18,
		elev: .7,
		group: "ĐBSCL"
	},
	{
		id: "baclieu",
		name: "Bạc Liêu",
		lon: 105.72,
		lat: 9.28,
		elev: .9,
		group: "ĐBSCL"
	},
	{
		id: "soctrang",
		name: "Sóc Trăng",
		lon: 105.97,
		lat: 9.6,
		elev: 1,
		group: "ĐBSCL"
	},
	{
		id: "cantho",
		name: "Cần Thơ",
		lon: 105.75,
		lat: 10.03,
		elev: 1.4,
		group: "ĐBSCL"
	},
	{
		id: "bentre",
		name: "Bến Tre",
		lon: 106.37,
		lat: 10.24,
		elev: 1.1,
		group: "ĐBSCL"
	},
	{
		id: "mytho",
		name: "Mỹ Tho",
		lon: 106.36,
		lat: 10.36,
		elev: 1.3,
		group: "ĐBSCL"
	},
	{
		id: "hcmc",
		name: "TP. Hồ Chí Minh",
		lon: 106.7,
		lat: 10.78,
		elev: 2.4,
		group: "ĐBSCL"
	},
	{
		id: "vungtau",
		name: "Vũng Tàu",
		lon: 107.08,
		lat: 10.35,
		elev: 3.5,
		group: "ĐBSCL"
	},
	{
		id: "haiphong",
		name: "Hải Phòng",
		lon: 106.68,
		lat: 20.86,
		elev: 2,
		group: "Sông Hồng"
	},
	{
		id: "thaibinh",
		name: "Thái Bình",
		lon: 106.34,
		lat: 20.45,
		elev: 1.3,
		group: "Sông Hồng"
	},
	{
		id: "namdinh",
		name: "Nam Định",
		lon: 106.17,
		lat: 20.42,
		elev: 1.4,
		group: "Sông Hồng"
	},
	{
		id: "ninhbinh",
		name: "Ninh Bình",
		lon: 105.97,
		lat: 20.25,
		elev: 2,
		group: "Sông Hồng"
	},
	{
		id: "hanoi",
		name: "Hà Nội",
		lon: 105.85,
		lat: 21.03,
		elev: 9,
		group: "Sông Hồng"
	},
	{
		id: "hue",
		name: "Huế",
		lon: 107.58,
		lat: 16.46,
		elev: 2.6,
		group: "Miền Trung"
	},
	{
		id: "hoian",
		name: "Hội An",
		lon: 108.33,
		lat: 15.88,
		elev: 1.8,
		group: "Miền Trung"
	},
	{
		id: "danang",
		name: "Đà Nẵng",
		lon: 108.21,
		lat: 16.07,
		elev: 3.8,
		group: "Miền Trung"
	},
	{
		id: "quynhon",
		name: "Quy Nhơn",
		lon: 109.22,
		lat: 13.77,
		elev: 3.2,
		group: "Miền Trung"
	},
	{
		id: "nhatrang",
		name: "Nha Trang",
		lon: 109.19,
		lat: 12.24,
		elev: 3.4,
		group: "Miền Trung"
	},
	{
		id: "phanthiet",
		name: "Phan Thiết",
		lon: 108.1,
		lat: 10.93,
		elev: 4.5,
		group: "Miền Trung"
	},
	{
		id: "hoangsa",
		name: "Hoàng Sa",
		lon: 112.34,
		lat: 16.83,
		elev: 3,
		group: "Biển"
	},
	{
		id: "truongsa",
		name: "Trường Sa",
		lon: 111.92,
		lat: 8.64,
		elev: 2.2,
		group: "Biển"
	},
	{
		id: "phuquoc",
		name: "Phú Quốc",
		lon: 103.99,
		lat: 10.22,
		elev: 5.5,
		group: "Đảo"
	}
];
var SCENARIOS = [
	{
		id: "now",
		label: "Nay",
		rise: 0,
		note: "Mốc mực nước trung bình, khoảng 2026."
	},
	{
		id: "y2050",
		label: "2050",
		rise: .32,
		note: "Khoảng giữa các lộ trình phát thải tới giữa thế kỷ. Không phải một con số chắc."
	},
	{
		id: "y2100",
		label: "2100",
		rise: .85,
		note: "Cận cao của kịch bản phát thải cao tới 2100 (IPCC AR6), chưa kể lún đất."
	},
	{
		id: "ice",
		label: "+2 m",
		rise: 2,
		note: "Nhánh hiếm: băng tan nhanh. Không phải dự báo trung bình cho năm 2100."
	},
	{
		id: "long",
		label: "+5 m",
		rise: 5,
		note: "Nhiều thế kỷ nếu các tảng băng lớn mất ổn định. Chỉ để thấy địa hình thấp."
	}
];
var VIEWS = [
	{
		id: "wide",
		label: "Toàn vực",
		lon: 111.6,
		lat: 13.6,
		radius: 15.2,
		phi: .58,
		theta: .22
	},
	{
		id: "mekong",
		label: "Cửu Long",
		lon: 105.9,
		lat: 9.85,
		radius: 4.15,
		phi: .74,
		theta: -.35
	},
	{
		id: "red",
		label: "Sông Hồng",
		lon: 106.35,
		lat: 20.7,
		radius: 3.55,
		phi: .72,
		theta: .15
	},
	{
		id: "central",
		label: "Miền Trung",
		lon: 108.55,
		lat: 15.2,
		radius: 5.1,
		phi: .78,
		theta: -.55
	},
	{
		id: "hoangsa",
		label: "Hoàng Sa",
		lon: 112.3,
		lat: 16.7,
		radius: 2.55,
		phi: .86,
		theta: .4
	},
	{
		id: "truongsa",
		label: "Trường Sa",
		lon: 113.6,
		lat: 9.7,
		radius: 3.35,
		phi: .8,
		theta: .25
	}
];
var STORE_KEY = "vuc-bien-dong-v1";
function formatM(m) {
	return `${m > 0 ? "+" : ""}${m.toFixed(2).replace(".", ",")} m`;
}
function formatKm(n) {
	return new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 }).format(Math.round(n));
}
function SeaApp() {
	const canvasRef = (0, import_react.useRef)(null);
	const pinsRef = (0, import_react.useRef)(null);
	const compassRef = (0, import_react.useRef)(null);
	const simRef = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [failed, setFailed] = (0, import_react.useState)("");
	const [sea, setSea] = (0, import_react.useState)(0);
	const [sub, setSub] = (0, import_react.useState)(false);
	const [view, setView] = (0, import_react.useState)("wide");
	const [km2, setKm2] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const playRef = (0, import_react.useRef)(0);
	const seaRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		seaRef.current = sea;
	}, [sea]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const pins = pinsRef.current;
		const compass = compassRef.current;
		if (!canvas || !pins || !compass) return;
		let dead = false;
		let handle = null;
		(async () => {
			try {
				const mod = await import("./scene-DmvbFQdC.mjs");
				if (dead) return;
				let savedSea = 0;
				let savedSub = false;
				let savedView = "wide";
				try {
					const raw = localStorage.getItem(STORE_KEY);
					if (raw) {
						const parsed = JSON.parse(raw);
						if (typeof parsed.sea === "number") savedSea = Math.min(8, Math.max(0, parsed.sea));
						if (typeof parsed.sub === "boolean") savedSub = parsed.sub;
						if (parsed.view && VIEWS.some((v) => v.id === parsed.view)) savedView = parsed.view;
					}
				} catch {}
				handle = mod.mountSea({
					canvas,
					pins,
					compass,
					onStats: (km) => {
						if (!dead) setKm2(km);
					}
				});
				simRef.current = handle;
				handle.setSea(savedSea);
				handle.setSubsidence(savedSub ? 1 : 0);
				handle.setView(savedView);
				if (!dead) {
					setSea(savedSea);
					setSub(savedSub);
					setView(savedView);
					setReady(true);
				}
			} catch (err) {
				if (!dead) setFailed(err instanceof Error ? err.message : "Không dựng được cảnh 3D");
			}
		})();
		return () => {
			dead = true;
			cancelAnimationFrame(playRef.current);
			handle?.dispose();
			simRef.current = null;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		try {
			localStorage.setItem(STORE_KEY, JSON.stringify({
				sea,
				sub,
				view
			}));
		} catch {}
	}, [
		sea,
		sub,
		view,
		ready
	]);
	const note = (0, import_react.useMemo)(() => {
		return [...SCENARIOS].reverse().find((s) => sea + .001 >= s.rise)?.note ?? SCENARIOS[0].note;
	}, [sea]);
	const floodedPlaces = PLACES.filter((p) => p.elev < sea + (p.group === "ĐBSCL" && sub ? 1 : 0));
	const applySea = (m) => {
		const next = Math.min(8, Math.max(0, m));
		setSea(next);
		simRef.current?.setSea(next);
	};
	const stopPlay = () => {
		cancelAnimationFrame(playRef.current);
		setPlaying(false);
	};
	const togglePlay = () => {
		if (playing) {
			stopPlay();
			return;
		}
		setPlaying(true);
		const from = seaRef.current;
		const to = from > 4.6 ? 0 : 5;
		const t0 = performance.now();
		const dur = 14e3;
		const frame = (now) => {
			const t = Math.min(1, (now - t0) / dur);
			const eased = t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
			applySea(from + (to - from) * eased);
			if (t < 1) playRef.current = requestAnimationFrame(frame);
			else setPlaying(false);
		};
		playRef.current = requestAnimationFrame(frame);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stage",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Biển Đông · mô hình minh họa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Vực Biển Đông" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "readout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "readout-k",
						children: "Mực nước"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: formatM(sea) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "viewport",
				"aria-label": "Cảnh 3D Biển Đông",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "sea-canvas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: pinsRef,
						className: "pins"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "legend",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "swatch swatch-deep" }), " Vực sâu"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "swatch swatch-shelf" }), " Thềm nông"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "swatch swatch-low" }), " Đất thấp"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "swatch swatch-high" }), " Núi"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "swatch swatch-flood" }), " Ngập mới"] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "compass-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: compassRef,
							className: "compass",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "B" })]
						})
					}),
					!ready && !failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "loading",
						children: "Đang dựng địa hình…"
					}) : null,
					failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "loading is-error",
						children: failed
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "dock",
				"aria-label": "Điều khiển mực nước",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "statline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "readout-k",
							children: "Đất liền Việt Nam ngập"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [formatKm(km2), " km²"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "note",
							children: note
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "chips",
						role: "group",
						"aria-label": "Kịch bản",
						children: SCENARIOS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: Math.abs(sea - s.rise) < .03 ? "chip is-on" : "chip",
							onClick: () => {
								stopPlay();
								applySea(s.rise);
							},
							children: s.label
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "slider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kéo mực nước, 0 đến 8 mét" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 8,
							step: .01,
							value: sea,
							"aria-valuetext": formatM(sea),
							onChange: (e) => {
								stopPlay();
								applySea(Number(e.target.value));
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row-actions",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "action",
								onClick: togglePlay,
								children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), playing ? "Dừng" : "Chạy tới +5 m"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: sub ? "action is-on" : "action",
								"aria-pressed": sub,
								onClick: () => {
									const next = !sub;
									setSub(next);
									simRef.current?.setSubsidence(next ? 1 : 0);
								},
								children: "Lún ĐBSCL +1 m"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "action ghost",
								onClick: () => {
									stopPlay();
									applySea(0);
									setSub(false);
									simRef.current?.setSubsidence(0);
									setView("wide");
									simRef.current?.setView("wide");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Đặt lại"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "chips",
						role: "group",
						"aria-label": "Góc nhìn",
						children: VIEWS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: view === v.id ? "chip is-on" : "chip",
							onClick: () => {
								setView(v.id);
								simRef.current?.setView(v.id);
							},
							children: v.label
						}, v.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "places",
						"aria-label": "Địa danh bị mực nước vượt",
						children: floodedPlaces.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "quiet",
							children: "Chưa địa danh nào dưới mực nước này."
						}) : floodedPlaces.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "place",
							children: [p.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: formatM(p.elev).replace("+", "") })]
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "fine",
						children: "Độ cao là mặt nạ minh họa, không phải bản đồ ngập chính thức. Chưa tính đê, triều cường, bão và công trình. Mốc năm bám khoảng của IPCC AR6; nhánh +2 m và +5 m là giả định dài, không phải dự báo trung bình. Một ô lưới khoảng 9 km nên dải bờ hẹp bị phóng đại."
					})
				]
			})
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeaApp, {});
}
//#endregion
export { PLACES as n, VIEWS as r, routes_exports as t };
