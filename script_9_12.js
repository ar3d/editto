$(document).ready(function() {

	$(".popup-me_2").click(function(){

		pop_init_2( "Dopo l'atto di donazione, l'editto elenca le attività ammesse nella gestione dell'acquedotto tra cui REFICERE (restaurare), REPONERE (ripristinare), RESTITUERE (ricostruire), RESARCIRE (riparare), indipendentemente dal numero di volte." );

	});

});

function pop_init_2( my_content ) {

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