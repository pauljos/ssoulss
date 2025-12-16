---
layout: page
title: Contact
permalink: /contact/
---

{% capture contact_content %}

<section style="background:linear-gradient(180deg,#fff,#f4fbff);padding:28px;border-radius:12px;margin:18px 0;">
  <div style="display:flex;gap:24px;align-items:stretch;flex-wrap:wrap;">
    <div style="flex:1 1 320px;min-width:280px;">
      <h1 style="margin-top:0;color:var(--dark);">Get in touch</h1>
      <p style="color:var(--muted);">We're excited to hear about your project. Fill the form and we'll get back within 2 business days.</p>
      <div style="background:#fff;padding:16px;border-radius:10px;box-shadow:0 10px 30px rgba(11,103,191,0.06);margin-top:12px;">
        <strong>Office</strong>
        <div style="color:var(--muted);margin-top:6px;">123 Example Lane<br/>City, Country</div>
        <div style="margin-top:8px;"><strong>Email</strong><div style="color:var(--muted);">info@ssoulss.com</div></div>
      </div>
    </div>
    <div style="flex:1 1 360px;min-width:280px;">
      <form action="https://formspree.io/f/your-form-id" method="POST" aria-label="Contact form" style="background:linear-gradient(180deg,#ffffff,#f7fcff);padding:18px;border-radius:12px;box-shadow:0 10px 30px rgba(11,103,191,0.04);">
        <label for="name">Name</label>
        <input id="name" name="name" required style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6eef4;margin:6px 0 12px;" />

        <label for="email">Work email</label>
        <input id="email" name="email" type="email" required style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6eef4;margin:6px 0 12px;" />

        <label for="company">Company</label>
        <input id="company" name="company" style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6eef4;margin:6px 0 12px;" />

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" required style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6eef4;margin:6px 0 12px;"></textarea>

        <!-- Cloudflare Turnstile placeholder - add site key script if using -->
        <div style="display:flex;gap:8px;justify-content:flex-end;align-items:center;">
          <button type="submit" style="background:var(--accent);color:#fff;padding:10px 16px;border-radius:8px;border:0;">Send message</button>
        </div>
      </form>
    </div>
  </div>
</section>

<section style="margin-top:12px;color:var(--muted);">Address: 123 Example Lane — City, Country</section>

<!-- Note: Replace Formspree action URL with your project endpoint; for spam protection add Turnstile integration or server-side verification. -->

{% endcapture %}

{% include card.html content=contact_content %}
