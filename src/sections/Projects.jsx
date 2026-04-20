import { useState } from "react";
import { C, SHADOWS, TRANSITIONS, FONTS } from "../styles/theme";
import { PROJECTS } from "../data";
import { Reveal, Label } from "../components";

function DeviceMockup({ title, accent }) {
  return (
    <div style={{
      width: "100%", height: 240, background: C.bg2, borderRadius: "4px 4px 0 0",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", border: `1px solid ${C.bg3}`,
      borderBottom: "none"
    }}>
      {/* Laptop Frame SVG */}
      <svg width="80%" height="70%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.9 }}>
        <rect x="10" y="10" width="380" height="210" rx="4" stroke={C.inkL} strokeWidth="2" />
        <path d="M5 225H395" stroke={C.inkL} strokeWidth="4" strokeLinecap="round" />
        <rect x="180" y="215" width="40" height="4" rx="2" fill={C.inkL} />
        {/* Screen with Accent Color */}
        <rect x="20" y="20" width="360" height="190" rx="2" fill={accent} opacity="0.12" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={C.ink} style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 600 }}>{title}</text>
      </svg>
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const displayedProjects = PROJECTS.slice(0, 6);

  return (
    <section id="projects" style={{ background: C.bg, padding: "100px 0" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Reveal><Label>Portfolio</Label></Reveal>
          <Reveal delay={.05}>
            <h2 className="serif" style={{ fontSize: "clamp(38px, 5vw, 62px)", fontWeight: 600, color: C.ink, marginTop: 12 }}>
              Case Studies & AI Implementations
            </h2>
          </Reveal>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap: 32,
          alignItems: "stretch"
        }} className="projects-grid">
          {displayedProjects.map((p, i) => (
            <div key={p.id} className="project-card-wrap" style={{ height: "100%" }}>
              <Reveal delay={i * 0.08} from="bottom">
                <div
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: C.white,
                    border: `1px solid ${hovered === p.id ? C.sage : C.bg3}`,
                    boxShadow: hovered === p.id ? `0 20px 40px ${C.sage}15` : SHADOWS.sm,
                    transform: hovered === p.id ? "translateY(-6px)" : "none",
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: 2
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <DeviceMockup title={p.title} accent={p.accent} />
                    <div style={{
                      position: "absolute", top: 15, right: 15,
                      background: "rgba(255,255,255,0.95)", backdropFilter: "blur(4px)",
                      padding: "4px 10px", borderRadius: 2, border: `1px solid ${C.bg3}`,
                      zIndex: 2
                    }}>
                      <span className="mono" style={{ fontSize: 9, color: C.ink, fontWeight: 600 }}>{p.year}</span>
                    </div>
                  </div>

                  <div style={{ padding: 40, flex: 1, display: "flex", flexDirection: "column" }}>
                    <div className="mono" style={{ fontSize: 9, color: C.gold, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>
                      {p.type}
                    </div>

                    <h3 className="serif" style={{ fontSize: 24, fontWeight: 600, color: C.ink, marginBottom: 16 }}>
                      {p.title}
                    </h3>

                    <p style={{ fontSize: 15, color: C.inkM, lineHeight: 1.85, marginBottom: 24, height: 84, overflow: "hidden", fontFamily: FONTS.body }}>
                      {p.desc}
                    </p>

                    <div style={{ marginBottom: 24 }}>
                      {p.metrics.map((m, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                          <div style={{ width: 4, height: 4, background: C.gold, borderRadius: "50%" }} />
                          <span className="mono" style={{ fontSize: 11, color: C.sage, fontWeight: 600, letterSpacing: ".14em" }}>{m}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                      {p.tags.map(tag => (
                        <span key={tag} className="mono" style={{
                          fontSize: 9, padding: "4px 10px", background: C.bg, 
                          color: C.sage, borderRadius: 2, border: `1px solid ${C.bg3}`, fontWeight: 600, letterSpacing: ".14em"
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ marginTop: "auto", textAlign: "right" }}>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 10,
                          padding: "12px 24px", border: `1px solid ${C.bg3}`,
                          borderRadius: 2, textDecoration: "none",
                          transition: TRANSITIONS.fast, color: C.ink,
                          background: "transparent"
                        }}
                        onMouseEnter={(e) => { 
                          e.currentTarget.style.borderColor = C.sage; 
                          e.currentTarget.style.background = C.bg2;
                        }}
                        onMouseLeave={(e) => { 
                          e.currentTarget.style.borderColor = C.bg3; 
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        <span className="mono" style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" }}>Source Code</span>
                        <span style={{ fontSize: 16, marginTop: -2 }}>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Discover More Button */}
        <div style={{ marginTop: 80, textAlign: "center" }}>
          <Reveal delay={0.4}>
            <a
              href="https://github.com/Khaoula1025"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "18px 48px",
                border: `1.5px solid ${C.sage}`,
                borderRadius: 2,
                color: C.sage,
                fontFamily: FONTS.mono,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
                background: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.sage;
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = C.sage;
              }}
            >
              Discover more on GitHub →
            </a>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
