/**. Arrow Functions y Funciones Anónimas:
 ○ Convierte la función saludar del objeto persona en una arrow function.
 ○ Define una función anónima que tome un número como argumento y
 devuelva el cuadrado de ese número. */

 const persona={ nombre:"Julieta",
    edad:30,
    ciudad:"San Luis",
    saludar: function (){ // acá el this hace referencia al objeto
           console.log(`Hola ${this.nombre} `)
    },
    saludar2:()=>{ //en una arrow function el this hace referencia al contexto global
           console.log(`Hola ${persona.nombre}!!! `)
    }
}

persona.saludar2();

const fAnonima=function(a){  // la función anónima no lleva nombre
    return a*a
}

let a="2.5";
console.log("cuadrado de ",a,"= ",fAnonima(a))