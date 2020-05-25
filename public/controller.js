$(document).ready(() => {

	console.log("hello world")

	$('.hamburger').on('click', ()=>{
		if($('.mobile-nav').css('display') == "none")
			$('.mobile-nav').show("slow")
		else
			$('.mobile-nav').hide("slow")
	})

	$('.mobile-nav > ul > li').on('click', ()=>{
		$('.mobile-nav').hide("slow")
	})
})