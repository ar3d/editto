$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "L'intestazione della lastra risulta in gran parte illeggibile ma, con ogni probabilità, doveva contenere l'atto di donazione dell'acquedotto da parte dell'imperatore. Si è ipotizzato che, oltre alla struttura, Augusto abbia donato anche una “famiglia pubblica”, cioè le maestranze specializzate, composte da schiavi o liberti, a cui era affidata la cura e la gestione dell'acquedotto. La presenza a Venafro di una corporazione addetta alla manutenzione degli edifici pubblici è testimoniata da una iscrizione, rinvenuta in prossimità del ponte reale che collega Venafro alla tenuta di Torcino, in cui si legge: COLLEGIO FAMILIÆ PUBLICÆ." );

	});

});

function pop_init_1( my_content ) {

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