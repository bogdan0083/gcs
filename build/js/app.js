$(document).ready(function() {

    // trigger navigation on burger menu
    var $navTrigger = $('.nav-trigger');
    var $mainNav = $('.nav-main');
    var $navLinks = $mainNav.find('a');

    $navTrigger.click(function(e) {
        // body...
        e.preventDefault();
        $navTrigger.toggleClass('js-active');
        $mainNav.slideToggle();
    });

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



    // remove default event on click;

    var $filterLinks = $('.projects-filter a');

    $filterLinks.on('click', function(e) {
        e.preventDefault();
    });

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
            icon: '../img/marker.png'
        });
    }

    initMap();

});
