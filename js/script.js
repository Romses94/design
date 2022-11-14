$('.menu').find('a:eq(0)').click(function(){
	$('body, html').animate({ scrollTop: $('.page1').offset().top }, 500);
});
$('.menu').find('a:eq(1)').click(function(){
	$('body, html').animate({ scrollTop: $('.page2').offset().top }, 500);
});
$('.menu').find('a:eq(2)').click(function(){
	$('body, html').animate({ scrollTop: $('.page4').offset().top }, 500);
});
$('.menu').find('a:eq(3)').click(function(){
	$('body, html').animate({ scrollTop: $('.page6').offset().top }, 500);
});
$('.menu').find('a:eq(4)').click(function(){
	$('body, html').animate({ scrollTop: $('.page7').offset().top }, 500);
});
$('.menu').find('a:eq(5)').click(function(){
	$('body, html').animate({ scrollTop: $('.page8').offset().top }, 500);
});


$('.play').click(function(){
	$(this).hide();
	$('.preview').html('<iframe width="815" height="430" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})


$('.page2').find('ul a').click(function(){
	$('.page2').find('ul a').removeClass('active');
	$(this).addClass('active');
});

$('.page6').find('ul a').click(function(){
	$('.page6').find('ul a').removeClass('active');
	$(this).addClass('active');
});

