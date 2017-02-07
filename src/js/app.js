import $ from 'jquery';

$(document).ready(function() {

	// trigger navigation on burger menu
	var $navTrigger = $('.nav-trigger');
	var $mainNav = $('.nav-main');
	var $navLinks = $mainNav.find('a');

	$navTrigger.click(function (e) {
		// body...
		e.preventDefault();
		$navTrigger.toggleClass('js-active');
		$mainNav.slideToggle();
	});

	$mainNav.on('mouseover', 'a', function (e) {
		// body...
		e.preventDefault();
		$navLinks.addClass('js-transparent');
		$(this).removeClass('js-transparent');
	});	

	$mainNav.on('mouseout', 'a', function (e) {
		// body...
		e.preventDefault();
		$navLinks.removeClass('js-transparent');
		$(this).removeClass('js-transparent');
	});

	// Portfolio filter
	// 
	$('.projects-gallery').imagesLoaded( function () {
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

    var $filterLinks = $('.portfolio-sort__link');

    $filterLinks.on('click', function (e) {
       e.preventDefault();
    });
});
