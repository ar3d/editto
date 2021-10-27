$(document).ready(function() {

	$(".popup-me_7").click(function(){

		pop_init_7( "L'iscrizione, dopo aver definito le norme a tutela della struttura, passa a normare le modalità di gestione e controllo della distribuzione idrica tra gli abitanti della colonia. Questo compito era assegnato ai duumviri, magistrati eletti in coppie per ragioni di reciproco controllo e consiglio. La nomina dei duumviri era affidata ai decurioni che componevano il senato della colonia, composto da un numero di membri, stabilito dalla statuto cittadino, oscillante fra 80 e 100 unità. In sostanza ai duumviri erano delegate le funzioni amministrative relative all'acquedotto, ma il potere di disporre della donazione fatta dall'imperatore era dei rappresentanti della colonia." );

	});

});

function pop_init_7( my_content ) {

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