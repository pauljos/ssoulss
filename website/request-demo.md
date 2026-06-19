---
layout: page-modern
title: Request a Demo
permalink: /request-demo/
---

<style>
  .demo-hero {
    background: linear-gradient(120deg, #0f172a 60%, #2563eb 100%);
    padding: 80px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 48px;
    border-radius: 0 0 32px 32px;
  }
  .demo-hero h1 {
    font-size: 42px;
    font-weight: 900;
    color: white;
    margin: 0 0 16px;
    letter-spacing: -1px;
  }
  .demo-hero p {
    font-size: 18px;
    color: #cbd5e1;
    max-width: 600px;
    margin: 0 auto;
  }

  .form-section {
    max-width: 720px;
    margin: 0 auto 80px;
    padding: 0 24px;
  }

  .form-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 48px 40px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  }

  .form-card h2 {
    font-size: 28px;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 8px;
    letter-spacing: -0.5px;
  }

  .form-card .form-subtitle {
    font-size: 16px;
    color: #64748b;
    margin: 0 0 32px;
    line-height: 1.5;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 6px;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-size: 15px;
    font-family: inherit;
    color: #1e293b;
    background: #ffffff;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-sizing: border-box;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .form-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 24px 0;
  }

  .form-checkbox input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    accent-color: #2563eb;
    flex-shrink: 0;
  }

  .form-checkbox label {
    font-size: 14px;
    color: #64748b;
    margin: 0;
    font-weight: 400;
  }

  .btn-submit {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
    justify-content: center;
  }

  .btn-submit:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
  }

  .btn-submit:active {
    transform: translateY(0);
  }

  .trust-badges {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 32px;
    padding-top: 32px;
    border-top: 1px solid #e2e8f0;
  }

  .trust-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
  }

  .trust-badge svg {
    flex-shrink: 0;
  }

  @media (max-width: 640px) {
    .demo-hero { padding: 48px 16px; }
    .demo-hero h1 { font-size: 28px; }
    .form-card { padding: 28px 20px; }
    .form-row { grid-template-columns: 1fr; }
    .form-section { padding: 0 16px; }
  }
</style>

<!-- Hero -->
<section class="demo-hero">
  <h1>Request a Demo</h1>
  <p>See our platforms in action. Fill in the details and we'll schedule a personalised walk-through tailored to your needs.</p>
</section>

<!-- Form -->
<section class="form-section">
  <div class="form-card">
    <h2>Tell us about yourself</h2>
    <p class="form-subtitle">We'll get back to you within 24 hours to schedule your demo.</p>

    <form action="https://formspree.io/f/xanrgpld" method="POST" aria-label="Request demo form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Full name</label>
          <input id="name" name="name" type="text" required placeholder="John Doe" />
        </div>
        <div class="form-group">
          <label for="email">Work email</label>
          <input id="email" name="email" type="email" required placeholder="john@company.com" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Acme Inc." />
        </div>
        <div class="form-group">
          <label for="product">Product of interest</label>
          <select id="product" name="product">
            <option value="">Select a product…</option>
            <option value="souldoc">Souldoc — Clinic Management</option>
            <option value="texa">Texa — Apparel ERP</option>
            <option value="soulshs">SoulsHS — HSE Platform</option>
            <option value="soulmodel">SoulModel — Data Modelling</option>
            <option value="soulvault">SoulVault — Data Exchange</option>
            <option value="bookly">Bookly — Scheduling</option>
            <option value="other">Other / Not sure</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="message">Brief description of your use case</label>
        <textarea id="message" name="message" rows="5" required placeholder="Tell us a bit about your project, team size, and what you're looking to accomplish…"></textarea>
      </div>

      <div class="form-checkbox">
        <input id="consent" name="consent" type="checkbox" required />
        <label for="consent">I agree to the <a href="/policies/privacy/" style="color:#2563eb;text-decoration:underline;">Privacy Policy</a> and consent to being contacted about ssoulss products and services.</label>
      </div>

      <button type="submit" class="btn-submit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        Request Demo
      </button>
    </form>

    <div class="trust-badges">
      <span class="trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Encrypted &amp; secure
      </span>
      <span class="trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        No spam, ever
      </span>
      <span class="trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        GDPR compliant
      </span>
    </div>
  </div>
</section>
