---
layout: contact
title: Contact
permalink: /contact/
order: 4
---

{%- assign social = site.data.social-media -%}

<div class="container d-flex flex-column justify-content-center">
    <div class="row">
        <div class="col-12">
            <h1 class="fw-bold">Contact me!</h1>
            <h2 class="fw-bold pt-5">I'm available for freelance work.<br>Send me a note if you wanna chat.</h2>
            <a href="{{ social.email.href }}{{ social.email.id }}" class="font-light-color"><h2 class="fw-bold pt-5">{{ social.email.id }}</h2></a>
        </div>
    </div>
</div>