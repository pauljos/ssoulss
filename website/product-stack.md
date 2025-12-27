---
layout: page
title: Product Stack
permalink: /product-stack/
{% capture stack_content %}

<div style="margin-bottom:20px;">
	<span style="font-size:24px;margin-right:8px;">🧰</span><span style="font-size:20px;font-weight:700;color:#262626;">Product Stack</span>
</div>

<p style="color:#262626;font-size:15px;line-height:1.5;margin-bottom:16px;">Our product stack focuses on AI and developer-friendly engineering:</p>

<ul style="color:#262626;font-size:14px;line-height:1.7;margin:0 0 24px 0;padding-left:24px;">
	<li><strong>LLM Ops:</strong> Model fine-tuning, prompt management, and evaluation.</li>
	<li><strong>MLOps:</strong> CI/CD for ML, data versioning, and retraining pipelines.</li>
	<li><strong>Data pipelines:</strong> Secure ETL and streaming integrations.</li>
	<li><strong>Governance:</strong> Access control, auditing, and model explainability.</li>
</ul>

<div style="margin:24px 0;">
	<span style="font-size:20px;margin-right:6px;">🏗️</span><span style="font-size:18px;font-weight:600;color:#262626;">Architecture</span>
</div>

<img src="/assets/images/hero-illustration.svg" alt="Architecture diagram" style="width:100%;max-width:600px;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.12);" />

<div style="margin:24px 0 12px 0;">
	<span style="font-size:20px;margin-right:6px;">🔌</span><span style="font-size:18px;font-weight:600;color:#262626;">Compatibility</span>
</div>

<p style="color:#262626;font-size:14px;line-height:1.5;margin:0 0 8px 0;"><strong>Cloud:</strong> AWS, Azure, GCP</p>
<p style="color:#262626;font-size:14px;line-height:1.5;margin:0 0 24px 0;"><strong>Frameworks:</strong> PyTorch, TensorFlow</p>

<div style="margin:24px 0 12px 0;">
	<span style="font-size:20px;margin-right:6px;">🛡️</span><span style="font-size:18px;font-weight:600;color:#262626;">Security & Compliance</span>
</div>

<p style="color:#262626;font-size:14px;line-height:1.5;margin:0;">We design systems with encryption, role-based access, and audit trails to meet industry compliance requirements (including healthcare where applicable). Our architecture is suitable for regulated and non-regulated industries alike.</p>

{% endcapture %}

{% include card.html content=stack_content %}
