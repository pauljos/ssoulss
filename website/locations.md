---
layout: page
title: Locations
permalink: /locations/
---

{% capture intro %}

<div style="margin-bottom:12px;">
	<span style="font-size:24px;margin-right:8px;">📍</span><span style="font-size:20px;font-weight:700;color:#262626;">Our locations</span>
</div>

<p style="color:#262626;font-size:15px;line-height:1.5;margin:0;">We operate across APAC and EMEA. Below are our regional offices — click Contact for directions or meetings.</p>

{% endcapture %}

{% capture india %}

<div style="padding:20px;border-radius:12px;background:#fff;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
	<div style="margin-bottom:8px;">
		<span style="font-size:18px;margin-right:6px;">📍</span><span style="font-size:16px;font-weight:600;color:#262626;">India — Kochi (APAC)</span>
	</div>
	<p style="color:#8e8e8e;font-size:14px;line-height:1.5;margin:0;">Our India team supports delivery and engineering. For inquiries or to request a meeting, please use the <a href="/contact/" style="color:#0095f6;text-decoration:none;">Contact form</a> and mention "India" in your message.</p>
</div>

{% endcapture %}

{% capture uk %}

<div style="padding:20px;border-radius:12px;background:#fff;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
	<div style="margin-bottom:8px;">
		<span style="font-size:18px;margin-right:6px;">📍</span><span style="font-size:16px;font-weight:600;color:#262626;">United Kingdom — London (EMEA)</span>
	</div>
	<p style="color:#8e8e8e;font-size:14px;line-height:1.5;margin:0;">Our UK team handles partnerships and client services. For inquiries or to request a meeting, please use the <a href="/contact/" style="color:#0095f6;text-decoration:none;">Contact form</a> and mention "United Kingdom" in your message.</p>
</div>

{% endcapture %}

{% capture map %}

<div style="margin-bottom:12px;">
	<span style="font-size:18px;margin-right:6px;">🗺️</span><span style="font-size:16px;font-weight:600;color:#262626;">Map (illustrative)</span>
</div>

<p style="color:#8e8e8e;font-size:14px;line-height:1.5;margin-bottom:16px;">An illustrative map showing our approximate office locations. For interactive directions or embedded maps, use the <a href="/contact/" style="color:#0095f6;text-decoration:none;">Contact</a> page and we will provide precise links.</p>

<div style="max-width:880px;margin:10px auto;padding:20px;background:#fff;border-radius:12px;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
	<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
		<div style="flex:1;min-width:300px;">
			<svg viewBox="0 0 1000 420" width="100%" height="260" role="img" aria-label="Map showing India and United Kingdom locations">
				<rect width="100%" height="100%" fill="#fafafa" rx="8"/>
				<g>
					<!-- Europe marker -->
					<circle cx="160" cy="100" r="10" fill="#0095f6" />
					<text x="178" y="104" font-family="Inter, Arial" font-size="14" fill="#262626">London</text>
					<!-- India marker -->
					<circle cx="650" cy="220" r="10" fill="#0095f6" />
					<text x="670" y="224" font-family="Inter, Arial" font-size="14" fill="#262626">Kochi</text>
				</g>
			</svg>
		</div>
		<aside style="flex:0 0 260px;padding:16px;background:#fff;border-radius:10px;border:1px solid #dbdbdb;">
			<h4 style="margin:0 0 8px 0;color:#262626;font-size:15px;font-weight:600;">Visit or meet our teams</h4>
			<p style="margin:0 0 8px;color:#8e8e8e;font-size:13px;line-height:1.5;">We provide interactive directions on request. Use the <a href="/contact/" style="color:#0095f6;text-decoration:none;">Contact form</a> and mention the region you'd like to meet in.</p>
			<p style="margin:0;color:#8e8e8e;font-size:13px;line-height:1.5;"><strong style="color:#262626;">Need a meeting link?</strong> Choose a region in the form and we'll send a calendar invite with directions.</p>
		</aside>
	</div>
</div>

{% endcapture %}

{% capture cta %}

<p style="color:#262626;font-size:14px;line-height:1.5;margin:0;">Need precise directions or an embedded interactive map? Use the <a href="/contact/" style="color:#0095f6;text-decoration:none;">Contact</a> page and we'll provide interactive links or a PDF with step-by-step directions.</p>

{% endcapture %}

{% include card.html content=intro %}
{% include card.html content=india %}
{% include card.html content=uk %}
{% include card.html content=map %}
{% include card.html content=cta %}
