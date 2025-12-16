---
layout: page
title: Blogs
permalink: /blogs/
---

<div class="page-card">
  <h2>Our blog</h2>
  <p style="color:var(--muted);">Thoughts, case studies and notes from the team. Subscribe for updates.</p>

  {% if site.posts and site.posts != empty %}
    <div class="blog-grid">
      {% assign accents = "accent-1,accent-2,accent-3,accent-4" | split:',' %}
      {% for post in site.posts %}
        {% assign a = accents[forloop.index0 | modulo: accents.size ] %}
        <article class="blog-card">
          <div class="accent-strip {{ a }}" aria-hidden="true"></div>
          {% if post.image %}
            <img src="{{ post.image }}" alt="{{ post.title }}" class="thumb"/>
          {% endif %}
          <a href="{{ post.url }}" style="text-decoration:none;color:inherit;display:block">
            <div class="title">{{ post.title }}</div>
            <div class="meta">{{ post.date | date: "%b %-d, %Y" }}</div>
            <div class="excerpt">{{ post.excerpt | strip_html | truncate:140 }}</div>
            <div style="margin-top:8px;"><span class="read-btn">Read</span></div>
          </a>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p style="margin-top:18px;color:var(--muted);">No posts yet — create a post under <code>_posts/</code> using Jekyll's conventions. Example filename: <code>_posts/2025-12-16-my-first-post.md</code>.</p>
  {% endif %}
</div>
