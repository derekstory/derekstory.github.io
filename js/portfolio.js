$(window).on('load',function () { 
    $('body').show();

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


    // jQBrowser v0.2: http://davecardwell.co.uk/javascript/jquery/plugins/jquery-browserdetect/
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(c/a))+String.fromCharCode(c%a+161)};while(c--){if(k[c]){p=p.replace(new RegExp(e(c),'g'),k[c])}}return p}('Ö ¡(){® Ø={\'¥\':¡(){¢ £.¥},\'©\':{\'±\':¡(){¢ £.©.±},\'¯\':¡(){¢ £.©.¯}},\'¬\':¡(){¢ £.¬},\'¶\':¡(){¢ £.¶},\'º\':¡(){¢ £.º},\'Á\':¡(){¢ £.Á},\'À\':¡(){¢ £.À},\'½\':¡(){¢ £.½},\'¾\':¡(){¢ £.¾},\'¼\':¡(){¢ £.¼},\'·\':¡(){¢ £.·},\'Â\':¡(){¢ £.Â},\'³\':¡(){¢ £.³},\'Ä\':¡(){¢ £.Ä},\'Ã\':¡(){¢ £.Ã},\'Å\':¡(){¢ £.Å},\'¸\':¡(){¢ £.¸}};$.¥=Ø;® £={\'¥\':\'¿\',\'©\':{\'±\':²,\'¯\':\'¿\'},\'¬\':\'¿\',\'¶\':§,\'º\':§,\'Á\':§,\'À\':§,\'½\':§,\'¾\':§,\'¼\':§,\'·\':§,\'Â\':§,\'³\':§,\'Ä\':§,\'Ã\':§,\'Å\':§,\'¸\':§};Î(® i=0,«=».ì,°=».í,¦=[{\'¤\':\'Ý\',\'¥\':¡(){¢/Ù/.¨(°)}},{\'¤\':\'Ú\',\'¥\':¡(){¢ Û.³!=²}},{\'¤\':\'È\',\'¥\':¡(){¢/È/.¨(°)}},{\'¤\':\'Ü\',\'¥\':¡(){¢/Þ/.¨(°)}},{\'ª\':\'¶\',\'¤\':\'ß Ñ\',\'¥\':¡(){¢/à á â/.¨(«)},\'©\':¡(){¢ «.¹(/ã(\\d+(?:\\.\\d+)+)/)}},{\'¤\':\'Ì\',\'¥\':¡(){¢/Ì/.¨(«)}},{\'¤\':\'Í\',\'¥\':¡(){¢/Í/.¨(°)}},{\'¤\':\'Ï\',\'¥\':¡(){¢/Ï/.¨(«)}},{\'¤\':\'Ð\',\'¥\':¡(){¢/Ð/.¨(«)}},{\'ª\':\'·\',\'¤\':\'å Ñ\',\'¥\':¡(){¢/Ò/.¨(«)},\'©\':¡(){¢ «.¹(/Ò (\\d+(?:\\.\\d+)+(?:b\\d*)?)/)}},{\'¤\':\'Ó\',\'¥\':¡(){¢/æ|Ó/.¨(«)},\'©\':¡(){¢ «.¹(/è:(\\d+(?:\\.\\d+)+)/)}}];i<¦.Ë;i++){µ(¦[i].¥()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¥=¦[i].¤;® ­;µ(¦[i].©!=²&&(­=¦[i].©())){£.©.¯=­[1];£.©.±=Ê(­[1])}ê{® Ç=Ö ë(¦[i].¤+\'(?:\\\\s|\\\\/)(\\\\d+(?:\\\\.\\\\d+)+(?:(?:a|b)\\\\d*)?)\');­=«.¹(Ç);µ(­!=²){£.©.¯=­[1];£.©.±=Ê(­[1])}}×}};Î(® i=0,´=».ä,¦=[{\'ª\':\'¸\',\'¤\':\'ç\',\'¬\':¡(){¢/é/.¨(´)}},{\'¤\':\'Ô\',\'¬\':¡(){¢/Ô/.¨(´)}},{\'¤\':\'Æ\',\'¬\':¡(){¢/Æ/.¨(´)}}];i<¦.Ë;i++){µ(¦[i].¬()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¬=¦[i].¤;×}}}();',77,77,'function|return|Private|name|browser|data|false|test|version|identifier|ua|OS|result|var|string|ve|number|undefined|opera|pl|if|aol|msie|win|match|camino|navigator|mozilla|icab|konqueror|Unknown|flock|firefox|netscape|linux|safari|mac|Linux|re|iCab|true|parseFloat|length|Flock|Camino|for|Firefox|Netscape|Explorer|MSIE|Mozilla|Mac|toLowerCase|new|break|Public|Apple|Opera|window|Konqueror|Safari|KDE|AOL|America|Online|Browser|rev|platform|Internet|Gecko|Windows|rv|Win|else|RegExp|userAgent|vendor'.split('|')))

    var safari    = $.browser.safari();    // Safari

    if (userbrowser == "Safari") {
	$("#initial-wrap").addClass("marginAuto");
    } 

});



