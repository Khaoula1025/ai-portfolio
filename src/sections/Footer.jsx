import { C, FONTS, TRANSITIONS } from "../styles/theme";

export default function Footer({ theme }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const footerBg = theme === "light" ? "#3E4F40" : "#0E1410";
  const textColor = "rgba(245,240,232,0.65)";
  const labelColor = "#D4A83A";

  return (
    <footer style={{ 
      background: footerBg, 
      minHeight: 280, 
      padding: "56px 0 0 0",
      color: "#F5F0E8",
      transition: "background 0.3s ease"
    }}>
      <div className="wrap">
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: 40,
          marginBottom: 56
        }} className="two-col">
          
          {/* Left Column */}
          <div>
            <div className="serif" style={{ fontSize: 24, fontStyle: "italic", marginBottom: 4 }}>Khaoula Esioudi</div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: ".14em", color: "rgba(245,240,232,0.5)", marginBottom: 24 }}>
              FULL-STACK & AI DEVELOPER
            </div>
            <p style={{ 
              fontFamily: FONTS.body, fontSize: 14, lineHeight: 1.6, 
              color: "rgba(245,240,232,0.55)", maxWidth: 220 
            }}>
              Building intelligent systems where data meets design.
            </p>
          </div>

          {/* Center Column */}
          <div style={{ textAlign: "center" }}>
            <div className="mono" style={{ fontSize: 9, color: labelColor, letterSpacing: ".2em", marginBottom: 20 }}>
              NAVIGATION
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["about", "skills", "projects", "experience", "education", "contact"].map(id => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  style={{
                    background: "none", border: "none", padding: 0,
                    fontFamily: FONTS.body, fontSize: 13, color: textColor,
                    cursor: "pointer", transition: TRANSITIONS.fast,
                    textTransform: "capitalize"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = labelColor; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = textColor; }}
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ textAlign: "right" }}>
            <div className="mono" style={{ fontSize: 9, color: labelColor, letterSpacing: ".2em", marginBottom: 20 }}>
              CONNECT
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "GitHub ↗", href: "https://github.com/Khaoula1025" },
                { label: "LinkedIn ↗", href: "https://linkedin.com/in/k-esioudi" },
                { label: "Email ↗", href: "mailto:khaoula.esioudi@gmail.com" },
                { label: "↓ Download CV", href: "/cv.pdf", download: true },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: FONTS.body, fontSize: 13, color: textColor,
                    textDecoration: "none", transition: TRANSITIONS.fast
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = labelColor; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = textColor; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{ 
          borderTop: "1px solid rgba(245,240,232,0.1)", 
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div className="mono" style={{ fontSize: 9, color: "rgba(245,240,232,0.35)" }}>
            © 2026 KHAOULA ESIOUDI — AGADIR, MOROCCO
          </div>
          <div className="mono" style={{ fontSize: 9, color: "rgba(245,240,232,0.35)" }}>
            BUILT WITH REACT · DEPLOYED ON VERCEL
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .two-col { 
            grid-template-columns: 1fr !important; 
            text-align: left !important;
            gap: 48px !important;
          }
          .two-col > div { text-align: left !important; }
          .footer-bottom { 
            flex-direction: column !important; 
            gap: 12px !important; 
            align-items: flex-start !important; 
          }
        }
      `}</style>
    </footer>
  );
}
