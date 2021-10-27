$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "L'esistenza di una faglia è stata ipotizzata per la prima volta nel 1983, osservando la diversa distribuzione dei terrazzi del fiume Volturno a nord e a sud della frattura. La linea di frattura parte dall'area di Filignano a Nord-Ovest, dirigendosi verso l'area di Prata Sannita (CE) a Sud-Est, per una lunghezza di circa 22 km. In superficie si presenta con una netta scarpata alla base del gruppo montuoso Cesavaiuti–Favaracchi a Sud, mentre ci sono solo deboli indicazioni della sua presenza nel versante Riparossa a nord del Volturno." );

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