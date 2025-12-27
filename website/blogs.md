---
layout: page
title: Blogs
permalink: /blogs/
---

<div class="page-card">
  <h2 style="margin:0 0 8px 0;font-size:20px;font-weight:700;color:#262626;">Our blog</h2>
  <p style="color:#8e8e8e;margin:0 0 20px 0;">Thoughts, case studies and insights from our team.</p>

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
    <p style="margin-top:18px;color:#8e8e8e;">No posts yet — create a post under <code>_posts/</code> using Jekyll's conventions.</p>
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
