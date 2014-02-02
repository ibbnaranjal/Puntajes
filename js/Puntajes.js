function Puntajes()
{
	this.idJuego = 0;
	this.idParticipante = 0;
	this.juegos = [];
	this.participantes = [];
}

Puntajes.prototype.addJuego = function(juego) {
	juego.idJuego = ++this.idJuego;
	this.juegos.push(juego);
	juego.renderJuego();
};

Puntajes.prototype.addParticipante = function(participante) {
	participante.idParticipante = ++this.idParticipante;
	this.participantes.push(participante);
};

Puntajes.prototype.getWinners = function() {
	var cantidadDeJuegos = this.juegos.length;
	$(".contenidoGanadores div").remove();
	for(var i = 0; i < cantidadDeJuegos; i++) {
		if(this.juegos[i].participantes.length === 0) return;
		this.juegos[i].renderGanador();
	}
	//falta validar cuando el juego no tiene participantes
};

Puntajes.prototype.getJuegos = function() {
	var cantidadDeJuegos = this.juegos.length;
	for(var i = 0; i < cantidadDeJuegos; i++) {
		this.juegos[i].renderJuego();
	}
	$(".listaJuegos").listview("refresh");
};

Puntajes.prototype.getJuego = function(idJuego) {
	var cantidadDeJuegos = this.juegos.length;
	for(var i = 0; i < cantidadDeJuegos; i++) {
		if(this.juegos[i].idJuego === idJuego) {
			return this.juegos[i];
		}
	}
};

Puntajes.prototype.getParticipante = function(idParticipante) {
	var cantidadDeParticipantes = this.participantes.length;
	for(var i = 0; i < cantidadDeParticipantes; i++) {
		if(this.participantes[i].idParticipante === idParticipante) {
			return this.participantes[i];
		}
	}
};