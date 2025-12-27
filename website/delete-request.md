---
layout: page
title: Privacy & Data Requests
permalink: /delete-request/
---

{% capture hero %}

<div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
  <div style="flex:1;min-width:240px;">
    <h2 style="margin:0 0 12px 0;color:#262626;font-size:24px;font-weight:700;">Privacy & Data Requests</h2>
    <p style="margin:0;color:#262626;font-size:15px;line-height:1.5;">Submit a request to delete, access or export personal data we hold about you. We'll acknowledge within 7 days and aim to complete requests within 30 days where possible.</p>
  </div>
  <div style="flex:0 0 120px;text-align:center;">
    <div style="background:#fff;border-radius:12px;padding:16px;border:1px solid #dbdbdb;font-size:32px;">🛡️</div>
  </div>
</div>

{% endcapture %}

{% capture guidance %}

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:16px;">
  <div style="padding:20px;border-radius:12px;background:#fff;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
    <h4 style="margin:0 0 12px 0;color:#0095f6;font-size:16px;font-weight:600;">What to include</h4>
    <ul style="margin:0;color:#262626;font-size:14px;line-height:1.6;padding-left:20px;">
      <li style="margin-bottom:6px;">Full name</li>
      <li style="margin-bottom:6px;">Email address used with our service</li>
      <li style="margin-bottom:6px;">Which request: <strong>Delete</strong> / <strong>Access</strong> / <strong>Export</strong></li>
      <li>Account identifier or brief description of data to act on</li>
    </ul>
  </div>
  <div style="padding:20px;border-radius:12px;background:#fff;border:1px solid #dbdbdb;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
    <h4 style="margin:0 0 12px 0;color:#f57c00;font-size:16px;font-weight:600;">Proof of identity</h4>
    <p style="margin:0;color:#262626;font-size:14px;line-height:1.6;">To prevent unauthorised requests we may ask for proof of identity (for example a verified email or redacted ID). We'll explain any verification needed in our response.</p>
  </div>
</div>

{% endcapture %}

{% capture form %}

<div style="margin-top:16px;padding:24px;border-radius:12px;border:1px solid #dbdbdb;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
  <form action="https://formspree.io/f/xanrgpld" method="POST" aria-label="Privacy request form" style="display:flex;flex-direction:column;gap:12px;max-width:720px;">
    <label for="req-name" style="display:block;color:#262626;font-size:14px;font-weight:600;margin-bottom:-6px;">Full name</label>
    <input id="req-name" name="name" required style="padding:10px 12px;border-radius:6px;border:1px solid #dbdbdb;background:#fafafa;font-size:14px;" />

    <label for="req-email" style="display:block;color:#262626;font-size:14px;font-weight:600;margin-bottom:-6px;">Email address</label>
    <input id="req-email" name="email" type="email" required style="padding:10px 12px;border-radius:6px;border:1px solid #dbdbdb;background:#fafafa;font-size:14px;" />

    <label for="req-type" style="display:block;color:#262626;font-size:14px;font-weight:600;margin-bottom:-6px;">Request type</label>
    <select id="req-type" name="request_type" required style="padding:10px 12px;border-radius:6px;border:1px solid #dbdbdb;background:#fafafa;font-size:14px;">
      <option value="delete">Delete my personal data</option>
      <option value="access">Access my personal data</option>
      <option value="export">Data export (machine-readable)</option>
    </select>

    <label for="req-details" style="display:block;color:#262626;font-size:14px;font-weight:600;margin-bottom:-6px;">Details (account identifier or scope)</label>
    <textarea id="req-details" name="details" rows="5" required style="padding:10px 12px;border-radius:6px;border:1px solid #dbdbdb;background:#fafafa;font-size:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;"></textarea>

    <label style="font-size:13px;color:#8e8e8e;"><input type="checkbox" name="proof" value="yes" /> I understand proof of identity may be requested.</label>

    <div style="display:flex;justify-content:flex-end;margin-top:8px;">
      <button type="submit" style="background:#c62828;color:#fff;padding:9px 24px;border-radius:8px;border:0;font-weight:600;font-size:14px;cursor:pointer;">Submit request</button>
    </div>
  </form>
</div>

{% endcapture %}

{% capture dsr %}

<div style="margin-top:16px;padding:20px;border-radius:12px;border:1px solid #dbdbdb;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.12);">
  <h4 style="margin:0 0 12px 0;color:#262626;font-size:16px;font-weight:600;">How we handle deletion requests</h4>
  <ol style="color:#262626;font-size:14px;line-height:1.6;margin:0;padding-left:20px;">
    <li style="margin-bottom:8px;">We acknowledge within 7 days and may request verification to confirm identity.</li>
    <li style="margin-bottom:8px;">We assess the request and identify data we can delete vs records we must retain for legal reasons.</li>
    <li>We complete deletions or provide exported data within 30 days where possible and inform you of any exceptions.</li>
  </ol>
  <p style="margin-top:16px;color:#8e8e8e;font-size:14px;line-height:1.6;">If you have questions about privacy or need help completing the form, please submit the form and choose the "Access" or "Delete" option — we'll respond via the channel you provide.</p>
</div>

{% endcapture %}

{% include card.html content=hero %}
{% include card.html content=guidance %}
{% include card.html content=form %}
{% include card.html content=dsr %}
