$(function() {
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

$(window).on('hashchange load', function() {
    var $anchor = $(':target');

    if ($anchor.length > 0) {
        $('html, body')
            .stop()
            .animate({
                scrollTop: $anchor.offset().top - 50
            }, 0);
    }
});

// Google Analytics
if(window.location.hostname.search('localhost') < 0 && window.location.hostname.search('127.0.0.1') < 0) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-62994156-1', 'auto');
    ga('send', 'pageview');
}
