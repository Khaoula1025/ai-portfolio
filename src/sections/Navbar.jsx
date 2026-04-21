import { useState } from "react";
import { C, TRANSITIONS, SHADOWS, FONTS } from "../styles/theme";
import LogoMark from "../components/LogoMark";

const NAV_LINKS = ["about", "skills", "projects", "experience", "education", "contact"];

export default function Navbar({ active, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: theme === "light" ? "rgba(250,247,242,0.95)" : "rgba(20,26,21,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${C.bg2}`,
          height: 80, display: "flex", alignItems: "center"
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          {/* Logo */}
          <div style={{ zIndex: 1001 }}>
            <LogoMark onClick={() => go("home")} />
          </div>

          {/* Desktop Links */}
          <div className="mob-hide" style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map((s) => (
              <button
                key={s}
                onClick={() => go(s)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: FONTS.mono, fontSize: 10,
                  color: active === s ? C.sage : C.inkM,
                  letterSpacing: ".15em", textTransform: "uppercase",
                  transition: TRANSITIONS.fast,
                  position: "relative",
                  padding: "4px 0"
                }}
              >
                {s}
                <div style={{ 
                  position: "absolute", bottom: 0, left: 0, width: "100%", height: 1.5, 
                  background: C.sage, transform: active === s ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.3s ease", transformOrigin: "left"
                }} />
              </button>
            ))}
          </div>

          {/* Theme Toggle & CTA Row */}
          <div className="mob-hide" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              style={{
                width: 48, height: 28, borderRadius: 20, border: "none",
                background: theme === "light" ? "#E8E0D3" : "#2A3328",
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: theme === "light" ? "flex-start" : "flex-end",
                padding: "0 6px", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative", overflow: "hidden"
              }}
            >
              <div style={{ 
                fontSize: 14, transform: `rotate(${theme === "light" ? 0 : 180}deg)`, 
                transition: "transform 0.4s ease",
                color: theme === "light" ? "#495F4B" : "#D4A83A"
              }}>
                {theme === "light" ? "☀" : "☾"}
              </div>
            </button>

            <a
              href="/cv.pdf"
              download
              style={{
                fontFamily: FONTS.serif, fontWeight: 600, fontSize: 13,
                color: "#FFFFFF",
                letterSpacing: ".06em",
                background: C.sage,
                borderRadius: 2, padding: "12px 28px",
                textDecoration: "none",
                boxShadow: SHADOWS.sm,
                transition: TRANSITIONS.smooth,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.shadow; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.sage; e.currentTarget.style.transform = "none"; }}
            >
              ↓ Download CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setOpen(!open)}
            style={{ 
              display: "none", background: "none", border: "none", cursor: "pointer",
              flexDirection: "column", gap: 6, zIndex: 1001 
            }}
            className="mob-show"
          >
            <div style={{ width: 24, height: 1.5, background: C.ink, transition: TRANSITIONS.fast, transform: open ? "rotate(45deg) translateY(5.5px)" : "none" }} />
            <div style={{ width: 24, height: 1.5, background: C.ink, transition: TRANSITIONS.fast, opacity: open ? 0 : 1 }} />
            <div style={{ width: 24, height: 1.5, background: C.ink, transition: TRANSITIONS.fast, transform: open ? "rotate(-45deg) translateY(-5.5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: C.white,
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px"
      }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: C.bg, zIndex: -1 }} />
        
        {NAV_LINKS.map((s, i) => (
          <button
            key={s}
            onClick={() => go(s)}
            style={{
              background: "none", border: "none", textAlign: "left",
              padding: "16px 0", cursor: "pointer",
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(20px)",
              transition: `all 0.4s ease ${0.1 + i * 0.05}s`
            }}
          >
            <span className="mono" style={{ fontSize: 10, color: C.gold, marginRight: 20 }}>0{i+1}</span>
            <span className="serif" style={{ fontSize: "clamp(32px, 8vw, 48px)", color: C.ink, textTransform: "capitalize", fontWeight: 500 }}>
              {s}
            </span>
          </button>
        ))}

        {/* Mobile-only Actions */}
        <div style={{ 
          marginTop: 40, 
          display: "flex", 
          flexDirection: "column", 
          gap: 20,
          opacity: open ? 1 : 0,
          transform: open ? "none" : "translateY(20px)",
          transition: "all 0.4s ease 0.5s"
        }} className="mob-only">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="mono" style={{ fontSize: 10, color: C.inkL }}>THEME</span>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              style={{
                width: 48, height: 28, borderRadius: 20, border: "none",
                background: theme === "light" ? "#E8E0D3" : "#2A3328",
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: theme === "light" ? "flex-start" : "flex-end",
                padding: "0 6px", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div style={{ fontSize: 14, color: theme === "light" ? "#495F4B" : "#D4A83A" }}>
                {theme === "light" ? "☀" : "☾"}
              </div>
            </button>
          </div>

          <a
            href="/cv.pdf"
            download
            style={{
              fontFamily: FONTS.serif, fontWeight: 600, fontSize: 14,
              color: "#FFFFFF",
              background: C.sage,
              borderRadius: 2, padding: "16px 32px",
              textDecoration: "none",
              textAlign: "center",
              boxShadow: SHADOWS.sm,
            }}
          >
            ↓ Download CV
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .mob-hide { display: none !important; }
          .mob-show { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .mob-only { display: none !important; }
        }
      `}</style>
    </>
  );
}
