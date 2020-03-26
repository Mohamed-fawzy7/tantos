$(document).ready(function(){
	//trigger nicescroll
	$('html').niceScroll();

	//adjusting header height
	$('header').height($(window).height());

	//trigger bxslider
	$('.test .slider').bxSlider({
		pager: false,
		auto: true
	})

	//team bullets hover
	$('.team .slider li').hover(function(){
		$('.team .bullets #bullet' + ( $(this).index() +  1)).css("background-color","#f7600e");
	 }, function(){
	 	$('.team .bullets #bullet' + ( $(this).index() +  1)).css("background-color","#BBB");
	 })
})