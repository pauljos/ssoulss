---
layout: product-page
title: Blog
permalink: /blogs/
---

<!-- Hero Section -->
<section class="product-hero">
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-badges">
        <span class="hero-badge">📝 Latest Insights</span>
        <span class="hero-badge">💡 Thought Leadership</span>
      </div>
      <h1>Insights from our team</h1>
      <p>Thoughts, case studies, and insights on AI, data engineering, cloud platforms, and building products that matter. Stay updated with the latest trends and best practices.</p>
    </div>
    <div class="hero-image">
      <div style="width: 100%; max-width: 400px; padding: 40px; background: rgba(255, 255, 255, 0.1); border-radius: 16px; backdrop-filter: blur(10px);">
        <div style="font-size: 120px; text-align: center;">📚</div>
      </div>
    </div>
  </div>
</section>

<!-- Blog Posts Section -->
<section class="features-section">
  <div class="section-container">
    {% if site.posts and site.posts != empty %}
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
        {% for post in site.posts %}
          <a href="{{ post.url }}" style="text-decoration: none; color: inherit; display: block;">
            <div class="feature-box" style="height: 100%; transition: all 0.3s; cursor: pointer;">
              {% if post.image %}
                <div style="width: 100%; height: 200px; border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
                  <img src="{{ post.image }}" alt="{{ post.title | xml_escape }}" style="width: 100%; height: 100%; object-fit: cover;"/>
                </div>
              {% else %}
                <div style="width: 100%; height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                  <div style="color: #ffffff; font-weight: 700; font-size: 18px; text-align: center; padding: 24px;">
                    {{ post.title }}
                  </div>
                </div>
              {% endif %}
              
              <div style="font-size: 13px; color: #64748b; margin-bottom: 8px; font-weight: 600;">
                {{ post.date | date: "%B %-d, %Y" }}
              </div>
              
              <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 700; color: #0f172a; line-height: 1.3;">
                {{ post.title }}
              </h3>
              
              {% if post.excerpt %}
                <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin: 0;">
                  {{ post.excerpt | strip_html | truncatewords: 25 }}
                </p>
              {% endif %}
              
              <div style="margin-top: 16px; color: #2563eb; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 4px;">
                Read more →
              </div>
            </div>
          </a>
        {% endfor %}
      </div>
    {% else %}
      <div class="feature-box" style="max-width: 600px; margin: 0 auto; text-align: center; padding: 80px 40px;">
        <div style="font-size: 64px; margin-bottom: 24px;">📝</div>
        <h3 style="margin: 0 0 16px 0; font-size: 24px; color: #0f172a;">No posts yet</h3>
        <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin: 0;">
          We're working on bringing you valuable content. Check back soon for insights on AI, data engineering, and product development.
        </p>
      </div>
    {% endif %}
  </div>
</section>

<!-- Topics Section -->
<section class="gallery-section">
  <div class="section-container">
    <h2 class="section-title">Topics we cover</h2>
    <p class="section-subtitle">Exploring the intersection of technology, business, and innovation</p>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; max-width: 800px; margin: 48px auto 0;">
      <span style="background: #dbeafe; color: #1e40af; padding: 10px 20px; border-radius: 24px; font-size: 14px; font-weight: 600;">AI & Machine Learning</span>
      <span style="background: #e0e7ff; color: #4338ca; padding: 10px 20px; border-radius: 24px; font-size: 14px; font-weight: 600;">Data Engineering</span>
      <span style="background: #fce7f3; color: #be185d; padding: 10px 20px; border-radius: 24px; font-size: 14px; font-weight: 600;">Cloud Platforms</span>
      <span style="background: #dcfce7; color: #15803d; padding: 10px 20px; border-radius: 24px; font-size: 14px; font-weight: 600;">Product Development</span>
      <span style="background: #fef3c7; color: #a16207; padding: 10px 20px; border-radius: 24px; font-size: 14px; font-weight: 600;">Security & Compliance</span>
      <span style="background: #ddd6fe; color: #6b21a8; padding: 10px 20px; border-radius: 24px; font-size: 14px; font-weight: 600;">Case Studies</span>
      <span style="background: #fecaca; color: #991b1b; padding: 10px 20px; border-radius: 24px; font-size: 14px; font-weight: 600;">Best Practices</span>
      <span style="background: #cffafe; color: #155e75; padding: 10px 20px; border-radius: 24px; font-size: 14px; font-weight: 600;">Industry Insights</span>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
  <div class="cta-container">
    <h2>Want to collaborate on content?</h2>
    <p>We're always looking for guest contributors and collaboration opportunities. Get in touch to discuss your ideas.</p>
    <div class="hero-buttons">
      <a href="/contact/" class="btn-hero btn-hero-white">Get in Touch</a>
      <a href="/about/" class="btn-hero btn-hero-outline">About Us</a>
    </div>
  </div>
</section>

<style>
  .feature-box:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12) !important;
  }
</style>
