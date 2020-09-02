

$(document).ready(() => {

	
	console.log("hello world")

	$('#hamburger').on('click', ()=>{
		console.log("clicked mobile menu")
		if($('.mobile-nav').css('display') == "none")
			$('.mobile-nav').show("slow")
		else
			$('.mobile-nav').hide("slow")
	})

	$('.mobile-nav > ul > li').on('click', ()=>{
		$('.mobile-nav').hide("slow")
	})

})