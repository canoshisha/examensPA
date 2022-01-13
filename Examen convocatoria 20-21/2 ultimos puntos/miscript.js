$(document).ready(function () {
    var $contacto = $('#contacto');
    var $nombre = $contacto.find('#nombre');
    var $email = $contacto.find('#email');
    var $apellidos = $contacto.find('#apellidos');
    var $comentario = $contacto.find('#comentario');
    var $boton = $contacto.find('button');

$nombre
           .bind('focus', function (){
                limpiarMensajes('nombre');
   })
            .bind('blur', function (){
                comprobarRelleno('nombre');
   });

    $email
            .bind('focus', function (){
                limpiarMensajes('email');
   })
            .bind('blur', function (){
                validarEmail('email');
                comprobarRelleno('email');
   });
            
   $apellidos
           .bind('focus', function (){
                limpiarMensajes('apellidos');
   })
            .bind('blur', function (){
                comprobarRelleno('apellidos');
   });
   
   $comentario
           .bind('focus', function (){
                limpiarMensajes('comentario');
   })
            .bind('blur', function (){
                comprobarRelleno('comentario');
   });
   
   $contacto.submit(function (){
       comprobarRelleno('nombre');
       comprobarRelleno('apellidos');
       comprobarRelleno('email');
       comprobarRelleno('comentario');
       validarEmail('email');
       
       if(hayErrores()){
           return false;
       }else{
            return true;
       }    

   });
      
   
   

});
