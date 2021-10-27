$(document).ready(function() {

	$(".popup-me_10").click(function(){

		pop_init_10( "L'ultima parte dell'editto, molto lacunosa, stabilisce la procedura giudiziaria e le sanzioni da applicare per le captazioni non autorizzate o per danni alle strutture dell'acquedotto. Augusto stabilisce che il giudizio sia affidato ad un praetor peregrinus. Il magistrato impostava la lite secondo la naturalis ratio, tenendo conto anche della buona fede delle parti. Dopo la fase dibattimentale, lo ius, in cui potevano essere convocati un massimo di 10 testimoni, il magistrato stabiliva la sentenza, il iudicium reciperatorium, attraverso cui veniva stabilito il pagamento della multa che per l'editto venafrano viene fissata ad un massimo di 10.000 sesterzi. L'azione recuperatoria descritta nell'editto anticipa quanto stabilito nel 9 a.C. nella Lex Quinctia sulla tutela degli aquedotti." );

	});

});

function pop_init_10( my_content ) {

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