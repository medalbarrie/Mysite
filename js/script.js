
	 $('.cover').addClass('animated rollIn');
	 $('.cover-text').addClass('animated shake');
   
   $('.icon').mouseover(function () {
   	  $('i').toggleClass('animated zoomIn');
   });

   $('img').hover(function () {
     $('img').toggleClass('animated zoomIn');
   });

  $('.lastP').hide();
  $('.my-text').hide();

  $("document").ready(function () {
  	  $('.lastP').show(function () {
  	  	 $('.lastP').addClass('animated slideInUp');
  	  });
  	$('.my-text').show(function () {
  		 $('.my-text').addClass('animated slideInDown', 2000);
  	});

  });
	
