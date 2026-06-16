import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;

    const xTo = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
    const dx = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
    const dy = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX); yTo(e.clientY);
      dx(e.clientX); dy(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const view = t.closest<HTMLElement>("[data-cursor='view']");
      const hover = t.closest<HTMLElement>("a, button, [data-cursor='hover']");
      ring.classList.remove("is-hover", "is-view");
      if (view) { ring.classList.add("is-view"); label.textContent = view.dataset.cursorLabel || "View"; }
      else if (hover) { ring.classList.add("is-hover"); }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pf-cursor-dot" aria-hidden />
      <div ref={ringRef} className="pf-cursor-ring" aria-hidden>
        <span ref={labelRef} className="label">View</span>
      </div>
    </>
  );
}