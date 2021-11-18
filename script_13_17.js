$(document).ready(function() {

	$(".popup-me_3").click(function(){

		pop_init_3( "L'editto nomina due proprietari terrieri, Quinto Sirinio, figlio di Lucio, della tribù Teretina e Lucio Pompeo Terenzio Sulla, figlio di Marco, nei cui fondi passava il canale dell'acquedotto, e stabilisce il modello comportamentale da tenere mediando fra esigenze pubbliche, costituite dal corretto approvvigionamento idrico della colonia, e diritti privati, rappresentati dalla tutela dei manufatti intercettati dai canali. Il testo, quindi, norma una servitù di passaggio strettamente connessa alle esigenze di manutenzione dell'acquedotto." );

	});

});

function pop_init_3( my_content ) {

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