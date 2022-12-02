$('.menu').find('a:eq(0)').click(function(){
	$('body, html').animate({ scrollTop: $('.page1').offset().top }, 500);
});
$('.menu').find('a:eq(1)').click(function(){
	$('body, html').animate({ scrollTop: $('.page2').offset().top }, 500);
});
$('.menu').find('a:eq(3)').click(function(){
	$('body, html').animate({ scrollTop: $('.page4').offset().top }, 500);
});
$('.menu').find('a:eq(4)').click(function(){
	$('body, html').animate({ scrollTop: $('.page6').offset().top }, 500);
});
$('.menu').find('a:eq(5)').click(function(){
	$('body, html').animate({ scrollTop: $('.page7').offset().top }, 500);
});
$('.menu').find('a:eq(6)').click(function(){
	$('body, html').animate({ scrollTop: $('.page8').offset().top }, 500);
});


$('.play').click(function(){
	$(this).hide();
	$('.preview').html('<iframe width="815" height="430" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})


$('.page6').find('ul a').click(function(){
	$('.page6').find('ul a').removeClass('active');
	$(this).addClass('active');
});

/* Ниже код слайдера на javascript */

let slider_pics = ['images/admiral.png', 'images/thieves.png', 'images/patriotic.png'];

function slider() {
	let i = 0;
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	let pager1 = document.querySelector('.pager').querySelector('.dots');
	let pager2 = document.querySelector('.right_part').querySelector('ul');
	console.log(pager1.children)
	
	next.addEventListener('click', function() {
		if (i == 2) {
			i = 0;
		}
		else {
			i++;
		}
		sliderChange(pager1, pager2, i);
	});
	
	prev.addEventListener('click', function() {
		if (i == 0) {
			i = 2;
		}
		else {
			i--;
		}
		sliderChange(pager1, pager2, i);
	});

	pager1.addEventListener('click', function(event) { 
		i = [...this.children].findIndex(el => el == event.target)
		if (i != -1)
		sliderChange(pager1, pager2, i);
	});

	pager2.addEventListener('click', function(event) { 
		console.log(event.target.parentNode);
		i = [...this.children].findIndex(el => el == event.target.parentNode)
		if (i != -1)
		sliderChange(pager1, pager2, i);
	});
}

function sliderChange(pager1, pager2, i) {
	console.log(i);
	pager1.querySelector('.active').classList.remove('active');
	pager1.children[i].classList.add('active');
	pager2.querySelector('.active').classList.remove('active');
	pager2.children[i].querySelector('a').classList.add('active');
	document.querySelector('.slider').querySelector('img').src=slider_pics[i];
}