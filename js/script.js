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
                // ADD ACTIVE CLASS
                $(this).parent().parent().toggleClass('active');
                // CHANGE HTML
                if ($('span', this).html() == '+') {
                    $('span', this).html('-');
                    $(this).parent().next().slideDown('fast');
                } else {
                    $(this).parent().parent().find('ul').slideUp('fast', function () {
                        $(this).parent().parent().find('.mobile-icon span').html('+');
                        $(this).parent().parent().find('li').removeClass("active");
                    });
                }
            });

            $('.site-menu-overlay, .small-screen-menu-icon').click(function () {
                $('.site-menubar > ul ul').slideUp('fast');
                $('.site-menubar ul').find('.mobile-icon span').html('+');
                $('.site-menubar ul').find('li').removeClass("active");
            });
        }
    });
})();