"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], [data-cursor='pointer']")) {
        setHovering(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], [data-cursor='pointer']")) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-multiply"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: hovering ? "#C4622D" : "#2B1608",
          opacity: hovering ? 0 : 1,
          transition: "background-color 0.2s, opacity 0.2s",
          willChange: "transform",
        }}
      />
      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "#C4622D" : "#2B1608"}`,
          backgroundColor: hovering ? "rgba(196,98,45,0.08)" : "transparent",
          transform: hovering ? "scale(0.7)" : "scale(1)",
          transition: "border-color 0.25s, background-color 0.25s, transform 0.25s",
          willChange: "transform",
        }}
      />
    </>
  );
}
