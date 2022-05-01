$(function (){

/* FIXED HEADER*/
	let header = $("#header");
	let home = $("#home");
	let homeH = home.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, homeH);

	$(window).on("scroll resize", function(){
		homeH = home.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, homeH);
	});

	function checkScroll(scrollPos, homeH) {
	if(scrollPos > homeH){
		header.addClass("fixed");
	} else {
		header.removeClass("fixed");
	}
}


/* SMOOTH SCROLL*/	
	$("[data-scroll]").on("click", function(event){
		event.preventDefault(); /*Отменяет стандартное поведение ссылки при клике*/

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		console.log(elementOffset);

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 60
		}, 700);

	});


/* NAVToGGLE*/


	$("#navToggle").on("click", function(event){
		event.preventDefault();

		nav.toggleClass("show");
	});


});