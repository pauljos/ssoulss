---
layout: page
title: Privacy & Data Requests
permalink: /delete-request/
---

{% capture hero %}

<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;">
  <div style="flex:1;min-width:220px;">
    <h2 style="margin:0 0 8px 0;color:#0b1726;">Privacy & Data Requests</h2>
    <p style="margin:0;color:#33475b;font-size:16px;line-height:1.45;">Submit a request to delete, access or export personal data we hold about you. We'll acknowledge within 7 days and aim to complete requests within 30 days where possible.</p>
  </div>
  <div style="flex:0 0 120px;text-align:center;">
    <div style="background:#f6fbff;border-radius:12px;padding:12px;border:1px solid rgba(11,23,38,0.04);">🛡️</div>
  </div>
</div>

{% endcapture %}

{% capture guidance %}

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:12px;">
  <div style="padding:12px;border-radius:10px;background:linear-gradient(180deg,#fff,#fbfdff);border:1px solid rgba(11,23,38,0.04);">
    <h4 style="margin:0 0 8px 0;color:#2b6fd6">What to include</h4>
    <ul style="margin:0;color:#6b7a86">
      <li>Full name</li>
      <li>Email address used with our service</li>
      <li>Which request: <strong>Delete</strong> / <strong>Access</strong> / <strong>Export</strong></li>
      <li>Account identifier or brief description of data to act on</li>
    </ul>
  </div>
  <div style="padding:12px;border-radius:10px;background:linear-gradient(180deg,#fff,#fff7e6);border:1px solid rgba(11,23,38,0.04);">
    <h4 style="margin:0 0 8px 0;color:#f57c00">Proof of identity</h4>
    <p style="margin:0;color:#6b7a86">To prevent unauthorised requests we may ask for proof of identity (for example a verified email or redacted ID). We'll explain any verification needed in our response.</p>
  </div>
</div>

{% endcapture %}

{% capture form %}

<div style="margin-top:12px;padding:12px;border-radius:12px;border:1px solid rgba(11,23,38,0.04);background:linear-gradient(180deg,#fff,#fbfdff);">
  <form action="https://formspree.io/f/xanrgpld" method="POST" aria-label="Privacy request form" style="display:flex;flex-direction:column;gap:10px;max-width:720px;">
    <label for="req-name">Full name</label>
    <input id="req-name" name="name" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4;" />

    <label for="req-email">Email address</label>
    <input id="req-email" name="email" type="email" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4;" />

    <label for="req-type">Request type</label>
    <select id="req-type" name="request_type" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4;">
      <option value="delete">Delete my personal data</option>
      <option value="access">Access my personal data</option>
      <option value="export">Data export (machine-readable)</option>
    </select>

    <label for="req-details">Details (account identifier or scope)</label>
    <textarea id="req-details" name="details" rows="5" required style="padding:10px;border-radius:8px;border:1px solid #e6eef4;"></textarea>

    <label style="font-size:13px;color:#6b7a86;"><input type="checkbox" name="proof" value="yes" /> I understand proof of identity may be requested.</label>

    <div style="display:flex;justify-content:flex-end;margin-top:8px;">
      <button type="submit" style="background:#c62828;color:#fff;padding:10px 16px;border-radius:8px;border:0;font-weight:700;">Submit request</button>
    </div>
  </form>
</div>

{% endcapture %}

{% capture dsr %}

<div style="margin-top:12px;padding:12px;border-radius:12px;border:1px solid rgba(11,23,38,0.04);background:#fff;">
  <h4 style="margin:0 0 8px 0;color:#0b1726">How we handle deletion requests</h4>
  <ol style="color:#6b7a86;margin:0;padding-left:18px;">
    <li>We acknowledge within 7 days and may request verification to confirm identity.</li>
    <li>We assess the request and identify data we can delete vs records we must retain for legal reasons.</li>
    <li>We complete deletions or provide exported data within 30 days where possible and inform you of any exceptions.</li>
  </ol>
  <p style="margin-top:8px;color:#6b7a86">If you have questions about privacy or need help completing the form, please submit the form and choose the "Access" or "Delete" option — we'll respond via the channel you provide.</p>
</div>

{% endcapture %}

{% include card.html content=hero %}
{% include card.html content=guidance %}
{% include card.html content=form %}
{% include card.html content=dsr %}
