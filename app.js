$(function() {

  $('.left a').on('click',function(e){
    e.preventDefault();
    var src = $(this).data('full');
    $('.middle img').attr('src',src).fadeIn(1700).fadeOut(1700);

  });

   $('.right a').on('click',function(e){
    e.preventDefault();
    var src = $(this).data('full');
    $('.middle img').attr('src',src).fadeIn(1700).fadeOut(1700);

  });


});

$(function () {
	    setInterval(function () {
		      $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
          $('.star-5').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
          $('.star-6').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
          $('.star-7').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
          $('.star-8').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
           $('.star-9').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
	    }, 1);
    });

