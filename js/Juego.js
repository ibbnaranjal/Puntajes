function Juego(nombre)
{
	this.idJuego;
	this.nombre = nombre;
	this.participantes = new Array();
}

Juego.prototype.getNombre = function() {
	return this.nombre;
}

Juego.prototype.addParticipante = function(participante) {
	//participante.addPoint();
	this.participantes.push(participante);
	participante.renderParticipante(this.idJuego);
};

Juego.prototype.removeParticipante = function(idParticipante) {
};

Juego.prototype.getParticipantes = function() {
	var cantidadParticipantes = this.participantes.length;
	var arrayOrdenado = this.participantes;
	$(".listaParticipantes div").remove();
	// ordenar
	//arrayOrdenado.sort(compare);
	for(var i = 0; i < cantidadParticipantes; i++) {
		arrayOrdenado[i].renderParticipante(this.idJuego);
	}
}

Juego.prototype.getGanador = function() {
	var cantidadParticipantes = this.participantes.length;
	var mayorPuntaje;
	var i = j = 0; // j es el indice del participante ganador
	if(cantidadParticipantes > 0) {
		mayorPuntaje = this.participantes[i].getPuntos();
	}

	for (var i = 1; i < cantidadParticipantes; i++) {
		if(this.participantes[i].getPuntos() > mayorPuntaje) {
			mayorPuntaje = this.participantes[i].getPuntos();
			j = i;
		}
	}
	return this.participantes[j];
};

Juego.prototype.renderJuego = function() {
	var contenedor = $(".listaJuegos");
	var liJuego = $("<li>");
	var aJuego = $('<a href="#juego" idJuego = "'+this.idJuego+'">'+this.getNombre()+'</a>');
	aJuego.on("click", mostrarJuego); // listener
	liJuego.append(aJuego);
	contenedor.append(liJuego);
	$(".listaJuegos").listview("refresh");
};

Juego.prototype.renderGanador = function() {
	var contenedor = $(".contenidoGanadores");
	var divGanadores = $('<div class="ganadores">');
	var divNombreJuego = $('<div class="ui-bar ui-bar-a">');
	divNombreJuego.append('<h3>'+this.getNombre()+'</h3>');
	var divNombreGanador = $('<div class="ui-body ui-body-a ganador">');
	divNombreGanador.append('<p>'+this.getGanador().getNombre()+'</p>'+
	'<figure><img src="img/smile.png"></figure>');
	divGanadores.append(divNombreJuego);
	divGanadores.append(divNombreGanador);
	contenedor.append(divGanadores);
};

Juego.prototype.reiniciarJuego = function() {
	var cantidadParticipantes = this.participantes.length;
	for (var i = 0; i < cantidadParticipantes; i++) {
		this.participantes[i].setPuntos(0);
	}
	this.getParticipantes();
};

/*function compare(a,b) {
  if (a.getPuntos() > b.getPuntos())
     return -1;
  if (a.getPuntos() < b.getPuntos())
    return 1;
  return 0;
}*/