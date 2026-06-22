---
layout: page
title: Categories
description: Browse Debug Dazzle articles by main topic.
permalink: /categories/
eyebrow: Browse
---

<div class="category-list-block">
  {% for category_name in site.category_order %}
    {% assign category_posts = site.posts | where: "category", category_name %}
    <a class="category-row" href="{{ '/category/' | append: category_name | downcase | append: '/' | relative_url }}">
      <span class="category-icon" aria-hidden="true">{% case category_name %}{% when 'Technical' %}⌘{% when 'Projects' %}▣{% when 'Personal' %}✦{% when 'Learning' %}◎{% else %}# {% endcase %}</span>
      <span class="category-row-copy">
        <strong>{{ category_name }}</strong>
        <small>
          {% case category_name %}
            {% when 'Technical' %}Programming, software engineering, architecture, and technical notes.
            {% when 'Projects' %}Personal projects, experiments, and build logs.
            {% when 'Personal' %}Reflections, opinions, and personal writing.
            {% when 'Learning' %}Notes from courses, books, research, and study.
          {% endcase %}
        </small>
      </span>
      <span class="category-count">{{ category_posts.size }}</span>
    </a>
  {% endfor %}
</div>
