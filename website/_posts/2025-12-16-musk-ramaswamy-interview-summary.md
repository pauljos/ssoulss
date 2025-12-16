---
layout: post
title: "The New GitHub Actions Pricing: What You Need to Know"
date: 2025-12-16 10:00:00 +0000
categories: [opinion, interviews]
image: /assets/images/blogs/musk-ramaswamy-illustration.svg
---


A clear, plain-English summary of the recent changes GitHub announced for Actions pricing and platform fees.

## ✅ 1. The Good News: The Free Quota Remains the Same

The core free offering for individuals and small teams using the GitHub Free plan is unchanged:

Scenario
Free Quota
Private Repositories (GitHub Free)
2,000 minutes per month (using standard GitHub-hosted runners).
Public (Open Source) Repositories
Free and Unlimited (using standard GitHub-hosted runners).

If you are an individual developer or a small team using the minutes GitHub provides to run your CI/CD, you are not affected by the loss of your free minutes.

## ⚠️ 2. The Big Change: The New Platform Fee

GitHub is introducing a new fee for the underlying control plane (the service that orchestrates and manages the workflows), which previously was free for self-hosted users.

What is it? A $0.002 per-minute Actions cloud platform charge.

Who is affected? This charge applies primarily to private repositories using self-hosted runners.

Effective Date: This new fee will begin on March 1, 2026.

### Why is this a big deal?

Before this change, if you used your own server or cloud account (a self-hosted runner) to run your CI/CD, you only paid for your own compute. You paid $0 to GitHub for the orchestration. Now, you will pay the new $0.002/minute fee to GitHub for simply using their platform to run the workflow, even if the actual compute is on your machine.

## 💸 3. Price Reduction for Paid Users

To offset this change and improve the value of their product, GitHub is also reducing the cost of their standard GitHub-hosted runners by up to 39% for paid customers.

This price reduction goes into effect on January 1, 2026.

For GitHub-hosted runners, the new $0.002 platform charge is already included in the new, lower listed price.

## 📊 Summary Table of Impact

Runner Type | Repository Type | Old Pricing to GitHub | New Pricing to GitHub (Mar 2026)
---|---:|---:|---:
GitHub-Hosted | Private (Free Tier) | 2,000 Minutes Free | 2,000 Minutes Free
GitHub-Hosted | Public | Free & Unlimited | Free & Unlimited
Self-Hosted | Private (All Tiers) | $0 per minute | $0.002 per minute platform fee

If you'd like, I can also:

- Format this post with a cleaner table, linked sources and small callouts.
- Update the post date or categories if you want it to appear elsewhere on the site.
- Add an author, tags or an image.

Let me know if you want any of those refinements.

