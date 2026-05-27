"use client";
import { useEffect, useState, useCallback } from "react";

/* ── particles (stable, no random) ── */
const PARTICLES = [
  {id:0,left:"12%",bottom:"8%",size:3,delay:"0s",dur:"2.8s",color:"#CAFF00"},
  {id:1,left:"28%",bottom:"15%",size:4,delay:"0.4s",dur:"3.2s",color:"#ff6020"},
  {id:2,left:"45%",bottom:"5%",size:2,delay:"0.9s",dur:"2.4s",color:"#ff9500"},
  {id:3,left:"62%",bottom:"20%",size:5,delay:"1.3s",dur:"3.6s",color:"#CAFF00"},
  {id:4,left:"78%",bottom:"10%",size:3,delay:"0.2s",dur:"2.9s",color:"#ff6020"},
  {id:5,left:"20%",bottom:"25%",size:2,delay:"1.7s",dur:"3.1s",color:"#ff9500"},
  {id:6,left:"55%",bottom:"30%",size:4,delay:"0.6s",dur:"2.6s",color:"#CAFF00"},
  {id:7,left:"70%",bottom:"18%",size:3,delay:"2.1s",dur:"3.4s",color:"#ff6020"},
  {id:8,left:"35%",bottom:"12%",size:2,delay:"0.8s",dur:"2.7s",color:"#ff9500"},
  {id:9,left:"88%",bottom:"22%",size:4,delay:"1.5s",dur:"3.0s",color:"#CAFF00"},
];

type Project = {
  id: number; category: string; tag: string; name: string;
  desc: string; deliverables: string[]; result: string;
};

const PROJECTS: Project[] = [
  { id:1, category:"rebrand", tag:"Brand Identity", name:"Orb Technologies",
    desc:"A complete visual overhaul for a fast-growing AI infrastructure company. We replaced their dated corporate identity with a minimal, forward-thinking system built around a single powerful mark.",
    deliverables:["Brand Strategy","Logo System","Color & Typography","Brand Guidelines","Stationery","Digital Assets"],
    result:"Orb raised $40M Series B within 6 months of launch. Their new identity was featured in Brand New's Notable projects for 2024." },
  { id:2, category:"ads", tag:"Ad Campaign", name:"VOLT Energy — Launch",
    desc:"Full 360° launch campaign for VOLT Energy's market entry. We developed the brand voice, visual system, and all advertising creative from scratch — positioning VOLT as the premium choice for performance-focused consumers.",
    deliverables:["Campaign Strategy","Social Ads","OOH Creative","Motion Graphics","Packaging Design","Influencer Kit"],
    result:"VOLT hit $2.1M in sales in their first quarter. The Instagram launch reel reached 8.4M views organically within 48 hours." },
  { id:3, category:"rebrand", tag:"E-Commerce + Brand", name:"LUMÉ Fashion House",
    desc:"Repositioning a mid-market fashion brand as a serious luxury contender. The rebrand touched every customer touchpoint — from the logo and packaging to the e-commerce experience and photography direction.",
    deliverables:["Rebrand Strategy","Logo & Identity","E-Commerce UX","Art Direction","Photography Guidelines","Campaign Creative"],
    result:"Average order value increased 68% post-rebrand. LUMÉ was picked up by Net-a-Porter within 3 months of launch." },
  { id:4, category:"web", tag:"Web App + Dashboard", name:"NxtSys Analytics",
    desc:"End-to-end product design for a B2B data analytics platform serving 200+ enterprise clients. We designed the full product UI, marketing site, and onboarding flow.",
    deliverables:["UX Research","Product Design","Design System","Marketing Site","Onboarding Flow","Dark/Light Themes"],
    result:"User activation rate improved 41% after redesign. NxtSys was acquired by a Fortune 500 company 8 months post-launch." },
  { id:5, category:"ads", tag:"Packaging + Print", name:"Aurum Spirits Co.",
    desc:"Luxury packaging design and brand refresh for an award-winning craft spirits distillery. The brief: make it look like it belongs on the top shelf of the world's best bars.",
    deliverables:["Packaging Design","Label System","Bottle Shape","POS Materials","Gift Packaging","Brand Refresh"],
    result:"Aurum's premium range sold out within 10 days of re-launch. Stocked in 140+ premium venues across 12 countries." },
  { id:6, category:"ads", tag:"Social Campaign", name:"CRYO Energy — Ice Series",
    desc:"A complete social media campaign for CRYO's limited Ice Series drop. We created 60+ assets across Instagram, TikTok, and YouTube — all unified by a single visual concept: frozen in motion.",
    deliverables:["Social Strategy","60+ Campaign Assets","Motion Graphics","TikTok Content","YouTube Pre-roll","Influencer Briefing"],
    result:"The Ice Series sold out in 72 hours. The campaign generated 14.2M impressions and 2.8M video views across platforms." },
];

