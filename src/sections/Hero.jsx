import { useState, useEffect, useRef } from "react";
import { C, FONTS, SHADOWS, TRANSITIONS } from "../styles/theme";
import { useTypewriter, useMagnetic } from "../hooks";

export default function Hero({ theme }) {
  const [ready, setReady] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 100); }, []);
  const typed = useTypewriter("Full-Stack & AI Developer", 40, ready);

  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  useMagnetic(btnRef1, 0.2);
  useMagnetic(btnRef2, 0.2);
  useMagnetic(btnRef3, 0.2);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        paddingTop: 100, 
        background: C.bg, 
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* ... Intelligence Grid ... */}
      <div style={{
        position: "absolute", inset: 0, opacity: .4,
        backgroundImage: `
          linear-gradient(to right, ${C.sage}0a 1px, transparent 1px),
          linear-gradient(to bottom, ${C.sage}0a 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px", pointerEvents: "none",
      }} />
      
      <div style={{
        position: "absolute", top: "15%", right: "5%", width: "30vw", height: "1px",
        background: `linear-gradient(to right, transparent, ${C.gold}40)`, opacity: .6
      }} />
      <div style={{
        position: "absolute", top: "15%", right: "5%", width: "1px", height: "40vh",
        background: `linear-gradient(to bottom, ${C.gold}40, transparent)`, opacity: .6
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }} className="two-col">
          
          <div>
            {/* ... Status Badge ... */}
            {/* Main Title */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ overflow: "hidden" }}>
                <h1 className="serif" style={{ 
                  fontSize: "clamp(80px, 12vw, 160px)", 
                  fontWeight: 600, 
                  lineHeight: 0.85, 
                  letterSpacing: "-.04em", 
                  color: C.ink,
                  animation: "splitReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) both",
                  animationDelay: "0.4s"
                }}>
                  Khaoula
                </h1>
              </div>
              <div style={{ overflow: "hidden", marginTop: -10 }}>
                <h1 className="serif" style={{ 
                  fontSize: "clamp(80px, 12vw, 160px)", 
                  fontWeight: 600, 
                  lineHeight: 0.85, 
                  fontStyle: "italic",
                  letterSpacing: "-.04em",
                  color: "transparent", 
                  WebkitTextStroke: `1.5px ${C.sage}`,
                  animation: "splitReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) both",
                  animationDelay: "0.55s"
                }}>
                  Esioudi
                </h1>
              </div>
            </div>

            {/* Role & Typewriter */}
            <div style={{ animation: "fadeUp 1.2s ease both", animationDelay: "0.8s", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 1, background: C.gold }} />
                <span className="mono" style={{ fontSize: 14, color: C.sage, letterSpacing: ".14em", fontWeight: 600 }}>
                  {typed}<span style={{ animation: "blink 1s step-end infinite", color: C.gold }}>|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div style={{ animation: "fadeUp 1.2s ease both", animationDelay: "0.95s" }}>
              <p className="serif" style={{ 
                fontSize: 19, 
                fontWeight: 500, 
                color: C.sage, 
                maxWidth: 540, 
                lineHeight: 1.85, 
                marginBottom: 56,
                fontStyle: "italic" 
              }}>
                Architecting intelligent systems where data meets design. 
                Full-stack precision with an AI-first mindset.
              </p>
            </div>

            {/* Actions */}
            <div style={{ 
              animation: "fadeUp 1.2s ease both", 
              animationDelay: "1.1s", 
              display: "flex", 
              gap: 16, 
              alignItems: "center",
              flexWrap: "wrap"
            }}>
              <div ref={btnRef1} style={{ transition: "transform 0.1s ease-out" }}>
                <button
                  onClick={() => go("projects")}
                  style={{
                    background: C.sage, color: C.white,
                    border: "none", borderRadius: 2, padding: "18px 36px", fontSize: 15,
                    fontFamily: FONTS.serif, fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: SHADOWS.md, transition: TRANSITIONS.smooth,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.shadow; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = C.sage; e.currentTarget.style.transform = "none"; }}
                >
                  Explore Work
                </button>
              </div>
            </div>
          </div>
          {/* Right Side: Stats Card */}
          <div 
            className="mob-hide" 
            style={{ 
              animation: "scaleIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) both", 
              animationDelay: "0.6s",
              position: "relative"
            }}
          >
            <div style={{
              padding: "40px 32px",
              background: C.card,
              border: theme === "dark" ? `1px solid ${C.gold}30` : `1px solid ${C.bg3}`,
              borderTop: `2px solid ${C.gold}`,
              boxShadow: SHADOWS.lg,
              borderRadius: 12,
              transition: TRANSITIONS.theme,
              animation: "cardFloat 6s ease-in-out infinite"
            }}>
              {/* Stats Row */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
                {[
                  { n: "07", l: "AI Projects" },
                  { n: "03+", l: "Years Exp" },
                  { n: "02", l: "Bootcamps" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div className="serif" style={{ fontSize: 32, fontWeight: 600, color: C.ink, marginBottom: 4 }}>{s.n}</div>
                    <div className="mono" style={{ fontSize: 8, color: C.inkL, textTransform: "uppercase", letterSpacing: ".1em" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div style={{ height: 1, background: C.bg3, width: "100%", marginBottom: 32, opacity: 0.5 }} />

              {/* Info Rows */}
              {[
                { label: "Currently Building", value: "RAG Chatbot @ Calliep" },
                { label: "Last Shipped", value: "SmartStay Intelligence · 2026" },
                { label: "Open To", value: "AI Roles · Full-Stack · Remote" },
              ].map((row, i) => (
                <div key={i} style={{ marginBottom: i === 2 ? 0 : 20 }}>
                  <div className="mono" style={{ fontSize: 9, color: C.gold, textTransform: "uppercase", letterSpacing: ".15em", marginBottom: 6 }}>
                    {row.label}
                  </div>
                  <div style={{ fontSize: 13, color: C.ink, fontFamily: FONTS.body, fontWeight: 500 }}>
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulseGreen {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 768px) {
          .mob-hide { display: none !important; }
        }
      `}</style>
    </section>
  );
}
