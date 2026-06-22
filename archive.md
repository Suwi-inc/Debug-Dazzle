---
layout: page
title: Archive
description: All Debug Dazzle articles arranged by year.
permalink: /archive/
eyebrow: Timeline
---

<div class="archive-list">
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
    <section class="archive-year">
      <h2>{{ year.name }}</h2>
      <div class="archive-items">
        {% for post in year.items %}
          <article class="archive-item">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d" }}</time>
            <div>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <p>{{ post.description | default: post.excerpt | strip_html | truncate: 120 }}</p>
            </div>
            {% if post.category %}<span class="badge">{{ post.category }}</span>{% endif %}
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>
