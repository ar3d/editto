$(document).ready(function() {

	$(".popup-me_4").click(function(){

		pop_init_4( "La servitù imposta sui terreni privati stabilisce anche una fascia di rispetto larga 8 piedi, pari a circa 2,5 metri, su entrambi i lati del canale. Tale misura è la stessa applicata ai subruncivi, i sentieri che assicuravano la viabilità tra i fondi nella divisione centuriale. Il tema della tutela ductuum (protezione dell'acquedotto) è presente sia nel De Aquaeductu urbis Romae di Frontino, che nel Codex Theodosianus risalente al 330 d.C. I due testi impongono una fascia di rispetto, larga 15 passi per ciascun lato del canale, in cui, similmente all'editto venafrano, viene proibito di costruire o piantumare alberi che possano danneggiare il canale. Lungo il percorso dell'acquedotto la fascia degli otto piedi era evidenziata da cippi che riportavano il testo: IVSSU . IMP . CAESARIS | AVGUSTI . CIRCA . EVM | RIVOM . QVI . AQVÆ | DVCENDÆ . CAVSA | FACTVS . EST . OCTONOS | PED . AGE . DEXTRA | SINISTRAQ . VAVVUS | RELICTVS . EST" );

	});

});

function pop_init_4( my_content ) {

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