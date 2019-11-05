// Can also be used with $(document).ready()
$(window).load(function() {



    /* адаптив таблицы */
    $('.common-content table').wrap('<div class="table-container"></div>');

    /* статьи */
    $('.art-hide')
        .on('click', function() {

            $(this).hide();

            var parent = $(this).parents('.art-item-block-right');

            parent.find('.art-item-content-crop').show();
            parent.find('.art-item-content-full').hide();
            parent.find('.art-show').show();

            return false;

        });

    $('.art-show')
        .on('click', function() {

            $(this).hide();

            var parent = $(this).parents('.art-item-block-right');

            parent.find('.art-item-content-crop').hide();
            parent.find('.art-item-content-full').show();
            parent.find('.art-hide').show();

            return false;
        });
    /* ховер баннер */

    $('.ba-block li')
        .on('mouseover', function() {


            $(this).find('.ba-block-text').hide();
            $(this).find('.ba-block-hover, .ba-block-filter-bg').show();

        });

    $('.ba-block li')
        .on('mouseout', function() {

            $(this).find('.ba-block-text').show();
            $(this).find('.ba-block-hover, .ba-block-filter-bg').hide();

        });

    /* Меню услуг */

    $('.uslugi').parent().addClass('parent-uslugi');


    /* листовки */

    $(document).on('click', '.block-list-button li', function() {
        var time = 2;
        var type = 130;

        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');

        if ($(this).data('time') !== undefined) {
            time = $(this).data('time');
        } else if ($('.bl-time .active').data('time') !== undefined) {
            time = $('.bl-time .active').data('time');
        }

        if ($(this).data('type') !== undefined) {
            type = $(this).data('type');
        } else if ($('.bl-type .active').data('type') !== undefined) {
            type = $('.bl-type .active').data('type');
        }

        if ($('.list_table > div').hasClass('table_' + type + '_' + time)) {
            $('.list_table > div').addClass('hidden');
            $('.table_' + type + '_' + time).removeClass('hidden');
        }

    });

    /* табы календаря */

    //$('.tab-panel-head  li:first a').click();

    $(document).on('click', '.tab-panel-head a', function(e) {
        $(this).parents('.tab-panel-head').find('li').removeClass('active');
        $(this).parent().addClass('active');

        var img = $(this).data('img');

        if (img === undefined) {
            img = '#';
        }

        $(this).parents('.tab-panel').find('img').attr("src", img);

        return false;
    });

    /* ccылка для слайдера на главной */
    $(document).on('click', '.flexslider-main [data-url]', function(e) {
        location.href = $(this).data('url');
    });

    $(document).on('click', '.slider-order-button', function(e) {
        e.stopImmediatePropagation();
    });

    /* Отзыв */

    var count = $('#otziv').data('show');

    $('.block-otziv-comment li').each(function(i, k) {

        if (i < count) {
            $(this).css('display', 'inline-block');
        }
    })

    $('#otziv').on('click', function() {

        $('.block-otziv-comment li:not(:visible)').each(function(i, k) {

            if (i < count) {
                $(this).css('display', 'inline-block');
            }

        });

        if ($('.block-otziv-comment li:not(:visible)').size() == 0) {
            $(this).parent().hide();
        }

        return false;

    });


    // Добавить в Избранное
    function add_favorite(a) {
        title = document.title;
        url = document.location;
        try {
            // Internet Explorer
            window.external.AddFavorite(url, title);
        } catch (e) {
            try {
                // Mozilla
                window.sidebar.addPanel(title, url, "");
            } catch (e) {
                // Opera
                if (typeof(opera) == "object") {
                    a.rel = "sidebar";
                    a.title = title;
                    a.url = url;
                    return true;
                } else {
                    // Unknown
                    alert('Нажмите Ctrl-D чтобы добавить страницу в закладки');
                }
            }
        }
        return false;
    }

    $('.add-star').on('click', function() {
        add_favorite($(this));
    });

    /* показать ещё */

    $('[data-gal-id]').each(function(i, v) {
        var size_row = 6;

        if ($(this).data('size') !== undefined) {
            if (parseInt($(this).data('size')) > 0) {
                size_row = $(this).data('size');
            }
        }

        var id = $(this).data('gal-id');
        var gal = $('[data-gal-list="' + id + '"] ul');
        var gal_size = gal.find('li').length;


        if (gal_size == 0) {
            $('[data-gal-list="' + id + '"]').hide();
            $(this).parent().hide();
        }

        /* if (gal_size > size_row) {
            $(this).prev('.order-button-light').css({'display':'inline-block'});
        } else {
            $(this).prev('.order-button-light').css({'display':'none'});
        } */

        var gal_full_size = $(this).data('gal').length;
        var slider_length = $(this).closest('.gallery-block').find('.slick-gallery li').length;

        //скрываем кнопку если выводится всё что есть
        /* if (gal_size <= size_row && gal_full_size <= size_row) {
            $(this).parent().hide();
        } */

        if (slider_length <=6) {
            $(this).parent().hide();
        }

    });

    function toggleView(list, slider) {
        list.toggle();
        slider.toggle();


    }

    $(document).on('click', '[data-gal-id]', function(e) {
        e.preventDefault();

        var id = $(this).data('gal-id');
        var gal = $('[data-gal-list="' + id + '"] ul');
        var gal_size = gal.find('li').size();
        var gal_full = $(this).data('gal');
        var up = $(this).data('up') || 0;
        var size_row = 100;

        var galList =  $('[data-gal-list="' + id + '"]');
        var galSlider =  $('[data-gal-slider="' + id + '"]');

        if (!galSlider.data('hidden')) {
            toggleView(galList, galSlider);
            galSlider.data("hidden", true);
        }
        //var size_row = 6;


        if ($(this).data('size') !== undefined) {
            if (parseInt($(this).data('size')) > 0) {
                size_row = $(this).data('size');
            }
        }

        //scroll top
        if ((gal_size + size_row) >= gal_full.length) {
            $(this).data('up', 1).text('Свернуть');
        }

        if (up == 1) {
            toggleView(galList, galSlider);
            galSlider.data("hidden", false);
            $(this).data('up', 0).text('Посмотреть еще');
            gal.find('li:gt(5)').remove();

            $('html, body').animate({
                scrollTop: $("[data-gal-slider='" + id + "']").offset().top - 190
            }, 300);
        } else {
            for (var i = 0; i < gal_full.length; i++) {
                if (i >= gal_size && i < (gal_size + size_row)) {
                    m = gal_full[i];
                    gal.append('<li><a rel="gallery" title="' + m.title + '" href="' + m.img + '"><img src="' + m.prev_img + '" alt="' + m.title + '" /></a></li>');
                }
            }
        }

    });



    /* file */

    $(document).on('change', '[type="file"]', function() {
        $(this).parent().find('.name-file').html($(this).val());
    });





    /* main-catalog */

    function main_catalog() {
        // console.log($(window).width());
        if ($(window).width() <= '1023') {


            $(document)
                .off('click', '.main-catalog .glyphicon')
                .on('click', '.main-catalog .glyphicon', function() {


                    if ($(this).parent().find('ul').is(':visible')) {
                        $(this).parent().find('ul').hide();

                    } else {
                        $(this).parent().find('ul').show();
                    }

                    return false;
                });
            $('.main-catalog .glyphicon').show();
        } else {
            $('.main-catalog .glyphicon').hide();
            $('.main-catalog > ul ul').hide();

            var x = $('.main-catalog > ul > li:first').find('ul > li');
            var l = x.length || 0;
            var p = 5 - l % 5;
            var h = '';

            if (p > 0) {
                for (var i = 0; i < p; i++) {
                    h += '<li class="not-li" style="visibility: hidden;"></li>';
                }
            }
           $('.min-catalog-sub-menu ul').append(h);


            $(document).off('click', '.main-catalog > ul > li ')
                .on('click', '.main-catalog > ul li  ', function() {

                    var l = $(this).find('ul > li').length || 0;
                    var p = 5 - l % 5;

                    var h = '';
                    $('.not-li').remove();
                    if (p > 0) {
                        for (var i = 0; i < p; i++) {
                            h += '<li class="not-li" style="visibility: hidden;"></li>';
                        }
                    }

                    $(this).find('ul').append(h);
                    $('.min-catalog-sub-menu').html($(this).find('ul').clone().css('display', 'flex'));


                    return false;
                });
        }
    }
    main_catalog();

    $(window).on('resize', function() {
        main_catalog();
    });

    if ($(window).width() <= '1023') {

        $('.main-catalog > ul > li > ul').parent().find('> a').after('<span class=" glyphicon glyphicon-chevron-down"></span>');

    }
    /* header menu */

    $('.navbar-collapse > ul > li:not(.dropdown-cat) > ul').parent().not('.dropdown-cat').find('> a')
        .after('<span class=" glyphicon glyphicon-chevron-down"></span>');

    /* мы делаем */

    $('[data-parent-class]').each(function() {

        //дизайним пункт меню
        $(this).attr('href', '#');
        $(this).parents('li').addClass($(this).data('parent-class'));
        $(this).parents('li').prepend('<span class="s-icon s-icon-gamburger"></span>');

        //строим подменю

        var menu_list = $(this).parents('li').find(' > ul');
        var cat_list = set_active_sub_menu_item(menu_list, 0);

        menu_list.find('> li > a').append(' <span class=" glyphicon glyphicon-chevron-right "></span>');

        var sub_menu = '<div class="wrap-cat-menu"><ul>' + menu_list.html() + '</ul><div class="cat-menu">' + cat_list + '</div></div>'

        $(this).parent().append(sub_menu);

    });

    function set_active_sub_menu_item(menu_list, index) {
        var cat_current = '';

        var item = $(menu_list).find('> li:eq(' + index + ') > ul');
        var cat_list = item.find('> li');
        var row_items = 5;

        var size = cat_list.size();
        row = Math.ceil(size / row_items);
        var c = 0;

        for (var i = 0; i < row_items; i++) {
            var end = parseInt(c + row);
            if (i == 4) { //добавляем в конец лишнии
                end = size;
            }
            var slice_cat = cat_list.slice(c, end);
            var slice_cat_list = '';

            slice_cat.each(function() {

                if ($(this).find('ul').size() > 0 && $(this).find('span').size() == 0) {
                    $(this).find('> a').append('&nbsp;<span class=" glyphicon glyphicon-chevron-down "></span>');
                }

                slice_cat_list = slice_cat_list + '<li>' + $(this).html() + '</li>';
            });

            // console.log(parseInt(c) + ', '+ parseInt(end) );
            cat_current = cat_current + "<div class='cat-menu-col'><ul>" + slice_cat_list + "</ul></div>";
            c = c + row;
        }

        return cat_current;
    }

    //оживляем левые пункты верхнего меню

    $(document).on('click', '.wrap-cat-menu > ul > li', function() {
        $('.cat-menu').html(set_active_sub_menu_item($(this).parent(), $(this).index()));
        return false;
    });

    //оживляем столбцы

    $(document).on('click', '.cat-menu-col  span', function(event) {
        event.stopImmediatePropagation();

        $('.cat-menu-col > ul > li > ul').slideUp();
        $('.cat-menu-col > ul  span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        $('.cat-menu-col a').css('color', '#404040');

        if ($(this).parent().find('+ ul').is(':visible')) {
            $(this).parent().css('color', '#404040');
            $(this).parent().find('+ ul').slideUp();
            $(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        } else {
            $(this).parent().find('+ ul').slideDown();
            $(this).parent().css('color', 'red');
            $(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        }

        return false;
    });


    $('.common-content table').tableHover({ colClass: 'hover-table', rowClass: 'hover-table' });

    /* генерируем меню для мобилок */

    var menu_main = $('.navbar-collapse > ul').clone();

    $('li ', menu_main).addClass('');
    $('li > ul', menu_main).parent().addClass('has-children');

    $('li > ul', menu_main).parent().find('.glyphicon').remove();
    $('li > ul', menu_main).parent().find('.wrap-cat-menu').remove();

    $('li > ul', menu_main).addClass('is-hidden').prepend('<li class="go-back"><a href="#0">Назад</a></li>');
    $('li > ul', menu_main).parent().find('> a').append('<span></span>');

    var menu = menu_main.html();

    $('.cd-dropdown-content').html(menu);

    //$(document).on('click', '.cd-dropdown-content a[href="/poligraficheskaya\-produkciya/"],.cd-dropdown-content a[href="/naruzhnaya-reklama/"],.cd-dropdown-content a[href="/suvenirnaya\-produkciya/"],.cd-dropdown-content a[href="/suvenirnaya\-poligrafiya/"],.cd-dropdown-content a[href="/nagradnaya\-produkciya/"],.cd-dropdown-content a[href="/dizajn\-maketov/"]',
    $(document).on('click', '.cd-dropdown-content [data-href]',
        function() {

            $(this).find('span').click();

            return false;
        }
    );


    //open/close mega-navigation
    $('.menu-icon').on('click', function(event) {
        event.preventDefault();

        toggleNav();
    });

    //close meganavigation
    $('.cd-dropdown .cd-close').on('click', function(event) {
        event.preventDefault();
        toggleNav();
    });

    //on mobile - open submenu
    $(document).on('click', '.has-children > a > span', function(event) {
        //prevent default clicking on direct children of .has-children

        event.preventDefault();
        event.stopImmediatePropagation();

        var selected = $(this).parent();
        selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');

    });

    //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
    var submenuDirection = (!$('.cd-dropdown-wrapper').hasClass('open-to-left')) ? 'right' : 'left';
    $('.cd-dropdown-content').menuAim({
        activate: function(row) {
            $(row).children().addClass('is-active').removeClass('fade-out');
            if ($('.cd-dropdown-content .fade-in').length == 0) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
            $(row).children().removeClass('is-active');
            if ($('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row))) {
                $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
                $(row).children('ul').addClass('fade-out')
            }
        },
        exitMenu: function() {
            $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
            return true;
        },
        submenuDirection: submenuDirection,
    });

    //submenu items - go back link
    $('.go-back').on('click', function() {
        var selected = $(this),
            visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
        selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
    });

    function toggleNav() {
        var navIsVisible = (!$('.cd-dropdown').hasClass('dropdown-is-active')) ? true : false;
        console.log(navIsVisible);
        $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);

        if (!navIsVisible) {
            $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                $('.has-children ul').addClass('is-hidden');
                $('.move-out').removeClass('move-out');
                $('.is-active').removeClass('is-active');
            });
        }
    }

    //вызов каталога

    $(document).on('click', '[data-parent-class]', function() {

        return false;
    });

    // $(document).on('mouseenter', 'li.dropdown-cat', function() {
    //     var sub = $('.wrap-cat-menu');
    //     if (sub.is(':visible')) {
    //         sub.slideUp();
    //         $('.navbar').removeClass('nav-hover');
    //     } else {
    //         sub.slideDown();
    //         $('.navbar').addClass('nav-hover');
    //     }

    //     return false;
    // });

    // $(document).on('mouseleave', '.dropdown-cat', function() {
    //     var sub = $('.wrap-cat-menu').slideUp();
    //     $('.navbar').removeClass('nav-hover');
    //     return false;
    // });


    function hover() {
        var animationTime = 0;
        var sub = $('.wrap-cat-menu');

        $(document).on('mouseenter', 'li.dropdown-cat', function() {
            sub.slideDown(animationTime);
            $('.navbar').addClass('nav-hover');
        });

        $(document).on('mouseleave', '.dropdown-cat', function() {
            sub.delay(300).slideUp(animationTime);
            setTimeout(function() {
                $('.navbar').removeClass('nav-hover');
            }, 1000);
        });
    }

    hover();



    //фиксированная шапка

    function scroll_position() {
        var scroll_position = $(document).scrollTop();
        if (scroll_position > 100) {
            $('#totop').fadeIn();
            if ($('.fix-header').hasClass('fix-header-visible')) {

            } else {
                $('.fix-header').addClass('fix-header-visible');
                $('.fix-header').hide().fadeIn(500);
            }


            //navbar-default
        } else {
            $('.fix-header').removeClass('fix-header-visible');
            $('.fix-header').show()
            $('#totop').fadeOut();
        }
    };

    scroll_position();

    $(document).on('scroll', function() {
        scroll_position()
    });

    //наверх
    $('#totop').click(function() {

        $('body,html').animate({ scrollTop: 0 }, 800);

    });

    //слайдер на главной
    $('.flexslider-main').flexslider({
        animation: "slide",
        controlNav: true,
        slideshow: true,
        slideshowSpeed: 6000,
        prevText: " ",
        nextText: " ",
    });

    $('.flexslider-ask').flexslider({
        animation: "slide",
        animationLoop: true,
        controlNav: false,
        slideshow: true,
        slideshowSpeed: 7000,
        itemWidth: 500,
        prevText: " ",
        nextText: " ",
        itemMargin: 30
    });



    //Add scripts
    $('.wrap-cat-menu > ul > li').on('click', function() {
        $(this).closest('.wrap-cat-menu').find('li.active__item').removeClass('active__item');
        $(this).closest('li').addClass('active__item');
        //$(this).closest('ul').next('.cat-menu').prepend("<ul>Test</ul>");
    })

    if ($('.table-container').next('.text-sub').length === 0) {
        $('.table-container').after('<p class="text-sub" style="font-style: italic;">* Цены указаны в рублях</p>')
    }


    //Отключаем правую кнопку на сайте
    function mouseOff() {
        function preventSelection(element) {
            var preventSelection = false;

            function addHandler(element, event, handler) {
                if (element.attachEvent)
                    element.attachEvent('on' + event, handler);
                else
                if (element.addEventListener)
                    element.addEventListener(event, handler, false);
            }

            function removeSelection() {
                if (window.getSelection) { window.getSelection().removeAllRanges(); } else if (document.selection && document.selection.clear)
                    document.selection.clear();
            }

            function killCtrlA(event) {
                var event = event || window.event;
                var sender = event.target || event.srcElement;
                if (sender.tagName.match(/INPUT|TEXTAREA/i))
                    return;
                var key = event.keyCode || event.which;
                if (event.ctrlKey && key == 'A'.charCodeAt(0)) {
                    removeSelection();
                    if (event.preventDefault)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                }
            }
            addHandler(element, 'mousemove', function() {
                if (preventSelection)
                    removeSelection();
            });
            addHandler(element, 'mousedown', function(event) {
                var event = event || window.event;
                var sender = event.target || event.srcElement;
                preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
            });
            addHandler(element, 'mouseup', function() {
                if (preventSelection)
                    removeSelection();
                preventSelection = false;
            });
            addHandler(element, 'keydown', killCtrlA);
            addHandler(element, 'keyup', killCtrlA);
        }

        function clickIE4() {
            if (event.button == 2) {
                return false;
            }
        }

        function clickNS4(e) {
            if (document.layers || document.getElementById && !document.all) {
                if (e.which == 2 || e.which == 3) {
                    return false;
                }
            }
        }
        if (document.layers) {
            document.captureEvents(Event.MOUSEDOWN);
            document.onmousedown = clickNS4;
        } else if (document.all && !document.getElementById) {
            document.onmousedown = clickIE4;
        }
        document.oncontextmenu = new Function("return false")
        preventSelection(document);
    }

    //mouseOff();


    //Выводим картинки в всплывающем окне
    $(document).on('click', '[data-gal-list] a', function(e) {
        e.preventDefault();
        var id = $(this).parents('.kvad-block').attr('data-gal-list');
        var a = $('[data-gal-id="' + id + '"]').attr('data-gal');
        a = JSON.parse(a);
        var open = [];
        $.each(a, function(i, k) {
            open.push({ 'href': k.img, 'title': k.title });
        });
        var p = $(this).parents('[data-gal-list]');
        var ind = $(p).find('a').index(this);


        $.fancybox.open(open, { 'index': ind });
        return false;
    });

    $('.otziv-block li a').fancybox();


    /* галерея */
    if ($("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']") !== undefined) {
      $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").fancybox();
    }

    // galleryInit();
});


/**
 * slick galery slider on portfolio page
 */

window.addEventListener('DOMContentLoaded', galleryInit);

function galleryInit () {
    var slickgallery = $('.slick-gallery');
    var options = {
        infinite: true,
        dots: false,
        speed: 700,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            }]
    }

    function slickGalleryInit(slickgallery) {
        var $this = $(slickgallery);
        var galId = $this.parent().data("gal-slider");
        var galData = $("[data-gal-id=" + galId + "]").data('gal');

        let rows = $(slickgallery).data('rows') || false;

        if (rows) {
            $.extend(true, options , {
                rows: rows,
                slidesPerRow: slidesPerRow,
                slidesToScroll: 1,
            });
        } else {
            $.extend(true, options , {
                slidesToShow: slidesPerRow,
                slidesToScroll: slidesPerRow,
            });
        }

        $this.slick(options);
    }

    if (slickgallery.length > 0) {
        var viewportWidth = $(window).width();
        var slidesPerRow = 2;
        if (viewportWidth > 1024) {
            slidesPerRow = 6;
        } else if (viewportWidth > 640) {
            slidesPerRow = 4;
        }

        for (var i = 0; i < slickgallery.length;i++) {
            slickGalleryInit(slickgallery[i]);
        }
    }

    function noCopyImg() {
        //Запрет вызова правой кнопки на изображения
        document.oncontextmenu = function(e){
            var target = (typeof e !="undefined")? e.target: event.srcElement
            if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
                return false
        }

        //Запрет вызова правой кнопки на отдельный селектор
        $('.fancybox-wrap').bind('contextmenu', function(e) {
            return false;
        });

    }
    noCopyImg();
}

