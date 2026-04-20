import { useState, useEffect } from "react";
import { C, THEMES, GLOBAL_CSS, TRANSITIONS } from "./styles/theme";
import { useMousePos, useActiveSection, useCursorType } from "./hooks";
import { CursorGlow, ScrollProgress, Label } from "./components";

import Navbar       from "./sections/Navbar";
import Hero         from "./sections/Hero";
import MarqueeBand  from "./sections/MarqueeBand";
import About        from "./sections/About";
import SkillStack   from "./sections/SkillStack";
import Projects     from "./sections/Projects";
import Experience   from "./sections/Experience";
import Education    from "./sections/Education";
import Contact      from "./sections/Contact";
import Footer       from "./sections/Footer";

const SECTION_IDS = ["home", "about", "skills", "projects", "experience", "education", "contact"];


export default function App() {
  const mouse  = useMousePos();
  const active = useActiveSection(SECTION_IDS);
  const [cursorType] = useCursorType();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    const colors = THEMES[theme];
    Object.entries(colors).forEach(([k, v]) => {
      root.style.setProperty(`--${k}`, v);
    });
  }, [theme]);

  useEffect(() => {
    document.title = "Khaoula Esioudi | Full-Stack & AI Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional portfolio of Khaoula Esioudi - Full-Stack & AI Developer specializing in RAG, MLOps, and intelligent systems.");
    }
  }, []);

  return (
    <div style={{ background: C.bg, color: C.ink, transition: TRANSITIONS.theme, minHeight: "100vh" }}>
      <style>{`
        ${GLOBAL_CSS(C)}
        * { transition: ${TRANSITIONS.theme}; }
        html { scroll-behavior: smooth; }
      `}</style>
      <ScrollProgress />
      <CursorGlow x={mouse.x} y={mouse.y} type={cursorType} />

      <Navbar active={active} theme={theme} setTheme={setTheme} />

      <main>
        <Hero theme={theme} />
        <MarqueeBand theme={theme} />
        <About theme={theme} />
        
        <section id="skills" style={{ background: C.bg, padding: '140px 0' }}>
          <div className="wrap">
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 52 }}>
              <div>
                <Label>Expertise</Label>
                <h2 className="serif" style={{ fontSize:'clamp(38px, 5vw, 62px)', fontWeight: 600, color: C.ink, marginBottom: 0 }}>
                  Skills & Tools
                </h2>
              </div>
              <span className="mono" style={{ fontSize: 10, color: C.gold, letterSpacing: '.14em', fontWeight: 600 }}>
                4 LAYERS · 40+ TECHNOLOGIES
              </span>
            </div>
            <SkillStack />
          </div>
        </section>

        <Projects />
        <Experience theme={theme} />
        <Education />
        <Contact />
      </main>

      <Footer theme={theme} />
    </div>
  );
}
