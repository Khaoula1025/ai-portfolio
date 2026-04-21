import { useState } from "react";
import { C, SHADOWS, TRANSITIONS, FONTS } from "../styles/theme";
import { PROJECTS } from "../data";
import { Reveal, Label } from "../components";

function DeviceMockup({ title, accent, image }) {
  return (
    <div style={{
      width: "100%", height: 320, background: C.bg2, borderRadius: "4px 4px 0 0",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", border: `1px solid ${C.bg3}`,
      borderBottom: "none"
    }}>
      {image ? (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
           <img 
            src={image} 
            alt={title} 
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{
            display: "none", width: "100%", height: "100%", alignItems: "center", justifyContent: "center",
            background: `linear-gradient(135deg, ${accent}22 0%, ${accent}44 100%)`,
            position: "relative", overflow: "hidden"
          }}>
            {/* Abstract Procedural Pattern */}
            <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.3 }}>
              <defs>
                <filter id={`f${title.replace(/\s+/g, '')}`}>
                  <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="transparent" />
              <circle cx="50%" cy="50%" r="40%" fill={accent} opacity="0.2" filter={`url(#f${title.replace(/\s+/g, '')})`} />
              <circle cx="20%" cy="30%" r="20%" fill={accent} opacity="0.1" filter={`url(#f${title.replace(/\s+/g, '')})`} />
            </svg>
            <span style={{ 
              fontFamily: FONTS.serif, fontSize: 24, fontWeight: 600, color: C.ink, 
              position: "relative", zIndex: 2, textAlign: "center", padding: 20 
            }}>
              {title}
            </span>
          </div>
          <div style={{
            position: "absolute", inset: 0, 
            background: `linear-gradient(to bottom, transparent 60%, ${C.white} 100%)`,
            zIndex: 1
          }} />
        </div>
      ) : (
        <div style={{ 
          width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
          background: `linear-gradient(135deg, ${accent}11 0%, ${accent}22 100%)`,
          position: "relative", overflow: "hidden"
        }}>
           <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.4 }}>
              <defs>
                <filter id={`f-fallback-${title.replace(/\s+/g, '')}`}>
                  <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="transparent" />
              <circle cx="60%" cy="40%" r="35%" fill={accent} opacity="0.15" filter={`url(#f-fallback-${title.replace(/\s+/g, '')})`} />
              <circle cx="30%" cy="70%" r="25%" fill={accent} opacity="0.1" filter={`url(#f-fallback-${title.replace(/\s+/g, '')})`} />
            </svg>
            <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
              <div className="mono" style={{ fontSize: 10, color: accent, marginBottom: 10, letterSpacing: ".2em" }}>PROJECT VISUAL</div>
              <h4 className="serif" style={{ fontSize: 22, color: C.ink }}>{title}</h4>
            </div>
        </div>
      )}
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
                    <DeviceMockup title={p.title} accent={p.accent} image={p.image} />
                    <div style={{
                      position: "absolute", top: 15, right: 15,
                      background: "rgba(255,255,255,0.95)", backdropFilter: "blur(4px)",
                      padding: "4px 10px", borderRadius: 2, border: `1px solid ${C.bg3}`,
                      zIndex: 2
                    }}>
                      <span className="mono" style={{ fontSize: 9, color: C.ink, fontWeight: 600 }}>{p.year}</span>
                    </div>
                  </div>

                  <div style={{ padding: 40, flex: 1, display: "flex", flexDirection: "column" }} className="project-card-content">
                    <div className="mono" style={{ fontSize: 9, color: C.gold, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>
                      {p.type}
                    </div>

                    <h3 className="serif project-title" style={{ fontSize: 24, fontWeight: 600, color: C.ink, marginBottom: 16 }}>
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
          .projects-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
        @media (max-width: 768px) {
          .mob-hide { display: none !important; }
          #home { padding-top: 80px; }
          .two-col { gap: 20px !important; }
          .project-card-content { padding: 30px 24px !important; }
          .project-title { fontSize: 20px !important; }
        }
      `}</style>
    </section>
  );
}
