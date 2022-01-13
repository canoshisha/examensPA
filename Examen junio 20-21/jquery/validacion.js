function marcaError($elemento, mensaje) {
    if ($($elemento).html() !== "span" && !$($elemento).hasClass('error')) {

        $($elemento).css("background", "red");
        $($elemento).css("color", "white");
        // $("<span calss='error'>"+mensaje+"</span>").insertBefore($elemento);
        $($elemento).before("<span calss='error'>" + mensaje + "</span>");
    }

}
function enfocado($elemento) {
    $elemento.css("background", "white");
    $elemento.css("color", "black");
    if ($($elemento).prev('<span>'))
        $($elemento).prev('<span>').remove();
}

function comprobarVacio($elemento) {
    if ($elemento.val() < 1) {
        marcaError($elemento, "Se encuenta vacio");
    }
}

$(".seleccionDosis").hide();

$nombrePaciente = $('input[name=nombrePaciente]');
$apellidosPaciente = $('input[name=apellidosPaciente]');
$dni = $('input[name=dni]');
$vacuna = $('input[name=vacuna]');

$nombrePaciente
    .bind('focus', function () {
        enfocado($nombrePaciente);
    })
    .bind('blur', function () {
        comprobarVacio($nombrePaciente);
    });
$apellidosPaciente
    .bind('focus', function () {
        enfocado($apellidosPaciente);
    })
    .bind('blur', function () {
        comprobarVacio($apellidosPaciente);
        if($apellidosPaciente.val().indexOf(" ")==0){
            marcaError($apellidosPaciente,"ERROR: debe introducir dos apellidos, solo se encuentra uno");
        }
    });
$dni
    .bind('focus', function () {
        enfocado($dni);
    })
    .bind('blur', function () {
        
        comprobarVacio($dni);
        var validacion = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
        if (!validacion.test($dni.val())){
            marcaError($dni,"error en el dni, no cumple el formato");
        }
    });

$vacuna
    .bind('focus', function () {
        enfocado($vacuna);
    })
    .bind('blur', function () {
        comprobarVacio($vacuna);
        if($vacuna.val()==='Seleccione una vacuna'){
            $('#altaPrueba').after("<h3 class='aviso' style='color:red;'> ATENCIÓN:</br> Debe seleccionar una vacuna </h3>");

        }else{
            $('#altaPrueba').next('.aviso').remove();
            if($vacuna.val()!=='janssen'){
                $(".seleccionDosis").show();
            }
        }
    });

$('#altaPrueba').submit(function () { 
    $nombrePaciente.blur();
    $apellidosPaciente.blur();
    $dni.blur();
    $vacuna.blur();
    if($('span')){
        return false;
    }else{
        return true;
    }
    
});