$(document).ready(function() {

	$(".popup-me_5").click(function(){

		pop_init_5( "In questo passo l'iscrizione dettaglia meglio la servitù di passaggio dando la possibilità ad eum locum venafranis, cioè agli abitanti di Venafro, di trasportare il materiale per la manutenzione dell'acquedotto usando il percorso più breve, ma facendo giuramento di riparare eventuali danni arrecati alla proprietà privata. Nell'editto, inoltre, viene stabilito che il materiale di risulta potesse essere sparso in maniera omogenea nella fascia di rispetto." );

	});

});

function pop_init_5( my_content ) {

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