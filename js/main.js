var puntajes = new Puntajes();
/*puntajes.addJuego(new Juego("Alcánzame si puedes"));
puntajes.addParticipante(new Participante("Larry"));
puntajes.juegos[0].addParticipante(puntajes.participantes[0]);
puntajes.juegos[0].participantes[0].addPoint();*/

$(".btnResultado").on("click", mostrarResultados);
$(".btnAddJuego").on("click", agregarJuego);
$(".btnAddParticipante").on("click", agregarParticipante);
$(".reiniciarJuego").on("click", rewindGame);

function mostrarResultados() {
	puntajes.getWinners();
}

function agregarJuego() {
	var nombre = $("#newGame").val();
	if(nombre === "") return;
	puntajes.addJuego(new Juego(nombre));
	$("#newGame").val("");
}

function mostrarJuego() {
	var idJuego = parseInt($(this).attr("idjuego"));
	$(".listaParticipantes").attr("idjuego", idJuego);
	puntajes.getJuego(idJuego).getParticipantes();
	$("#juego header h1").text(puntajes.getJuego(idJuego).getNombre());
}

function agregarParticipante() {
	var nombre = $("#newPlayer").val();
	if(nombre === "") return;
	var participante = new Participante(nombre);
	puntajes.addParticipante(participante);
	var idJuego = parseInt($(".listaParticipantes").attr("idjuego"));
	puntajes.getJuego(idJuego).addParticipante(participante);
	$("#newPlayer").val("");
}

function unPuntoMas() {
	var idParticipante = parseInt($($($($(this).parent()).parent()).parent()).attr("idparticipante"));
	puntajes.getParticipante(idParticipante).addPoint();
	var idJuego = parseInt($(".listaParticipantes").attr("idjuego"));
	puntajes.getJuego(idJuego).getParticipantes();
}

function unPuntoMenos() {
	var idParticipante = parseInt($($($($(this).parent()).parent()).parent()).attr("idparticipante"));
	puntajes.getParticipante(idParticipante).removePoint();
	var idJuego = parseInt($(".listaParticipantes").attr("idjuego"));
	puntajes.getJuego(idJuego).getParticipantes();
}



function rewindGame() {
	var idJuego = parseInt($(".listaParticipantes").attr("idjuego"));
	puntajes.getJuego(idJuego).reiniciarJuego();
}