/* ── card visual components ── */
function OrbVisual() {
  return (
    <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,#0d0d0d,#111)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      {/* grid pattern */}
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(202,255,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(202,255,0,0.03) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
      {/* outer ring */}
      <div style={{position:"absolute",width:260,height:260,border:"1px solid rgba(202,255,0,0.15)",borderRadius:"50%"}} />
      <div style={{position:"absolute",width:190,height:190,border:"1px solid rgba(202,255,0,0.1)",borderRadius:"50%"}} />
      {/* orbiting dot */}
      <div style={{position:"absolute",width:260,height:260,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:10,height:10,borderRadius:"50%",background:"var(--acid)",boxShadow:"0 0 16px #CAFF00",animation:"orbit 4s linear infinite"}} />
      </div>
      {/* center logo */}
      <div style={{textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{width:90,height:90,border:"1px solid rgba(202,255,0,0.5)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",boxShadow:"0 0 30px rgba(202,255,0,0.1)"}}>
          <span style={{fontFamily:"var(--font-bebas)",fontSize:28,color:"#CAFF00",letterSpacing:2}}>ORB</span>
        </div>
        <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:4,color:"rgba(202,255,0,0.4)",textTransform:"uppercase"}}>REBRAND 2024</div>
      </div>
    </div>
  );
}

function VoltVisual() {
  return (
    <div style={{position:"absolute",inset:0,background:"#020410",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 40%,rgba(40,80,255,0.3) 0%,rgba(0,20,120,0.1) 40%,transparent 70%)"}} />
      {/* electric lines */}
      {[20,40,60,80].map((t,i)=>(
        <div key={i} style={{position:"absolute",top:`${t}%`,left:0,right:0,height:1,background:`rgba(64,128,255,${0.05+i*0.04})`,animation:`electric ${1.5+i*0.3}s ease-in-out ${i*0.2}s infinite`}} />
      ))}
      <div style={{textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:4,color:"rgba(80,140,255,0.7)",textTransform:"uppercase",marginBottom:12}}>Electrify Your Game</div>
        <div style={{fontFamily:"var(--font-bebas)",fontSize:100,color:"#4080ff",lineHeight:0.85,letterSpacing:-3,textShadow:"0 0 40px rgba(64,128,255,0.8),0 0 80px rgba(64,128,255,0.3)",animation:"neon-pulse 2.5s ease-in-out infinite"}}>VOLT</div>
        <div style={{width:80,height:2,background:"linear-gradient(90deg,transparent,#4080ff,transparent)",margin:"16px auto"}} />
        <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:4,color:"rgba(64,128,255,0.5)",textTransform:"uppercase"}}>Energy Drink</div>
      </div>
      <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"rgba(64,128,255,0.3)",animation:"scan-line 3s linear infinite"}} />
    </div>
  );
}

