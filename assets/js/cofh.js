---
layout: null
---

var pages = [
    {% for page in site.pages %}{% if page.title %}{
        title: "{{ page.title }}",
        value: "{{ page.title }}",
        url: "{{ page.url }}"
    }{% if forloop.last %}{% else %},{% endif %}{% endif %}{% endfor %}
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
    $("body").removeClass("no-js");

    var $banner = $('.cofh-banner');
    if ($banner.length > 0) {
        var bannerImage = '/assets/images/banners/banner' + Math.floor(Math.random() * 7 + 1) + '.jpg';
        $banner.css('background-image', 'url(' + bannerImage + ')');
    }

    $(':header').each(function() {
        var id = $(this).attr('id');
        if (typeof(id) === 'undefined') return;

        $(this)
            .addClass('cofh-clickable')
            .append('<a href="#' + id + '" class="uk-margin-small-left cofh-clickable-icon" title="Permalink"><i class="uk-icon-link"></i></a>')
            .append('<a href="#" class="uk-float-right uk-margin-right cofh-clickable-icon" title="Top of Page"><i class="uk-icon-chevron-up"></i></a>');
    });

    $(".uk-container a[href^='/docs/']").each(function(i, anchor) {
        $anchor = $(anchor);
        var href = $anchor.attr('href').split('/#')[0];
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].url.indexOf(href) !== -1) return;
        }
        $anchor.addClass('uk-text-danger');
    });

    $('.cofh-search').on('selectitem.uk.autocomplete', function(event, data) {
        window.location.href = window.location.protocol + '//' + window.location.host + data.url;
    });
    $('.cofh-search > button').click(function() {
        window.location.href = 'http://google.com/search?q=' + $('.cofh-search > input').val() + ' site:' + window.location.hostname;
    });

    $('.cofh-recipe')
        .mouseenter(function() {
            $(this).find('.cofh-cycle').addClass('paused');
        })
        .mouseleave(function() {
            $(this).find('.cofh-cycle').removeClass('paused');
        });

    window.setInterval(function() {
        $('.cofh-cycle:not(.paused) > :not(.hidden)').each(function() {
            var $this = $(this);
            var $siblings = $this.parent().children().filter(function(i, el) {return !$(el).is($this)});

            if ($siblings.length === 0) {
                return;
            }

            var $next;

            if ($this.closest('.cofh-cycle').hasClass('random')) {
                $next = $siblings.eq(Math.floor(Math.random() * $siblings.length));
            } else {
                $next = $this.next();
                if ($next.length === 0) {
                    $next = $siblings.first();
                }
            }

            $this.addClass('hidden');
            $next.removeClass('hidden');
        });
    }, 1500);
});
