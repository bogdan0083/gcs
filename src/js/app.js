$(document).ready(function() {

    // Код для мобильного меню:
    
    var $navTrigger = $('.nav-trigger');
    var $mainNav = $('.nav-main');
    var $navLinks = $mainNav.find('a');

    // обработчик иконки меню:
    
    $navTrigger.click(function(e) {
        // body...
        e.preventDefault();
        $navTrigger.toggleClass('js-active');
        $mainNav.slideToggle();
        $('.header').toggleClass('js-painted');
    });

    // Подсвечивание активного пункта меню на ховер
    // 
    $mainNav.on('mouseover', 'a', function(e) {
        // body...
        e.preventDefault();
        $navLinks.addClass('js-transparent');
        $(this).removeClass('js-transparent');
    });

    $mainNav.on('mouseout', 'a', function(e) {
        // body...
        e.preventDefault();
        $navLinks.removeClass('js-transparent');
        $(this).removeClass('js-transparent');
    });

    // ----------------------------------------------
    // 
    // 
    // Portfolio filter
    // 
    $('.projects-gallery').imagesLoaded(function() {
        var filterizd = $('.projects-gallery').filterizr({
            animationDuration: 0.3, //in seconds
            filterOutCss: { //Filtering out animation
                opacity: 0,
                transform: 'scale(0.5)'
            },
            filterInCss: { //Filtering in animation
                opacity: 1,
                transform: 'scale(1)'
            }
        });
    });
    // ---------------------------------------------
    // 
    // 
    // 
    // init animations on scroll (WOW.JS)
    //
    var wow = new WOW({
        mobile: false,
        callback: function(box) {
            // body...
            if ($(box).hasClass('mice-department')) {
            	console.log($(box));
            	$(box).find('.mice-block').addClass('animated zoomIn');
            	$(box).find('.globe-big').addClass('animated zoomIn');
            };

            // Анимация чисел
            var $counter = $(box).find('.js-counter');

        	if ($counter.length > 0) {

        		var $counterNum = parseInt( $counter.text().split(' ').join('') );
	            $counter.text( 0 );
	            setTimeout(function () {
	            	// body...
	            	$counter.animateNumber({ number: $counterNum, easing: 'easeOutQuad' }, 3000);
	            }, 200)
            
        	}
            
        }

    });
    wow.init();
    // ----------------------------------
    //
    //
    // remove default event on click;

    var $filterLinks = $('.projects-filter a');

    $filterLinks.on('click', function(e) {
        e.preventDefault();

        $filterLinks.removeClass('js-active');
        $(this).addClass('js-active');
    });

    // --------------------------------
    //
    //
    // Слайдер в новостях
    $('.news-item-slider').slick({
        arrows: false,
        dots: false
    });

    $('.news-item-slider img').click(function(e) {
        // body...
        e.preventDefault();
        console.log($(this).closest('.news-item-slider'));
        $(this).closest('.news-item-slider').slick('slickNext');
    });
    // ------------------------------------------------------
    // 
    // 
    // google карта
    // 
    var map;

    var windowWidth = $('window').width();

    function initMap() {
        var myLatLng = { lat: 55.746266, lng: 37.659098 };

        var styleArray = [{
            featureType: 'all',
            stylers: [
                { saturation: -80 }
            ]
        }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                { hue: '#00ffee' },
                { saturation: 50 }
            ]
        }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [
                { visibility: 'off' }
            ]
        }];

        map = new google.maps.Map(document.getElementById('map'), {
            center: (windowWidth < 800 ? myLatLng : { lat: 55.746266, lng: 37.656098 }),
            zoom: 17,
            styles: styleArray
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!',
            icon: '/img/marker.png'
        });
    }

    initMap();
    // -----------------------------------
    // 
    // 
    // Кастомный скроллбар в попапе
    // Если попап будет подгружаться аяксом,
    // Надо его переинициализировать
    //
    $('.gcs-popup-inner').scrollbar();
    // ---------------------------
    //
    //
    //
    // arrow UP!
    // 
    var $arrowUp = $('.go-top');

    $arrowUp.click(function(e) {
        e.preventDefault();

        $('body, html').animate({
            'scrollTop': 0
        });
    });
    // -----------------------------------
    // 
    // 
    // Слайдер в попапе. Инициализируем через each
    // для правильной работы стрелок
    // 
    $('.gcs-popup-slider').each(function() {
        // body...
        
        var _this = $(this);
        var $wrapper = _this.find('.wrapper');

        $wrapper.slick({
            arrows: true,
            infinite: false,
            prevArrow: _this.find('.arr-slider-left'),
            nextArrow: _this.find('.arr-slider-right'),
        });

    });
    // ----------------------------------------
    // 
    // 
    // Инициализация попапа
    // В HTML я добавил в самом низу несколько блоков .gcs-popup для наглядности.
    // Если попапы будут подгружаться аяксом, нужно почитать доку:
    // http://dimsemenov.com/plugins/magnific-popup/documentation.html#ajax-type
    // Или написать мне ;)
    // 
    var currentPopupIndex;
    // Initialize popup as usual
    $('.popup-link').magnificPopup({
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
        showCloseBtn: false,
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade',
        callbacks: {
            open: function() {
                currentPopupIndex = this.currItem.index;
                $('.gcs-popup-slider .wrapper').slick('setPosition');
            }
        }
    });

    $('.popup-close').click(function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    // ----------------------------------------
    // 
    // 
    // 
    // Реализация стрелок в попапе. 
    // Просто листаем попап по индексу.
    // Если через аякс, можно вызывать нужный попап через метод .open()
    // 
    $('.arr-popup-prev').click(function(e) {
        e.preventDefault();
        $.magnificPopup.close();

        setTimeout(function() {
            // body...
            $('.popup-link').magnificPopup('open', currentPopupIndex - 1);
        }, 300);

    });

    $('.arr-popup-next').click(function(e) {
        e.preventDefault();

        $.magnificPopup.close();

        setTimeout(function() {
            // body...
            $('.popup-link').magnificPopup('open', currentPopupIndex + 1);
        }, 300);
    });
    // ----------------------------
    // 
    // 
    // 
    // Навигация
    // 
    var $anchors = $('.js-anchor');

    $anchors.click(function(e) {
        e.preventDefault();

        var $anchor = $(this);
        var id = $anchor.attr('href');

        $('body, html').animate({
            'scrollTop': $(id).offset().top - $('.header').height()
        });
    });
    // ----------------------------------
    // 
    // 
    // 
    // Окрашивание шапки при скролле
    // 
    if ($(window).width() > 880) {

        var headerPainted = null;
        var wScrolled;

        $(window).on('scroll', function() {
            paintHeader();
        });


        function paintHeader() {
            wScrolled = $(window).scrollTop();

            if (wScrolled > 0 && !headerPainted) {
                $('.header').addClass('js-painted');
                headerPainted = true;
            } else if (wScrolled <= 0) {
                $('.header').removeClass('js-painted');
                headerPainted = false;
            }
        }

        paintHeader();
    }
    // END -----------------------------------
});
