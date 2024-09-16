/**Funciones de Orden Superior y Callbacks:
 ○ Define una función operacion que acepte dos números y una función
 callback.
 ○ Implementa la función operacion para realizar una operación matemática
 (por ejemplo, suma o multiplicación) utilizando la función callback. */

 function operacion(a,b,cb){
   return cb(a,b)
 }

 function suma(a,b){
   return a+b;
 }

 console.log( operacion(5,5,suma))