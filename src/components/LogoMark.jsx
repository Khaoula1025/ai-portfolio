import { useEffect, useState } from "react";

export default function LogoMark({ onClick }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),   // letters start
      setTimeout(() => setPhase(2), 700),   // dot + underline
      setTimeout(() => setPhase(3), 1000),  // subtitle
      setTimeout(() => setPhase(4), 1400),  // corners
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const letters = ["K", "h", "a", "o", "u", "l", "a"];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;400i&display=swap');

    .ke-logo { cursor: pointer; display: inline-flex; flex-direction: column; align-items: center; gap: 4px; position: relative; }

    .ke-name-row { display: flex; align-items: center; position: relative; }

    .ke-letter {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 26px;
      font-weight: 700;
      color: #1C1F1D;
      display: inline-block;
      opacity: 0;
      transform: translateY(10px);
      transition: color 0.3s, opacity 0s;
    }
    .ke-letter.visible {
      animation: keLetterIn 0.4s cubic-bezier(.16,1,.3,1) forwards;
    }
    .ke-logo:hover .ke-letter { color: #495F4B; }

    .ke-dot {
      width: 7px; height: 7px;
      background: #B8922A;
      border-radius: 50%;
      margin-left: 2px; margin-top: 5px;
      flex-shrink: 0;
      opacity: 0; transform: scale(0);
      transition: background 0.3s;
    }
    .ke-dot.visible { animation: keDotPop 0.5s cubic-bezier(.34,1.56,.64,1) forwards, kePulse 2s ease-in-out infinite 0.6s; }
    .ke-logo:hover .ke-dot { background: #D4A83A; }

    .ke-underline { position: absolute; bottom: -3px; left: 0; width: 100%; overflow: visible; pointer-events: none; }
    .ke-underline path { stroke-dasharray: 160; stroke-dashoffset: 160; }
    .ke-underline path.visible { animation: keDrawLine 0.6s ease forwards; }

    .ke-subtitle {
      display: flex; align-items: center; gap: 4px;
      opacity: 0; transform: translateY(4px);
    }
    .ke-subtitle.visible { animation: keFadeUp 0.4s ease forwards; }
    .ke-subtitle span {
      font-family: 'DM Mono', 'Courier New', monospace;
      font-size: 9px; letter-spacing: 0.14em;
      text-transform: uppercase; color: #6B7068;
    }
    .ke-cursor {
      display: inline-block; width: 1.5px; height: 10px;
      background: #495F4B; animation: keBlink 1s step-end infinite;
    }

    .ke-corner {
      position: absolute; opacity: 0;
    }
    .ke-corner.tl { top: -8px; left: -12px; }
    .ke-corner.br { bottom: -12px; right: -12px; }
    .ke-corner.visible { animation: keFadeIn 0.3s ease forwards; }

    @keyframes keLetterIn {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes keDotPop {
      0%   { opacity: 0; transform: scale(0); }
      60%  { opacity: 1; transform: scale(1.4); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes kePulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(184,146,42,.5); }
      50%     { box-shadow: 0 0 0 5px rgba(184,146,42,0); }
    }
    @keyframes keDrawLine {
      to { stroke-dashoffset: 0; }
    }
    @keyframes keFadeUp {
      from { opacity: 0; transform: translateY(4px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes keFadeIn {
      from { opacity: 0; } to { opacity: 1; }
    }
    @keyframes keBlink {
      0%,100% { opacity: 1; } 50% { opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ke-letter, .ke-dot, .ke-subtitle, .ke-corner { opacity: 1 !important; transform: none !important; animation: none !important; }
      .ke-underline path { stroke-dashoffset: 0 !important; animation: none !important; }
      .ke-cursor { animation: none !important; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="ke-logo" onClick={onClick} role="button" aria-label="Khaoula Esioudi — go to top">

        {/* Top-left corner */}
        <svg
          className={`ke-corner tl${phase >= 4 ? " visible" : ""}`}
          width="14" height="14" viewBox="0 0 14 14" fill="none"
        >
          <path d="M13 1H3Q1 1 1 3v10" stroke="#B8922A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        </svg>

        {/* Name + dot */}
        <div className="ke-name-row">
          {letters.map((l, i) => (
            <span
              key={i}
              className={`ke-letter${phase >= 1 ? " visible" : ""}`}
              style={{ animationDelay: phase >= 1 ? `${i * 0.07}s` : "0s" }}
            >
              {l}
            </span>
          ))}
          <span className={`ke-dot${phase >= 2 ? " visible" : ""}`} />

          {/* Underline */}
          <svg className="ke-underline" viewBox="0 0 160 5" height="5" preserveAspectRatio="none">
            <path
              className={phase >= 2 ? "visible" : ""}
              d="M0 2.5 Q40 1 80 2.5 Q120 4 160 2.5"
              stroke="#495F4B" strokeWidth="1.2" fill="none" strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <div className={`ke-subtitle${phase >= 3 ? " visible" : ""}`}>
          <span>Full-Stack &amp; AI Developer</span>
          <span className="ke-cursor" />
        </div>

        {/* Bottom-right corner */}
        <svg
          className={`ke-corner br${phase >= 4 ? " visible" : ""}`}
          width="14" height="14" viewBox="0 0 14 14" fill="none"
        >
          <path d="M1 13h10q2 0 2-2V1" stroke="#B8922A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        </svg>

      </div>
    </>
  );
}
