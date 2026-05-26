"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error — dynamic tag with ref
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
