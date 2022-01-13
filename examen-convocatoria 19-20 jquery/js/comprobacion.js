$(document).ready(function () {
    var $registro = $('#registroForm');//chuleta
    var $agrupacion = $registro.find("[name=agrupacion]");
    var $ciudad = $registro.find('#ciudad');
    var $contacto = $registro.find('#contacto');
    var $email = $registro.find('#email');
    var $modalidad = $registro.find('[name=modalidad]:radio');
    var $numIntegrantes = $registro.find('#numIntegrantes');
    var $inputs = $registro.find('input');

    $inputs
        .bind('focus', function () {//chuleta
            enfocado($(this));
        })

        .bind('blur', function () {//chuleta
            comprobarVacio($(this));
        })
        ;
    $numIntegrantes
        .bind('focus', function () {
            if($numIntegrantes.val()>1){
                $numIntegrantes.change();
            }
        })

        .change(function () {//chuleta
            $("#componentes").empty();
            if (!$modalidad.is(':checked')) {//chuleta
                marcaError($(this), "Debe marcar una modalidad");

            } else {

                var numbien = true;
                // console.log($('input:radio[name=modalidad]:checked').val());// esto es para la chuleta
                switch ($('input:radio[name=modalidad]:checked').val()) {
                    case 'cuarteto':
                        if ($(this).val() > 5) {
                            marcaError($(this), "El numero de integrantes de cuartetos no puede ser mayor a 5");
                            numbien = false;
                        }
                        break;

                    case 'chirigota':
                        if ($(this).val() > 13) {
                            marcaError($(this), "El numero de integrantes de chirigotas no puede ser mayor a 13");
                            numbien = false;
                        }
                        break;
                    case 'comparsa':
                        if ($(this).val() > 13) {
                            marcaError($(this), "El numero de integrantes de comparsa no puede ser mayor a 13");
                            numbien = false;
                        }
                        break;
                    case 'coro':
                        if ($(this).val() > 30) {
                            marcaError($(this), "El numero de integrantes de coro no puede ser mayor a 30");
                            numbien = false;
                        }
                        break;
                }

                if (numbien) {
                    var i = 1;
                    while (i <= $(this).val()) {
                        $('#componentes').append('<label>Componente ' + i + '</label> <input type="text" class="componente"/> <br>');
                        i++;
                    }

                    $('.componente')
                        .bind('focus', function () {
                            enfocado($(this));
                        })

                        .bind('blur', function () {
                            comprobarVacio($(this));
                        })
                        ;

                }



            }

        });
    ;
    $modalidad
        .change(

            function () {
                if ($numIntegrantes.val() > 0) {
                    $numIntegrantes.change();
                }
            });

    $registro.submit(function () {//chuleta
        $agrupacion.blur();
        $ciudad.blur();
        $contacto.blur();
        $email.blur();
        $modalidad.blur();
        $numIntegrantes.blur();
        if($numIntegrantes.val()>0){
                $('.componente').blur();
        }

        if (!$registro.find('span')) {
            return true;
        } else {
            return false;
        }

    });

});


function marcaError($elemento, mensaje) {
    if (!$elemento.next().is('span') && !$elemento.next('span').is('#error')) {//chuleta
        $($elemento).attr('style', "border: red 2px solid;");//chuleta
        $($elemento).after('<span class=error>' + mensaje + '</span>');//chuleta
    }
}

function enfocado($elemento) {
    $elemento.attr('style', "border: green 2px solid;");
    if ($elemento.next().is('span') && $elemento.next('span').hasClass('error')) {
        $elemento.next('span').fadeOut('slow', function () {//chuleta
            $elemento.next('span').remove();
        });

    }

}

function comprobarVacio($elemento) {
    if ($elemento.val() < 1) {//chuleta, recordar siempre poner el menos 1, con mayor que 0 no funciona
        marcaError($elemento, 'Este elemento se encuentra vacio');

    } else {
        $elemento.attr('style', "'border: ;'");
    }
}

