$(document).ready(function() {

	$(".popup-me_6").click(function(){

		pop_init_6( "Dopo aver definito diritti e obblighi della parte pubblica, il testo dettaglia il diritto dei proprietari dei fondi su cui passa il canale di transitare sulla fascia di rispetto per esigenze produttive, precisando che in alcun modo questo diritto deve danneggiare l'acquedotto o deviare abusivamente l'acqua trasportata dal canale. La Lex Quinctia relativa alla tutela degli acquedotti, che norma in maniera definitiva la materia, dedica ampio spazio a questi abusi, prevedendo una multa di 100.000 sesterzi per chi avesse manomesso dolosamente i canali." );

	});

});

function pop_init_6( my_content ) {

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