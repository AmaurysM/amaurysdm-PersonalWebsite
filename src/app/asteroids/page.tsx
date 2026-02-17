"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { FaArrowLeft } from "react-icons/fa";

const P5Component = dynamic(() => import("../components/asteroids"), {
  ssr: false,
  loading: () => (
    <div className="w-[550px] h-[450px] flex items-center justify-center bg-black/60 rounded-lg">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-amber-400/70 text-sm tracking-widest uppercase font-mono">
          Initializing...
        </span>
      </div>
    </div>
  ),
});

/* ── Floating background asteroid (pure CSS/SVG polygon) ─────────────── */
type AsteroidProps = {
  style: React.CSSProperties;
  size: number;
  points: string;
  opacity: number;
};

function BgAsteroid({ style, size, points, opacity }: AsteroidProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 100 100`}
      style={{ ...style, position: "absolute", pointerEvents: "none" }}
      className="select-none"
    >
      <polygon
        points={points}
        fill="none"
        stroke={`rgba(180,200,255,${opacity})`}
        strokeWidth="2"
      />
    </svg>
  );
}

/* Generate a random irregular polygon path centred at 50,50 */
function makeAsteroidPoints(seed: number): string {
  const pts: string[] = [];
  const sides = 7 + (seed % 3);
  for (let i = 0; i < sides; i++) {
    const angle = (i / sides) * Math.PI * 2;
    const r = 28 + ((seed * (i + 3) * 7919) % 18);
    pts.push(`${50 + Math.cos(angle) * r},${50 + Math.sin(angle) * r}`);
  }
  return pts.join(" ");
}

const BG_ASTEROIDS = Array.from({ length: 18 }, (_, i) => {
  const size = 40 + ((i * 31) % 80);
  const dur = 18 + ((i * 13) % 22);
  const delay = -((i * 7) % dur);
  const startX = (i * 17 + 5) % 100;
  const startY = (i * 11 + 10) % 100;
  const driftX = -6 + ((i * 3) % 12);
  const driftY = -6 + ((i * 5) % 12);
  const rotate = (i * 40) % 360;
  const rotateDelta = i % 2 === 0 ? 360 : -360;
  const opacity = 0.04 + ((i * 7) % 10) * 0.012;
  return { size, dur, delay, startX, startY, driftX, driftY, rotate, rotateDelta, opacity, seed: i * 137 + 3 };
});

const AsteroidsPage = () => {
  const router = useRouter();

  return (
    <div
      className="relative max-h-screen flex flex-col items-center justify-center min-h-screen overflow-hidden text-white"
      style={{
        background: "radial-gradient(ellipse at 30% 20%, #0d1b3e 0%, #050a14 55%, #0a0505 100%)",
        fontFamily: "'Courier New', monospace",
      }}
    >
      {/* ── Star field ─────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 65%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 70% 10%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 90%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 40%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 92% 55%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 50%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 38% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(2px 2px at 78% 72%, rgba(200,220,255,0.3) 0%, transparent 100%)`,
        }}
      />

      {/* ── Animated background asteroids ──────────────────────────────────── */}
      <style>{`
        ${BG_ASTEROIDS.map(
          (a, i) => `
          @keyframes drift-${i} {
            0%   { transform: translate(${a.startX}vw, ${a.startY}vh) rotate(${a.rotate}deg); }
            100% { transform: translate(calc(${a.startX}vw + ${a.driftX}vw), calc(${a.startY}vh + ${a.driftY}vh)) rotate(${a.rotate + a.rotateDelta}deg); }
          }
        `
        ).join("")}

        .bg-asteroid {
          position: absolute;
          top: 0; left: 0;
          pointer-events: none;
        }

        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }

        .scanline-overlay {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.06) 3px,
            rgba(0,0,0,0.06) 4px
          );
          animation: none;
        }

        @keyframes title-pulse {
          0%, 100% { text-shadow: 0 0 20px rgba(251,191,36,0.4), 0 0 60px rgba(251,191,36,0.15); }
          50%       { text-shadow: 0 0 30px rgba(251,191,36,0.7), 0 0 80px rgba(251,191,36,0.25); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .cursor::after {
          content: '_';
          animation: blink 1s step-end infinite;
        }

        .control-key {
          background: linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 100%);
          border: 1px solid rgba(251,191,36,0.4);
          border-bottom-width: 3px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.5);
          color: #fbbf24;
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        }
      `}</style>

      {BG_ASTEROIDS.map((a, i) => (
        <div
          key={i}
          className="bg-asteroid"
          style={{
            animation: `drift-${i} ${a.dur}s linear ${a.delay}s infinite alternate`,
          }}
        >
          <BgAsteroid
            size={a.size}
            points={makeAsteroidPoints(a.seed)}
            opacity={a.opacity}
            style={{}}
          />
        </div>
      ))}

      {/* ── Scanline texture ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-10" />

      {/* ── Back button ─────────────────────────────────────────────────────── */}
      <button
        onClick={() => (window.history.length > 1 ? router.back() : router.push("/"))}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 group transition-all duration-300"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        <FaArrowLeft
          className="transition-transform duration-200 group-hover:-translate-x-1"
          style={{ color: "rgba(251,191,36,0.7)" }}
        />
        <span
          className="text-sm tracking-widest uppercase transition-colors duration-200"
          style={{ color: "rgba(251,191,36,0.7)" }}
        >
          Portfolio 
        </span>
      </button>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col items-center px-4 py-12 max-w-3xl w-full">

        {/* Title */}
        <div className="mb-2 text-center">
          <div
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "rgba(251,191,36,0.45)" }}
          >
            [ ARCADE CLASSIC ]
          </div>
          <h1
            className="title-text text-6xl font-black tracking-widest mb-3"
            style={{
              fontFamily: "'Courier New', monospace",
              background: "linear-gradient(180deg, #fde68a 0%, #f59e0b 50%, #d97706 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.15em",
            }}
          >
            ASTEROIDS
          </h1>
          <div
            className="text-xs tracking-[0.3em] uppercase cursor"
            style={{ color: "rgba(251,191,36,0.35)" }}
          >
            ver 1.0 — 2020
          </div>
        </div>

        {/* Controls hint bar */}
        <div
          className="flex items-center gap-6 my-6 px-6 py-3 rounded"
          style={{
            background: "rgba(251,191,36,0.04)",
            border: "1px solid rgba(251,191,36,0.12)",
          }}
        >
          {[
            { keys: ["← →"], label: "ROTATE" },
            { keys: ["↑"], label: "THRUST" },
            { keys: ["SPACE"], label: "FIRE" },
          ].map(({ keys, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
              {keys.map((k) => (
                <span key={k} className="control-key">{k}</span>
              ))}
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Game Canvas */}
        <div
          className="relative overflow-hidden transition-all duration-500"
          style={{
            border: "1px solid rgba(251,191,36,0.25)",
          }}
        >
          {/* Corner decorations */}
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} w-4 h-4 pointer-events-none z-10`}
              style={{
                borderTop: pos.includes("top") ? "2px solid rgba(251,191,36,0.6)" : "none",
                borderBottom: pos.includes("bottom") ? "2px solid rgba(251,191,36,0.6)" : "none",
                borderLeft: pos.includes("left") ? "2px solid rgba(251,191,36,0.6)" : "none",
                borderRight: pos.includes("right") ? "2px solid rgba(251,191,36,0.6)" : "none",
              }}
            />
          ))}
          <P5Component />
        </div>

        {/* Dev note */}
        <div
          className="mt-10 max-w-xl text-center leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.38)",
            fontSize: "0.8rem",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.03em",
          }}
        >
          <span style={{ color: "rgba(251,191,36,0.4)" }}>// </span>
          Completed Mar 31, 2020 · First major p5.js project · High school capstone.
          Asteroid shapes were updated for the portfolio — the core logic is untouched.
        </div>

        {/* Signature */}
        <div
          className="mt-4 text-xs tracking-widest uppercase"
          style={{ color: "rgba(251,191,36,0.2)" }}
        >
          crafted by amaurys
        </div>
      </div>
    </div>
  );
};

export default AsteroidsPage;