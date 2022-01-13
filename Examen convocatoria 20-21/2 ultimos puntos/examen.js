function comprobarRelleno(n){

    if ($('#'+n).val()<1) {
        $('#'+n).after('<span class="error msg_'+ n +'"  >El ' + n + ' debe de estar relleno</span>');
    }
}
;

function limpiarMensajes(n) {
        $('#'+n).next('span').remove();
    

}
function validarEmail(n){
    var email = $('#'+n).val();
    var expresion=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!expresion.test(email)){
        $('#'+n).after('<span class="error msg_email"  >El Email no es valido</span>');
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



