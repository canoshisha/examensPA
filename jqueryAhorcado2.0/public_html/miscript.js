$(document).ready(function () {
    var text = $('[type=text]');
    var textarea = $('textarea');
    var email = $('#email');
    var contacto = $('#contacto');
    
    text
            .on('focus', function () {
                $(this).examen('limpiarMensajes');
            })
            .on('blur', function () {
                $(this).examen('comprobarRelleno');
            })
            ;
    textarea
            .on('focus', function () {
                $(this).examen('limpiarMensajes');
            })
            .on('blur', function () {
                $(this).examen('comprobarRelleno');
            })
            ;
    email
            .on('blur', function () {
                $(this).examen('validarEmail');
            });
            
    contacto
            .submit(function (){
                text.focus();
                textarea.focus();
                
                text.blur();
                textarea.blur();
                
                email.blur();
                
               var error = $(document).examen('hayErrores');
                
               return !error;
             
    });

});
