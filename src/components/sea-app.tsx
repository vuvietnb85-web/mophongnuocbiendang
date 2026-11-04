import { useEffect, useMemo, useRef, useState } from "react";
import { Compass, Pause, Play, RotateCcw } from "lucide-react";
import { PLACES, SCENARIOS, VIEWS, type ViewId } from "@/sim/places";
import type { SimHandle } from "@/sim/scene";

const STORE_KEY = "vuc-bien-dong-v1";

function formatM(m: number) {
  return `${m > 0 ? "+" : ""}${m.toFixed(2).replace(".", ",")} m`;
}

function formatKm(n: number) {
  return new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function SeaApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pinsRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);
  const simRef = useRef<SimHandle | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState("");
  const [sea, setSea] = useState(0);
  const [sub, setSub] = useState(false);
  const [view, setView] = useState<ViewId>("wide");
  const [km2, setKm2] = useState(0);
  const [playing, setPlaying] = useState(false);
  const playRef = useRef(0);
  const seaRef = useRef(0);

  useEffect(() => {
    seaRef.current = sea;
  }, [sea]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pins = pinsRef.current;
    const compass = compassRef.current;
    if (!canvas || !pins || !compass) return;
    let dead = false;
    let handle: SimHandle | null = null;
    (async () => {
      try {
        const mod = await import("@/sim/scene");
        if (dead) return;
        let savedSea = 0;
        let savedSub = false;
        let savedView: ViewId = "wide";
        try {
          const raw = localStorage.getItem(STORE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw) as { sea?: number; sub?: boolean; view?: ViewId };
            if (typeof parsed.sea === "number") savedSea = Math.min(8, Math.max(0, parsed.sea));
            if (typeof parsed.sub === "boolean") savedSub = parsed.sub;
            if (parsed.view && VIEWS.some((v) => v.id === parsed.view)) savedView = parsed.view;
          }
        } catch {
          /* bỏ qua bộ nhớ hỏng */
        }
        handle = mod.mountSea({
          canvas,
          pins,
          compass,
          onStats: (km) => {
            if (!dead) setKm2(km);
          },
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

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ sea, sub, view }));
    } catch {
      /* private mode */
    }
  }, [sea, sub, view, ready]);

  const note = useMemo(() => {
    const hit = [...SCENARIOS].reverse().find((s) => sea + 0.001 >= s.rise);
    return hit?.note ?? SCENARIOS[0].note;
  }, [sea]);

  const floodedPlaces = PLACES.filter((p) => p.elev < sea + (p.group === "ĐBSCL" && sub ? 1 : 0));

  const applySea = (m: number) => {
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
    const dur = 14000;
    const frame = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      const eased = t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
      applySea(from + (to - from) * eased);
      if (t < 1) playRef.current = requestAnimationFrame(frame);
      else setPlaying(false);
    };
    playRef.current = requestAnimationFrame(frame);
  };

  return (
    <div className="stage">
      <header className="topbar">
        <div className="brand">
          <p className="eyebrow">Biển Đông · mô hình minh họa</p>
          <h1>Vực Biển Đông</h1>
        </div>
        <div className="readout">
          <span className="readout-k">Mực nước</span>
          <strong>{formatM(sea)}</strong>
        </div>
      </header>

      <section className="viewport" aria-label="Cảnh 3D Biển Đông">
        <canvas ref={canvasRef} className="sea-canvas" />
        <div ref={pinsRef} className="pins" />
        <div className="legend" aria-hidden="true">
          <span><i className="swatch swatch-deep" /> Vực sâu</span>
          <span><i className="swatch swatch-shelf" /> Thềm nông</span>
          <span><i className="swatch swatch-low" /> Đất thấp</span>
          <span><i className="swatch swatch-high" /> Núi</span>
          <span><i className="swatch swatch-flood" /> Ngập mới</span>
        </div>
        <div className="compass-wrap">
          <div ref={compassRef} className="compass">
            <Compass aria-hidden="true" />
            <b>B</b>
          </div>
        </div>
        {!ready && !failed ? <p className="loading">Đang dựng địa hình…</p> : null}
        {failed ? <p className="loading is-error">{failed}</p> : null}
      </section>

      <section className="dock" aria-label="Điều khiển mực nước">
        <div className="statline">
          <div>
            <span className="readout-k">Đất liền Việt Nam ngập</span>
            <strong>{formatKm(km2)} km²</strong>
          </div>
          <p className="note">{note}</p>
        </div>

        <div className="chips" role="group" aria-label="Kịch bản">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={Math.abs(sea - s.rise) < 0.03 ? "chip is-on" : "chip"}
              onClick={() => {
                stopPlay();
                applySea(s.rise);
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <label className="slider">
          <span>Kéo mực nước, 0 đến 8 mét</span>
          <input
            type="range"
            min={0}
            max={8}
            step={0.01}
            value={sea}
            aria-valuetext={formatM(sea)}
            onChange={(e) => {
              stopPlay();
              applySea(Number(e.target.value));
            }}
          />
        </label>

        <div className="row-actions">
          <button type="button" className="action" onClick={togglePlay}>
            {playing ? <Pause /> : <Play />}
            {playing ? "Dừng" : "Chạy tới +5 m"}
          </button>
          <button
            type="button"
            className={sub ? "action is-on" : "action"}
            aria-pressed={sub}
            onClick={() => {
              const next = !sub;
              setSub(next);
              simRef.current?.setSubsidence(next ? 1 : 0);
            }}
          >
            Lún ĐBSCL +1 m
          </button>
          <button
            type="button"
            className="action ghost"
            onClick={() => {
              stopPlay();
              applySea(0);
              setSub(false);
              simRef.current?.setSubsidence(0);
              setView("wide");
              simRef.current?.setView("wide");
            }}
          >
            <RotateCcw />
            Đặt lại
          </button>
        </div>

        <div className="chips" role="group" aria-label="Góc nhìn">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              className={view === v.id ? "chip is-on" : "chip"}
              onClick={() => {
                setView(v.id);
                simRef.current?.setView(v.id);
              }}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="places" aria-label="Địa danh bị mực nước vượt">
          {floodedPlaces.length === 0 ? (
            <span className="quiet">Chưa địa danh nào dưới mực nước này.</span>
          ) : (
            floodedPlaces.map((p) => (
              <span key={p.id} className="place">
                {p.name}
                <small>{formatM(p.elev).replace("+", "")}</small>
              </span>
            ))
          )}
        </div>

        <p className="fine">
          Độ cao là mặt nạ minh họa, không phải bản đồ ngập chính thức. Chưa tính đê, triều cường, bão
          và công trình. Mốc năm bám khoảng của IPCC AR6; nhánh +2 m và +5 m là giả định dài, không phải
          dự báo trung bình. Một ô lưới khoảng 9 km nên dải bờ hẹp bị phóng đại.
        </p>
      </section>
    </div>
  );
}
