---
layout: page
title: Blogs
permalink: /blogs/
---

<div class="page-card">
  <h2>Our blog</h2>
  <p style="color:var(--muted);">Thoughts, case studies and notes from the team. Subscribe for updates.</p>

  {% if site.posts and site.posts != empty %}
  <ul style="list-style:none;padding:0;margin:18px 0;">
    {% for post in site.posts %}
      <li style="margin:12px 0;padding:12px;border-radius:10px;border:1px solid rgba(11,23,38,0.04);background:#fff;">
        <a href="{{ post.url }}" style="text-decoration:none;color:inherit;display:block">
          <strong style="display:block;font-size:16px;margin-bottom:6px">{{ post.title }}</strong>
          <small style="color:var(--muted)">{{ post.date | date: "%b %-d, %Y" }} • {{ post.excerpt | strip_html | truncate:120 }}</small>
        </a>
      </li>
    {% endfor %}
  </ul>
  {% else %}
    <p style="margin-top:18px;color:var(--muted);">No posts yet — create a post under <code>_posts/</code> using Jekyll's conventions. Example filename: <code>_posts/2025-12-16-my-first-post.md</code>.</p>
  {% endif %}
</div>
