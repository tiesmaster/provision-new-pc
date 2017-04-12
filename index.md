---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<ul class="post-list">
{% for instruction in site.instructions %}
    <li>
    <h2>
        <a class="post-link" href="{{ instruction.url | relative_url }}">{{ instruction.title | escape }}</a>
    </h2>
    </li>
{% endfor %}
</ul>
