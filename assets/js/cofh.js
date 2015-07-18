---
layout: null
---

var pages = [
    {% for page in site.pages %}
        {
            title: "{% if page.search_title %}{{ page.search_title }}{% else %}{{ page.title }}{% endif %}", 
            value: "{% if page.search_title %}{{ page.search_title }}{% else %}{{ page.title }}{% endif %}", 
            url: "{{ page.url | remove: '/index.html' }}"
            {% if page.mod and page.title != page.mod %}, mod: "{{ page.mod }}"{% endif %} 
        }
        {% if page.search_headers %}
            {% for header in page.search_headers %}
                ,
                {
                    title: "{{ header.title }}", 
                    value: "{{ header.title }}", 
                    url: "{{ page.url | remove: 'index.html' }}#{{ header.id }}"
                    {% if page.mod and page.title != page.mod %}, mod: "{{ page.mod }}"{% endif %} 
                }
            {% endfor %}
        {% endif %}
        {% if forloop.last %}{% else %},{% endif %}
    {% endfor %}
];

var setScroll = function() {
    var $anchor = $(window.location.hash);

    if ($anchor.length > 0) {
        $('html, body')
            .stop()
            .animate({
                scrollTop: $anchor.offset().top - 50
            }, 0);
    }
};
$(window).on('hashchange load', setScroll);

$(function() {
    $('.cofh-search').on('selectitem.uk.autocomplete', function(event, data) {
        window.location.href = window.location.protocol + '//' + window.location.host + data.url;
    });
    $('.cofh-search > button').click(function() {
        window.location.href = 'http://google.com/search?q=' + $('.cofh-search > input').val() + ' site:' + window.location.hostname;
    });

    $(".uk-container a[href^='/docs/']").each(function(i, anchor) {
        $anchor = $(anchor);
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].url.search($anchor.attr('href').split('/#')[0]) >= 0) return;
        }
        $anchor.removeAttr('href');
        $anchor.addClass('uk-text-danger');
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

    var banner = '/assets/images/banners/banner' + Math.floor(Math.random() * 7 + 1) + '.jpg';
    $('.cofh-banner').css('background-image', 'url(' + banner + ')');
});
