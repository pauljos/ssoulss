---
layout: page-modern
title: Products
permalink: /product-stack/
---

<!-- Consolidated Premium Styles -->
<style>
  :root {
    --primary-blue: #2563eb;
    --primary-gradient: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(255, 255, 255, 0.4);
    --card-shadow-premium: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
    --card-shadow-hover: 0 30px 60px -12px rgba(0, 0, 0, 0.15);
  }

  .premium-hero {
    background: #0f172a;
    padding: 100px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 64px;
    border-radius: 0 0 40px 40px;
  }

  .premium-hero::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140%;
    height: 140%;
    background: radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 60%);
    pointer-events: none;
  }

  .premium-hero h1 {
    font-size: 56px;
    font-weight: 900;
    color: white;
    margin-bottom: 24px;
    letter-spacing: -2px;
    line-height: 1;
  }

  .premium-hero p {
    font-size: 22px;
    color: #94a3b8;
    max-width: 700px;
    margin: 0 auto;
    font-weight: 500;
  }

  .product-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    margin-bottom: 100px;
    padding: 0 12px;
  }

  .product-content {
    order: 1;
  }

  .product-visual {
    order: 2;
  }

  .product-row.reverse .product-content {
    order: 2;
  }

  .product-row.reverse .product-visual {
    order: 1;
  }

  .badge-premium {
    display: inline-block;
    padding: 6px 14px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(8px);
    border-radius: 100px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .product-title {
    font-size: 48px;
    font-weight: 950;
    color: #0f172a;
    margin: 0 0 24px 0;
    line-height: 1;
    letter-spacing: -1.5px;
  }

  .product-desc {
    font-size: 19px;
    color: #475569;
    line-height: 1.7;
    margin: 0 0 32px 0;
  }

  .tags-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .tag-modern {
    padding: 8px 18px;
    background: #f1f5f9;
    color: #475569;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s;
  }

  .tag-modern:hover {
    background: #e2e8f0;
    color: #1e293b;
  }

  .cta-group {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn-premium {
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-premium.primary {
    background: var(--primary-gradient);
    color: white;
    box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4);
  }

  .btn-premium.primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.5);
  }

  .btn-premium.secondary {
    background: white;
    color: #0f172a;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .btn-premium.secondary:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
    transform: translateY(-2px);
  }

  .visual-container {
    position: relative;
    border-radius: 24px;
    padding: 20px;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    box-shadow: var(--card-shadow-premium);
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .visual-container:hover {
    transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
    box-shadow: var(--card-shadow-hover);
  }

  .visual-container img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  /* Tech Stack Grid */
  .tech-section {
    padding: 80px 0;
    background: #f8fafc;
    margin: 80px -24px -80px -24px;
    border-radius: 40px 40px 0 0;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .tech-card {
    background: white;
    padding: 32px;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    transition: all 0.3s;
    text-align: center;
  }

  .tech-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    border-color: #2563eb;
  }

  .tech-icon {
    font-size: 40px;
    margin-bottom: 20px;
    display: block;
  }

  .tech-card h3 {
    font-size: 20px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 12px;
  }

  .tech-card p {
    font-size: 15px;
    color: #64748b;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    .product-row {
      grid-template-columns: 1fr;
      gap: 48px;
      text-align: center;
    }
    .tags-container, .cta-group {
      justify-content: center;
    }
    .premium-hero h1 {
      font-size: 44px;
    }
    .tech-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .product-row.reverse .product-content, .product-row.reverse .product-visual {
      order: unset;
    }
    .product-visual {
      order: 2 !important;
    }
    .product-content {
      order: 1 !important;
    }
  }

  @media (max-width: 640px) {
    .premium-hero {
      padding: 64px 16px;
    }
    .premium-hero h1 {
      font-size: 36px;
    }
    .product-title {
      font-size: 32px;
    }
    .tech-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Hero Section -->
<section class="premium-hero">
  <div class="page-hero-content">
    <h1>Powering Success</h1>
    <p>Our ecosystem of platforms provides industry-specific solutions for healthcare, scheduling, and enterprise resource management.</p>
  </div>
</section>

<!-- Page Content -->
<div class="page-content" style="padding-top: 0;">
  
  <!-- Product: Souldoc -->
  <div class="product-row">
    <div class="product-content">
      <span class="badge-premium" style="background: #e0f2fe; color: #0369a1; border-color: #bae6fd;">Health-Tech</span>
      <h2 class="product-title">Souldoc</h2>
      <p class="product-desc">Advanced clinic management platform that redefines healthcare workflows with secure appointment booking and patient record management.</p>
      <div class="tags-container">
        <span class="tag-modern">☁️ SaaS</span>
        <span class="tag-modern">🔒 HIPAA Ready</span>
        <span class="tag-modern">🇮🇳 India Focus</span>
      </div>
      <div class="cta-group">
        <a href="/souldoc/" class="btn-premium primary">Discover Souldoc <span style="font-size: 18px;">→</span></a>
        <a href="https://docsapp-b7430.web.app/" target="_blank" class="btn-premium secondary">Open App <span style="font-size: 18px;">↗</span></a>
      </div>
    </div>
    <div class="product-visual">
      <div class="visual-container">
        <img src="/assets/souldoc/wider_tablet.png" alt="Souldoc Interface" />
      </div>
    </div>
  </div>

  <!-- Product: Bookly -->
  <div class="product-row reverse">
    <div class="product-content">
      <span class="badge-premium" style="background: #dcfce7; color: #15803d; border-color: #bbf7d0;">Global SaaS</span>
      <h2 class="product-title">Bookly</h2>
      <p class="product-desc">A cross-industry scheduling platform that simplifies complex booking workflows for consultants, studios, and small businesses globally.</p>
      <div class="tags-container">
        <span class="tag-modern">⚡ Low Latency</span>
        <span class="tag-modern">📱 Mobile First</span>
        <span class="tag-modern">🌍 Universal</span>
      </div>
      <div class="cta-group">
        <a href="/bookly/" class="btn-premium primary">Explore Bookly <span style="font-size: 18px;">→</span></a>
        <a href="https://bookly-landing.onrender.com" target="_blank" class="btn-premium secondary">Visit Landing <span style="font-size: 18px;">↗</span></a>
      </div>
    </div>
    <div class="product-visual">
      <div class="visual-container" style="background: white; padding: 40px;">
        <img src="/assets/images/product-booking.svg" alt="Bookly Concept" style="box-shadow: none;" />
      </div>
    </div>
  </div>

  <!-- Product: Texa -->
  <div class="product-row">
    <div class="product-content">
      <span class="badge-premium" style="background: #fef3c7; color: #b45309; border-color: #fde68a;">Enterprise ERP</span>
      <h2 class="product-title">Texa</h2>
      <p class="product-desc">Modern ERP built for the apparel industry, managing everything from fiber sourcing to export documentation with real-time tracking.</p>
      <div class="tags-container">
        <span class="tag-modern">🧵 Apparel ERP</span>
        <span class="tag-modern">📊 BI Reports</span>
        <span class="tag-modern">🏭 Factory Ops</span>
      </div>
      <div class="cta-group">
        <a href="/texa/" class="btn-premium primary">View Texa <span style="font-size: 18px;">→</span></a>
        <a href="https://texa-erp-web.onrender.com/landing" target="_blank" class="btn-premium secondary">Open ERP <span style="font-size: 18px;">↗</span></a>
      </div>
    </div>
    <div class="product-visual">
      <div class="visual-container" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); text-align: center; padding: 60px 40px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke-width="1.5" style="margin-bottom: 24px;">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" fill="rgba(255,255,255,0.3)" stroke="#FFF"/>
          <path d="M3 6h18" stroke="#FFF"/>
          <path d="M16 10a4 4 0 0 1-8 0" stroke="#FFF"/>
        </svg>
        <div style="font-size: 36px; font-weight: 950; color: white; letter-spacing: -1px;">TEXA ERP</div>
        <div style="font-size: 16px; color: rgba(255,255,255,0.9); font-weight: 500; margin-top: 8px;">Supply Chain Mastery</div>
      </div>
    </div>
  </div>

  <!-- Tech Stack Feature Grid -->
  <section class="tech-section">
    <div style="text-align: center; margin-bottom: 64px; padding: 0 24px;">
      <h2 class="section-title">Built with Precision</h2>
      <p style="font-size: 18px; color: #64748b; max-width: 800px; margin: 0 auto;">Our engineering choices prioritize security, speed, and long-term scalability to ensure your business never hits a technical ceiling.</p>
    </div>
    
    <div class="tech-grid">
      <div class="tech-card">
        <span class="tech-icon">🏢</span>
        <h3>Enterprise Core</h3>
        <p>Reliable architecture designed to handle thousands of concurrent requests with ease.</p>
      </div>
      <div class="tech-card">
        <span class="tech-icon">🛡️</span>
        <h3>Zero Trust</h3>
        <p>Multi-layered security protocols and end-to-end encryption for all sensitive data.</p>
      </div>
      <div class="tech-card">
        <span class="tech-icon">📱</span>
        <h3>Native Feel</h3>
        <p>Responsive interfaces that offer a smooth, app-like experience on any screen size.</p>
      </div>
      <div class="tech-card">
        <span class="tech-icon">📈</span>
        <h3>Data Driven</h3>
        <p>Integrated analytics to help you make informed decisions based on real-time metrics.</p>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <div style="text-align: center; padding: 120px 24px 40px 24px;">
    <h2 class="product-title" style="margin-bottom: 16px;">Ready to Scale?</h2>
    <p style="font-size: 20px; color: #64748b; margin-bottom: 48px;">Let's get your products running on sSoulss platforms.</p>
    <div class="cta-group" style="justify-content: center;">
      <a href="/contact/" class="btn-premium primary" style="padding: 18px 48px; font-size: 18px;">Contact Our Engineers</a>
      <a href="/consulting/" class="btn-premium secondary" style="padding: 18px 48px; font-size: 18px;">Custom Solutions</a>
    </div>
  </div>

</div>
