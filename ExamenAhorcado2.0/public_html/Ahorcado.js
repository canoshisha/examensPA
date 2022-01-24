var vector = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];
var palabra = '';
var oculta = [];
var buttons = [];
var intentos ;

function generaPalabra() {
    var index = Math.floor(Math.random() * vector.length);
    palabra = vector[index][0].toUpperCase();

}
function pintarGuiones(N) {
    var huecos = '';
    for (var i = 0, max = N; i < max; i++) {
        oculta.push('_');
        huecos =huecos.concat('_');
    }
    var nodo = document.createTextNode(huecos);
    document.getElementById('palabra').appendChild(nodo);
}
function generaABC() {
    var abcdario = document.getElementById('abcdario');
    for (var i = 65, max = 90; i < max; i++) {
        var boton = document.createElement('input');
        boton.type = 'button';
        boton.id = String.fromCharCode(i).toUpperCase();
        boton.value = String.fromCharCode(i).toUpperCase();
        boton.setAttribute('class','letra');
        boton.setAttribute('onClick', 'intento("' + String.fromCharCode(i).toUpperCase() + '")');
        buttons.push(boton);
        abcdario.appendChild(boton);
    }

}
function intento(idLetra) {
    if (palabra.includes(idLetra)) {
        var vectorPalabra = palabra.split('');

        for (var i = 0, max = vectorPalabra.length; i < max; i++) {
            if (vectorPalabra[i] === idLetra) {
                oculta[i] = idLetra;
            }

        }
        var palabrahtml = document.getElementById('palabra');
        var insertar = '';
        for (var i = 0, max = oculta.length; i < max; i++) {
            insertar = insertar.concat(oculta[i]);
        }

        var nodonuevo = document.createTextNode(insertar);
        palabrahtml.replaceChild(nodonuevo, palabrahtml.childNodes[0]);
        
        if(document.getElementById('msg').childNodes.length>0){
            document.getElementById('msg').removeChild(document.getElementById('msg').childNodes[0]);
        }
        
        nodonuevo = document.createTextNode('ACIERTO!');
        document.getElementById('msg').appendChild(nodonuevo);
        document.getElementById('msg').setAttribute('class','msg acierto');
    } else {
        intentos--;
        var intentoshtml = document.getElementById('intentos');
        var valor = document.createTextNode(intentos);
        var nodosIntentos = intentoshtml.childNodes;
        intentoshtml.replaceChild(valor, nodosIntentos[0]);
         if(document.getElementById('msg').childNodes.length>0){
            document.getElementById('msg').removeChild(document.getElementById('msg').childNodes[0]);
        }
        nodonuevo = document.createTextNode('FALLO');
        document.getElementById('msg').appendChild(nodonuevo);
        document.getElementById('msg').setAttribute('class','msg fallo');

        var imagen = document.getElementById('image' + intentos);
        imagen.setAttribute('class', 'fade-in');



    }
    document.getElementById(idLetra).disabled=true;
    setTimeout(function () {
        document.getElementById('msg').setAttribute('class','');
    }, 2000);
    compruebaFin();
}

function pista() {
    var encontrado = false;
    var i = 0;
    if( document.getElementById('hueco-pista').childNodes.length>0){
        document.getElementById('hueco-pista').removeChild(document.getElementById('hueco-pista').childNodes[0]);
    }
    while (!encontrado) {
        if (vector[i][0].toUpperCase() === palabra){
            encontrado=true;
            var nodonuevo = document.createTextNode(vector[i][1]);
            document.getElementById('hueco-pista').appendChild(nodonuevo);
        }
        i++;
    }
}
function compruebaFin(){
    var actual='';
        for (var i = 0, max = oculta.length; i < max; i++) {
                actual=actual.concat(oculta[i]);
        }
     
    if(!actual.includes('_')){
        document.getElementById('msg-final').appendChild(document.createTextNode('Felicidades'));
        document.getElementById('msg-final').setAttribute('class','zoom-in');
        
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled=true;
        }
        document.getElementById('reset').setAttribute('onclick','location.reload()');
        document.getElementById('reset').replaceChild(document.createTextNode('EMPEZAR'),document.getElementById('reset').childNodes[0]);
        
    }else if(intentos===0){
        document.getElementById('msg-final').appendChild(document.createTextNode('Game Over'));
        document.getElementById('msg-final').setAttribute('class','zoom-in');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled=true;
        }
        document.getElementById('reset').setAttribute('onclick','location.reload()');
        document.getElementById('reset').replaceChild(document.createTextNode('EMPEZAR'),document.getElementById('reset').childNodes[0]);
        
    }
    
}
function inicio(){
    while(document.getElementById('palabra').firstChild){
        document.getElementById('palabra').removeChild(document.getElementById('palabra').firstChild);
    }
    while(document.getElementById('abcdario').firstChild){
        document.getElementById('abcdario').removeChild(document.getElementById('abcdario').firstChild);
    }
    while(document.getElementById('intentos').firstChild){
        document.getElementById('intentos').removeChild(document.getElementById('intentos').firstChild);
    }
    while(document.getElementById('hueco-pista').firstChild){
        document.getElementById('hueco-pista').removeChild(document.getElementById('hueco-pista').firstChild);
    }
    for (var i = 0, max = 7; i < max; i++) {
        document.getElementById('image'+i).setAttribute('class','');
    }
    
    generaPalabra();
    pintarGuiones(palabra.length);
    generaABC();
    intentos=6;
    document.getElementById('intentos').appendChild(document.createTextNode(intentos));
    console.log(palabra);
    
}
