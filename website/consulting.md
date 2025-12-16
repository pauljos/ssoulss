---
layout: page
title: Consulting
permalink: /consulting/
---

{% capture intro %}

<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;">
	<div style="flex:1;min-width:220px;">
		<h2 style="margin:0 0 8px 0;color:#0b1726;">Consulting — Data, AI & Cloud Engineering</h2>
		<p style="margin:0;color:#33475b;font-size:16px;line-height:1.45;">We help organisations turn data into measurable outcomes. Our consulting covers data strategy, analytics, AI/ML, and cloud data engineering — supporting discovery, pilots and production rollouts.</p>
		<p style="margin-top:10px;color:#6b7a86">Our team brings over <strong>20+ years</strong> of combined industry experience across healthcare, logistics, finance and enterprise platforms.</p>
	</div>
	<div style="flex:0 0 220px;text-align:center;">
		<img src="/assets/souldoc/wider_tablet.png" alt="Consulting visual" style="width:180px;border-radius:8px;box-shadow:0 12px 30px rgba(11,23,38,0.06);" />
	</div>
</div>

{% endcapture %}

{% capture services %}

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;">
	<div style="padding:14px;border-radius:12px;background:linear-gradient(180deg,#e8f5ff,#fff);border:1px solid rgba(11,23,38,0.04);">
		<h4 style="margin:0 0 8px 0;color:#2b6fd6">Data strategy & governance</h4>
		<p style="margin:0;color:#6b7a86">Roadmaps, data ownership, privacy-by-design and compliance for regulated domains.</p>
	</div>
	<div style="padding:14px;border-radius:12px;background:linear-gradient(180deg,#fff7e6,#fff);border:1px solid rgba(11,23,38,0.04);">
		<h4 style="margin:0 0 8px 0;color:#f57c00">Analytics & BI</h4>
		<p style="margin:0;color:#6b7a86">Dashboards, user journeys and KPIs that tie analytics to business outcomes.</p>
	</div>
	<div style="padding:14px;border-radius:12px;background:linear-gradient(180deg,#e8fbee,#fff);border:1px solid rgba(11,23,38,0.04);">
		<h4 style="margin:0 0 8px 0;color:#43a047">AI & ML</h4>
		<p style="margin:0;color:#6b7a86">Model design, validation, MLOps and explainability focused on operational impact.</p>
	</div>
	<div style="padding:14px;border-radius:12px;background:linear-gradient(180deg,#f3e5f5,#fff);border:1px solid rgba(11,23,38,0.04);">
		<h4 style="margin:0 0 8px 0;color:#6a1b9a">Cloud & data engineering</h4>
		<p style="margin:0;color:#6b7a86">Scalable data platforms, pipelines and integrations on AWS/Azure/GCP.</p>
	</div>
</div>

{% endcapture %}

{% capture experience %}

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
	<div style="flex:0 0 120px;background:#fff;padding:12px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);text-align:center;">
		<div style="font-size:24px;font-weight:800;color:#2b6fd6">20+</div>
		<div style="font-size:12px;color:#6b7a86">Years experience</div>
	</div>
	<div style="flex:1;color:#33475b">Our consultants have deep domain expertise across healthcare, scheduling systems, finance and logistics — we combine technical leadership with delivery capability to get pilots into production.</div>
</div>

{% endcapture %}

{% capture process %}

<ol style="color:#6b7a86;margin-top:12px">
	<li><strong>Discover</strong> — align objectives and map useful metrics.</li>
	<li><strong>Pilot</strong> — rapid, measurable experiments with focused scope.</li>
	<li><strong>Scale</strong> — productionise, monitor and handover to your teams.</li>
</ol>

{% endcapture %}

{% capture cta %}

<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">
	<div style="flex:1;min-width:200px;color:#33475b">Ready to turn data into predictable outcomes? Book a discovery call to scope a pilot.</div>
	<div style="flex:0 0 auto">
		<a href="/contact/" style="display:inline-block;background:#2b6fd6;color:#fff;padding:10px 16px;border-radius:10px;text-decoration:none;font-weight:700;">Start a pilot</a>
	</div>
</div>

{% endcapture %}

{% include card.html content=intro %}
{% include card.html content=services %}
{% include card.html content=experience %}
{% include card.html content=process %}
{% include card.html content=cta %}
