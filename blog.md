---
layout: blogs-list
title: Blog
permalink: /blog/
---

<h1 class="post-title title-spacing">Latest Posts</h1>

{% for post in site.posts %}
  <section class="blog">
    <h2 class="custom-post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <!-- <p>{{ post.excerpt }}</p> -->
    <p class="custom-post-content">{{ post.content | strip_html | truncatewords:40 }}</p>
    {% assign category_count = post.categories | size %}
    {% if category_count != 0 %}
      <p class="post-categories"><img src="/assets/ikonate/tags.svg" class="blog-icon">
      {% for category in post.categories %}
        <a href="{{ site.baseurl }}{{ category | slugify }}/" class="category-link">{{ category }}</a>
      {% endfor %}
      </p>
    {% endif %}
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
