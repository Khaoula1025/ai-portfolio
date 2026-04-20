import { C, FONTS } from "../styles/theme";

const ITEMS = [
  "RAG Pipelines", "Computer Vision", "MLOps", "Full Stack",
  "LLMs", "FastAPI", "Next.js", "Laravel", "XGBoost", "Docker",
];

export default function MarqueeBand() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #3E4F40, #495F4B)",
      overflow: "hidden", padding: "16px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)", 
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      position: "relative", zIndex: 10
    }}>
      <div style={{ display: "flex", animation: "marquee 40s linear infinite", width: "max-content" }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            {ITEMS.map((item, j) => (
              <div key={j} style={{ display: "flex", alignItems: "center" }}>
                <span className="mono" style={{ 
                  fontSize: 12, color: "rgba(255,255,255,0.85)", 
                  letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 500,
                  fontFamily: FONTS.mono
                }}>
                  {item}
                </span>
                <span style={{ margin: "0 40px", color: "#D4A83A", fontSize: 14 }}>✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
