$(document).ready(function () {
    var contadorFilas = 1;
    var $bontonMas = $('#botonMas');
    var $descripcion1 = $('#descripcion1');
    var $precioUd1 = $('#precioUd1');
    var $unidades1 = $('#unidades1');


    $unidades1
        .bind('focus', function () {
            conFoco($(this));
        })
        .bind('blur', function () {
            sinFoco($(this));
            numeroEntero($(this));

        });

    $precioUd1
        .bind('focus', function () {
            conFoco($(this));
        })
        .bind('blur', function () {
            sinFoco($(this));
            numeroEntero($(this));

        });

    $descripcion1
        .bind('focus', function () {
            conFoco($(this));
        })
        .bind('blur', function () {
            sinFoco($(this));
            expresionRegular($(this));

        });
    $bontonMas
        .click(function (e) {
            
            $filaAnterior = $('#fila' + contadorFilas);
            contadorFilas++;
            $filaAnterior.after('<tr id="fila' + contadorFilas + '"> </tr>');
            $filaAcual = $('#fila' + contadorFilas);
            $filaAcual.append('<td><input type="checkbox" id="sf' + contadorFilas + '" name="sf' + contadorFilas + '" value="selected" /></td>');
            $filaAcual.append('<td><input type="text" id="descripcion' + contadorFilas + '" name="descripcion' + contadorFilas + '" /></td>');
            $filaAcual.append('<td><input type="text" id="precioUd' + contadorFilas + '" name="precioUd' + contadorFilas + '" /></td>')
            $filaAcual.append('<td> <input type="text" id="unidades' + contadorFilas + '" name="unidades' + contadorFilas + '" /></td>');
            $filaAcual.append('<td><select name="tipoIva' + contadorFilas + '" id="tipoIva' + contadorFilas + '"><option value="21">21%</option><option value="10">10%</option><option value="4">4%</option></select></td>');
            $filaAcual.append('<td id="totalConIva' + contadorFilas + '">0</td>');
            $('input')
                .bind('focus', function () {
                    conFoco($(this));
                })
                .bind('blur', function () {
                    sinFoco($(this));
                })
                ;
            var j=2;    
            while (j <= contadorFilas) {
            $('#unidades' + j)
                .bind('focus', function () {
                    conFoco($(this));
                })
                .bind('blur', function () {
                    sinFoco($(this));
                    numeroEntero($(this));

                });

            $('#precioUd' + j)
                .bind('focus', function () {
                    conFoco($(this));
                })
                .bind('blur', function () {
                    sinFoco($(this));
                    numeroEntero($(this));

                });

            $('#descripcion' + j)
            .bind('focus', function () {
                conFoco($(this));
            })
            .bind('blur', function () {
                sinFoco($(this));
                expresionRegular($(this));
    
            });
            j++;
        }
        });

    $('form').submit(function () {
        var enviar = true;
        var $errores = $('#errores');
        $errores.append('<ol>');
        var i = 1;
        while (i <= contadorFilas) {
            if (!expresionRegular($('#descripcion' + i))) {
                $errores.append('<li> La descripcion de la fila' + i + ' no pasa el filtro</li>');
                enviar = false;
            }
            if (!numeroEntero($('#unidades' + i))) {
                $errores.append('<li> Las unidades de la fila' + i + ' no pueden ser menor que 0</li>');
                enviar = false;
            }
            if (!numeroEntero($('#precioUd' + i))) {
                $errores.append('<li>El precio de unidad de la fila' + i + ' no pueden ser menor que 0</li>');
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

function actualizarCelda($elemento){
    
}
}




