jQuery(document).ready(function($) {
	var wow = new WOW({
	        boxClass:     'wowload',      // animated element css class (default is wow)
	        animateClass: 'animated', // animation css class (default is animated)
	        offset:       0,          // distance to the element when triggering the animation (default is 0)
	        mobile:       true,       // trigger animations on mobile devices (default is true)
	        live:         true        // act on asynchronously loaded content (default is true)
	    });
	wow.init();

	var animacionRefOut= "animated fadeOutLeft";
	var animacionRefIn= "animated fadeInLeft";
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$(".breferencias").on('click', function(event){
	  event.preventDefault();
	  var info_act = $("#referencias");

	  var posAct = window.pageYOffset;
	  var altura = window.innerHeight;
	  var posDef = posAct;
	  info_act.css({
	    top: posAct
	  });
	  $("body").css(
	    "overflow", "hidden"
	  );

	  info_act.addClass('active ' + animacionRefIn).one(animationEnd, 
	    function () {
	      info_act.removeClass(animacionRefIn);
	  });

	});

	$(".creferencias").on('click', function(event){
	  event.preventDefault();
	  var info_act = $("#referencias");
	  
	  $("body").css(
	    "overflow", "visible"
	  );

	  info_act.addClass(animacionRefOut).one(animationEnd, 
	    function () {
	      info_act.removeClass('active ' + animacionRefOut);
	  });

	});
	autoPlayYouTubeModal();

  	//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
   	function autoPlayYouTubeModal() {
      	var trigger = $("body").find('.modal-here');
      	trigger.click(function () {
        	var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
          	videoSRCauto = videoSRC + "?autoplay=1";
          	$(theModal + ' iframe').attr('src', videoSRCauto);
          	$(theModal + ' button.close').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
          	});
          	$('.modal').click(function () {
              	$(theModal + ' iframe').attr('src', videoSRC);
          	});
      	});
  	}
});

