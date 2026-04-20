import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export function useMousePos() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let frameId;
    const handler = (e) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handler);
    return () => {
      window.removeEventListener("mousemove", handler);
      cancelAnimationFrame(frameId);
    };
  }, []);
  return pos;
}

export function useCursorType() {
  const [type, setType] = useState("default"); // default, hover, project
  
  useEffect(() => {
    const onEnter = () => setType("hover");
    const onLeave = () => setType("default");
    
    const interactives = document.querySelectorAll("button, a, .interactive");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    
    return () => {
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
  
  return [type, setType];
}

export function useMagnetic(ref, strength = 0.4) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      
      if (distance < width * 1.5) {
        el.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`;
      } else {
        el.style.transform = "";
      }
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [ref, strength]);
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 110;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && y >= el.offsetTop) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
}

export function useTypewriter(text, speed = 44, start = false) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    if (!start) return;
    let i = 0;
    const timer = setInterval(() => {
      setDisplay(text.slice(0, ++i));
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [start, text, speed]);
  return display;
}
