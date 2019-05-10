---
layout: default
title: Blog
permalink: /blog/
order: 3
---

<h1>Latest Posts</h1>

{% for post in site.posts %}
  <section class="blog">
    <h2 class="custom-post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <!-- <p>{{ post.excerpt }}</p> -->
    <p class="custom-post-content">{{ post.content | strip_html | truncatewords:40 }}</p>
    {% assign current_year = 'now' | date: "%Y" %}
    {% assign post_year = post.date | date: "%Y" %}
    {% if post_year == current_year %}
      <p class="post-date">{{ post.date | date: "%b %-d"}}</p>
    {% else %}
      <p class="post-date">{{ post.date | date: "%b %-d, %Y"}}</p>
    {% endif %}
  </section>
{% endfor %}
