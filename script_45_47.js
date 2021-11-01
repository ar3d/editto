$(document).ready(function() {

	$(".popup-me_9").click(function(){

		pop_init_9( "In questo passo Augusto probabilmente ha voluto evitare eventuali contenziosi legati a interventi di ampliamento o miglioramento del percorso dell'acquedotto, decretando che gli atti dei duumviri abbiano per i cittadini della colonia lo stesso valore dell'editto." );

	});

});

function pop_init_9( my_content ) {

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