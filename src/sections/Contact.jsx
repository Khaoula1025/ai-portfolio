import { useState } from "react";
import { C } from "../styles/theme";
import { Reveal, Label, Divider } from "../components";

const LINKS = [
  { l: "GitHub",                    h: "https://github.com/Khaoula1025" },
  { l: "LinkedIn",                  h: "https://linkedin.com/in/k-esioudi" },
  { l: "khaoula.esioudi@gmail.com", h: "mailto:khaoula.esioudi@gmail.com" },
];

function ContactForm() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1100);
  };

  const inputStyle = {
    width: "100%", background: C.white,
    border: `1px solid ${C.bg3}`, borderRadius: 6,
    padding: "13px 16px", fontSize: 14, color: C.ink,
    fontFamily: "'Inter',sans-serif", outline: "none",
    transition: "border-color .25s, box-shadow .25s",
  };

  const focusInput  = (e) => { e.target.style.borderColor = `${C.sage}60`; e.target.style.boxShadow = `0 0 0 3px ${C.sage}10`; };
  const blurInput   = (e) => { e.target.style.borderColor = C.bg3; e.target.style.boxShadow = "none"; };

  if (sent) {
    return (
      <div style={{
        background: `${C.sage}08`, border: `1px solid ${C.sage}30`,
        borderTop: `3px solid ${C.sage}`, borderRadius: 12, padding: "44px", textAlign: "center",
      }}>
        <div className="serif" style={{ fontSize: 44, color: C.sage, fontFamily: "'Playfair Display',serif", fontStyle: "italic", marginBottom: 10 }}>✦</div>
        <p className="serif" style={{ fontSize: 18, fontWeight: 500, color: C.sage, fontFamily: "'Playfair Display',serif" }}>Message sent.</p>
        <p className="mono"  style={{ fontSize: 11, color: C.inkM, marginTop: 6, letterSpacing: ".06em" }}>I'll get back to you within 24h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[["name", "text", "Your name"], ["email", "email", "your@email.com"]].map(([n, t, p]) => (
          <input
            key={n} type={t} placeholder={p} required
            value={form[n]}
            onChange={(e) => setForm((s) => ({ ...s, [n]: e.target.value }))}
            style={inputStyle}
            onFocus={focusInput} onBlur={blurInput}
          />
        ))}
      </div>
      <textarea
        placeholder="Tell me about your project..." required rows={5}
        value={form.message}
        onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
        style={{ ...inputStyle, resize: "vertical" }}
        onFocus={focusInput} onBlur={blurInput}
      />
      <button
        type="submit" disabled={loading}
        style={{
          background: loading ? "transparent" : `linear-gradient(135deg, ${C.sage}, ${C.shadow})`,
          color: loading ? C.sage : C.white,
          border: loading ? `1.5px solid ${C.sage}40` : "none",
          borderRadius: 6, padding: "13px 32px", fontSize: 14,
          fontFamily: "'Playfair Display',serif", fontWeight: 600, letterSpacing: ".06em",
          cursor: loading ? "not-allowed" : "pointer", alignSelf: "flex-start",
          boxShadow: loading ? "none" : `0 4px 20px ${C.sage}30`,
          transition: "all .25s",
        }}
        onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 32px ${C.sage}45`; } }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = loading ? "none" : `0 4px 20px ${C.sage}30`; }}
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: C.bg }}>
      <div className="wrap" style={{ maxWidth: 680 }}>
        <Reveal><Label>Get in touch</Label></Reveal>
        <Reveal delay={.05}>
          <h2 className="serif" style={{ fontSize: "clamp(38px, 5vw, 62px)", fontWeight: 600, color: C.ink, lineHeight: 1.0, letterSpacing: "-.02em", marginBottom: 18 }}>
            Let's build<br /><em style={{ color: C.sage }}>something real.</em>
          </h2>
        </Reveal>
        <Reveal delay={.1}>
          <p className="serif" style={{ fontSize: 19, fontWeight: 500, fontStyle: "italic", color: C.sage, lineHeight: 1.85, marginBottom: 52 }}>
            Open to AI developer roles, full-stack positions, and ambitious projects. I respond within 24h.
          </p>
        </Reveal>

        <Reveal delay={.15}><ContactForm /></Reveal>

        <Reveal delay={.2}>
          <Divider my={44} />
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {LINKS.map(({ l, h }) => (
              <a
                key={l} href={h} target="_blank" rel="noreferrer"
                className="mono"
                style={{ fontSize: 10, color: C.ink, letterSpacing: ".14em", fontWeight: 600, borderBottom: `1px solid ${C.bg3}`, paddingBottom: 2, transition: "color .2s, border-color .2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = C.sage; e.currentTarget.style.borderColor = `${C.sage}60`; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = C.ink; e.currentTarget.style.borderColor = C.bg3; }}
              >
                {l} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
