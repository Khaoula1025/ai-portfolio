import { C, SHADOWS, TRANSITIONS, FONTS } from "../styles/theme";
import { EXPERIENCES } from "../data";
import { Reveal, Label } from "../components";

export default function Experience({ theme }) {
  return (
    <section id="experience" style={{ background: C.bg2, padding: "100px 0", transition: "background 0.3s ease" }}>
      <div className="wrap">
        <div style={{ marginBottom: 80 }}>
          <Reveal><Label>Professional Journey</Label></Reveal>
          <Reveal delay={.05}>
            <h2 className="serif" style={{ fontSize: "clamp(38px, 5vw, 62px)", fontWeight: 600, color: C.ink, marginTop: 12 }}>
              Experience
            </h2>
          </Reveal>
        </div>

        <div style={{ position: "relative", maxWidth: 900 }}>
          {/* Vertical Timeline Line */}
          <div style={{ 
            position: "absolute", left: 180, top: 0, bottom: 0, width: 1, 
            background: `linear-gradient(to bottom, ${C.gold}00, ${C.gold} 10%, ${C.gold} 90%, ${C.gold}00)`,
          }} className="mob-hide" />

          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{ 
              display: "flex", 
              marginBottom: 48,
              position: "relative",
              gap: 40
            }} className="exp-row">
              
              {/* Period & Connector - Left Side */}
              <div style={{ width: 180, flexShrink: 0, textAlign: "right", position: "relative" }} className="mob-hide">
                <div className="mono" style={{ fontSize: 10, color: C.gold, letterSpacing: ".14em", textTransform: "uppercase", paddingTop: 32, fontWeight: 600 }}>
                  {exp.period}
                </div>
                
                {/* Connector Diamond */}
                <div style={{
                  position: "absolute", right: -20, top: 32, 
                  width: 10, height: 10, background: C.gold,
                  transform: "translateX(50%) rotate(45deg)",
                  zIndex: 2, border: `2px solid ${C.bg2}`
                }} />
              </div>

              {/* Card - Right Side */}
              <Reveal from="right" delay={i * 0.1}>
                <div style={{ 
                  flex: 1,
                  background: exp.isFlagship 
                    ? (theme === "light" ? "rgba(184,146,42,0.03)" : "rgba(212, 168, 58, 0.05)")
                    : C.white,
                  padding: "40px",
                  borderRadius: 2,
                  boxShadow: exp.isFlagship ? `0 20px 40px ${C.gold}10` : SHADOWS.sm,
                  border: exp.isFlagship ? `3px solid ${C.gold}` : `1px solid ${C.bg3}`,
                  borderLeft: exp.isFlagship ? `3px solid ${C.gold}` : `3px solid ${exp.accent}`,
                  textAlign: "left",
                  position: "relative",
                  transition: TRANSITIONS.smooth,
                }} className="full-width-mob">
                  
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    {/* Company Tag / Badge */}
                    <div style={{ 
                      display: "flex", alignItems: "center", gap: 10, 
                      background: C.bg, padding: "6px 12px", borderRadius: 2, border: `1px solid ${C.bg3}`
                    }}>
                      <span className="mono" style={{ fontSize: 10, color: C.ink, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".14em" }}>
                        {exp.company}
                      </span>
                    </div>

                    {exp.current && (
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ 
                          width: 6, height: 6, borderRadius: "50%", background: theme === "light" ? "#495F4B" : "#6B8F6E",
                          boxShadow: theme === "light" ? "0 0 10px #495F4B" : "0 0 10px #6B8F6E",
                          animation: "pulseGreen 2s infinite"
                        }} />
                        <span className="mono" style={{ fontSize: 9, color: theme === "light" ? "#495F4B" : "#6B8F6E", fontWeight: 600 }}>PRESENT</span>
                      </div>
                    )}
                  </div>
                  
                  <div style={{ marginBottom: 20 }}>
                    <h3 className="serif" style={{ fontSize: 22, fontWeight: 600, color: C.ink, marginBottom: 8 }}>
                      {exp.role}
                    </h3>
                    <p className="serif" style={{ fontSize: 19, fontStyle: "italic", color: C.sage, fontWeight: 500 }}>
                      {exp.quote}
                    </p>
                  </div>
                  
                  <p style={{ fontSize: 14, color: C.inkM, lineHeight: 1.7, marginBottom: 24, fontFamily: FONTS.body }}>
                    {exp.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {exp.tags.map(tag => (
                      <span key={tag} className="mono" style={{
                        fontSize: 9, padding: "4px 10px", background: C.bg, 
                        color: C.sage, borderRadius: 2, border: `1px solid ${C.bg3}`
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseGreen {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 768px) {
          .full-width-mob { width: 100% !important; padding: 30px !important; }
          .mob-hide { display: none !important; }
          .exp-row { gap: 0 !important; }
        }
      `}</style>
    </section>
  );
}
