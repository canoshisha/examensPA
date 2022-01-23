var ganador = [2, 12, 19, 35, 44, 45];
var premios = [0, 0, 0, 90, 3000, 150000, 1000000];//creo que sobra un 0
var numeroFilas = 1;
function comprobardiv(div) {
    var inputsDiv = div.querySelectorAll('input');
    var numAciertos = 0;

    for (var i = 0; i < inputsDiv.length; i++) {
        if (inputsDiv[i].value == ganador[i]) {
            numAciertos++;
        }
    }
    pintaAciertos(div.querySelector('span'), numAciertos);

}
function pintaAciertos(span, n) {
    console.log(span);
    var hijos = span.childNodes;
    console.log(hijos.length);
    if (hijos.length > 0) {
        span.removeChild(hijos[0]);
    }
    var nodoTexto = document.createTextNode('Tiene ' + n + ' aciertos y su premio es de ' + premios[n]);
    span.appendChild(nodoTexto);
}

function comprobar() {
    var combinaciones = document.getElementById('combinaciones');
    var divs = combinaciones.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        comprobardiv(divs[i]);
    }

}
function validar(num) {
    var encontrado = false;
    console.log("Numero obtenido " + num.value);
    if (num.value.charCodeAt() >= 48 && num.value.charCodeAt() <= 57 && num.value <= 49) {
        encontrado = true;
    }
    if (!encontrado) {
        num.value = "";
    }

}

function agregarCombinacion() {
    numeroFilas++;
    var divnuevo = document.createElement('div');
    divnuevo.id = "combinacion" + numeroFilas;
    for (var i = 0; i < 6; i++) {
        var inputnew = document.createElement('input');
        var nodotexto = document.createTextNode(" ");
        inputnew.type = 'text';
        inputnew.size = 5;
        inputnew.setAttribute('class', 'numPrimitiva');
        inputnew.setAttribute("onkeyup", "validar(this)");

        divnuevo.appendChild(inputnew);
        divnuevo.appendChild(nodotexto);
    }
    var span = document.createElement('span');
    divnuevo.appendChild(span);

    var boton = document.createElement('input');
    boton.type = 'button';
    boton.value = 'Eliminar';
    boton.id = 'eliminar';

    divnuevo.appendChild(boton);

    document.getElementById('combinaciones').appendChild(divnuevo);
    $('#combinacion' + numeroFilas).hide().fadeIn('slow');

}
$(document).ready(function () {
    $('#combinaciones').on('click','#eliminar',function () {
       $(this).parent().fadeOut("slow", function () {
            $(this).remove();
        });
    });
});

