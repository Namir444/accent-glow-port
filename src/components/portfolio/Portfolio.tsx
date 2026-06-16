import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomCursor } from "./CustomCursor";
import { HeroBackground } from "./HeroBackground";
import { MagneticButton } from "./MagneticButton";
import { projects } from "@/data/projects";
import portrait from "@/assets/portrait.jpg";

gsap.registerPlugin(ScrollTrigger);

const skills = ["React", "TypeScript", "Three.js", "GSAP", "WebGL", "Node", "Figma", "Motion", "GLSL", "Next.js"];

export function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.to(".pf-hero h1 .row span", {
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from(".pf-hero-meta > *", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out", delay: 0.4, stagger: 0.1 });
      gsap.from(".pf-hero .tagline, .pf-magnet-wrap", { opacity: 0, y: 30, duration: 1, ease: "power3.out", delay: 1.2, stagger: 0.15 });

      // Portrait parallax
      gsap.to(".pf-portrait", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: ".pf-about", start: "top bottom", end: "bottom top", scrub: true },
      });

      // Section heads
      gsap.utils.toArray<HTMLElement>(".pf-reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Project cards
      gsap.utils.toArray<HTMLElement>(".pf-card").forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="pf-root">
      <CustomCursor />

      <nav className="pf-nav" aria-label="Primary">
        <a href="#top" className="brand">SOL / KAI</a>
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="top" className="pf-hero">
        <HeroBackground />
        <div className="pf-hero-grid" />
        <div className="pf-container pf-hero-inner">
          <div className="pf-hero-meta">
            <span className="pf-mono">Independent designer & developer · 2014—2026</span>
            <span className="pf-mono">Based in Lisbon · Available Q3</span>
          </div>
          <h1>
            <span className="row"><span>Crafting</span></span>
            <span className="row"><span>digital&nbsp;<span className="accent">objects</span></span></span>
            <span className="row"><span>with intent.</span></span>
          </h1>
          <p className="tagline">
            I design and engineer expressive interfaces for ambitious brands —
            blending typography, motion, and code into experiences worth remembering.
          </p>
          <MagneticButton href="#work">View Work</MagneticButton>
        </div>
        <div className="pf-scrollhint pf-mono">
          Scroll
          <div className="line" />
        </div>
      </header>

      <main>
        <section id="about" className="pf-section pf-about">
          <div className="pf-container">
            <div className="pf-section-head pf-reveal">
              <span className="num">01 — About</span>
              <h2 className="title">A studio of one.</h2>
            </div>
            <div className="pf-about-grid">
              <div className="pf-portrait-wrap pf-reveal">
                <img src={portrait} alt="Portrait of the designer" className="pf-portrait" loading="lazy" width={896} height={1152} />
              </div>
              <div className="pf-about-text pf-reveal">
                <h3>I'm a designer-engineer who treats every pixel like it owes me rent.</h3>
                <p>
                  For the past decade I've shipped interfaces for fintech rebels,
                  fashion houses, and a handful of stubborn founders. My favourite
                  briefs are the ones where brand, product, and code refuse to be
                  separate conversations.
                </p>
                <p>
                  When I'm not in Figma or VS Code, I'm probably arguing about kerning,
                  drinking espresso, or building synthesizers I'll never finish.
                </p>
                <div className="pf-skills" role="list">
                  {skills.map((s) => (
                    <span key={s} role="listitem" className="pf-pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="pf-section">
          <div className="pf-container">
            <div className="pf-section-head pf-reveal">
              <span className="num">02 — Selected Work</span>
              <h2 className="title">Recent obsessions.</h2>
            </div>
            <div className="pf-projects">
              {projects.map((p, i) => (
                <a
                  key={p.id}
                  href={p.link}
                  className={`pf-card ${p.layout}`}
                  data-cursor="view"
                  data-cursor-label="View"
                  aria-label={`${p.title} — ${p.description}`}
                >
                  <div className="frame">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className="meta">
                    <h4>{p.title}</h4>
                    <span className="year">{String(i + 1).padStart(2, "0")} / {p.year}</span>
                  </div>
                  <p className="desc">{p.description}</p>
                  <div className="stack">
                    {p.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pf-contact">
          <div className="pf-container">
            <span className="eyebrow pf-reveal">03 — Contact</span>
            <h2 className="pf-reveal">
              Let's <span className="italic">talk.</span>
            </h2>
            <div className="pf-reveal">
              <a className="pf-email" href="mailto:hello@solkai.studio">hello@solkai.studio</a>
            </div>
            <div className="pf-footer-row">
              <span>© 2026 Sol Kai Studio</span>
              <div style={{ display: "flex", gap: 24 }}>
                <a href="#">Instagram</a>
                <a href="#">Read.cv</a>
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}