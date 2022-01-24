jQuery.fn.examen=function(action){
    if(action==='comprobarRelleno'){
        comprobarRelleno($(this).attr('name'));
    }else if(action==='limpiarMensajes'){
        limpiarMensajes($(this).attr('name'));
    }else if(action==='validarEmail'){
        validarEmail($(this));
    }else if(action==='hayErrores'){
       return hayErrores();
    }
    
};
function comprobarRelleno(nombre){
    var elemento = $('[name='+nombre+']');
    console.log(elemento.length);
    if (elemento.val()<1){
        console.log('llega aqui');
          elemento.after('<span class="error msg_'+nombre+'">El '+nombre+' debe estar relleno </span>');
          
    }
}
function limpiarMensajes(nombre){
        var elemento = $('[name='+nombre+']');
        if(elemento.next('span').length<=1){
            elemento.next('span').remove();
        }
}

function validarEmail(elemento){
    $expresion=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!$expresion.test(elemento.val())){
        elemento.after('<span class="error ">El email no tiene el formato correcto. </span>');
    }
}

function hayErrores(){
    var $error = $('.error');
    if($error.length){
        return true;
    }else{
        return false;
    }
}