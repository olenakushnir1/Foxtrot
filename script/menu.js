  $(window).on('load', function() {
            $('.btn__toggle').on('click', function(e) {
                e.preventDefault();
                /* Set Variables */
                var menu_height = $('.nav-main').outerHeight();

                $(this).toggleClass('open');
                $('.nav__container').toggleClass('open');

                if ($('.nav__container').hasClass('open')) {
                    $('.nav__container').css('max-height', menu_height + 'px');
                } else {
                    $('.nav__container').css('max-height', '');
                }
            });
            $('.dropdown-toggle').on('click', function(e) {
                e.preventDefault();
                /* Set Variables */
                var menu_height = $('.nav-main').outerHeight();
                var dropdown_length = $(this).siblings('.dropdown-menu').children('li').length;
                var li_height = $(this).siblings('.dropdown-menu').children('li').outerHeight();
                var dropdown_height = li_height * dropdown_length;
                var menu_dropdown_height = menu_height + dropdown_height;

                $(this).toggleClass('open');
                $(this).siblings('.dropdown-menu').toggleClass('open');

                if ($('.dropdown-menu').hasClass('open')) {
                    $('.dropdown-menu').css('max-height', dropdown_height + 'px');
                    $('.nav__container').css('max-height', menu_dropdown_height + 'px');
                } else {
                    $('.dropdown-menu').css('max-height', '');
                    $('.nav__container').css('max-height', menu_height + 'px');
                }
            });
        });