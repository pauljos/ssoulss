---
layout: page
title: Consulting
permalink: /consulting/
---

{% capture intro %}

<div style="background:linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);border:2px solid rgba(255,255,255,0.4);border-radius:16px;padding:24px;margin-bottom:20px;box-shadow:0 8px 32px rgba(0,0,0,0.2), 0 4px 16px rgba(102,126,234,0.3);">
  <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
    <div style="flex:1;min-width:240px;">
      <h2 style="margin:0 0 12px 0;color:#fff;font-size:24px;font-weight:700;text-shadow:0 2px 8px rgba(0,0,0,0.2);">Consulting — Data, AI & Cloud Engineering</h2>
      <p style="margin:0;color:rgba(255,255,255,0.95);font-size:15px;line-height:1.5;text-shadow:0 1px 4px rgba(0,0,0,0.15);">We help organisations turn data into measurable outcomes. Our consulting covers data strategy, analytics, AI/ML, and cloud data engineering — supporting discovery, pilots and production rollouts.</p>
      <p style="margin-top:12px;color:rgba(255,255,255,0.9);font-size:14px;text-shadow:0 1px 4px rgba(0,0,0,0.15);">Our team brings over <strong style="color:#fff;">20+ years</strong> of combined industry experience across healthcare, logistics, finance and enterprise platforms.</p>
    </div>
    <div style="flex:0 0 220px;text-align:center;">
      <img src="/assets/souldoc/wider_tablet.png" alt="Consulting visual" style="width:180px;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.2);border:2px solid rgba(255,255,255,0.3);" />
    </div>
  </div>
</div>

{% endcapture %}

{% capture services %}

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;">
	<div style="padding:20px;border-radius:12px;background:#fff;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
		<h4 style="margin:0 0 8px 0;color:#0095f6;font-size:16px;font-weight:600;">Data strategy & governance</h4>
		<p style="margin:0;color:#8e8e8e;font-size:14px;line-height:1.5;">Roadmaps, data ownership, privacy-by-design and compliance for regulated domains.</p>
	</div>
	<div style="padding:20px;border-radius:12px;background:#fff;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
		<h4 style="margin:0 0 8px 0;color:#f57c00;font-size:16px;font-weight:600;">Analytics & BI</h4>
		<p style="margin:0;color:#8e8e8e;font-size:14px;line-height:1.5;">Dashboards, user journeys and KPIs that tie analytics to business outcomes.</p>
	</div>
	<div style="padding:20px;border-radius:12px;background:#fff;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
		<h4 style="margin:0 0 8px 0;color:#43a047;font-size:16px;font-weight:600;">AI & ML</h4>
		<p style="margin:0;color:#8e8e8e;font-size:14px;line-height:1.5;">Model design, validation, MLOps and explainability focused on operational impact.</p>
	</div>
	<div style="padding:20px;border-radius:12px;background:#fff;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
		<h4 style="margin:0 0 8px 0;color:#6a1b9a;font-size:16px;font-weight:600;">Cloud & data engineering</h4>
		<p style="margin:0;color:#8e8e8e;font-size:14px;line-height:1.5;">Scalable data platforms, pipelines and integrations on AWS/Azure/GCP.</p>
	</div>
</div>

{% endcapture %}

{% capture experience %}

<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-top:16px;">
	<div style="flex:0 0 120px;background:#fff;padding:16px;border-radius:12px;border:1px solid #dbdbdb;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
		<div style="font-size:24px;font-weight:700;color:#0095f6">20+</div>
		<div style="font-size:12px;color:#8e8e8e">Years experience</div>
	</div>
	<div style="flex:1;color:#262626;font-size:14px;line-height:1.5;">Our consultants have deep domain expertise across healthcare, scheduling systems, finance and logistics — we combine technical leadership with delivery capability to get pilots into production.</div>
</div>

{% endcapture %}

{% capture process %}

<ol style="color:#262626;margin-top:16px;font-size:14px;line-height:1.6;">
	<li style="margin-bottom:8px;"><strong>Discover</strong> — align objectives and map useful metrics.</li>
	<li style="margin-bottom:8px;"><strong>Pilot</strong> — rapid, measurable experiments with focused scope.</li>
	<li><strong>Scale</strong> — productionise, monitor and handover to your teams.</li>
</ol>

{% endcapture %}

{% capture cta %}

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;">
	<div style="flex:1;min-width:200px;color:#262626;font-size:15px;line-height:1.5;">Ready to turn data into predictable outcomes? Book a discovery call to scope a pilot.</div>
	<div style="flex:0 0 auto">
		<a href="/contact/" style="display:inline-block;background:#0095f6;color:#fff;padding:9px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Start a pilot</a>
	</div>
</div>

{% endcapture %}

{% include card.html content=intro %}
{% include card.html content=services %}
{% include card.html content=experience %}
{% include card.html content=process %}
{% include card.html content=cta %}
