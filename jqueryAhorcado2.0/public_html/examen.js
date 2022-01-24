jQuery.fn.examen=function(action){
    if(action=='comprobarRelleno'){
        comprobarRelleno($(this).attr('name'));
    }else if(action=='limpiarMensajes'){
        limpiarMensajes($(this).attr('name'));
    }else if(action=='validarEmail'){
        validarEmail();
    }else if(action=='hayErrores'){
        hayErrores();
    }
    
};
function comprobarRelleno(nombre){
    var elemento = $('input[name='+nombre+']');
    if (elemento.length===0){
//        var span = document.createElement('span'); // PRIMERA FORMA DE HACERLO
//        span.setAttribute('class','error msg_'+nombre);
//        span.appendChild('El' + nombre + 'debe estar relleno');
          elemento.append('<span class="error msg_'+nombre+'">El '+nombre+' debe estar relleno </span>');
          
    }
}
function limpiarMensajes(nombre){
        var elemento = $('input[name='+nombre+']');
        if(elemento.next('span')){
            elemento.next('span').remove();
        }
}

function validarEmail(){
    $expresion=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!$expresion.test($(this).val())){
        $(this).append('<span class="error ">El email no tiene el formato correcto. </span>');
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