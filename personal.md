---
layout: default
title: Personal
permalink: /blog/personal/
---

<h1>{{ page.title }}</h1>

{% for post in site.categories.Personal %}
  <section class="blog">
    <h2 class="custom-post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="custom-post-content">{{ post.content | strip_html | truncatewords:40 }}</p>
    {% assign current_year = 'now' | date: "%Y" %}
    {% assign post_year = post.date | date: "%Y" %}
    <p class="post-date"><img src="/assets/ikonate/clock.svg" class="blog-icon">
      {% if post_year == current_year %}
        {{ post.date | date: "%b %-d"}}
      {% else %}
        {{ post.date | date: "%b %-d, %Y"}}
      {% endif %}
    </p>
  </section>
{% endfor %}