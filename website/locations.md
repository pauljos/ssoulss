---
layout: page
title: Locations
permalink: /locations/
---

{% capture intro %}

## Our locations

We operate across APAC and EMEA. Below are our regional offices — click Contact for directions or meetings.

{% endcapture %}

{% capture india %}

### India — Bangalore (APAC)

Address
<div style="color:var(--muted);margin-top:6px;">Block 5, Example Tech Park<br/>Koramangala, Bangalore — 560095<br/>India</div>

Phone: +91 80 1234 5678

Contact: <a href="mailto:info@ssoulss.com">info@ssoulss.com</a>

{% endcapture %}

{% capture uk %}

### United Kingdom — London (EMEA)

Address
<div style="color:var(--muted);margin-top:6px;">17 Example Street<br/>London — W1 2AA<br/>United Kingdom</div>

Phone: +44 20 7000 0000

Contact: <a href="mailto:info@ssoulss.com">info@ssoulss.com</a>

{% endcapture %}

{% capture map %}

### Map (illustrative)

Below is an illustrative map showing our approximate office locations. For interactive directions, use the Contact page.

<div style="max-width:880px;margin:10px auto;padding:12px;background:linear-gradient(180deg,#fff,#fbfdff);border-radius:10px;border:1px solid rgba(11,23,38,0.04);">
	<svg viewBox="0 0 1000 420" width="100%" height="240" role="img" aria-label="Map showing India and United Kingdom locations">
		<rect width="100%" height="100%" fill="#eaf6ff" rx="8"/>
		<g>
			<!-- Europe marker -->
			<circle cx="160" cy="100" r="8" fill="#2b6fd6" />
			<text x="178" y="104" font-family="Inter, Arial" font-size="14" fill="#072234">London</text>
			<!-- India marker -->
			<circle cx="650" cy="220" r="8" fill="#2b6fd6" />
			<text x="670" y="224" font-family="Inter, Arial" font-size="14" fill="#072234">Bangalore</text>
		</g>
	</svg>
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
