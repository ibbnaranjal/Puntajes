function Participante(nombre)
{
	this.idParticipante;
	this.nombre = nombre;
	this.puntos = 0;
}

Participante.prototype.getNombre = function() {
	return this.nombre;
}

Participante.prototype.addPoint = function() {
	this.puntos += 1;
}

Participante.prototype.removePoint = function() {
	this.puntos -= 1;
}

Participante.prototype.getPuntos = function() {
	return this.puntos;
}

Participante.prototype.setPuntos = function(puntos) {
	this.puntos = puntos;
}

Participante.prototype.renderParticipante = function(idJuego) {
	var contenedor = $("#juego [idJuego="+idJuego+"]");
	var divParticipante = $('<div class="ui-body ui-body-a participante" idParticipante="'+this.idParticipante+'">');
	var divImagen = $('<div class="imagen">');
	var figure = $('<figure><img src="img/smile.png" ></figure>');
	var divPuntos = $('<div class="controlPuntos">');
	var divUp = $('<div class="up">');
	divUp.on("click", unPuntoMas);
	var divDown = $('<div class="down">');
	divDown.on("click", unPuntoMenos);
	var divNombre = $('<div class="nombre">');
	var nombreJugador = $('<h6>'+this.getNombre()+'</h6>');
	var puntosJugador = $('<div>'+this.getPuntos()+'</div>');
	divPuntos.append(divUp);
	divPuntos.append(divDown);
	divImagen.append(figure);
	divImagen.append(divPuntos);
	divNombre.append(nombreJugador);
	divNombre.append(puntosJugador);
	divParticipante.append(divImagen);
	divParticipante.append(divNombre);
	contenedor.append(divParticipante);
}