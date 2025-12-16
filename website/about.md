---
layout: page
title: About
permalink: /about/
---

{% capture intro %}

<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;">
	<div style="flex:1;min-width:220px;">
		<h2 style="margin:0 0 8px 0;color:#0b1726;">About SSoulSS</h2>
		<p style="margin:0;color:#33475b;font-size:16px;line-height:1.45;">We design and ship practical AI products that respect people and privacy. Our work focuses on measurable operational improvements — from predictive scheduling to secure enterprise integrations — delivered with empathy and strong engineering practices.</p>
		<p style="margin-top:10px;"><strong style="color:#2b6fd6">Headquarters:</strong> Kochi & London — global delivery with local presence</p>
	</div>
	<div style="flex:0 0 180px;text-align:center;">
		<img src="/assets/images/emblem-ssoulss-refined-white.svg" alt="SSoulSS emblem" style="width:160px;height:auto;border-radius:8px;box-shadow:0 12px 40px rgba(43,111,214,0.08);" />
	</div>
</div>

{% endcapture %}

{% capture values %}

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:4px;">
	<span style="background:#e8f5ff;color:#0b6fbf;padding:8px 12px;border-radius:18px;font-weight:600;">Human-centred</span>
	<span style="background:#fff3e0;color:#f57c00;padding:8px 12px;border-radius:18px;font-weight:600;">Practicality</span>
	<span style="background:#e8fbee;color:#2e7d32;padding:8px 12px;border-radius:18px;font-weight:600;">Security & compliance</span>
	<span style="background:#f3e5f5;color:#6a1b9a;padding:8px 12px;border-radius:18px;font-weight:600;">Partnership</span>
</div>
<p style="margin:8px 0 0;color:#6b7a86;">We prioritise human-centred design, incremental delivery, and strong governance so delivered systems are useful, secure and adopted.</p>

{% endcapture %}

{% capture offerings %}

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;">
	<div style="background:linear-gradient(180deg,#fff,#fbfdff);padding:12px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);">
		<div style="font-size:20px">🩺</div>
		<h4 style="margin:6px 0 6px 0;color:#0b1726;">Souldoc</h4>
		<p style="margin:0;color:#6b7a86">Secure appointment & clinic workflow platform with compliance-first UX.</p>
	</div>
	<div style="background:linear-gradient(180deg,#fff,#fbfdff);padding:12px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);">
		<div style="font-size:20px">📅</div>
		<h4 style="margin:6px 0 6px 0;color:#0b1726;">Booking & APIs</h4>
		<p style="margin:0;color:#6b7a86">Smart booking widgets, predictive no-show reduction and developer-friendly APIs.</p>
	</div>
	<div style="background:linear-gradient(180deg,#fff,#fbfdff);padding:12px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);">
		<div style="font-size:20px">🔌</div>
		<h4 style="margin:6px 0 6px 0;color:#0b1726;">Integrations</h4>
		<p style="margin:0;color:#6b7a86">Secure connectors for calendars, messaging gateways and enterprise systems.</p>
	</div>
</div>

{% endcapture %}

{% capture team %}

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;">
	<div style="padding:12px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);background:#fff;">
		<div style="font-weight:700;color:#2b6fd6">Nimmy Mathew</div>
		<div style="color:#6b7a86;font-size:13px;margin-top:6px;">CEO & Product</div>
		<p style="margin-top:8px;color:#33475b;font-size:14px;">Senior product leader with 20+ years of experience in data, data insight and consulting. Nimmy combines practical analytics, product strategy and delivery expertise to help organisations turn data into reliable business outcomes.</p>
	</div>
	<div style="padding:12px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);background:#fff;">
		<div style="font-weight:700;color:#2b6fd6">Paul Joseph</div>
		<div style="color:#6b7a86;font-size:13px;margin-top:6px;">Head of Engineering & AI</div>
		<p style="margin-top:8px;color:#33475b;font-size:14px;">Technology leader with 25 years of experience in modern tech solutions across AI, cloud and data engineering. Paul specialises in building scalable, secure platforms and translating analytics into operational systems.</p>
	</div>
	<div style="padding:12px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);background:#fff;">
		<div style="font-weight:700;color:#2b6fd6">Aron Jose</div>
		<div style="color:#6b7a86;font-size:13px;margin-top:6px;">UI, Product & Offshore Delivery Lead</div>
		<p style="margin-top:8px;color:#33475b;font-size:14px;">Design and delivery leader specialising in user-centred product design, cross-border delivery and offshore teams. Focused on building delightful interfaces and reliable delivery models.</p>
	</div>
</div>

{% endcapture %}

{% capture cta %}

<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">
	<div style="flex:1;min-width:200px;color:#33475b">Want to bring empathetic AI into your operations? We’ll help you prioritise, pilot and scale.</div>
	<div style="flex:0 0 auto">
		<a href="/contact/" style="display:inline-block;background:#2b6fd6;color:#fff;padding:10px 16px;border-radius:10px;text-decoration:none;font-weight:700;">Contact our team</a>
	</div>
</div>

{% endcapture %}

{% include card.html content=intro %}
{% include card.html content=values %}
{% include card.html content=offerings %}
{% include card.html content=team %}
{% include card.html content=cta %}