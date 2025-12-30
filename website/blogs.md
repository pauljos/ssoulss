---
layout: page
title: Blogs
permalink: /blogs/
---

<div style="background:linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);border:2px solid rgba(255,255,255,0.4);border-radius:16px;padding:24px;margin-bottom:20px;box-shadow:0 8px 32px rgba(0,0,0,0.2), 0 4px 16px rgba(102,126,234,0.3);">
  <h2 style="margin:0 0 8px 0;font-size:20px;font-weight:700;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,0.2);">Our blog</h2>
  <p style="color:rgba(255,255,255,0.95);margin:0;text-shadow:0 1px 4px rgba(0,0,0,0.15);">Thoughts, case studies and insights from our team.</p>
</div>

<div class="page-card">
  {% if site.posts and site.posts != empty %}
    <div class="blog-grid">
      {% for post in site.posts %}
        <a href="{{ post.url }}" style="text-decoration:none;color:inherit;display:block;position:relative;">
          <article class="blog-card">
            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title | xml_escape }}" class="thumb"/>
              <div class="overlay">
                <div class="title">{{ post.title }}</div>
                <div class="meta">{{ post.date | date: "%b %-d, %Y" }}</div>
              </div>
            {% else %}
              <div style="background:linear-gradient(135deg,#667eea,#764ba2);width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;text-align:center;padding:12px;">
                {{ post.title }}
              </div>
            {% endif %}
          </article>
        </a>
      {% endfor %}
    </div>
  {% else %}
    <p style="margin-top:18px;color:#262626;font-size:15px;font-weight:500;text-align:center;padding:40px 20px;background:#f8f9fa;border-radius:8px;">No posts yet — create a post under <code style="background:#e9ecef;padding:2px 8px;border-radius:4px;color:#495057;">_posts/</code> using Jekyll's conventions.</p>
  {% endif %}
</div>

<style>
  /* Mobile-optimized blog grid */
  @media (max-width:735px){
    .blog-grid{
      grid-template-columns:repeat(2,1fr) !important;
      gap:3px !important;
    }
    .blog-card .title{
      font-size:12px !important;
    }
    .blog-card .meta{
      font-size:10px !important;
    }
  }
  
  @media (max-width:480px){
    .blog-grid{
      grid-template-columns:1fr !important;
      gap:12px !important;
    }
    .blog-card{
      aspect-ratio:16/9 !important;
    }
  }
</style>
