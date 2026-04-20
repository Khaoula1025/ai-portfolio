import { useEffect, useRef, useState } from "react";

const LAYERS = [
  {
    num: "01",
    name: "Frontend",
    accent: "#6B8F6E",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vite"],
  },
  {
    num: "02",
    name: "Backend",
    accent: "#B8922A",
    skills: ["FastAPI", "Laravel", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    num: "03",
    name: "AI / ML",
    accent: "#D4A83A",
    skills: ["LangChain", "RAG", "LLMs", "XGBoost", "Prophet", "Scikit-learn", "PyTorch", "TensorFlow", "Keras", "OpenCV", "MLflow", "HuggingFace", "SHAP", "NumPy", "Pandas", "ChromaDB", "Evidently AI"],
  },
  {
    num: "04",
    name: "DevOps & Infra",
    accent: "#728A70",
    skills: ["Docker", "Kubernetes", "Airflow", "Terraform", "GitHub Actions", "Azure", "Vercel", "Linux", "Jupyter"],
  },
];

function Chip({ label, accent }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'DM Mono','JetBrains Mono',monospace",
        fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
        fontWeight: 600,
        color:      hov ? "#fff" : accent,
        background: hov ? accent : `${accent}0d`,
        border:     `1px solid ${accent}35`,
        borderRadius: 3, padding: "4px 11px",
        whiteSpace: "nowrap", cursor: "default",
        transition: "background .18s, color .18s",
      }}
    >{label}</span>
  );
}

function Layer({ layer, index, visible }) {
  const { num, name, accent, skills } = layer;

  const isFirst = index === 0;
  const isLast  = index === LAYERS.length - 1;

  const radius = isFirst
    ? "12px 12px 0 0"
    : isLast
    ? "0 0 12px 12px"
    : "0";

  return (
    <div
      style={{
        background: "#fff",
        border: "0.5px solid #E8E0D3",
        borderTop: index > 0 ? "none" : "0.5px solid #E8E0D3",
        borderRadius: radius,
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        minHeight: 72,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity .55s cubic-bezier(.16,1,.3,1) ${index * 0.08}s,
                     transform .55s cubic-bezier(.16,1,.3,1) ${index * 0.08}s,
                     box-shadow .25s`,
        position: "relative", zIndex: LAYERS.length - index,
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 4px 20px ${accent}18`; e.currentTarget.style.transform = "translateX(2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateX(0)"; }}
    >
      {/* Left label */}
      <div style={{
        padding: "20px 20px 20px 24px",
        borderRight: `2px solid ${accent}`,
        display: "flex", flexDirection: "column",
        justifyContent: "center", gap: 3,
      }}>
        <span style={{
          fontFamily: "'DM Mono','JetBrains Mono',monospace",
          fontSize: 10, letterSpacing: ".14em", color: accent,
          fontWeight: 600
        }}>{num}</span>
        <span style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 17, fontWeight: 600, color: "#1C1F1D",
        }}>{name}</span>
      </div>

      {/* Chips */}
      <div style={{
        padding: "18px 20px 18px 24px",
        display: "flex", flexWrap: "wrap",
        gap: 7, alignContent: "center",
      }}>
        {skills.map(s => <Chip key={s} label={s} accent={accent} />)}
      </div>
    </div>
  );
}

export default function SkillStack() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      border: "1px solid rgba(184,146,42,0.15)",
      borderRadius: 12,
      overflow: "hidden",
    }}>
      {LAYERS.map((layer, i) => (
        <Layer key={layer.num} layer={layer} index={i} visible={visible} />
      ))}
    </div>
  );
}
