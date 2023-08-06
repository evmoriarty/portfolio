---
layout: blog-list
title: Tech
permalink: /blog/tech/
---

<div class="container-fluid pt-5 pb-4">

  <div class="container">
    <h1 class="blog-category-header mb-4">{{ page.title }}</h1>
    <div class="row">
      {% for post in site.categories.Tech %}
        <section class="blog col-md-6 col-sm-12 mb-4">
          <div class="blog-container h-100">
            <a href="{{ post.url }}"><img class="w-100" src="{{ post.background-image }}"></a>
            <div class="px-2">
              <h4 class="mt-4 mb-3"><a href="{{ post.url }}">{{ post.title }}</a></h4>
              {% assign current_year = 'now' | date: "%Y" %}
              {% assign post_year = post.date | date: "%Y" %}
              <p class="custom-post-date"><!--<img src="/assets/ikonate/clock.svg" class="blog-icon"> -->
                {% if post_year == current_year %}
                  {{ post.date | date: "%b %-d"}}
                {% else %}
                  {{ post.date | date: "%b %-d, %Y"}}
                {% endif %}
              </p>
              <p class="custom-post-content">{{ post.content | strip_html | truncatewords:40 }}</p>
              {% assign category_count = post.categories | size %}
              {% if category_count != 0 %}
                <p class="post-categories"><img src="/assets/ikonate/tags.svg" class="blog-icon">
                {% for category in post.categories %}
                  <a href="{{ site.baseurl }}{{ category | slugify }}/" class="category-link">{{ category }}</a>
                {% endfor %}
                </p>
              {% endif %}
            </div>
          </div>
        </section>
      {% endfor %}
    </div>
  </div>

</div>