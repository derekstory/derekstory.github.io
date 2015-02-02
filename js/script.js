$(window).on('load',function () {
    $("#initial-wrap").delay(1000).show();
    $("#home").delay(1100).queue(function () {
	$(this).removeClass("home-initial").addClass("home-after").dequeue();
    });
    $("#home h2").delay(1100).queue(function () {
	$(this).css('color', 'white');
    });
    $("#home h3").delay(1100).queue(function () {
	$(this).css('color', '#888888');
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

    

$(window).bind('orientationchange resize', function(event){
  if (event.orientation) {
    if (event.orientation == 'landscape') {
      if (window.rotation == 90) {
        rotate(this, -90);
      } else {
        rotate(this, 90);
      }
    }
  }
});

function rotate(el, degs) {
  iedegs = degs/90;
  if (iedegs < 0) iedegs += 4;
  transform = 'rotate('+degs+'deg)';
  iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+iedegs+')';
  styles = {
    transform: transform,
    '-webkit-transform': transform,
    '-moz-transform': transform,
    '-o-transform': transform,
    filter: iefilter,
    '-ms-filter': iefilter
  };
  $(el).css(styles);
}



});



