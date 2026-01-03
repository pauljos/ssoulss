---
layout: page-modern
title: Blog
permalink: /blogs/
---

<!-- Page Hero -->
<section class="page-hero" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
  <div class="page-hero-content">
    <h1 style="color: white;">Insights & Updates</h1>
    <p style="color: rgba(255, 255, 255, 0.9);">Thoughts, case studies, and technical insights from our team on AI, data engineering, and product development.</p>
  </div>
</section>

<!-- Main Content -->
<div class="page-content" style="background: #f8fafc;">
  <div class="content-section" style="max-width: 1280px; margin: 0 auto;">
    {% if site.posts and site.posts != empty %}
      <div class="blog-grid">
        {% for post in site.posts %}
          <a href="{{ post.url }}" class="blog-card">
            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title | xml_escape }}" />
            {% else %}
              <div style="width: 100%; height: 240px; background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 20px; text-align: center; padding: 40px; position: relative;">
                {{ post.title }}
              </div>
            {% endif %}
            <div class="blog-card-content">
              <div class="meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.author %} • {{ post.author }}{% endif %}</div>
              <h3>{{ post.title }}</h3>
              {% if post.excerpt %}
                <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
              {% else %}
                <p>Click to read this insightful article about {{ post.title | downcase }}.</p>
              {% endif %}
            </div>
          </a>
        {% endfor %}
      </div>
    {% else %}
      <div style="text-align: center; padding: 120px 24px; background: white; border-radius: 24px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
        <div style="font-size: 72px; margin-bottom: 24px; opacity: 0.5;">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2" style="display: inline-block;">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <h2 style="font-size: 32px; color: #0f172a; margin-bottom: 16px; font-weight: 800;">No posts yet</h2>
        <p style="color: #64748b; font-size: 18px; max-width: 500px; margin: 0 auto;">Check back soon for insights and updates from our team on AI, data engineering, and innovative solutions.</p>
      </div>
    {% endif %}
  </div>
</div>
