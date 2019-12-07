if ($(window).width() < 481) {
	$(window).scroll( function() {
	    if( $(this).scrollTop() > 0 ) {
	        $(".js-article-logo").fadeOut();
	    }
	    else {
	        $(".js-article-logo").fadeIn();
	    }
	});
}