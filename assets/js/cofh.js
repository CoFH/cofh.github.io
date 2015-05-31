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
