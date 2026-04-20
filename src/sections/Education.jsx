import { C } from "../styles/theme";
import { EDUCATION, CERTIFICATIONS } from "../data";
import { Reveal, Label, Divider } from "../components";

function CertCard({ cert }) {
  return (
    <div
      style={{
        background: C.white, border: `1px solid ${C.bg3}`,
        borderLeft: `3px solid ${C.gold}`, borderRadius: 8, padding: "20px 22px",
        transition: "transform .28s, box-shadow .28s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${C.gold}15`; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{
        width: 20, height: 20, borderRadius: "50%",
        background: `${C.gold}18`, border: `1px solid ${C.gold}30`,
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12,
      }}>
        <span style={{ fontSize: 10, color: C.gold }}>✓</span>
      </div>
      <p className="serif" style={{ fontSize: 14, fontWeight: 600, color: C.ink, marginBottom: 5, lineHeight: 1.35 }}>
        {cert.name}
      </p>
      <p className="mono" style={{ fontSize: 9, color: C.gold, letterSpacing: ".14em", fontWeight: 600 }}>
        {cert.issuer} · {cert.date}
      </p>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" style={{ background: C.bg2 }}>
      <div className="wrap">
        <Reveal><Label>Formation</Label></Reveal>
        <Reveal delay={.05}>
          <h2 className="serif" style={{ fontSize: "clamp(38px, 5vw, 62px)", fontWeight: 600, color: C.ink, marginBottom: 56 }}>
            Education
          </h2>
        </Reveal>

        {EDUCATION.map((ed, i) => (
          <Reveal key={ed.school} delay={i * .07}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, padding: "22px 0", borderTop: `1px solid ${C.bg3}` }}>
              <div>
                <h3 className="serif" style={{ fontSize: 19, fontWeight: 600, color: C.ink, marginBottom: 4 }}>{ed.school}</h3>
                <p className="mono" style={{ fontSize: 11, color: C.sage, letterSpacing: ".14em", fontWeight: 600 }}>{ed.degree}</p>
              </div>
              <span className="mono" style={{ fontSize: 9, color: C.gold, whiteSpace: "nowrap", paddingTop: 4, letterSpacing: ".14em", fontWeight: 600 }}>{ed.period}</span>
            </div>
          </Reveal>
        ))}

        <Divider my={52} />

        <Reveal><Label>Certifications</Label></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 12, marginTop: 24 }}>
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.name} delay={i * .07}>
              <CertCard cert={cert} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={.3}>
          <p className="mono" style={{ marginTop: 20, fontSize: 9, color: C.inkL, letterSpacing: ".1em" }}>
            All credentials verified on{" "}
            <a href="https://linkedin.com/in/k-esioudi" target="_blank" rel="noreferrer"
              style={{ color: C.gold, borderBottom: `1px solid ${C.gold}40` }}>
              LinkedIn ↗
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
