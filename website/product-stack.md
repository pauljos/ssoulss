---
layout: page
title: Product Stack
permalink: /product-stack/
{% capture stack_content %}

## Product Stack

Our product stack focuses on AI and developer-friendly engineering:

- LLM Ops: Model fine-tuning, prompt management, and evaluation.
- MLOps: CI/CD for ML, data versioning, and retraining pipelines.
- Data pipelines: Secure ETL and streaming integrations.
- Governance: Access control, auditing, and model explainability.

### Architecture

![Architecture diagram](/assets/images/hero-illustration.svg)

### Compatibility

Cloud: AWS, Azure, GCP
Frameworks: PyTorch, TensorFlow

### Security & Compliance

We design systems with encryption, role-based access, and audit trails to meet industry compliance requirements (including healthcare where applicable). Our architecture is suitable for regulated and non-regulated industries alike.

{% endcapture %}

{% include card.html content=stack_content %}
