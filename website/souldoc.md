---
layout: page
title: Souldoc
permalink: /souldoc/
---

{% capture intro %}

<div style="display:flex;gap:18px;align-items:center;">
  <div style="flex:1;min-width:240px;">
    <h2 style="margin:0 0 8px 0;color:#0b1726;">Souldoc — Secure clinic workflow</h2>
    <p style="margin:0;color:#33475b;font-size:16px;line-height:1.45;">Souldoc is our flagship appointment and clinic workflow platform — secure, compliant and built for operational teams. Currently available in India with regional deployments and enterprise integrations.</p>
    <ul style="margin-top:10px;color:#6b7a86">
      <li>Online booking & scheduling</li>
      <li>Doctor prescriptions & clinical notes</li>
      <li>Patient management and records</li>
      <li>Cloud-hosted with enterprise-grade security</li>
    </ul>
  </div>
  <div style="flex:0 0 240px;text-align:center;">
    <picture>
      <source srcset="/assets/souldoc/wider_tablet.png" type="image/png">
      <img src="/assets/souldoc/wider_tablet.png" alt="Souldoc screenshot" style="width:220px;border-radius:8px;box-shadow:0 12px 30px rgba(11,23,38,0.06);"/>
    </picture>
  </div>
</div>

{% endcapture %}

{% capture gallery %}

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-top:12px;">
  <picture>
    <source srcset="/assets/souldoc/phone.png" type="image/png">
    <img src="/assets/souldoc/phone.png" alt="Souldoc - bookings" style="width:100%;border-radius:8px;border:1px solid rgba(11,23,38,0.04);background:#fff;padding:8px;" />
  </picture>
  <picture>
    <source srcset="/assets/souldoc/phone_register.png" type="image/png">
    <img src="/assets/souldoc/phone_register.png" alt="Souldoc - prescriptions" style="width:100%;border-radius:8px;border:1px solid rgba(11,23,38,0.04);background:#fff;padding:8px;" />
  </picture>
  <picture>
    <source srcset="/assets/souldoc/wider_tablet.png" type="image/png">
    <img src="/assets/souldoc/wider_tablet.png" alt="Souldoc - patient management" style="width:100%;border-radius:8px;border:1px solid rgba(11,23,38,0.04);background:#fff;padding:8px;" />
  </picture>
</div>

{% endcapture %}

{% capture cta %}

<p style="margin-top:12px;color:#33475b">Souldoc is currently available in India. For enterprise enquiries, please use the <a href="/contact/">Contact</a> form and select "Souldoc / Enterprise" in your message.</p>

{% endcapture %}

{% include card.html content=intro %}
{% include card.html content=gallery %}
{% include card.html content=cta %}
