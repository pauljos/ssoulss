ssoulss website (Jekyll + Minimal Mistakes)

This folder contains a small Jekyll site scaffold that uses the Minimal Mistakes remote theme. The site source lives under `website/` and is built by the GitHub Actions workflow `/.github/workflows/deploy-pages.yml`.

Quick notes

- The site uses the `mmistakes/minimal-mistakes` remote theme.
- The `CNAME` file is set to `ssoulss.com`. Make sure DNS points to GitHub Pages.
- To build locally:

```bash
# from repo root
cd website
# install bundler if needed
gem install bundler
bundle install
bundle exec jekyll serve
```

If you'd like a different canonical URL or more pages, tell me what content you want and I will add it.
