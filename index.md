---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<div id="search-area" class="ui-widget">
  <label id="search-label" for="quick-search-box">Go to instruction: </label>
  <input id="quick-search-box" autofocus>
</div>

<br>

<h1 class="page-heading">All Quick Install Instructions</h1>

<ul class="post-list">
{% for instruction in site.instructions %}
    <li>
    <h2>
        <a class="post-link" href="{{ instruction.url | relative_url }}">{{ instruction.title | escape }}</a>
    </h2>
    </li>
{% endfor %}
</ul>

<style>
#search-area {
    margin: 50px;
}

#search-label {
    font-size: 20pt;
    margin-right: 50px;
}

#quick-search-box {
    font-size: 20pt;
}

.ui-autocomplete
{
    font-size: 20pt;
}
</style>

<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

<script>
    $(function() {

        var availableInstructions = $('.post-list li').map(function () {
            var li = $(this);
            return { label: li.text().trim(), value: $('a.post-link', li).get(0) };
        }).get();

        $( "#quick-search-box" ).autocomplete({
            source: availableInstructions,
            select: function( event, ui ) { ui.item.value.click()}
        });
    });
</script>