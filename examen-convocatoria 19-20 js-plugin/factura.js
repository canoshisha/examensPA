$(document).ready(function () {
    var contadorFilas = 1;
    var $fila1 = $('#fila1');
    var $sf1 = $('#sf1');
    var $bontonMas = $('#botonMas');
    var $descripcion1 = $('#descripcion1');
    var $precioUd1 = $('#precioUd1');
    var $unidades1 = $('#unidades1');
    var $tipoIva1 = $('#tipoIva1');
    var $totalConIva1 = $('#totalConIva1');
    var $sumaTotalConIva = $('#sumaTotalConIva');
    var $inputs = $('input');


    $inputs
        .bind('focus', function () {
            conFoco($(this));
        })
        .bind('blur', function () {
            sinFoco($(this));
        })
        ;

    $bontonMas
        .click(function (e) { 
            $filaAnterior=$('#fila'+contadorFilas);
            contadorFilas++;
            $filaAnterior.after('<tr id="fila'+contadorFilas+'"> </tr>');
            $filaAcual = $('#fila'+contadorFilas);
            $filaAcual.append('<td><input type="checkbox" id="sf1" name="sf'+contadorFilas+'" value="selected" /></td>');
            $filaAcual.append('<td><input type="text" id="descripcion'+contadorFilas+'" name="descripcion'+contadorFilas+'" /></td>');
            $filaAcual.append('<td><input type="text" id="precioUd'+contadorFilas+'" name="precioUd'+contadorFilas+'" /></td>')
            $filaAcual.append('<td> <input type="text" id="unidades'+contadorFilas+'" name="unidades'+contadorFilas+'" /></td>');    
            $filaAcual.append('<td><select name="tipoIva'+contadorFilas+'" id="tipoIva'+contadorFilas+'"><option value="21">21%</option><option value="10">10%</option><option value="4">4%</option></select></td>');
            $filaAcual.append('<td id="totalConIva'+contadorFilas+'">0</td>');
            $('input')
            .bind('focus', function () {
                conFoco($(this));
            })
            .bind('blur', function () {
                sinFoco($(this));
            })
            ;
            $('#unidades'+contadorFilas)
            .bind('blur', function () {
                numeroEntero($('#unidades'+contadorFilas));
            });
    
        $('#precioUd'+contadorFilas)
            .bind('blur', function () {
                numeroEntero($('#precioUd'+contadorFilas));
            });
    
        $('#descripcion'+contadorFilas)
            .bind('blur', function () {
                expresionRegular($('#descripcion'+contadorFilas));
            });
        });
    


    $unidades1
        .bind('blur', function () {
            numeroEntero($unidades1);
        });

    $precioUd1
        .bind('blur', function () {
            numeroEntero($precioUd1);
        });

    $descripcion1
        .bind('blur', function () {
            expresionRegular($descripcion1);
        });

    $('form').submit(function () {
        var enviar = true;
        var $errores = $('#errores');
        $errores.append('<ol>');
        var i =1;
        while(i<=contadorFilas){
        if (!expresionRegular($('#descripcion'+contadorFilas))) {
            $errores.append('<li> La descripcion no pasa el filtro</li>');
            enviar = false;
        }
        if (!numeroEntero($('#unidades'+contadorFilas))) {
            $errores.append('<li> Las unidades no pueden ser menor que 0</li>');
            enviar = false;
        }
        if (!numeroEntero($('#precioUd'+contadorFilas))) {
            $errores.append('<li>El precio de unidad no pueden ser menor que 0</li>');
            enviar = false;
        }
        i++;
    }
        $errores.append('</ol>');

        return enviar;
    });
});

function conFoco($elemento) {
    console.log($elemento);
    $($elemento).attr('style', 'background-color: lavender');
}
function sinFoco($elemento) {
    $elemento.attr('style', 'background-color:');
}
function numeroEntero($elemento) {
    if ($elemento.val() < 0) {
        $elemento.attr('style', 'border: red 2px solid; ');
        return false;
    } else {
        $elemento.attr('style', 'border:; ');
        return true;
    }
}
function expresionRegular($elemento) {
    $expression = /[^a-z_\-0-9]/i;
    console.log($expression.test($elemento.val()));
    if ($expression.test($elemento.val())) {
        $elemento.attr('style', 'border: red 2px solid; ');
        return false;
    } else {
        $elemento.attr('style', 'border:; ');
        return true;
    }
}




