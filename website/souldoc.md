---
layout: page
title: Souldoc
permalink: /souldoc/
---

{% capture intro %}
<div style="background:linear-gradient(135deg,#6a11cb,#2575fc);color:#fff;border-radius:12px;padding:20px;box-shadow:0 18px 60px rgba(37,55,100,0.18);margin-bottom:12px;">
  <div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;">
    <div style="flex:1;min-width:240px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <img src="/assets/images/emblem-ssoulss-refined-white.svg" alt="Souldoc emblem" style="width:84px;height:84px;border-radius:10px;box-shadow:0 12px 30px rgba(0,0,0,0.12);background:rgba(255,255,255,0.06);padding:8px;" />
        <div>
          <h1 style="margin:0;font-size:28px;line-height:1;color:#fff">Souldoc</h1>
          <div style="margin-top:6px;color:rgba(255,255,255,0.9);font-size:15px;">Secure appointment & clinic workflow — bookings, prescriptions and patient management for clinics.</div>
        </div>
      </div>
      <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <a class="btn" href="https://docsapp-b7430.web.app/" target="_blank" rel="noopener noreferrer" style="background:#fff;color:#2575fc;padding:10px 16px;border-radius:10px;font-weight:700;text-decoration:none">Open Souldoc</a>
        <a class="btn secondary" href="/contact/" style="padding:10px 14px;border-radius:10px">Request enterprise access</a>
        <span style="background:rgba(255,255,255,0.12);padding:8px 10px;border-radius:10px;font-size:13px;color:rgba(255,255,255,0.95)">HIPAA-ready options</span>
      </div>
    </div>
    <div style="flex:0 0 280px;text-align:center;">
      <picture>
        <source srcset="/assets/souldoc/wider_tablet.png" type="image/png">
        <img src="/assets/souldoc/wider_tablet.png" alt="Souldoc screenshot" style="width:240px;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.18);border:4px solid rgba(255,255,255,0.06);background:#fff;padding:8px;"/>
      </picture>
    </div>
  </div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:10px;">
  <div style="background:linear-gradient(180deg,#fff,#f6fbff);padding:14px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);">
    <h3 style="margin:0 0 8px 0;color:#0b1726">Booking & Scheduling</h3>
    <p style="margin:0;color:#33475b">Smart booking widget with calendar sync, reminders and no-show reduction tools.</p>
  </div>
  <div style="background:linear-gradient(180deg,#fff,#fff7f3);padding:14px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);">
    <h3 style="margin:0 0 8px 0;color:#b85a00">Clinical Records</h3>
    <p style="margin:0;color:#33475b">Structured prescriptions, clinical notes and secure patient records with role-based access.</p>
  </div>
  <div style="background:linear-gradient(180deg,#ffffff,#f0fff7);padding:14px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);">
    <h3 style="margin:0 0 8px 0;color:#0b7a3a">Patient Management</h3>
    <p style="margin:0;color:#33475b">Patient profiles, visit history and simple workflows for front-desk staff and clinicians.</p>
  </div>
</div>
{% endcapture %}

{% capture gallery %}
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px;">
  <div style="border-radius:8px;overflow:hidden;background:#fff;border:1px solid rgba(11,23,38,0.04);">
    <img src="/assets/souldoc/phone.png" alt="Souldoc - bookings" style="width:100%;display:block;" />
    <div style="padding:10px"><strong>Booking</strong><div style="color:#666;font-size:13px;margin-top:6px">User-friendly booking flow and calendar sync.</div></div>
  </div>
  <div style="border-radius:8px;overflow:hidden;background:#fff;border:1px solid rgba(11,23,38,0.04);">
    <img src="/assets/souldoc/phone_register.png" alt="Souldoc - prescriptions" style="width:100%;display:block;" />
    <div style="padding:10px"><strong>Prescriptions</strong><div style="color:#666;font-size:13px;margin-top:6px">Structured prescriptions and clinical note templates.</div></div>
  </div>
  <div style="border-radius:8px;overflow:hidden;background:#fff;border:1px solid rgba(11,23,38,0.04);">
    <img src="/assets/souldoc/wider_tablet.png" alt="Souldoc - patient management" style="width:100%;display:block;" />
    <div style="padding:10px"><strong>Patient Management</strong><div style="color:#666;font-size:13px;margin-top:6px">Profiles, visit history and secure records.</div></div>
  </div>
</div>
{% endcapture %}

{% capture cta %}


<div style="display:flex;flex-direction:column;gap:10px;align-items:flex-start">
  <p style="margin:0;color:#33475b">Souldoc is currently available in India. For enterprise enquiries, please use the <a href="/contact/">Contact</a> form and select "Souldoc / Enterprise" in your message.</p>
  <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">
    <a class="btn primary" href="https://docsapp-b7430.web.app/" target="_blank" rel="noopener noreferrer">Login to Souldoc</a>
    <a class="btn secondary" href="/contact/">Request enterprise access</a>
    <a class="btn" href="/souldoc/" style="background:#fff;color:#2575fc;padding:8px 12px;border-radius:8px;">Demo videos</a>
  </div>
  <small style="color:#6b7a86;margin-top:6px">Need a trial account? Use the contact form to request demo credentials.</small>
</div>

{% endcapture %}

{% include card.html content=intro %}
{% include card.html content=gallery %}
{% include card.html content=cta %}
