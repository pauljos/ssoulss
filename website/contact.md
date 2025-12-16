---
layout: page
title: Contact
permalink: /contact/
---

{% capture contact_intro %}

## Get in touch

We're excited to hear about your project. Use the form to share a brief outline and we'll reply within 2 business days.

{% endcapture %}

{% capture offices %}

### Our locations

We operate with distributed teams and local delivery in key regions. Please use the contact form to reach the right team — select your region in the message and we'll respond within two business days.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:12px;">
  <div style="padding:14px;border-radius:12px;background:linear-gradient(180deg,#fff,#fbfdff);border:1px solid rgba(11,23,38,0.04);text-align:center;">
    <div style="font-size:20px;font-weight:700;color:#2b6fd6">India</div>
    <div style="color:var(--muted);margin-top:8px;">Local delivery & engineering</div>
  </div>
  <div style="padding:14px;border-radius:12px;background:linear-gradient(180deg,#fff,#fff7f6);border:1px solid rgba(11,23,38,0.04);text-align:center;">
    <div style="font-size:20px;font-weight:700;color:#0b1726">United Kingdom</div>
    <div style="color:var(--muted);margin-top:8px;">Client services & partnerships</div>
  </div>
</div>

{% endcapture %}

{% capture form %}

### Send a message

<form action="https://formspree.io/f/xanrgpld" method="POST" aria-label="Contact form" style="display:flex;flex-direction:column;gap:8px;">
  <label for="name">Name</label>
  <input id="name" name="name" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4" />

  <label for="email">Work email</label>
  <input id="email" name="email" type="email" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4" />

  <label for="company">Company</label>
  <input id="company" name="company" style="padding:10px;border-radius:8px;border:1px solid #e6eef4" />

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="6" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4"></textarea>

  <div style="display:flex;justify-content:flex-end"><button type="submit" style="background:#2b6fd6;color:#fff;padding:10px 16px;border-radius:8px;border:0;">Send message</button></div>
</form>

{% endcapture %}

{% capture hours %}

### Hours

Our teams operate Monday to Friday, 09:00 — 18:00 local time. For urgent requests, please submit the form and mark the message "Urgent" — we'll prioritise these requests.

{% endcapture %}

{% include card.html content=contact_intro %}
{% include card.html content=offices %}
{% include card.html content=form %}
{% include card.html content=hours %}
