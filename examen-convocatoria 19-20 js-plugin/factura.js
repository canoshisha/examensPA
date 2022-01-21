var $sf1 = $('#sf1');
var $descripcion1 = $('#descripcion1');
var $precioUd1 = $('#precioUd1');
var $unidades1 = $('#unidades1');
var $tipoIva1 = $('#tipoIva1');
var $totalConIva1 = $('#totalConIva1');
var $sumaTotalConIva = $('#sumaTotalConIva');
var $inputs = $('input');

function conFoco($elemento) {
    $elemento.attr('style', 'background-color: lavender');
}
function sinFoco($elemento) {
    $elemento.attr('style', 'background-color:');
}
function numeroEntero($elemento) {
    if ($elemento.val() < 0) {
        $elemento.attr('style', 'border:solid width red; ');
        return false;
    } else {
        $elemento.attr('style', 'border:; ');
        return true;
    }
}
function expresionRegular($elemento) {
    $expression = /[^a-z_\-0-9]/i;
    if (!$expression.test($elemento.val())) {
        $elemento.attr('style', 'border:solid width red; ');
        return false;
    } else {
        $elemento.attr('style', 'border:; ');
        return true;
    }
}

$inputs
    .bind('focus', function () {
        conFoco($(this));
    })
    .bind('blur', function () {
        sinFoco($(this));
    })
    ;

$unidades1
    .bind('blur',function(){
        numeroEntero($unidades1);
    });
$descripcion1
    .bind('blur',function(){
        expresionRegular($descripcion1);
    });