//запрет перехода по ссылкам

$(document).ready(function(){
    $('#ob_link').click(function(event){
        event.preventDefault();
        $('#order_black').click();
    });



    $('#cont_link').click(function(event){
        event.preventDefault();
        $('#order_light_cont').click();
    });



    $('#light_link').click(function(event){
        event.preventDefault();
        $('#order_light').click();
    });


    $('#zak_link').click(function(event){
         event.preventDefault();
        $('#zakazat').click();
    });

   $('#light_link').click(function(event){
         event.preventDefault();
        $('#light').click();
    });

   $(".responsive1:not(.calendar-slider)").css({overflow: 'visible'});



});

$(document).ready(function() {
    $('#vkl_calc').click(function(event) {

        var a = document.getElementById('kalk-s');
        if(!a) {} else {
            if ( a.style.display == 'none' )
            a.style.display = 'block';
            else
            if ( a.style.display == 'block' )
            a.style.display = 'none';
        }
    });
});

if ($("div.sub-links ul li").length>5) {
    $(".sub-links ul").css("justify-content","flex-start");
}
$(document).ready(function() {
    $("tbody").removeAttr("align");
    $('.main-catalog-top-menu > ul:first-child > li:first-child > a').addClass('clicked_link');
    $('.main-catalog-top-menu > ul:first-child > li:first-child').addClass('up_arrow');
    $('.main-catalog-top-menu > ul > li').on('click', function() {
        $(this).children('a').addClass('clicked_link');
        $(this).addClass('up_arrow');
        $(this).siblings().children('a').removeClass('clicked_link');
        $(this).parent().siblings().find('a').removeClass('clicked_link');           
        $(this).siblings().removeClass('up_arrow');
        $(this).parent().siblings().find('li').removeClass('up_arrow');
    });
    $('.checkbox__variant--visible[name="variant9"]').on(function(e) {
        e.preventDefault();
        $('input[name="variant9"]').removeAttr('checked');
    });
});

    
