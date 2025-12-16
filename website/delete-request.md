---
layout: page
title: Privacy & Data Requests
permalink: /delete-request/
---

{% capture intro %}

## Privacy & Data Requests

You can request deletion, access, or a copy of personal data we hold about you. Please use the form below to tell us which request you are making and provide contact details so we can respond.

We aim to acknowledge all requests within 7 days and complete them within 30 days where possible.

{% endcapture %}

{% capture guidance %}

### What to include

- Full name
- Email address used with our service
- Phone number (optional but helpful)
- Which request: Delete / Access / Export
- Brief description of the data or account to which the request applies
- Proof of identity may be required to prevent unauthorised requests (for example, a verified email or a redacted ID)

For privacy queries, see our [Privacy policy](/privacy/) and [Policies](/policies/).

{% endcapture %}

{% capture form %}

### Submit a request

<form action="https://formspree.io/f/your-form-id" method="POST" aria-label="Privacy request form" style="display:flex;flex-direction:column;gap:10px;max-width:720px;">
  <label for="req-name">Full name</label>
  <input id="req-name" name="name" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4;" />

  <label for="req-email">Email address</label>
  <input id="req-email" name="email" type="email" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4;" />

  <label for="req-phone">Phone (optional)</label>
  <input id="req-phone" name="phone" type="tel" style="padding:10px;border-radius:8px;border:1px solid #e6eef4;" />

  <label for="req-type">Request type</label>
  <select id="req-type" name="request_type" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4;">
    <option value="delete">Delete my personal data</option>
    <option value="access">Access my personal data</option>
    <option value="export">Data export (machine-readable)</option>
  </select>

  <label for="req-details">Details (what to delete / scope / account identifier)</label>
  <textarea id="req-details" name="details" rows="6" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4;"></textarea>

  <label><input type="checkbox" name="proof" value="yes" /> I understand that proof of identity may be requested to fulfil this request.</label>

  <div style="display:flex;justify-content:flex-end;">
    <button type="submit" style="background:#c62828;color:#fff;padding:10px 16px;border-radius:8px;border:0;">Submit request</button>
  </div>
</form>

{% endcapture %}

{% include card.html content=intro %}
{% include card.html content=guidance %}
{% include card.html content=form %}
---
layout: page
title: Delete my data
permalink: /delete-request/
---

{% capture delete_content %}

# Request deletion of personal data (Data Subject Request)

If you would like ssoulss to delete personal data we hold about you, please follow the steps below.

1. Email: Send a request to info@ssoulss.com with subject "Delete my data" and include:
   - Your full name
   - Email address used with our service
   - Description of data or service account to delete
   - Proof of identity (a copy of an ID or an authenticated email from the account) — we need this to prevent unauthorised deletions.

2. What we will do:
   - We will acknowledge receipt within 7 days and tell you what we can delete and any records we must retain for legal reasons.
   - Where deletion is possible, we will remove or anonymise personal data within 30 days, unless an extended retention is required by law or contract.

3. Appeals and complaints:
   - If you are in the UK/EU you may contact your supervisory authority (for UK the ICO). In India you may take steps available under applicable law.

If you need data portability (a machine-readable copy), request "Data export" in your email.

For assistance: info@ssoulss.com

{% endcapture %}

{% include card.html content=delete_content %}
