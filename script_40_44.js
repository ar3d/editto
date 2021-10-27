$(document).ready(function() {

	$(".popup-me_8").click(function(){

		pop_init_8( "Nell'ottica di evitare adduzioni abusive, l'editto impone che fistulae e tubi secondari per portare l'acqua ai privati debbano passare sotto le vie pubbliche o in corrispondenza dei limites centuriali e con una distanza non superiore a 50 metri dal condotto principale." );

	});

});

function pop_init_8( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}