function LumeVisual() {
  return (
    <div style={{position:"absolute",inset:0,background:"#08060f",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 60%,rgba(130,100,255,0.2) 0%,transparent 60%)"}} />
      <div style={{position:"absolute",top:0,left:0,right:0,bottom:"50%",background:"linear-gradient(to bottom,rgba(160,130,255,0.05),transparent)"}} />
      <div style={{textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:6,color:"rgba(160,140,255,0.5)",textTransform:"uppercase",marginBottom:16}}>Luxury Fashion</div>
        <div style={{fontFamily:"var(--font-bebas)",fontSize:88,color:"#c4b8ff",letterSpacing:8,lineHeight:0.9,textShadow:"0 0 40px rgba(160,130,255,0.4)"}}>LUMÉ</div>
        <div style={{width:120,height:1,background:"linear-gradient(90deg,transparent,rgba(160,140,255,0.6),transparent)",margin:"20px auto"}} />
        <div style={{display:"flex",gap:10,justifyContent:"center"}}>
          {["#c4b8ff","#7060cc","#F0EDE6","#1a1526","#8070aa"].map(c=>(
            <div key={c} style={{width:20,height:20,borderRadius:"50%",background:c,border:"1px solid rgba(255,255,255,0.1)"}} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NxtSysVisual() {
  return (
    <div style={{position:"absolute",inset:0,background:"#060f06",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <div style={{fontFamily:"var(--font-mono)",fontSize:8,color:"rgba(0,200,80,0.12)",position:"absolute",inset:0,padding:16,lineHeight:1.8,overflow:"hidden",wordBreak:"break-all",letterSpacing:2}}>
        01010110 01001111 01001001 01000100 00100000 01010011 01010100 01010101 01000100 01001001 01001111 01010110 01001111 01001001 01000100 00100000 01010011 01010100 01010101 01000100
      </div>
      <div style={{position:"relative",zIndex:1,textAlign:"center",width:"70%"}}>
        {/* animated bars */}
        <div style={{display:"flex",gap:6,justifyContent:"center",alignItems:"flex-end",height:80,marginBottom:20}}>
          {[60,85,45,100,70,55,90,75].map((h,i)=>(
            <div key={i} style={{flex:1,height:`${h}%`,background:`rgba(0,200,80,${0.3+i*0.07})`,transformOrigin:"bottom",animation:`bar-grow .8s ease ${i*0.1}s both`,borderRadius:"2px 2px 0 0"}} />
          ))}
        </div>
        <div style={{fontFamily:"var(--font-bebas)",fontSize:44,color:"#00c850",letterSpacing:3,textShadow:"0 0 20px rgba(0,200,80,0.4)"}}>NXT/SYS</div>
        <div style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:3,color:"rgba(0,200,80,0.4)",textTransform:"uppercase",marginTop:8}}>Analytics Platform</div>
      </div>
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"rgba(0,200,80,0.15)",animation:"scan-line 4s linear infinite"}} />
    </div>
  );
}

function AurumVisual() {
  return (
    <div style={{position:"absolute",inset:0,background:"#0c0702",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      {/* concentric rings */}
      {[200,160,120,80].map((s,i)=>(
        <div key={i} style={{position:"absolute",width:s,height:s,border:`${i===0?"1px":"1px"} solid rgba(219,180,112,${0.06+i*0.06})`,borderRadius:"50%",animation:`spin-slow ${20+i*8}s linear ${i%2===0?"":"reverse"} infinite`}} />
      ))}
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%,rgba(180,130,50,0.15) 0%,transparent 60%)",animation:"gold-shimmer 4s ease-in-out infinite"}} />
      <div style={{textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:5,color:"rgba(219,180,112,0.45)",textTransform:"uppercase",marginBottom:14}}>Premium Spirits</div>
        <div style={{fontFamily:"var(--font-bebas)",fontSize:80,color:"#dbb470",letterSpacing:4,textShadow:"0 0 30px rgba(219,180,112,0.4),0 0 60px rgba(219,180,112,0.15)"}}>AURUM</div>
        <div style={{width:60,height:1,background:"rgba(219,180,112,0.4)",margin:"12px auto"}} />
        <div style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:4,color:"rgba(219,180,112,0.35)",textTransform:"uppercase"}}>Est. 1987</div>
      </div>
    </div>
  );
}

function CryoVisual() {
  return (
    <div style={{position:"absolute",inset:0,background:"#020810",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 40%,rgba(0,180,255,0.2) 0%,rgba(0,80,160,0.08) 40%,transparent 70%)"}} />
      {/* ice crystal lines */}
      {[0,45,90,135].map((angle,i)=>(
        <div key={i} style={{position:"absolute",width:2,height:180,background:`linear-gradient(to top,transparent,rgba(100,220,255,${0.08+i*0.04}),transparent)`,transform:`rotate(${angle}deg)`,animation:`ice-expand .8s ease ${i*0.15}s both`}} />
      ))}
      <div style={{textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:5,color:"rgba(100,220,255,0.6)",textTransform:"uppercase",marginBottom:16}}>Stay Frozen</div>
        <div style={{fontFamily:"var(--font-bebas)",fontSize:100,color:"#8eecff",lineHeight:0.85,letterSpacing:-2,textShadow:"0 0 30px rgba(100,220,255,0.7),0 0 60px rgba(100,220,255,0.3)"}}>CRYO</div>
        <div style={{display:"flex",gap:12,justifyContent:"center",marginTop:20}}>
          {[18,14,10,14,18].map((s,i)=>(
            <div key={i} style={{width:s,height:s,borderRadius:"50%",background:"rgba(100,220,255,0.15)",border:"1px solid rgba(100,220,255,0.4)"}} />
          ))}
        </div>
        <div style={{fontFamily:"var(--font-mono)",fontSize:8,letterSpacing:4,color:"rgba(100,220,255,0.4)",textTransform:"uppercase",marginTop:16}}>Ice Series · Limited</div>
      </div>
    </div>
  );
}

const CARD_VISUALS: Record<number, React.ReactNode> = {
  1: <OrbVisual />, 2: <VoltVisual />, 3: <LumeVisual />,
  4: <NxtSysVisual />, 5: <AurumVisual />, 6: <CryoVisual />,
};

const MODAL_VISUALS: Record<number, React.ReactNode> = {
  1: <OrbVisual />, 2: <VoltVisual />, 3: <LumeVisual />,
  4: <NxtSysVisual />, 5: <AurumVisual />, 6: <CryoVisual />,
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring   = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;
    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"; cursor.style.top  = e.clientY + "px";
      setTimeout(() => { ring.style.left = e.clientX + "px"; ring.style.top = e.clientY + "px"; }, 60);
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [activeFilter]);

  // close modal on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  const toggleMenu = () => {
    const links = document.querySelector(".nav-links") as HTMLElement;
    if (!links) return;
    const open = links.style.display === "flex";
    Object.assign(links.style, { display: open?"none":"flex", flexDirection:"column", position:"fixed", top:"80px", right:"24px", background:"#111", padding:"20px 28px", gap:"20px", zIndex:"99" });
  };

  const ticker1 = ["Brand Identity","Motion Design","Web Experiences","Art Direction","Ad Campaigns","Typography","Packaging","3D & Visual FX"];
  const ticker2 = ["Awwwards Nominee 2023","Behance Feature","Communication Arts 2024","D&AD Pencil Shortlist","CSS Design Awards","Brand New: Notable","FWA Site of the Day"];

  const filters = [
    { key:"all",     label:"All Work" },
    { key:"ads",     label:"Ads & Campaigns" },
    { key:"rebrand", label:"Rebrands" },
    { key:"web",     label:"Web" },
  ];

  const filtered = activeFilter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);
  const showFeatured = activeFilter === "all" || activeFilter === "ads" || activeFilter === "rebrand";
  const showBlaze    = activeFilter === "all" || activeFilter === "ads";
  const showNexus    = activeFilter === "all" || activeFilter === "rebrand";

  const services = [
    { num:"01", icon:"◈", title:"Brand Identity",    desc:"From naming and strategy to logo systems, color, and full visual identities that cut through noise.", tags:["Strategy","Logo","Guidelines","Naming"] },
    { num:"02", icon:"⬡", title:"Digital Experience", desc:"Websites and web apps engineered for performance, beauty, and conversion.", tags:["UX/UI","React","Webflow","Motion"] },
    { num:"03", icon:"▲", title:"Motion Design",      desc:"Animations, title sequences, social content, and kinetic brand assets that live and breathe.", tags:["After Effects","3D","Reels"] },
    { num:"04", icon:"❒", title:"Ad Campaigns",       desc:"Full-funnel advertising creative — social, OOH, digital, and print — built to convert and be remembered.", tags:["Social Ads","OOH","Strategy","Copy"] },
    { num:"05", icon:"⬤", title:"Art Direction",      desc:"Shoot direction, casting, and creative leadership for campaigns that tell unforgettable stories.", tags:["Photography","Campaign","Styling"] },
    { num:"06", icon:"✦", title:"Packaging",          desc:"Structural and graphic design that transforms the unboxing moment into a brand experience.", tags:["Structural","3D Mockups","Print-ready"] },
  ];

  const process = [
    { n:"01", name:"Discovery", desc:"Deep listening. Understanding your goals, market, and what makes you irreplaceable." },
    { n:"02", name:"Strategy",  desc:"Positioning frameworks, audience insights, and a clear creative brief." },
    { n:"03", name:"Creation",  desc:"Multiple bold directions, rapid iteration, and complete attention to craft." },
    { n:"04", name:"Refine",    desc:"Collaborative review cycles until every element earns its place." },
    { n:"05", name:"Launch",    desc:"Full handoff with brand guidelines, assets, and ongoing partnership." },
  ];

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            <div className="modal-visual">{MODAL_VISUALS[selectedProject.id]}</div>
            <div className="modal-body">
              <div className="modal-tag">{selectedProject.tag}</div>
              <h2 className="modal-title">{selectedProject.name}</h2>
              <p className="modal-desc">{selectedProject.desc}</p>
              <div className="modal-deliverables">
                {selectedProject.deliverables.map(d => <span key={d} className="modal-chip">{d}</span>)}
              </div>
              <div className="modal-result">
                <div className="modal-result-label">The Outcome</div>
                <p className="modal-result-text">{selectedProject.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav className="main-nav">
        <a href="#" className="nav-logo">VOID</a>
        <ul className="nav-links" role="list">
          <li><a href="#work">Work</a></li>
          <li><a href="#motion">Motion</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav-menu-btn" onClick={toggleMenu}><span /><span /><span /></button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <p className="hero-label">Creative &amp; Design Studio — Est. 2019</p>
        <h1 className="hero-title">We Build<br /><em>Bold</em><br />Worlds.</h1>
        <div className="hero-sub-row">
          <p className="hero-desc">Brand identities, ad campaigns, and digital experiences for companies that refuse to be ordinary.</p>
          <a href="#work" className="hero-cta">View Our Work ↗</a>
        </div>
        <div className="hero-scroll" aria-hidden="true">Scroll</div>
      </section>

      {/* TICKER 1 */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker1,...ticker1].map((item,i)=>(
            <span key={i} className="ticker-item">{item} <span className="ticker-dot">✦</span></span>
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
            <p className="about-text reveal reveal-delay-2">VOID is an independent creative studio obsessed with the intersection of form, function, and cultural impact. We craft brand identities, run advertising campaigns, and build digital experiences that cut through noise.</p>
            <p className="about-text reveal reveal-delay-3">We don&apos;t follow trends. We manufacture them.</p>
            <div className="about-stats">
              {[{num:"140+",label:"Projects Delivered"},{num:"38",label:"Global Clients"},{num:"12",label:"Design Awards"}].map((s,i)=>(
                <div key={i} className={`reveal reveal-delay-${i+1}`}>
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

        <div className="filter-tabs reveal">
          {filters.map(f=>(
            <button key={f.key} className={`filter-tab${activeFilter===f.key?" active":""}`} onClick={()=>setActiveFilter(f.key)}>{f.label}</button>
          ))}
        </div>

        {/* Featured cards */}
        {showFeatured && (
          <div className="featured-grid">
            {showBlaze && (
              <div className="featured-card blaze-card reveal" onClick={()=>setSelectedProject(PROJECTS[1])}>
                <div className="blaze-glow-1" />
                <div className="blaze-glow-2" />
                <div className="blaze-word">BLAZE</div>
                <div className="blaze-particles">
                  {PARTICLES.map(p=>(
                    <div key={p.id} className="particle" style={{left:p.left,bottom:p.bottom,width:p.size,height:p.size,animationDelay:p.delay,animationDuration:p.dur,background:p.color}} />
                  ))}
                </div>
                <div className="blaze-can">
                  <div className="blaze-can-top" />
                  <div className="blaze-can-label">
                    <div className="blaze-can-name">BLAZE</div>
                    <div className="blaze-can-sub">Energy</div>
                    <div style={{width:30,height:1,background:"rgba(255,255,255,0.3)",margin:"4px 0"}} />
                    <div className="blaze-can-sub">300ml</div>
                  </div>
                </div>
                <div className="featured-info">
                  <div className="featured-tag">Energy Drink — Full Rebrand + Ad Campaign</div>
                  <div className="featured-name">BLAZE Energy</div>
                  <div className="featured-sub">Brand identity · Packaging · Social ads · OOH · Motion</div>
                  <span className="featured-arrow">View Case Study ↗</span>
                </div>
              </div>
            )}
            {showNexus && (
              <div className="featured-card rebrand-card reveal reveal-delay-1" onClick={()=>setSelectedProject(PROJECTS[0])}>
                <div className="rebrand-split">
                  <div className="rebrand-before">
                    <div style={{width:52,height:52,border:"2px solid #444",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <span style={{fontFamily:"var(--font-mono)",fontSize:9,color:"#555",letterSpacing:1}}>NXS</span>
                    </div>
                    <div className="rebrand-before-logo">NEXUS</div>
                    <div className="rebrand-before-sub">Corp. Solutions Ltd.</div>
                    <div style={{display:"flex",gap:6,marginTop:8}}>
                      {["#444","#666","#888"].map(c=><div key={c} style={{width:18,height:18,borderRadius:"50%",background:c}} />)}
                    </div>
                  </div>
                  <div className="rebrand-divider"><div className="rebrand-divider-label">Before / After</div></div>
                  <div className="rebrand-after">
                    <div className="rebrand-after-glow" />
                    <div className="rebrand-year">2024</div>
                    <div style={{width:52,height:52,border:"1px solid rgba(202,255,0,0.4)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1}}>
                      <span style={{fontFamily:"var(--font-bebas)",fontSize:18,color:"var(--acid)",letterSpacing:1}}>NX</span>
                    </div>
                    <div className="rebrand-after-logo">NEXUS</div>
                    <div className="rebrand-after-sub">The New Identity</div>
                    <div style={{display:"flex",gap:6,position:"relative",zIndex:1}}>
                      {["#CAFF00","#080808","#F0EDE6","#1A1A1A"].map(c=><div key={c} style={{width:22,height:22,borderRadius:"50%",background:c,border:"1px solid rgba(255,255,255,0.1)"}} />)}
                    </div>
                  </div>
                </div>
                <div className="featured-info" style={{position:"relative",zIndex:2}}>
                  <div className="featured-tag">Corporate — Complete Rebrand</div>
                  <div className="featured-name">Nexus Corp</div>
                  <div className="featured-sub">Brand strategy · Visual identity · Guidelines · Rollout</div>
                  <span className="featured-arrow">View Case Study ↗</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Portfolio grid */}
        <div className="portfolio-grid">
          {filtered.map((p,i)=>(
            <article key={p.id} className={`p-item reveal${i>0?` reveal-delay-${Math.min(i,4)}`:""}`} onClick={()=>setSelectedProject(p)}>
              <div className="p-thumb">{CARD_VISUALS[p.id]}</div>
              <div className="p-click-hint">↗</div>
              <div className="p-overlay">
                <div className="p-tag">{p.tag}</div>
                <div className="p-name">{p.name}</div>
                <div className="p-view">View Project ↗</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TICKER 2 */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track reverse">
          {[...ticker2,...ticker2].map((item,i)=>(
            <span key={i} className="ticker-item">{item} <span className="ticker-dot">✦</span></span>
          ))}
        </div>
      </div>

      {/* MOTION & ADS */}
      <section className="reel-section section-pad" id="motion">
        <div className="reel-header reveal">
          <h2 className="reel-heading">Motion &amp;<br /><span>Advertising</span></h2>
          <p className="reel-desc">We shoot, animate, and launch campaigns that move product — across social, OOH, digital, and broadcast.</p>
        </div>

        <div className="reel-grid">
          {/* Frame 1 — BLAZE Social */}
          <div className="reel-frame reveal">
            <div className="reel-frame-bg">
              <div style={{position:"absolute",inset:0,background:"#060200"}} />
              <div style={{position:"absolute",width:"100%",height:"100%",background:"radial-gradient(ellipse at 50% 30%,rgba(255,80,10,0.5) 0%,rgba(200,40,0,0.2) 35%,transparent 65%)",animation:"pulse-glow 3s ease-in-out infinite"}} />
              <div style={{position:"absolute",width:"100%",height:"100%",background:"radial-gradient(ellipse at 80% 80%,rgba(255,160,0,0.3) 0%,transparent 50%)",animation:"pulse-glow 2.5s ease-in-out 1s infinite"}} />
              <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,zIndex:2}}>
                <div style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:4,color:"rgba(255,150,60,0.8)",textTransform:"uppercase"}}>New Drop ✦</div>
                <div style={{fontFamily:"var(--font-bebas)",fontSize:96,color:"#ff5010",lineHeight:0.82,letterSpacing:-3,textShadow:"0 0 50px rgba(255,80,10,0.8),0 0 100px rgba(255,40,0,0.4)",animation:"flicker 7s ease-in-out infinite",textAlign:"center"}}>BLAZE<br/>FIRE</div>
                <div style={{width:70,height:2,background:"linear-gradient(90deg,transparent,#ff6020,transparent)"}} />
                <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:3,color:"rgba(255,150,60,0.7)",textTransform:"uppercase"}}>Limited Edition 2024</div>
              </div>
              <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"rgba(255,80,0,0.2)",animation:"scan-line 4s linear infinite",zIndex:3}} />
            </div>
            <div className="reel-frame-tag">Social Ad</div>
            <div className="reel-frame-label">
              <strong>BLAZE Fire Drop</strong>
              <span>Instagram · TikTok · Reels</span>
            </div>
          </div>

          {/* Frame 2 — Nexus Rebrand Film */}
          <div className="reel-frame reveal reveal-delay-1">
            <div className="reel-frame-bg">
              <div style={{position:"absolute",inset:0,background:"#050505"}} />
              <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 45%,rgba(202,255,0,0.14) 0%,rgba(100,160,0,0.05) 40%,transparent 65%)"}} />
              {/* grid */}
              <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(202,255,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(202,255,0,0.04) 1px,transparent 1px)",backgroundSize:"32px 32px"}} />
              <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:0,zIndex:2}}>
                <div style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:6,color:"rgba(202,255,0,0.35)",textTransform:"uppercase",marginBottom:20}}>Reborn</div>
                <div style={{width:100,height:1,background:"linear-gradient(90deg,transparent,rgba(202,255,0,0.5),transparent)",marginBottom:28}} />
                <div style={{fontFamily:"var(--font-bebas)",fontSize:104,color:"#CAFF00",letterSpacing:-3,lineHeight:0.82,textShadow:"0 0 50px rgba(202,255,0,0.5),0 0 100px rgba(202,255,0,0.2)",animation:"neon-pulse 3.5s ease-in-out infinite",textAlign:"center"}}>NX<br/>US</div>
                <div style={{width:100,height:1,background:"linear-gradient(90deg,transparent,rgba(202,255,0,0.5),transparent)",marginTop:28}} />
                <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:4,color:"rgba(202,255,0,0.4)",marginTop:20,textTransform:"uppercase"}}>Est. 1998 · 2024</div>
              </div>
            </div>
            <div className="reel-frame-tag">Brand Film</div>
            <div className="reel-frame-label">
              <strong>Nexus Rebrand</strong>
              <span>LinkedIn · Broadcast · Event</span>
            </div>
          </div>

          {/* Frame 3 — CRYO OOH */}
          <div className="reel-frame reveal reveal-delay-2">
            <div className="reel-frame-bg">
              <div style={{position:"absolute",inset:0,background:"#020810"}} />
              <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 35%,rgba(0,180,255,0.3) 0%,rgba(0,80,160,0.12) 40%,transparent 65%)"}} />
              <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 20% 80%,rgba(0,100,200,0.15) 0%,transparent 50%)"}} />
              {/* crystal lines */}
              {[0,45,90,135].map((angle,i)=>(
                <div key={i} style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <div style={{width:2,height:"55%",background:`linear-gradient(to top,transparent,rgba(100,220,255,${0.12+i*0.06}),transparent)`,transform:`rotate(${angle}deg)`}} />
                </div>
              ))}
              <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,zIndex:2}}>
                <div style={{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:5,color:"rgba(100,220,255,0.7)",textTransform:"uppercase"}}>Stay Frozen</div>
                <div style={{fontFamily:"var(--font-bebas)",fontSize:110,color:"#8eecff",letterSpacing:-3,lineHeight:0.82,textShadow:"0 0 40px rgba(100,220,255,0.7),0 0 80px rgba(100,220,255,0.3)",textAlign:"center"}}>CR<br/>YO</div>
                <div style={{display:"flex",gap:10}}>
                  {[18,14,10,14,18].map((s,i)=>(
                    <div key={i} style={{width:s,height:s,borderRadius:"50%",background:"rgba(100,220,255,0.2)",border:"1px solid rgba(100,220,255,0.5)"}} />
                  ))}
                </div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:9,letterSpacing:3,color:"rgba(100,220,255,0.5)",textTransform:"uppercase"}}>Ice Series · 2024</div>
              </div>
            </div>
            <div className="reel-frame-tag">OOH Campaign</div>
            <div className="reel-frame-label">
              <strong>CRYO Ice Series</strong>
              <span>Billboard · Transit · Digital OOH</span>
            </div>
          </div>
        </div>

        <div className="reel-stats reveal">
          {[{num:"60M+",label:"Campaign Impressions"},{num:"24",label:"Ad Campaigns"},{num:"8",label:"Motion Reels"},{num:"3×",label:"Avg. Conversion Lift"}].map((s,i)=>(
            <div key={i}>
              <div className="reel-stat-num">{s.num}</div>
              <div className="reel-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section-pad" id="services">
        <p className="section-label reveal">What We Do</p>
        <div className="services-grid">
          {services.map((s,i)=>(
            <div key={i} className={`service-card reveal reveal-delay-${(i%3)+1}`}>
              <div className="service-num">{s.num}</div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">{s.tags.map(t=><span key={t} className="service-tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-pad">
        <p className="section-label reveal">How We Work</p>
        <div>
          {process.map((p,i)=>(
            <div key={i} className={`process-item reveal reveal-delay-${i}`}>
              <div className="process-n">{p.n} /</div>
              <div className="process-name">{p.name}</div>
              <div className="process-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
        <nav className="footer-links">
          <a href="#work">Work</a><a href="#motion">Motion</a>
          <a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
        <div className="footer-socials">
          <a href="#">Instagram</a><a href="#">Behance</a>
          <a href="#">LinkedIn</a><a href="#">Dribbble</a>
        </div>
      </footer>
    </>
  );
}