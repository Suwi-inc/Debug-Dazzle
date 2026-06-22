# Debug Dazzle

Debug Dazzle is a minimal, clean, article-first personal and technical blog built with Jekyll and designed for GitHub Pages. I created this blog to record my thoughts, learnings and everything that I find intresting and worth sharing.

## Main Features of Debug Dazzle

- Static Jekyll blog
- GitHub Pages deployment
- Markdown-based posts
- Article-first homepage
- Category-based organization
- Archive page
- About page
- Minimal bright light theme
- Dark mode with saved reader preference
- Repeating hero pattern with tech/gadget icons
- Syntax-highlighted code blocks
- Copy-code button
- Optional generated table of contents on long posts
- Google Analytics 4 integration through `_config.yml`
- Placeholder for future comments
- RSS feed, sitemap, and SEO tags
- Responsive mobile-first layout

## If you wish to clone this repo and create your own blog site you can check out the following section.

## Requirements

Install Ruby and Bundler first.

```bash
ruby -v
gem install bundler
```

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://localhost:4000
```

## Create a new post

Add a new Markdown file inside `_posts` using this filename format:

```text
YYYY-MM-DD-post-title.md
```

Example:

```text
_posts/2026-06-22-my-new-article.md
```

Use this front matter:

```yaml
---
layout: post
title: "My New Article"
date: 2026-06-22
category: Technical
tags: [software-engineering, notes]
description: "A short description of the article."
featured: false
comments: false
image: /assets/img/clean-architecture.svg
image_alt: "Description of the image"
---
```

Recommended categories (these are the ones I use for debug dazzle):

- Technical
- Projects
- Personal
- Learning

## Configure the site

Edit `_config.yml`:

```yaml
title: "Debug Dazzle"
tagline: "Personal thoughts, technical notes, and software engineering articles."
url: "https://example.com"
google_analytics_id: ""
```

Leave `google_analytics_id` empty to disable analytics  or add your google analytics 4 id to track analytics.

## Custom domain

Replace the contents of `CNAME` with your domain:

```text
example.com
```

Configure your domain DNS provider to point `example.com` to GitHub Pages.

## Deploy to GitHub Pages

This project includes a GitHub Actions workflow at:

```text
.github/workflows/pages.yml
```

Recommended GitHub Pages settings:

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push to the `main` branch.
5. The workflow will build and deploy the site.

## Google Analytics 4

Add your GA4 Measurement ID in `_config.yml`:

```yaml
google_analytics_id: ""
```

Analytics only loads when the site is built with:

```text
JEKYLL_ENV=production
```

The GitHub Actions workflow already sets this environment variable.

## Comments

Comments are intentionally disabled in the first version.

The post layout already supports future comments using:

```yaml
comments: true
```

The reusable include is here:

```text
_includes/comments.html
```

When ready, add a static-compatible comment provider there.

## Search

Search is not included in the first version. Article discovery is handled through:

- Homepage
- Categories
- Archive
- Featured/latest articles

## License

Use this project however you like. Update this section with your preferred license before publishing.

## Windows troubleshooting

If Jekyll fails with `cannot load such file -- tzinfo`, run:

```bash
bundle install
bundle exec jekyll serve
```

The `Gemfile` includes `tzinfo` and `tzinfo-data` for Windows timezone support. If auto-regeneration does not work on Windows, the `wdm` gem is also included for file watching.

