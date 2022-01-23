$(document).ready(function () {

    $combinaciones = $('#combinaciones');
    $numPrimitivas = $combinaciones.find('.numPrimitiva');
        $numPrimitivas
            .bind('focus', function () {
                $(this).css('background','white');
            })
            .bind('blur', function () {
                
            });
   


});

