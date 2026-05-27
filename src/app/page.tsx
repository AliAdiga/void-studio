"use client";

import { useEffect } from "react";

export default function Home() {
  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      setTimeout(() => {
        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";
      }, 60);
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mobile nav toggle
  const toggleMenu = () => {
    const links = document.querySelector(".nav-links") as HTMLElement;
    if (!links) return;
    const isOpen = links.style.display === "flex";
    links.style.display = isOpen ? "none" : "flex";
    links.style.flexDirection = "column";
    links.style.position = "fixed";
    links.style.top = "80px";
    links.style.right = "24px";
    links.style.background = "#111";
    links.style.padding = "20px 28px";
    links.style.gap = "20px";
    links.style.zIndex = "99";
  };

  const ticker1 = [
    "Brand Identity", "Motion Design", "Web Experiences",
    "Art Direction", "Packaging", "Typography",
    "Editorial Design", "3D & Visual FX",
  ];

  const ticker2 = [
    "Awwwards Nominee 2023", "Behance Feature",
    "Communication Arts 2024", "D&AD Pencil Shortlist",
    "CSS Design Awards", "Brand New: Notable", "FWA Site of the Day",
  ];

  const services = [
    {
      num: "01", icon: "◈", title: "Brand Identity",
      desc: "From naming and strategy to logo systems, color, and full visual identities that cut through noise.",
      tags: ["Strategy", "Logo", "Guidelines", "Naming"],
    },
    {
      num: "02", icon: "⬡", title: "Digital Experience",
      desc: "Websites and web apps engineered for performance, beauty, and conversion — from IA to final pixel.",
      tags: ["UX/UI", "React", "Webflow", "Motion"],
    },
    {
      num: "03", icon: "▲", title: "Motion Design",
      desc: "Animations, title sequences, social content, and kinetic brand assets that live and breathe.",
      tags: ["After Effects", "3D", "Reels"],
    },
    {
      num: "04", icon: "❒", title: "Editorial & Print",
      desc: "Annual reports, magazines, books, and collateral that honor the craft of physical design.",
      tags: ["Layout", "Print", "Typography"],
    },
    {
      num: "05", icon: "⬤", title: "Art Direction",
      desc: "Shoot direction, casting, and creative leadership for campaigns that tell unforgettable stories.",
      tags: ["Photography", "Campaign", "Styling"],
    },
    {
      num: "06", icon: "✦", title: "Packaging",
      desc: "Structural and graphic design that transforms the unboxing moment into a brand experience.",
      tags: ["Structural", "3D Mockups", "Print-ready"],
    },
  ];

  const process = [
    { n: "01", name: "Discovery",  desc: "Deep listening. Understanding your goals, market, and what makes you irreplaceable." },
    { n: "02", name: "Strategy",   desc: "Positioning frameworks, audience insights, and a clear creative brief." },
    { n: "03", name: "Creation",   desc: "Multiple bold directions, rapid iteration, and complete attention to craft." },
    { n: "04", name: "Refine",     desc: "Collaborative review cycles until every element earns its place." },
    { n: "05", name: "Launch",     desc: "Full handoff with brand guidelines, assets, and ongoing partnership." },
  ];

  return (
    <>
      {/* CURSOR */}
      <div id="cursor" />
      <div id="cursor-ring" />

      {/* NAV */}
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#" className="nav-logo" aria-label="VOID Studio Home">VOID</a>
        <ul className="nav-links" role="list">
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav-menu-btn" aria-label="Open menu" onClick={toggleMenu}>
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true" />
        <p className="hero-label">Creative &amp; Design Studio — Est. 2019</p>
        <h1 className="hero-title">
          We Build<br /><em>Bold</em><br />Worlds.
        </h1>
        <div className="hero-sub-row">
          <p className="hero-desc">
            Brand identities, digital experiences, and visual systems for companies that refuse to be ordinary.
          </p>
          <a href="#work" className="hero-cta">View Our Work ↗</a>
        </div>
        <div className="hero-scroll" aria-hidden="true">Scroll</div>
      </section>

      {/* TICKER 1 */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker1, ...ticker1].map((item, i) => (
            <span key={i} className="ticker-item">
              {item} <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="about section-pad" id="about">
        <p className="section-label reveal">About the Studio</p>
        <div className="about-grid">
          <div className="reveal reveal-delay-1">
            <h2 className="about-heading">Design is<br /><span>Power</span>.</h2>
          </div>
          <div>
            <p className="about-text reveal reveal-delay-2">
              VOID is an independent creative studio obsessed with the intersection of form, function, and cultural impact. We partner with visionary brands to craft identities that are unmistakable, campaigns that move people, and digital experiences that set the bar.
            </p>
            <p className="about-text reveal reveal-delay-3">
              We don&apos;t follow trends. We manufacture them.
            </p>
            <div className="about-stats">
              {[
                { num: "140+", label: "Projects Delivered" },
                { num: "38",   label: "Global Clients" },
                { num: "12",   label: "Design Awards" },
              ].map((s, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section-pad">
        <div className="work-header reveal">
          <h2 className="work-title">Selected<br />Work</h2>
          <a href="#" className="work-all">All Projects →</a>
        </div>

        <div className="portfolio-grid">
          {/* Project 1 — Orb */}
          <article className="p-item reveal">
            <div className="p-thumb" style={{ minHeight: 480, background: "linear-gradient(135deg,#1a1a1a,#0d0d0d)", flexDirection: "column", gap: 16 }}>
              <div style={{ width: 120, height: 120, border: "1px solid #CAFF00", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: 42, color: "#CAFF00", letterSpacing: 2 }}>ORB</span>
              </div>
              <div style={{ width: 200, height: 1, background: "rgba(202,255,0,0.2)" }} />
              <span style={{ fontSize: 11, letterSpacing: 4, color: "rgba(202,255,0,0.4)", textTransform: "uppercase" }}>Rebrand 2024</span>
            </div>
            <div className="p-overlay">
              <div className="p-tag">Brand Identity</div>
              <div className="p-name">Orb Technologies</div>
            </div>
          </article>

          {/* Project 2 — Blaze */}
          <article className="p-item reveal reveal-delay-1">
            <div className="p-thumb" style={{ minHeight: 220, background: "#1c1008", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", width: 200, height: 200, background: "radial-gradient(circle,#ff6b35 0%,transparent 70%)", opacity: 0.3 }} />
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: 64, color: "#ff6b35", letterSpacing: -2, position: "relative", zIndex: 1 }}>BLAZE</span>
            </div>
            <div className="p-overlay">
              <div className="p-tag">Motion + Visual Identity</div>
              <div className="p-name">Blaze Energy Drinks</div>
            </div>
          </article>

          {/* Project 3 — LUMÉ */}
          <article className="p-item reveal reveal-delay-2">
            <div className="p-thumb" style={{ minHeight: 220, background: "#0a0a1a", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "linear-gradient(to top,rgba(100,80,255,0.15),transparent)" }} />
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 10, letterSpacing: 4, color: "rgba(150,140,255,0.7)", textTransform: "uppercase", marginBottom: 12 }}>Luxury Fashion</div>
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: 48, color: "#a09aff", letterSpacing: 6 }}>LUMÉ</div>
              </div>
            </div>
            <div className="p-overlay">
              <div className="p-tag">E-Commerce + Brand</div>
              <div className="p-name">LUMÉ Fashion House</div>
            </div>
          </article>

          {/* Project 4 — NxtSys */}
          <article className="p-item reveal reveal-delay-1">
            <div className="p-thumb" style={{ minHeight: 200, background: "#0d1a0d", position: "relative", overflow: "hidden" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(0,200,80,0.3)", position: "absolute", inset: 0, padding: 12, lineHeight: 1.4, overflow: "hidden" }}>
                01010110 01001111 01001001 01000100 00100000 01010011 01010100 01010101 01000100 01001001 01001111
              </div>
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: 36, color: "#00c850", letterSpacing: 3, position: "relative", zIndex: 1 }}>NXT/SYS</span>
            </div>
            <div className="p-overlay">
              <div className="p-tag">Web App + Dashboard</div>
              <div className="p-name">NxtSys Analytics</div>
            </div>
          </article>

          {/* Project 5 — Aurum */}
          <article className="p-item reveal reveal-delay-2">
            <div className="p-thumb" style={{ minHeight: 260, background: "#1a0d0a", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", width: 320, height: 320, border: "40px solid rgba(220,180,120,0.08)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", width: 220, height: 220, border: "1px solid rgba(220,180,120,0.15)", borderRadius: "50%" }} />
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: 56, color: "#dbb470", letterSpacing: 4, position: "relative", zIndex: 1 }}>AURUM</span>
            </div>
            <div className="p-overlay">
              <div className="p-tag">Packaging + Print</div>
              <div className="p-name">Aurum Spirits Co.</div>
            </div>
          </article>
        </div>
      </section>

      {/* TICKER 2 */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track reverse">
          {[...ticker2, ...ticker2].map((item, i) => (
            <span key={i} className="ticker-item">
              {item} <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="services section-pad" id="services">
        <p className="section-label reveal">What We Do</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="service-num">{s.num}</div>
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => <span key={t} className="service-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-pad">
        <p className="section-label reveal">How We Work</p>
        <div>
          {process.map((p, i) => (
            <div key={i} className={`process-item reveal reveal-delay-${i}`}>
              <div className="process-n">{p.n} /</div>
              <div className="process-name">{p.name}</div>
              <div className="process-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band" id="contact">
        <h2>Let&apos;s Make<br />Something<br />Wild.</h2>
        <p>We take on a limited number of projects each year. If you have something worth building, let&apos;s talk.</p>
        <a href="mailto:hello@voidstudio.com" className="cta-btn">Start a Project ↗</a>
      </div>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="footer-logo">VOID<span>.</span></div>
          <div className="footer-copy">© 2025 VOID Studio. All rights reserved.</div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Behance">Behance</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Dribbble">Dribbble</a>
        </div>
      </footer>
    </>
  );
}