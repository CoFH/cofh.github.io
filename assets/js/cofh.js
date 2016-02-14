---
layout: null
---

var pages = [
    {% for page in site.pages %}
        {
            title: "{% if page.search_title %}{{ page.search_title }}{% else %}{{ page.title }}{% endif %}", 
            value: "{% if page.search_title %}{{ page.search_title }}{% else %}{{ page.title }}{% endif %}", 
            url: "{{ page.url }}"
            {% if page.mod and page.title != page.mod %}, mod: "{{ page.mod }}"{% endif %} 
        }
        {% if page.search_headers %}
            {% for header in page.search_headers %}
                ,
                {
                    title: "{{ header.title }}", 
                    value: "{{ header.title }}", 
                    url: "{{ page.url }}{% if header.id %}#{{ header.id }}{% endif %}"
                    {% if page.mod and page.title != page.mod %}, mod: "{{ page.mod }}"{% endif %} 
                }
            {% endfor %}
        {% endif %}
        {% if forloop.last %}{% else %},{% endif %}
    {% endfor %}
];

$(window).on('hashchange load', function() {
    var $anchor = $(window.location.hash);
    if ($anchor.length > 0) {
        $('html, body')
            .stop()
            .animate({
                scrollTop: $anchor.offset().top - 50
            }, 0);
    }
});

$(function() {
    var banner = '/assets/images/banners/banner' + Math.floor(Math.random() * 7 + 1) + '.jpg';
    $('.cofh-banner').css('background-image', 'url(' + banner + ')');

    $(':header').each(function() {
        var id = $(this).attr('id');
        if (typeof(id) === 'undefined') return;
        
        $(this)
            .addClass('cofh-clickable')
            .append('<a href="#' + id + '" class="uk-margin-small-left cofh-clickable-icon"><i class="uk-icon-link"></i></a>')
            .append('<a href="#" class="uk-float-right uk-margin-right cofh-clickable-icon"><i class="uk-icon-chevron-up"></i></a>');
    });

    $(".uk-container a[href^='/docs/']").each(function(i, anchor) {
        $anchor = $(anchor);
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].url.search($anchor.attr('href').split('/#')[0]) >= 0) return;
        }
        $anchor
            .addClass('uk-text-danger')
            .click(function(event) {
                event.preventDefault();
            });
    });

    $('.cofh-search').on('selectitem.uk.autocomplete', function(event, data) {
        window.location.href = window.location.protocol + '//' + window.location.host + data.url;
    });
    $('.cofh-search > button').click(function() {
        window.location.href = 'http://google.com/search?q=' + $('.cofh-search > input').val() + ' site:' + window.location.hostname;
    });

    var nicks = [
        'RedstoneFurnace',
        'PhytogenicInsolator',
        'CyclicAssembler',
        'FluidTransposer',
        'SkyboysSlave',
        'TonisSlave',
        'AutonomousActivator',
        'TerrainSmasher',
        'ImplusePlate'
    ];

    var nick = nicks[Math.floor(Math.random() * nicks.length)];
    $('a.irclink').attr('href', 'http://webchat.esper.net/?nick=' + nick + '....&channels=#ThermalExpansion');
});
