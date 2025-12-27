---
layout: page
title: Request a Demo
permalink: /request-demo/
---

{% capture demo_content %}

<h2 style="color:#262626;font-size:24px;font-weight:700;margin:0 0 12px 0;">Request a Demo</h2>

<p style="color:#8e8e8e;font-size:14px;line-height:1.5;margin:0 0 20px 0;">Please fill the form below and we'll schedule a short walk-through tailored to your needs.</p>

<form action="https://formspree.io/f/xanrgpld" method="POST" aria-label="Request demo form" style="max-width:600px;">
  <label for="name" style="display:block;color:#262626;font-size:14px;font-weight:600;margin-bottom:6px;">Name</label>
  <input id="name" name="name" required style="width:100%;padding:10px 12px;border:1px solid #dbdbdb;border-radius:6px;font-size:14px;margin-bottom:16px;background:#fafafa;" />

  <label for="email" style="display:block;color:#262626;font-size:14px;font-weight:600;margin-bottom:6px;">Work email</label>
  <input id="email" name="email" type="email" required style="width:100%;padding:10px 12px;border:1px solid #dbdbdb;border-radius:6px;font-size:14px;margin-bottom:16px;background:#fafafa;" />

  <label for="company" style="display:block;color:#262626;font-size:14px;font-weight:600;margin-bottom:6px;">Company</label>
  <input id="company" name="company" style="width:100%;padding:10px 12px;border:1px solid #dbdbdb;border-radius:6px;font-size:14px;margin-bottom:16px;background:#fafafa;" />

  <label for="message" style="display:block;color:#262626;font-size:14px;font-weight:600;margin-bottom:6px;">Brief description of your use case</label>
  <textarea id="message" name="message" rows="6" required style="width:100%;padding:10px 12px;border:1px solid #dbdbdb;border-radius:6px;font-size:14px;margin-bottom:20px;background:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;"></textarea>

  <button type="submit" style="background:#0095f6;color:#fff;padding:9px 24px;border-radius:8px;border:none;font-weight:600;font-size:14px;cursor:pointer;">Request demo</button>
</form>

{% endcapture %}

{% include card.html content=demo_content %}
