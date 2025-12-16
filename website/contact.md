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

### Offices

- <strong>India — Kochi</strong><br/><span style="color:var(--muted)">InfoPark, Kakkanad<br/>Kochi — 682042</span>
- <strong>United Kingdom — London</strong><br/><span style="color:var(--muted)">17 Example Street, London — W1 2AA</span>

Email: <a href="mailto:info@ssoulss.com">info@ssoulss.com</a>

{% endcapture %}

{% capture form %}

### Send a message

<form action="https://formspree.io/f/your-form-id" method="POST" aria-label="Contact form" style="display:flex;flex-direction:column;gap:8px;">
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

Our teams operate Monday to Friday, 09:00 — 18:00 local time. For urgent requests email <a href="mailto:info@ssoulss.com">info@ssoulss.com</a>.

{% endcapture %}

{% include card.html content=contact_intro %}
{% include card.html content=offices %}
{% include card.html content=form %}
{% include card.html content=hours %}
