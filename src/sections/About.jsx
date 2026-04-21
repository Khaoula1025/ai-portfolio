import { C } from "../styles/theme";
import { Reveal, Label } from "../components";

const INFO_ROWS = [
  ["Location",  "Agadir, Morocco"],
  ["Email",     "khaoula.esioudi@gmail.com"],
  ["Status",    "Open to opportunities"],
  ["Languages", "French · Arabic · English"],
];

function CodeCard({ theme }) {
  return (
    <div style={{
      background: theme === "light" ? C.shadow : "#2A3828", 
      borderRadius: 16, overflow: "hidden",
      animation: "floatCard 7s ease-in-out infinite",
      boxShadow: `0 40px 90px ${C.shadow}40, 0 0 0 1px ${C.gold}25`,
      transition: "background 0.3s ease"
    }}>
      {/* Gold trim */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${C.sage}, ${C.gold}, ${theme === "light" ? "#D4AF37" : "#E8C05A"}, ${C.gold}, ${C.olive})` }} />
      {/* Window bar */}
      <div style={{ background: `${C.sage}20`, padding: "11px 20px", borderBottom: `1px solid ${C.gold}18`, display: "flex", alignItems: "center", gap: 8 }}>
        {[C.gold, C.goldL, theme === "light" ? "#D4AF37" : "#E8C05A"].map((col, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: col, opacity: .7 }} />
        ))}
        <span className="mono" style={{ fontSize: 10, color: theme === "light" ? "rgba(255,255,255,0.4)" : "rgba(232,228,220,0.4)", marginLeft: 8 }}>khaoula.ts</span>
      </div>
      {/* Code */}
      <pre style={{ padding: "26px 28px", fontSize: 12.5, lineHeight: 1.9, fontFamily: "'DM Mono','JetBrains Mono',monospace", overflowX: "auto", color: theme === "light" ? "rgba(255,255,255,0.7)" : "rgba(232,228,220,0.7)" }}>
{`  `}<span style={{ color: theme === "light" ? "#D4AF37" : "#E8C05A" }}>const</span>{` khaoula = {\n`}
{`    `}<span style={{ color: C.moss }}>role</span>{`: `}<span style={{ color: C.goldL }}>"Full-Stack & AI Dev"</span>{`,\n`}
{`    `}<span style={{ color: C.moss }}>focus</span>{`: [\n`}
{`      `}<span style={{ color: theme === "light" ? "#D4AF37" : "#E8C05A" }}>"RAG Pipelines"</span>{`,\n`}
{`      `}<span style={{ color: theme === "light" ? "#D4AF37" : "#E8C05A" }}>"Computer Vision"</span>{`,\n`}
{`      `}<span style={{ color: theme === "light" ? "#D4AF37" : "#E8C05A" }}>"MLOps"</span>{`,\n`}
{`    ],\n`}
{`    `}<span style={{ color: C.moss }}>stack</span>{`: [`}<span style={{ color: C.goldL }}>"FastAPI"</span>{`, `}<span style={{ color: C.goldL }}>"React"</span>{`],\n`}
{`    `}<span style={{ color: C.moss }}>openTo</span>{`: `}<span style={{ color: "#6ee7b7" }}>true</span>{`,\n`}
{`  }`}
      </pre>
    </div>
  );
}

export default function About({ theme }) {
  return (
    <section id="about" style={{ background: C.bg2, transition: "background 0.3s ease" }}>
      <div className="wrap">
        <div className="two-col about-grid" style={{ display: "grid", gap: 80, alignItems: "center" }}>
          {/* Left */}
          <div>
            <Reveal>
              <Label>About me</Label>
              <h2 className="serif" style={{ fontSize: "clamp(38px, 5vw, 62px)", fontWeight: 600, color: C.ink, lineHeight: 1.1, marginBottom: 24 }}>
                I work where<br /><em style={{ color: C.sage }}>AI meets craft.</em>
              </h2>
            </Reveal>
            <Reveal delay={.1}>
              <p className="serif" style={{ fontSize: 19, fontWeight: 500, fontStyle: "italic", color: C.sage, lineHeight: 1.85, marginBottom: 18 }}>
                Graduate of Simplon Maghreb × JobInTech's AI Bootcamp and ISTA (OFPPT) in Digital Development. I build production-grade AI systems from training to deployment.
              </p>
            </Reveal>
            <Reveal delay={.15}>
              <p style={{ fontSize: 15, color: C.inkM, lineHeight: 1.85, marginBottom: 36 }}>
                My work covers the full pipeline: React & Next.js frontends, FastAPI & Laravel backends, ML models (RAG, CV, NLP), and cloud-native DevOps infrastructure.
              </p>
            </Reveal>
            <Reveal delay={.2}>
              <div>
                {INFO_ROWS.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", gap: 20, padding: "11px 0", borderBottom: `1px solid ${C.bg3}` }}>
                    <span className="mono" style={{ fontSize: 9, color: C.gold, minWidth: 72, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 600 }}>{k}</span>
                    <span style={{ fontSize: 14, color: C.ink, fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <Reveal delay={.18} from="right">
            <CodeCard theme={theme} />
          </Reveal>
        </div>
      </div>
      <style>{`
        .about-grid { grid-template-columns: 1.1fr 0.9fr; }
        @media (max-width: 1024px) {
          .about-grid { gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
