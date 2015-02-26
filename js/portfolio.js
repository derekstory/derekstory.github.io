$(window).on('load',function () { 
    $('body').fadeIn(1100);

    //Random background for home section
    var classCycle = ['bgForrest', 'bgCups', 'bgAlley', 'bgWater'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    $('#large-header').addClass(classToAdd);

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

    //Subtle background image position change on scroll for large screens
    $(window).on("load resize scroll",function(e) {
	if ( $(window).width() > 940) {      

	    var y = $(window).scrollTop();

	    $(".title").filter(function() {
		return $(this).offset().top < (y + $(window).height()) &&
		    $(this).offset().top + $(this).height() > y;
	    }).css('background-position', '0px ' + parseInt(-y / 2.7) + 'px');
	}
	else {

	}
    });    

    //Slidein social icons and logo
    $(function(){
	$(window).scroll(function() { 
	    if ($(this).scrollTop() > 0) { 
		$('aside').css('left','25px');
            } 
            else {     
		$('aside').css('left','-200px');
            } 
	});
    });

    $(window).scroll(function() {
	var windscroll = $(window).scrollTop();
        if ($('#options').position().top <= windscroll - -400)   {
		$(".choices").addClass("choices-slide");
		$(".icon-option").addClass("icon-slideIn");
	} else {
	    $(".choices").removeClass("choices-slide");
	    $(".icon-option").removeClass("icon-slideIn");
	}
    }).scroll();

    //Show experience boxes one by one on scroll
    $(window).scroll(function() {
	var windscroll = $(window).scrollTop();
        if ($('.expBoxWrap').position().top <= windscroll - -400)   {
	    $('.expBox').each(function(i) {
		$(this).delay(100*i).queue(function(){
		    $(this).addClass("opacity-one").dequeue();
		});
	    });
	}
    }).scroll();

    $(window).scroll(function() {
	var windscroll = $(this).scrollTop();
	
	//Fade in full opacity when you reach the section images
	var masthead = $('.title');
	masthead.filter(function () {
	    return windscroll >= $(this).offset().top-2;
	}).css({
	    'opacity': '1',
	});
	masthead.filter(function () {
	    return windscroll < $(this).offset().top-2;
	}).css({
	    'opacity': '.8',
	});

	//paragraph descriptions fade in
	var descript  = $('.description');
	descript.filter(function () {
	    return windscroll >= $(this).offset().top-550;
	}).css({
	    'opacity': '1',
	});

	descript.filter(function () {
	    return windscroll < $(this).offset().top-550;
	}).css({
	    'opacity': '0',
	});

    });
});



