---
layout: page
title: Locations
permalink: /locations/
---

{% capture intro %}

📍 Our locations

We operate across APAC and EMEA. Below are our regional offices  click Contact for directions or meetings.

{% endcapture %}

{% capture india %}

📍 India — Kochi (APAC)

Our India team supports delivery and engineering. For inquiries or to request a meeting, please use the <a href="/contact/">Contact form</a> and mention "India" in your message.

{% endcapture %}

{% capture uk %}

📍 United Kingdom — London (EMEA)

Our UK team handles partnerships and client services. For inquiries or to request a meeting, please use the <a href="/contact/">Contact form</a> and mention "United Kingdom" in your message.

{% endcapture %}

{% capture map %}

🗺️ Map (illustrative)

An illustrative map showing our approximate office locations. For interactive directions or embedded maps, use the <a href="/contact/">Contact</a> page and we will provide precise links.

<div style="max-width:880px;margin:10px auto;padding:8px;background:linear-gradient(180deg,#fff,#fbfdff);border-radius:12px;border:1px solid rgba(11,23,38,0.04);">
	<div style="display:flex;gap:12px;align-items:center;">
		<div style="flex:1">
			<svg viewBox="0 0 1000 420" width="100%" height="260" role="img" aria-label="Map showing India and United Kingdom locations">
				<rect width="100%" height="100%" fill="#eaf6ff" rx="8"/>
				<g>
					<!-- Europe marker -->
					<circle cx="160" cy="100" r="10" fill="#ff416c" />
					<text x="178" y="104" font-family="Inter, Arial" font-size="14" fill="#072234">London</text>
					<!-- India marker -->
					<circle cx="650" cy="220" r="10" fill="#11998e" />
					<text x="670" y="224" font-family="Inter, Arial" font-size="14" fill="#072234">Kochi</text>
				</g>
			</svg>
		</div>
		<aside style="flex:0 0 260px;padding:12px;background:linear-gradient(180deg,#ffffff,#fbfdff);border-radius:10px;border:1px solid rgba(11,23,38,0.04);">
			<h4 style="margin:0 0 8px 0;color:#2b6fd6">Visit or meet our teams</h4>
			<p style="margin:0 0 8px;color:var(--muted)">We provide interactive directions on request. Use the <a href="/contact/">Contact form</a> and mention the region you'd like to meet in.</p>
			<p style="margin:0;color:var(--muted)"><strong>Need a meeting link?</strong> Choose a region in the form and we'll send a calendar invite with directions.</p>
		</aside>
	</div>
</div>

{% endcapture %}

{% capture cta %}

Need precise directions or an embedded interactive map? Use the <a href="/contact/">Contact</a> page and we'll provide interactive links or a PDF with step-by-step directions.

{% endcapture %}

{% include card.html content=intro %}
{% include card.html content=india %}
{% include card.html content=uk %}
{% include card.html content=map %}
{% include card.html content=cta %}
