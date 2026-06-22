---
layout: page
title: About
description: A short introduction to the person behind Debug Dazzle.
permalink: /about/
eyebrow: Author
---

<div class="about-social" aria-label="Profile links">
  <a class="about-link-card" href="{{ site.author.github | default: '#' }}"{% unless site.author.github %} aria-disabled="true"{% endunless %}>
    <span class="about-link-icon" aria-hidden="true">⌥</span>
    <span><strong>GitHub</strong><small>Code &amp; projects</small></span>
  </a>
  <a class="about-link-card" href="{{ site.author.linkedin | default: '#' }}"{% unless site.author.linkedin %} aria-disabled="true"{% endunless %}>
    <span class="about-link-icon" aria-hidden="true">in</span>
    <span><strong>LinkedIn</strong><small>Professional</small></span>
  </a>
  <a class="about-link-card" href="{{ site.author.twitter | default: '#' }}"{% unless site.author.twitter %} aria-disabled="true"{% endunless %}>
    <span class="about-link-icon" aria-hidden="true">𝕏</span>
    <span><strong>X / Twitter</strong><small>Updates</small></span>
  </a>
  <a class="about-link-card" href="{% if site.author.email %}mailto:{{ site.author.email }}{% else %}#{% endif %}"{% unless site.author.email %} aria-disabled="true"{% endunless %}>
    <span class="about-link-icon" aria-hidden="true">@</span>
    <span><strong>Email</strong><small>Get in touch</small></span>
  </a>
</div>

<figure class="about-avatar">
  <img src="{{ '/assets/img/about.png' | relative_url }}" alt="Portrait of {{ site.author.name | default: site.title }}">
  <figcaption>{{ site.author.name | default: site.title }}</figcaption>
</figure>

<div class="about-bubbles">
  <section class="about-bubble">
    <h2>About me</h2>
    <p>I’m {{ site.author.name | default: 'the author of Debug Dazzle' }} — a software engineer, problem solver, and lifelong learner. I write about software engineering, technical learning, personal projects, and the lessons that come from building and debugging real things.</p>
    <p>This blog is my place for clear notes, practical ideas, and reflections on problem solving.</p>
  </section>
  <section class="about-bubble">
    <h2>What you’ll find here</h2>
    <ul>
      <li><strong>Technical</strong> — programming, tools, and software engineering.</li>
      <li><strong>Projects</strong> — build logs from experiments and side projects.</li>
      <li><strong>Learning</strong> — notes from books, courses, and practice.</li>
      <li><strong>Personal</strong> — reflections on productivity and growth.</li>
    </ul>
  </section>
</div>
