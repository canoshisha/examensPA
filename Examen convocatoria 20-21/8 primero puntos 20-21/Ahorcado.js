var vector = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];
var palabra;
var oculta = [];
var intentos;
var buttons = [];


function generaPalabra() {
    var index = Math.floor(Math.random() * vector.length);
    var palabra2 = vector[index][0];
    return palabra2.toUpperCase();
}
function pintarGuiones(N) {
    var i = 0;
    var cadena = "";
    while (i < N) {
        window.oculta.push("_");
        i++;
    }
    for (var m in oculta) {
        cadena = cadena.concat(oculta[m]);
    }
    var nodoCadena = document.createTextNode(cadena);
    document.getElementById("palabra").appendChild(nodoCadena);
}
function generaABC() {
    var abcdarioHTML = document.getElementById("abcdario");

    for (var i = 65; i < 91; i++) {
        var boton;
        boton = document.createElement("input");
        boton.id = String.fromCharCode(i);
        boton.value = String.fromCharCode(i);
        boton.setAttribute("class", "letra");
        boton.type = "button";
        boton.setAttribute("onclick", "intento('" + String.fromCharCode(i) + "')");
        abcdarioHTML.appendChild(boton);
        buttons.push(boton);
    }

}
function intento(letra) {
    var mensaje;
    var localizaciones = [];
    var i = 0;
    var letrasPalabra = palabra.split("");
    while (i < palabra.length) {
        if (letrasPalabra[i].includes(letra)) {
            localizaciones.push(i);
        }
        i++;
    }
    if (palabra.includes(letra)) {

        for (var j in localizaciones) {
            oculta[localizaciones[j]] = letra;
        }
        var cadena = "";
        for (var m in oculta) {
            cadena = cadena.concat(oculta[m]);
        }
        document.getElementById(letra).setAttribute("disables", true);
        var nodoCadena2 = document.createTextNode(cadena);
        var antiguonodo = document.getElementById("palabra").childNodes;
        document.getElementById("palabra").removeChild(antiguonodo[0]);
        document.getElementById("palabra").appendChild(nodoCadena2);

        mensaje = document.getElementById("msg");
        mensaje.setAttribute("class", "msg acierto");

        var mensajeNodo = document.createTextNode("ACIERTO!");
        var antiguonodo = document.getElementById("msg").childNodes;
        if (antiguonodo[0]) {
            document.getElementById("msg").removeChild(antiguonodo[0]);
        }

        document.getElementById("msg").appendChild(mensajeNodo);
        setTimeout(function () {
            mensaje.setAttribute("class", "");
        }, 2000);
    } else {
        intentos--;
        var intentosNodos = document.getElementById("intentos").childNodes;
        var nuevoIntento = document.createTextNode(intentos);
        document.getElementById("intentos").replaceChild(nuevoIntento, intentosNodos[0]);


        mensaje = document.getElementById("msg");
        mensaje.setAttribute("class", "msg fallo");
        var mensajeNodo = document.createTextNode("FALLO");
        var antiguonodo = document.getElementById("msg").childNodes;
        if (antiguonodo[0]) {
            mensaje.removeChild(antiguonodo[0]);
        }
        mensaje.appendChild(mensajeNodo);

        var nombreImagen = "image" + intentos;
        document.getElementById(nombreImagen).setAttribute("class", "fade-in");

        setTimeout(function () {
            mensaje.setAttribute("class", "");
        }, 2000);


    }
    document.getElementById(letra).disabled = true;
    compruebaFin();
}
function pista() {
    var pistapalabra = "";

    for (var i = 0; i < vector.length; i++) {
        if (vector[i][0].toUpperCase() === palabra) {
            pistapalabra = vector[i][1];
        }
    }
    var pista = document.createTextNode(pistapalabra);
    document.getElementById("hueco-pista").appendChild(pista);
}
function compruebaFin() {
    var fin = document.getElementById("msg-final");
    var mensaje;
    if (intentos === 0 || !oculta.includes("_")) {
        if (intentos === 0) {
            mensaje = document.createTextNode("Game Over");
        } else {
            mensaje = document.createTextNode("FELICIDADES");
        }
        fin.appendChild(mensaje);
        fin.setAttribute("class", "zoom-in");
        for (var i = 0; i< buttons.length;i++){
            buttons[i].disabled = true;
        }
        var nodoTexto = document.createTextNode("EMPEZAR");
        var antiguonodo = document.getElementById("reset").childNodes;
        if (antiguonodo[0]) {
            document.getElementById("reset").removeChild(antiguonodo[0]);
        }

        document.getElementById("reset").appendChild(nodoTexto);
    }
}
function inicio() {
    palabra = "";
    intentos = 6;
    oculta = [];
    var nodoTexto = document.createTextNode("Elegir otra palabra");
    var antiguonodo = document.getElementById("reset").childNodes;
    if (antiguonodo[0]) {
        document.getElementById("reset").removeChild(antiguonodo[0]);
    }
    document.getElementById("reset").appendChild(nodoTexto);
    antiguonodo = document.getElementById("msg-final").childNodes;
    if (antiguonodo[0]) {
        document.getElementById("msg-final").removeChild(antiguonodo[0]);
    }
    var fin = document.getElementById("msg-final");
    fin.setAttribute("class", "");
    
    var pista = document.getElementById("hueco-pista").childNodes;
    if(pista[0]){
        document.getElementById("hueco-pista").removeChild(pista[0]);
    }
    
    
    var intento = document.getElementById("intentos");
    var antiguonodointento = intento.childNodes;
    if (antiguonodointento[0]) {
        intento.removeChild(antiguonodointento[0]);
    }
    intento.appendChild(document.createTextNode(intentos + ""));
    if (document.getElementById("palabra").firstChild) {
        document.getElementById("palabra").removeChild(document.getElementById("palabra").firstChild);

    }
    window.palabra = generaPalabra();
    pintarGuiones(palabra.length);
    while (document.getElementById("abcdario").firstChild) {

        document.getElementById("abcdario").removeChild(document.getElementById("abcdario").firstChild);

    }
    var i = 0;
    while (i < 6) {
        var nombreImagen = "image" + i;
        document.getElementById(nombreImagen).setAttribute("class", "");
        i++;
    }
    generaABC();


}