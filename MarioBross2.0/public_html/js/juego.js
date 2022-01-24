var vectorElementos = [
    {
        'name': 'shell',
        'img': 'img/blueshell.png'
    }, {
        'name': 'star',
        'img': 'img/star.png'
    }, {
        'name': 'bobomb',
        'img': 'img/bobomb.png'
    }, {
        'name': 'mario',
        'img': 'img/mario.png'
    }, {
        'name': '1up',
        'img': 'img/1up.png'
    }, {
        'name': 'thwomp',
        'img': 'img/thwomp.png'
    }, {
        'name': 'bulletbill',
        'img': 'img/bulletbill.png'
    }, {
        'name': 'coin',
        'img': 'img/coin.png'
    }, {
        'name': 'goomba',
        'img': 'img/goomba.png'
    }

];
var identificacion1;
var identificacion2;
var contador=0;
var tableroJuegos= vectorElementos.concat(vectorElementos);
tableroJuegos.sort(function() {return Math.random() - 0.5});

var juego = document.getElementById('juego');
var section = document.createElement('section');
section.setAttribute('class','grid');

for (var i = 0, max = tableroJuegos.length; i < max; i++) {
    var card = document.createElement('div');
    card.setAttribute('class','card');
    card.setAttribute('name',tableroJuegos[i]['name']);
    
    var front = document.createElement('div');
    front.setAttribute('class','front');
    front.setAttribute('onclick','procesarClick(this)');
    
    var back = document.createElement('div');
    back.setAttribute('class','back');
    back.style.backgroundImage = 'url('+tableroJuegos[i]['img']+')';
    
    card.appendChild(front);
    card.appendChild(back);
    section.appendChild(card);
}


juego.appendChild(section);

function procesarClick(elemento){
   var padre = elemento.parentNode;
   var clases = padre.classList;
   var clasEncontrada=false;
    for (var i = 0, max = clases.length; i < max; i++) {
        if(clases[i]==='selected' || clases[i]==='match'){
            clasEncontrada = true;
        }
    }
    if(clasEncontrada){
        return;
    }else{
        if(contador<2){
            if(contador===0){
                identificacion1=padre.getAttribute('name');
            }else if(contador===1){
                identificacion2=padre.getAttribute('name');
            }
            clases.add('selected');
            contador++;
        }
        if(contador===2){
            if(identificacion1===identificacion2){
                document.getElementById('mensajeAcierto').style.display='block';
                setTimeout(function (){
                    match();
                },1000);
                
            }else{
                document.getElementById('mensajeError').style.display='block';
                setTimeout(function (){
                    resetGuesses();
                },1000);
            }
        }
    }
}
function match(){
   
    while(document.getElementsByClassName('selected').length>0){
        document.getElementsByClassName('selected')[0].classList.add('match');
        document.getElementsByClassName('selected')[0].classList.remove('selected');
    }
    document.getElementById('mensajeAcierto').style.display='none';
    identificacion1="";
    identificacion2="";
    contador=0;
}
function resetGuesses(){
 
    while(document.getElementsByClassName('selected').length>0){
        document.getElementsByClassName('selected')[0].classList.remove('selected');  
    }
    document.getElementById('mensajeError').style.display='none';
    identificacion1="";
    identificacion2="";
    contador=0;
}

