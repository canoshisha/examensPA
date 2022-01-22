var ganador =[2,12,19,35,44,45];
var premios =[0,0,0,0,90,3000,150000,1000000];

function comprobardiv(div){
   $inputs=$(div).find('input');
   var div1 = document.getElementById(div);
   var inputsDiv = div1.getElementByClass('numPrimitiva');
   var numAciertos=0;
    for (var i = 0; i < inputsDiv.length; i++) {
        if(inputsDiv[i]==ganador[i]){
            numAciertos++;
        }
    }
    
    
    ;
}

function pintaAciertos(span,n){
    $(span).empty();
    var nodoTexto = document.createTextNode('Tiene '+ n + ' aciertos y su premio es de ' + premios[n]);
    
    
}

