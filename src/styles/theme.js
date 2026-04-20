/* ── Color Palette ────────────────────────────────────────── */
// These will be injected as CSS variables in App.jsx
export const THEMES = {
  light: {
    bg:      "#FAF7F2",
    bg2:     "#F2EDE4",
    bg3:     "#E8E0D3",
    card:    "#FFFFFF",
    ink:     "#1C1F1D",
    inkM:    "#3A3D3A",
    inkL:    "#9BA398",
    sage:    "#495F4B",
    olive:   "#5F735C",
    moss:    "#728A70",
    shadow:  "#3E4F40",
    gold:    "#B8922A",
    goldL:   "#B8922A", 
    goldS:   "#D4AF37",
    cream:   "#FAF7F2",
    white:   "#FFFFFF",
  },
  dark: {
    bg:      "#141A15",
    bg2:     "#1A2118",
    bg3:     "#243020",
    card:    "#1E2820",
    ink:     "#E8E4DC",
    inkM:    "#D1D5D1",
    inkL:    "#8A9688",
    sage:    "#6B8F6E",
    olive:   "#7A9477",
    moss:    "#8AAD88",
    shadow:  "#2A3828",
    gold:    "#D4A83A",
    goldL:   "#E8C05A",
    goldS:   "#F2D07A",
    cream:   "#141A15",
    white:   "#1E2820",
  }
};

export const C = {
  bg:      "var(--bg)",
  bg2:     "var(--bg2)",
  bg3:     "var(--bg3)",
  card:    "var(--card)",
  ink:     "var(--ink)",
  inkM:    "var(--inkM)",
  inkL:    "var(--inkL)",
  sage:    "var(--sage)",
  olive:   "var(--olive)",
  moss:    "var(--moss)",
  shadow:  "var(--shadow)",
  gold:    "var(--gold)",
  goldL:   "var(--goldL)",
  goldS:   "var(--goldS)",
  cream:   "var(--cream)",
  white:   "var(--white)",
};

export const FONTS = {
  serif: "'Playfair Display', serif",
  sans:  "'Inter', sans-serif",
  mono:  "'DM Mono', 'JetBrains Mono', monospace",
};

export const SHADOWS = {
  sm: "0 2px 4px rgba(62, 79, 64, 0.05)",
  md: "0 8px 16px rgba(62, 79, 64, 0.08)",
  lg: "0 16px 32px rgba(62, 79, 64, 0.12)",
  gold: "0 8px 24px rgba(184, 146, 42, 0.2)",
};

export const TRANSITIONS = {
  fast:   "all 0.2s ease",
  smooth: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  theme:  "background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s",
};

export const GLOBAL_CSS = (C) => `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
  
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { 
    background: ${C.bg}; 
    color: ${C.inkM}; 
    font-family: 'Inter', sans-serif; 
    font-size: 15px;
    line-height: 1.85;
    overflow-x: hidden; 
    -webkit-font-smoothing: antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 { font-weight: 600; color: ${C.ink}; }

  ::selection { background: ${C.gold}30; }
  
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${C.bg2}; }
  ::-webkit-scrollbar-thumb { background: ${C.sage}40; transition: background 0.3s; }
  ::-webkit-scrollbar-thumb:hover { background: ${C.sage}80; }

  section { padding: 140px 0; position: relative; }
  .wrap { max-width: 1200px; margin: 0 auto; padding: 0 60px; }
  
  .serif { font-family: 'Playfair Display', serif; }
  .mono  { font-family: 'DM Mono', 'JetBrains Mono', monospace; letter-spacing: 0.14em; }
  
  /* Luxury Animations */
  @keyframes splitReveal {
    0% { transform: translateY(100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes scaleIn {
    0% { transform: scale(1.05); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes fadeUp { 
    from { opacity:0; transform:translateY(30px); } 
    to { opacity:1; transform:translateY(0); } 
  }
  
  @keyframes blink     { 0%,100% { opacity:1; } 50% { opacity:0; } }
  @keyframes marquee   { from { transform:translateX(0); } to { transform:translateX(-50%); } }
  
  /* Utilities */
  .reveal { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
  .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.3); }

  @media (max-width: 768px) {
    .wrap { padding: 0 24px; }
    section { padding: 100px 0; }
    .mob-hide { display: none !important; }
    .two-col  { grid-template-columns: 1fr !important; }
  }
`;

