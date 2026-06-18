---
layout: page-modern
title: Blog
permalink: /blogs/
published: false
---

<!-- Page Hero -->
<section class="page-hero">
  <div class="page-hero-content">
    <h1>Insights & Updates</h1>
    <p>Thoughts, case studies, and technical insights from our team on AI, data engineering, and product development.</p>
  </div>
</section>

<!-- Main Content -->
<div class="page-content">
  <div class="content-section">
    {% if site.posts and site.posts != empty %}
      <div class="blog-grid">
        {% for post in site.posts %}
          <a href="{{ post.url }}" class="blog-card">
            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title | xml_escape }}" class="thumb" />
            {% endif %}
            <div class="overlay">
              <h3 class="title">{{ post.title }}</h3>
              <p class="meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.author %} • {{ post.author }}{% endif %}</p>
            </div>
          </a>
        {% endfor %}
      </div>
    {% else %}
      <div style="text-align: center; padding: 80px 24px; background: #f8fafc; border-radius: 16px;">
        <div style="font-size: 64px; margin-bottom: 24px; opacity: 0.3;">📝</div>
        <h2 style="font-size: 24px; color: #0f172a; margin-bottom: 12px;">No posts yet</h2>
        <p style="color: #64748b; font-size: 16px;">Check back soon for insights and updates from our team.</p>
      </div>
    {% endif %}
  </div>
</div>
