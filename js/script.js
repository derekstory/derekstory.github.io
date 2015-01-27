$(document).on('ready',function () {

    //Slide in icons
    $(".choices").delay(300).queue(function () {
        $(this).addClass("choices-slide").dequeue();
    });
    $(".icon-option").delay(300).queue(function () {
        $(this).addClass("icon-slideIn").dequeue();
    });
    $("#social").delay(300).queue(function () {
        $(this).css('right','30px').dequeue();
    });


    //Smooth scroll to anchor
    $(function() {
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		    $('html,body').animate({
			scrollTop: target.offset().top
		    }, 600);
		    return false;
		}
	    }
	});
    });

    //Subtle background image position change on scroll
    $(window).bind("load resize scroll",function(e) {
	var y = $(window).scrollTop();

	$(".title").filter(function() {
            return $(this).offset().top < (y + $(window).height()) &&
		$(this).offset().top + $(this).height() > y;
	}).css('background-position', '0px ' + parseInt(-y / 3) + 'px');
    });
    
    //Show full opacity of social icons at top of window
    $(function(){
	$(window).scroll(function() { 
            if ($(this).scrollTop() > 0) { 
		$(".social-icon").css('opacity', '.4');
            } 
            else {     
		$(".social-icon").css('opacity','1');
            }  
	});
    });



    $(window).scroll(function() {
	var windscroll = $(this).scrollTop();

	//Fade in full opacity when you reach the section images
	var masthead = $('.title');
	masthead.filter(function () {
	    return windscroll >= $(this).offset().top-2;
	}).css({
	    'opacity': '1',
	    'background-attachment': 'fixed',
	});
	masthead.filter(function () {
	    return windscroll < $(this).offset().top-2;
	}).css({
	    'opacity': '.5',
	    'background-attachment': 'scroll',
	});

	//slide in the Experience boxes when you reach them in the window
	var expShow = $('.expBoxWrap');
	expShow.filter(function () {
	    return windscroll >= $(this).offset().top-550;
	}).css({
	    'opacity': '1',
	});

	expShow.filter(function () {
	    return windscroll < $(this).offset().top-550;
	}).css({
	    'opacity': '0',
	});

    });



    //Smooth mousewheel scrolling
    $("html").niceScroll({
	mousescrollstep: "10",
	scrollspeed: "100",
    });

});



