// SMALL MENU
(function () {
    $(function () {
        $(".small-screen-menu-icon").click(function () {
            $(".small-screen-menu-icon, .site-menubar, .site-menu-overlay, body").toggleClass("menu-open");
        });
        $('.site-menu-overlay').click(function () {
            $(".small-screen-menu-icon, .site-menubar, .site-menu-overlay, body").removeClass("menu-open");
        });
    });
})();

// MULTI LEVEL MENU
(function () {
    var icon = '<span class="mobile-icon"><span>+</span></span>';
    $(window).on('load resize', function () {
        if ($(window).width() < 767) {
            $('.site-menubar ul > li a').each(function () {
                if ($(this).next('ul').length) {
                    $(this).append(icon);
                }
            });
            $('.site-menubar ul > li a .mobile-icon').click(function (ev) {
                ev.preventDefault();
                $(this).parent().next().slideToggle('slow');
                $(this).parent().parent().toggleClass('active');
                if ($('span', this).html() == '+') {
                    $('span', this).html('-');
                } else {
                    $('span', this).html('+');
                }
            });
        }
    });
})();