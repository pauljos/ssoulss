---
layout: page-modern
title: Products
permalink: /product-stack/
---

<style>
  .ps-hero {
    background: var(--theme-hero-bg);
    padding: 100px 24px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 64px;
    border-radius: 0 0 40px 40px;
  }
  .ps-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 30%, var(--theme-hero-aurora-1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, var(--theme-hero-aurora-2) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, var(--theme-hero-aurora-3) 0%, transparent 40%);
    animation: auroraPulse 10s ease-in-out infinite alternate;
  }
  @keyframes auroraPulse {
    0% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.02); }
    100% { opacity: 0.7; transform: scale(0.98); }
  }
  .ps-hero-content { position: relative; z-index: 1; }
  .ps-hero h1 { font-size: 54px; font-weight: 900; color: #fff; margin-bottom: 24px; letter-spacing: -2px; line-height: 1; }
  .ps-hero p { font-size: 22px; color: #cbd5e1; max-width: 700px; margin: 0 auto; font-weight: 500; }

  .ps-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
    align-items: center; margin-bottom: 100px; padding: 0 12px;
    opacity: 0; transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .ps-row.visible { opacity: 1; transform: translateY(0); }
  .ps-row.reverse .ps-content { order: 2; }
  .ps-row.reverse .ps-visual { order: 1; }

  .ps-content {
    background: #fff; border: 1px solid #e2e8f0; border-radius: 24px;
    padding: 40px 32px; transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
    position: relative; overflow: hidden;
  }
  .ps-content::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  }
  .ps-row:nth-of-type(1) .ps-content::before { background: linear-gradient(90deg, #a78bfa, #ec4899); }
  .ps-row:nth-of-type(2) .ps-content::before { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
  .ps-row:nth-of-type(3) .ps-content::before { background: linear-gradient(90deg, #3b82f6, #2563eb); }
  .ps-row:nth-of-type(4) .ps-content::before { background: linear-gradient(90deg, #10b981, #34d399); }
  .ps-content:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,0.1); border-color: transparent; }

  .ps-visual {
    display: flex; justify-content: center; align-items: center;
    border-radius: 24px; min-height: 280px;
    transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
    position: relative; overflow: hidden;
  }
  .ps-visual:hover { transform: translateY(-6px) scale(1.02); }
  .ps-visual img { max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }

  .ps-badge {
    display: inline-flex; padding: 6px 14px; border-radius: 100px;
    font-size: 12px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.8px; margin-bottom: 20px;
  }
  .ps-row:nth-of-type(1) .ps-badge { background: #f5f3ff; color: #7c3aed; }
  .ps-row:nth-of-type(2) .ps-badge { background: #fef3c7; color: #d97706; }
  .ps-row:nth-of-type(3) .ps-badge { background: #dbeafe; color: #1d4ed8; }
  .ps-row:nth-of-type(4) .ps-badge { background: #d1fae5; color: #059669; }

  .ps-title { font-size: 34px; font-weight: 900; color: #0f172a; margin: 0 0 6px; letter-spacing: -1.2px; }
  .ps-desc { font-size: 16px; color: #475569; line-height: 1.6; margin: 0 0 24px; }
  .ps-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
  .ps-tag { padding: 5px 12px; border-radius: 100px; font-size: 12px; font-weight: 600; background: #f1f5f9; color: #64748b; border: 1px solid #e2e8f0; }
  .ps-actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .ps-btn { padding: 12px 24px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px; }
  .ps-btn-primary { background: var(--theme-primary-gradient); color: #fff; border: none; }
  .ps-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px var(--theme-shadow); }
  .ps-btn-secondary { background: #f1f5f9; color: #475569; border: 1.5px solid #e2e8f0; }
  .ps-btn-secondary:hover { background: #fff; border-color: #cbd5e1; transform: translateY(-2px); }

  .ps-visual-souldoc { background: linear-gradient(135deg, #f5f3ff, #ede9fe); border: 1px solid #e4e2f0; }
  .ps-visual-bookly { background: linear-gradient(135deg, #fffbeb, #fef3c7); border: 1px solid #fde68a; }
  .ps-visual-texa { background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #bfdbfe; }
  .ps-visual-soulshs { background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #a7f3d0; }

  .ps-tech { padding: 100px 0; background: #f8fafc; margin: 40px -24px -80px; border-radius: 60px 60px 0 0; position: relative; }
  .ps-tech::before { content: ''; position: absolute; top: 0; left: 24px; right: 24px; height: 4px; background: linear-gradient(90deg, #f472b6, #a78bfa, #60a5fa, #34d399, #fbbf24); border-radius: 2px; }
  .ps-tech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto; padding: 0 24px; }
  .ps-tech-card { background: #fff; padding: 32px; border-radius: 20px; border: 1px solid #e2e8f0; transition: all 0.3s; display: flex; gap: 20px; align-items: flex-start; }
  .ps-tech-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); border-color: #cbd5e1; }
  .ps-tech-icon { flex-shrink: 0; width: 44px; height: 44px; background: #f1f5f9; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #2563eb; }
  .ps-tech-card:nth-of-type(2) .ps-tech-icon { color: #10b981; }
  .ps-tech-card:nth-of-type(3) .ps-tech-icon { color: #f59e0b; }
  .ps-tech-card:nth-of-type(4) .ps-tech-icon { color: #8b5cf6; }
  .ps-tech-card h3 { font-size: 18px; font-weight: 800; color: #0f172a; margin: 0 0 8px; }
  .ps-tech-card p { font-size: 14px; color: #64748b; line-height: 1.6; margin: 0; }
  .ps-cta { text-align: center; padding: 100px 24px 40px; }

  @media (max-width: 1024px) {
    .ps-row { grid-template-columns: 1fr; gap: 40px; text-align: center; }
    .ps-row.reverse .ps-content { order: 1; }
    .ps-row.reverse .ps-visual { order: 2; }
    .ps-actions { justify-content: center; }
    .ps-tech-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .ps-hero { padding: 64px 16px; }
    .ps-hero h1 { font-size: 32px; }
    .ps-title { font-size: 26px; }
    .ps-content { padding: 28px 20px; }
    .ps-visual { min-height: 200px; }
  }
</style>

<section class="ps-hero">
  <div class="ps-hero-content">
    <h1>Powering Success</h1>
    <p>Our ecosystem of platforms provides industry-specific solutions for healthcare, safety, scheduling, and enterprise resource management.</p>
  </div>
</section>

<div class="page-content" style="padding-top:0;">

  <div class="ps-row">
    <div class="ps-content">
      <span class="ps-badge">Health-Tech</span>
      <h2 class="ps-title">Souldoc</h2>
      <p class="ps-desc">Advanced clinic management platform that redefines healthcare workflows with secure appointment booking and patient record management.</p>
      <div class="ps-tags">
        <span class="ps-tag">SaaS</span>
        <span class="ps-tag">HIPAA Ready</span>
        <span class="ps-tag">India Focus</span>
      </div>
      <div class="ps-actions">
        <a href="/souldoc/" class="ps-btn ps-btn-primary">Discover Souldoc →</a>
        <a href="https://docsapp-b7430.web.app/" target="_blank" class="ps-btn ps-btn-secondary">Open App ↗</a>
      </div>
    </div>
    <div class="ps-visual ps-visual-souldoc">
      <img src="/assets/souldoc/wider_tablet.png" alt="Souldoc Interface" style="max-width:460px;" />
    </div>
  </div>

  <div class="ps-row reverse">
    <div class="ps-content">
      <span class="ps-badge">Global SaaS</span>
      <h2 class="ps-title">Bookly</h2>
      <p class="ps-desc">A cross-industry scheduling platform that simplifies complex booking workflows for consultants, studios, and small businesses globally.</p>
      <div class="ps-tags">
        <span class="ps-tag">Low Latency</span>
        <span class="ps-tag">Mobile First</span>
        <span class="ps-tag">Universal</span>
      </div>
      <div class="ps-actions">
        <a href="/bookly/" class="ps-btn ps-btn-primary">Explore Bookly →</a>
        <a href="https://bookly-landing.onrender.com" target="_blank" class="ps-btn ps-btn-secondary">Visit Landing ↗</a>
      </div>
    </div>
    <div class="ps-visual ps-visual-bookly">
      <div style="text-align:center;padding:20px;">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="10" y="10" width="100" height="100" rx="16" fill="white" stroke="#f59e0b" stroke-width="2"/>
          <rect x="10" y="10" width="100" height="28" rx="16" fill="#f59e0b" opacity="0.15"/>
          <line x1="10" y1="38" x2="110" y2="38" stroke="#f59e0b" stroke-width="1" opacity="0.3"/>
          <rect x="22" y="50" width="18" height="18" rx="4" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="0.8"/>
          <rect x="48" y="50" width="18" height="18" rx="4" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="0.8"/>
          <rect x="74" y="50" width="18" height="18" rx="4" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="0.8"/>
          <rect x="22" y="74" width="18" height="18" rx="4" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="0.8"/>
          <rect x="48" y="74" width="40" height="18" rx="4" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="0.8"/>
          <rect x="96" y="74" width="22" height="18" rx="4" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="0.8"/>
          <circle cx="60" cy="100" r="4" fill="#f59e0b">
            <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
        <div style="margin-top:12px;font-size:13px;font-weight:600;color:#d97706;">bookly</div>
      </div>
    </div>
  </div>

  <div class="ps-row">
    <div class="ps-content">
      <span class="ps-badge">Enterprise ERP</span>
      <h2 class="ps-title">Texa</h2>
      <p class="ps-desc">Modern ERP built for the apparel industry, managing everything from fiber sourcing to export documentation with real-time tracking and BI insights.</p>
      <div class="ps-tags">
        <span class="ps-tag">Apparel ERP</span>
        <span class="ps-tag">BI Reports</span>
        <span class="ps-tag">Factory Ops</span>
      </div>
      <div class="ps-actions">
        <a href="/texa/" class="ps-btn ps-btn-primary">View Texa →</a>
        <a href="https://texa-erp-web.onrender.com/landing" target="_blank" class="ps-btn ps-btn-secondary">Open ERP ↗</a>
      </div>
    </div>
    <div class="ps-visual ps-visual-texa">
      <div style="text-align:center;padding:20px;width:100%;">
        <svg viewBox="0 0 300 200" fill="none" style="width:100%;max-width:300px;">
          <rect x="20" y="60" width="60" height="50" rx="8" fill="white" stroke="#3b82f6" stroke-width="1.5"/>
          <rect x="90" y="45" width="60" height="65" rx="8" fill="white" stroke="#2563eb" stroke-width="1.5"/>
          <rect x="160" y="55" width="60" height="55" rx="8" fill="white" stroke="#1d4ed8" stroke-width="1.5"/>
          <rect x="230" y="65" width="50" height="45" rx="8" fill="white" stroke="#3b82f6" stroke-width="1.5"/>
          <circle r="4" fill="#3b82f6"><animateMotion dur="2s" repeatCount="indefinite" path="M80,85 L90,77"/></circle>
          <circle r="4" fill="#2563eb"><animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M150,77 L160,82"/></circle>
          <circle r="4" fill="#1d4ed8"><animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M220,82 L230,87"/></circle>
          <rect x="30" y="130" width="16" height="30" rx="2" fill="#3b82f6" opacity="0.5"><animate attributeName="height" values="30;40;30" dur="2s" repeatCount="indefinite" y="130"/></rect>
          <rect x="54" y="120" width="16" height="40" rx="2" fill="#2563eb" opacity="0.6"><animate attributeName="height" values="40;50;40" dur="2.5s" repeatCount="indefinite" y="120"/></rect>
          <rect x="78" y="115" width="16" height="45" rx="2" fill="#3b82f6" opacity="0.5"><animate attributeName="height" values="45;35;45" dur="1.8s" repeatCount="indefinite" y="115"/></rect>
          <rect x="102" y="108" width="16" height="52" rx="2" fill="#1d4ed8" opacity="0.7"><animate attributeName="height" values="52;62;52" dur="3s" repeatCount="indefinite" y="108"/></rect>
          <rect x="126" y="125" width="16" height="35" rx="2" fill="#2563eb" opacity="0.6"><animate attributeName="height" values="35;28;35" dur="2.2s" repeatCount="indefinite" y="125"/></rect>
          <rect x="150" y="118" width="16" height="42" rx="2" fill="#3b82f6" opacity="0.5"><animate attributeName="height" values="42;52;42" dur="2.7s" repeatCount="indefinite" y="118"/></rect>
        </svg>
        <div style="margin-top:8px;font-size:13px;font-weight:600;color:#2563eb;">texa erp</div>
      </div>
    </div>
  </div>

  <div class="ps-row reverse">
    <div class="ps-content">
      <span class="ps-badge">HSE Platform</span>
      <h2 class="ps-title">SoulsHS</h2>
      <p class="ps-desc">Comprehensive Health, Safety &amp; Environment management platform — digitising compliance tracking, incident reporting, risk assessments, and safety audits.</p>
      <div class="ps-tags">
        <span class="ps-tag">HSE</span>
        <span class="ps-tag">Compliance</span>
        <span class="ps-tag">Real-time</span>
      </div>
      <div class="ps-actions">
        <a href="/soulshs/" class="ps-btn ps-btn-primary">Learn More →</a>
        <a href="https://soulshs-web.onrender.com/dashboard" target="_blank" class="ps-btn ps-btn-secondary">Open Dashboard ↗</a>
      </div>
    </div>
    <div class="ps-visual ps-visual-soulshs">
      <div style="text-align:center;padding:20px;width:100%;">
        <svg viewBox="0 0 300 200" fill="none" style="width:100%;max-width:300px;">
          <path d="M150 30l60 20v40c0 30-24 50-60 66-36-16-60-36-60-66V50l60-20z" fill="white" stroke="#10b981" stroke-width="2"/>
          <path d="m135 100 15 15 30-30" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="150" cy="90" r="8" stroke="#10b981" stroke-width="1" fill="none" opacity="0.3">
            <animate attributeName="r" values="8;30;8" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <rect x="30" y="145" width="16" height="16" rx="3" stroke="#34d399" stroke-width="1.5" fill="none"/>
          <path d="M34 153l4 4 6-6" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="80" y="145" width="16" height="16" rx="3" stroke="#34d399" stroke-width="1.5" fill="none"/>
          <path d="M84 153l4 4 6-6" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="130" y="145" width="16" height="16" rx="3" stroke="#34d399" stroke-width="1.5" fill="none"/>
          <path d="M134 153l4 4 6-6" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="180" y="145" width="16" height="16" rx="3" stroke="#34d399" stroke-width="1.5" fill="none"/>
          <path d="M184 153l4 4 6-6" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="230" y="145" width="16" height="16" rx="3" stroke="#34d399" stroke-width="1.5" fill="none"/>
          <path d="M234 153l4 4 6-6" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <div style="margin-top:8px;font-size:13px;font-weight:600;color:#059669;">soulshs</div>
      </div>
    </div>
  </div>

  <section class="ps-tech">
    <div style="text-align:center;margin-bottom:48px;padding:0 24px;">
      <span class="section-badge">Technology</span>
      <h2 style="font-size:36px;font-weight:900;color:#0f172a;margin:0 0 12px;letter-spacing:-1px;">Built on a Modern Stack</h2>
      <p style="font-size:18px;color:#64748b;max-width:560px;margin:0 auto;">Every platform is engineered for reliability, security, and scale.</p>
    </div>
    <div class="ps-tech-grid">
      <div class="ps-tech-card">
        <div class="ps-tech-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <div><h3>Enterprise Core</h3><p>Reliable architecture designed to handle thousands of concurrent requests.</p></div>
      </div>
      <div class="ps-tech-card">
        <div class="ps-tech-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <div><h3>Zero Trust</h3><p>Multi-layered security protocols and end-to-end encryption for all sensitive data.</p></div>
      </div>
      <div class="ps-tech-card">
        <div class="ps-tech-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
        <div><h3>Mobile First</h3><p>Responsive interfaces that offer a smooth app-like experience on any screen.</p></div>
      </div>
      <div class="ps-tech-card">
        <div class="ps-tech-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
        <div><h3>Data Driven</h3><p>Integrated analytics for informed decisions based on real-time metrics.</p></div>
      </div>
    </div>
  </section>

  <div class="ps-cta">
    <h2 class="ps-title" style="margin-bottom:12px;">Ready to Scale?</h2>
    <p style="font-size:18px;color:#64748b;margin-bottom:36px;">Let's get your products running on ssoulss platforms.</p>
    <div class="ps-actions" style="justify-content:center;">
      <a href="/contact/" class="ps-btn ps-btn-primary" style="padding:14px 36px;font-size:16px;">Contact Our Engineers</a>
      <a href="/consulting/" class="ps-btn ps-btn-secondary" style="padding:14px 36px;font-size:16px;">Custom Solutions</a>
    </div>
  </div>
</div>

<script>
  (function() {
    var rows = document.querySelectorAll('.ps-row');
    if (!rows.length) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    rows.forEach(function(r) { obs.observe(r); });
  })();
</script>
