var seleccionadosYa = [];
contadorSeleccionados = 0;
var vectorElementos = [
    {
        'name': 'shell',
        'img': 'img/blueshell.png'
    },
    {
        'name': 'star',
        'img': 'img/star.png'
    },
    {
        'name': 'bobomb',
        'img': 'img/bobomb.png'
    },
    {
        'name': 'mario',
        'img': 'img/mario.png'
    },
    {
        'name': '1up',
        'img': 'img/1up.png'
    },
    {
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


function shuffle(array) {//buscar como funciona esta mierda
    array.sort(() => Math.random() - 0.5);
}

var tableroJuego = vectorElementos.concat(vectorElementos);
shuffle(tableroJuego);

var contenedorJuego = document.getElementById('juego');
var section = document.createElement('section');
section.className = 'grid';
contenedorJuego.appendChild(section);

for (var objeto in tableroJuego) {
    var card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('name', tableroJuego[objeto]['name']);
    section.appendChild(card);

    var front = document.createElement('div');
    card.appendChild(front);
    front.className = 'front';
    // front.addEventListener('click',procesarClick(front));
    

    var back = document.createElement('div');
    card.appendChild(back);
    back.className = 'back';
    back.style.backgroundImage = "url('" + tableroJuego[objeto]['img'] + "')";

   front.setAttribute("onclick",'procesarClick(this)');

    
}
function procesarClick(e) { 
    console.log(e);
    padre = e.parentNode;
    if (padre.className === 'card selected' || padre.className === 'card match') {
        return;
    }
   
    if (contadorSeleccionados === 0 || contadorSeleccionados === 1) {
        console.log(padre.getAttribute("name"));
        console.log(padre.name);
        seleccionadosYa[contadorSeleccionados]=padre.getAttribute("name")
        padre.classList.add('selected');
    }
    contadorSeleccionados++;
    if(contadorSeleccionados===2){
        console.log(seleccionadosYa);
    if (seleccionadosYa[0] === seleccionadosYa[1]) {
        document.getElementById('mensajeAcierto').style.display = 'block';
        setTimeout(match, 1000);

    } else {
        document.getElementById('mensajeError').style.display='block';
        setTimeout(resetGuesses, 1000);
    }
    
}
       
}
function match() {
    var seleccionados = document.getElementsByClassName('card selected');
        seleccionados[0].classList.add('match');
        seleccionados[0].classList.remove('selected');
        seleccionados[0].classList.add('match');
        seleccionados[0].classList.remove('selected');
        seleccionadosYa[0]="";
        seleccionadosYa[1]="";
        contadorSeleccionados=0;
        document.getElementById('mensajeAcierto').style.display = 'none';
}
function resetGuesses() {
    var seleccionados = document.getElementsByClassName('selected');
    console.log(seleccionados[0]);
    seleccionados[0].classList.remove('selected');
    seleccionados[0].classList.remove('selected');
    seleccionadosYa[0]="";
    seleccionadosYa[1]="";
    document.getElementById('mensajeError').style.display = 'none';
    contadorSeleccionados=0;
    console.log("contador ="+contadorSeleccionados);
}
