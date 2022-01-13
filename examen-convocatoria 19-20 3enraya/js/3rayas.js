var turnoJugador = 1;
var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function marcarCelda(idCelda) {
    var celda = document.getElementById("c"+idCelda);
    if (tablero[idCelda] === 0) {
        celda.setAttribute("style", "background-color:white");
    } else if (tablero[idCelda] == 1) {
        celda.setAttribute("style", "background-color:red");
    } else if (tablero[idCelda] == 2) {
        celda.setAttribute("style", "background-color:blue");
    }
}

function jugarDeNuevo() {
    var confirmacion = window.confirm("¿Desea jugar otra vez?");
    if (confirmacion === true) {
        window.alert("Perfecto iniciemos de nuevo");
        for (var i = 0; i < tablero.length; i++) {
            tablero[i] = 0;
            marcarCelda(i);
        }

    }
}

function comprobarGanador() {
    var comprobar = 0;
    var ganador = 0;
    var empate=true;
    while (comprobar < tablero.length && ganador === 0) {
        switch (comprobar) {
            case 0:
                if (tablero[comprobar] !== 0) {
                    if (tablero[comprobar] === tablero[1] && tablero[comprobar] === tablero[2]) {
                        ganador = tablero[comprobar];
                    } else if (tablero[comprobar] === tablero[4] && tablero[0] === tablero[8]) {
                        ganador = tablero[comprobar];
                    } else if (tablero[comprobar] === tablero[3] && tablero[0] === tablero[6]) {
                        ganador = tablero[comprobar];
                    }
                }
                break;
            case 1:
                if (tablero[comprobar] !== 0) {
                    if (tablero[comprobar] === tablero[4] && tablero[comprobar] === tablero[7]) {
                        ganador = tablero[comprobar];
                    }
                }
                break;
            case 2:
                if (tablero[comprobar] !== 0) {
                    if (tablero[comprobar] === tablero[4] && tablero[comprobar] === tablero[6]) {
                        ganador = tablero[comprobar];
                    } else if (tablero[comprobar] === tablero[5] && tablero[comprobar] === tablero[8]) {
                        ganador = tablero[comprobar];
                    }
                }
                break;
            case 3:
                if (tablero[comprobar] !== 0) {
                    if (tablero[comprobar] === tablero[4] && tablero[comprobar] === tablero[5]) {
                        ganador = tablero[comprobar];
                    }

                }
                break;
            case 6:
                if (tablero[comprobar] !== 0) {
                    if (tablero[comprobar] === tablero[7] && tablero[comprobar] === tablero[8]) {
                        ganador = tablero[comprobar];
                    }
                }
                break; 
        }
        comprobar++;
    }
    comprobar=0;
    if(ganador===0){
        while(empate===true && comprobar<tablero.length){
        if(tablero[comprobar]===0){
            empate=false;
        }
        comprobar++;
        }
        if(empate){
            ganador=3;
        }
    }

    return ganador;
}

function actualizarPuntuacion(ganador){
    if(ganador === 3){
        window.alert("El resultado es empate");
        var empates = document.getElementById("empates");
        var valor =  empates.firstChild.nodeValue;
        var valornumerico = parseInt(valor) + 1;
        var nodo = document.createTextNode(valornumerico);
        empates.replaceChild(nodo,empates.firstChild);
    }
    if(ganador === 2){
        window.alert("Gana el jugador 2, enhorabuena");
        var ganador2 = document.getElementById("ganadosJ2");
        var valor =  ganador2.firstChild.nodeValue;
        var valornumerico = parseInt(valor) + 1;
        var nodo = document.createTextNode(valornumerico);
        ganador2.replaceChild(nodo,ganador2.firstChild);

    }
    if(ganador === 1){
        window.alert("Gana el jugador 1, enhorabuena");
        var ganador1 = document.getElementById("ganadosJ1");
        var valor =  ganador1.firstChild.nodeValue;
        var valornumerico = parseInt(valor) + 1;
        var nodo = document.createTextNode(valornumerico);
        ganador1.replaceChild(nodo,ganador1.firstChild);
    }

}

function seleccionarCelda(idCelda){
    if(tablero[idCelda]!==0){
        window.alert("Celda ya ocupada");
    }else{
        tablero[idCelda]=turnoJugador;
        marcarCelda(idCelda);
        if(turnoJugador===1){
            turnoJugador=2
        }else{
            turnoJugador=1;
        }

        var jugadorActual = document.getElementById("jugadorActivo");
        console.log("numero " + jugadorActual.firstChild.nodeValue);
        nodo = document.createTextNode(turnoJugador);
        jugadorActual.replaceChild(nodo,jugadorActual.firstChild);
        
        var ganador = comprobarGanador();
        if(ganador !==0){
            actualizarPuntuacion(ganador);
            jugarDeNuevo();
        }
    }
}