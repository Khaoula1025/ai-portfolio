import { useState, useEffect } from "react";
import { C } from "../styles/theme";
import { useInView } from "../hooks";

/* ── Reveal on scroll ─────────────────────────────────────── */
export function Reveal({ children, delay = 0, from = "bottom" }) {
  const [ref, visible] = useInView();
  const starts = {
    bottom: "translateY(36px) scale(.99)",
    left:   "translateX(-36px)",
    right:  "translateX(36px)",
    fade:   "scale(.97)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : (starts[from] || starts.bottom),
        transition: `opacity .75s cubic-bezier(.16,1,.3,1) ${delay}s,
                     transform .75s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Section label ────────────────────────────────────────── */
export function Label({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
      <div style={{ width: 24, height: 1, background: C.gold }} />
      <span
        className="mono"
        style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: C.gold }}
      >
        {children}
      </span>
      <div style={{ width: 24, height: 1, background: C.gold }} />
    </div>
  );
}

/* ── Gold divider ─────────────────────────────────────────── */
export function Divider({ my = 40 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: `${my}px 0` }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${C.gold}50, ${C.goldS}, ${C.gold}50, transparent)` }} />
      <div style={{ width: 5, height: 5, background: C.goldS, transform: "rotate(45deg)", flexShrink: 0 }} />
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${C.gold}50, ${C.goldS}, ${C.gold}50, transparent)` }} />
    </div>
  );
}

/* ── Skill chip ───────────────────────────────────────────── */
export function Chip({ label, accent, featured, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={desc}
      style={{
        fontSize: featured ? 11 : 10, 
        fontFamily: "'DM Mono','JetBrains Mono',monospace",
        letterSpacing: ".07em", textTransform: "uppercase",
        color:      hovered ? C.bg    : accent,
        background: hovered ? accent  : `${accent}12`,
        border:     `1px solid ${featured ? accent : accent + "40"}`,
        borderRadius: 3, padding: featured ? "4px 12px" : "3px 10px", 
        whiteSpace: "nowrap",
        transition: "all .2s ease",
        cursor: "help",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontWeight: featured ? 600 : 400,
        boxShadow: featured && !hovered ? `0 0 10px ${accent}20` : "none"
      }}
    >
      {featured && <span style={{ color: C.gold, fontSize: 14, marginTop: -2 }}>·</span>}
      {label}
    </span>
  );
}

/* ── Spotlight cursor glow ────────────────────────────────── */
export function CursorGlow({ x, y, type = "default" }) {
  const isHover = type === "hover";
  
  return (
    <>
      {/* Background Glow */}
      <div
        style={{
          position: "fixed", pointerEvents: "none", zIndex: 0,
          width: 800, height: 800, borderRadius: "50%",
          background: `radial-gradient(circle, ${C.sage}05 0%, transparent 70%)`,
          left: x - 400, top: y - 400,
          transition: "left .15s ease-out, top .15s ease-out",
        }}
      />
      
      {/* Smart Lens */}
      <div
        style={{
          position: "fixed", pointerEvents: "none", zIndex: 9999,
          width: isHover ? 80 : 12, 
          height: isHover ? 80 : 12, 
          borderRadius: "50%",
          border: isHover ? `1px solid ${C.gold}40` : "none",
          background: isHover ? `${C.white}10` : C.gold,
          left: x, top: y,
          transform: "translate(-50%, -50%)",
          transition: "width .3s cubic-bezier(0.16, 1, 0.3, 1), height .3s cubic-bezier(0.16, 1, 0.3, 1), background .3s",
          mixBlendMode: isHover ? "difference" : "normal",
        }}
      />
    </>
  );
}

/* ── KE Monogram Logo ────────────────────────────────────── */
export function Logo({ size = 40 }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "scale(1.08) rotate(-2deg)" : "none"
      }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Border with Corner Gaps */}
        <path d="M5 2H2V5" stroke={C.gold} strokeWidth="1" />
        <path d="M35 2H38V5" stroke={C.gold} strokeWidth="1" />
        <path d="M5 38H2V35" stroke={C.gold} strokeWidth="1" />
        <path d="M35 38H38V35" stroke={C.gold} strokeWidth="1" />
        
        {/* Monogram Letters */}
        <text
          x="50%"
          y="58%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={C.ink}
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.05em"
          }}
        >
          K
          <tspan fill={C.gold}>E</tspan>
        </text>
      </svg>
    </div>
  );
}

/* ── Scroll Progress Bar ──────────────────────────────────── */
export function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handler = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScroll((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, height: 3, 
      width: `${scroll}%`, background: C.gold, 
      zIndex: 2000, transition: "width 0.1s ease-out",
      boxShadow: `0 0 10px ${C.gold}`
    }} />
  );
}
