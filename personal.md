---
layout: blogs-list
title: Personal
permalink: /blog/personal/
---

<h1 class="title-spacing">{{ page.title }}</h1>

<section class="blogs">

{% for post in site.categories.Personal %}
  <section class="blog">
    <a href="{{ post.url }}"><img src="{{ post.background-image }}"></a>
    <h2 class="custom-post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
    {% assign current_year = 'now' | date: "%Y" %}
    {% assign post_year = post.date | date: "%Y" %}
    <p class="custom-post-date">
      {% if post_year == current_year %}
        {{ post.date | date: "%b %-d"}}
      {% else %}
        {{ post.date | date: "%b %-d, %Y"}}
      {% endif %}
    </p>
    <p class="custom-post-content">{{ post.content | strip_html | truncatewords:40 }}</p>
  </section>
{% endfor %}

</section>
