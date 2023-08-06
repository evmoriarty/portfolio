---
layout: about
title: About
permalink: /about/
order: 2
---

{%- assign social = site.data.social-media -%}

<div class="container d-flex flex-column justify-content-center">
    <div class="row">
        <div class="col-12">
            <h1 class="fw-bold">About</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <h3 class="fw-bold pt-5">This is me:</h3>
            <img class="pt-5" src="/assets/little-me-cropped.jpg">
            <h3 class="fw-bold pt-5">Ok that WAS me some years ago,<br>now I look like this:</h3>
            <img class="pt-5" src="/assets/me-now.jpg">
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <h3 class="fw-bold pt-5">I grew up in a small town in Tennessee.</h3>
            <h3 class="fw-bold pt-5">After an internship where I wired electrical panels and wrote code in LabView, I decided this wasn’t my passion. I spent hours of my spare time learning web development and I was hooked. That combined with co-founding a cyber security club Cyber@UC gives me a security-first approach.</h3>
        </div>
    </div>
</div>

<div class="container d-flex flex-row justify-content-center">
    <div class="row">
        <div class="col-md-4 col-sm-12">
            <img class="pt-5 px-2" src="/assets/hackerman.gif">
        </div>
        <div class="col-md-4 col-sm-12">
            <img class="pt-5 px-2" src="/assets/hackerman2.gif">
        </div>
        <div class="col-md-4 col-sm-12">
            <img class="pt-5 px-2" src="/assets/hackerman3.gif">
        </div>
    </div>
</div>

<div class="container d-flex flex-column justify-content-center">
    <div class="row">
        <div class="col-12">
            <h3 class="fw-bold pt-5">Now I live in Cincinnati Ohio working as a freelance web developer. In my spare time, I like to do Capture the Flags (CTFs) and create fun projects like my Raspberry PI photobooth.</h3>
            <h3 class="fw-bold pt-5">Here are some photos taken with it:</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img class="pt-5" src="/assets/photobooth1.jpg">
        </div>
        <div class="col-md-6">
            <img class="pt-5" src="/assets/photobooth2.jpg">
        </div>
        <div class="col-md-6">
            <img class="pt-5" src="/assets/photobooth3.jpg">
        </div>
        <div class="col-md-6">
            <img class="pt-5" src="/assets/photobooth4.jpg">
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <h3 class="fw-bold pt-5">If you want to have a quick chat,<br>feel free to <a href="{{ social.email.href }}{{ social.email.id }}" class="font-light-color">contact</a> me</h3>
        </div>
    </div>
</div>
