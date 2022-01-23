var ganador = [2, 12, 19, 35, 44, 45];
var premios = [0, 0, 0, 0, 90, 3000, 150000, 1000000];//creo que sobra un 0

function comprobardiv(div) {
    var inputsDiv = div.querySelectorAll('input');
    var numAciertos = 0;
    
    for (var i = 0; i < inputsDiv.length; i++) {
        console.log(inputsDiv[i].value);
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
    if (hijos.length>0) {
        span.removeChild(hijos[0]);
    }
    var nodoTexto = document.createTextNode('Tiene ' + n + ' aciertos y su premio es de ' + premios[n]);
    span.appendChild(nodoTexto);
}

function comprobar() {
    var combinaciones = document.getElementById('combinaciones');
    var divs = combinaciones.querySelector('div');
        comprobardiv(divs);
}
function validar(num) {
    var encontrado = false;
    console.log("Numero obtenido " + num.value);
        if (num.value.charCodeAt()>=48 && num.value.charCodeAt()<=57 && num.value<=49) {
            encontrado = true;
        } 
    if (!encontrado) {
        num.value="";
    }
}

function agregarCombinacion(){
    
}

