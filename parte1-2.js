/* 2. Métodos en Objetos:
 ○ Agrega un método saludar al objeto persona que imprima un mensaje de
 saludo utilizando las propiedades del objeto.
  */

 const persona={ nombre:"Julieta",
    edad:30,
    ciudad:"San Luis",
    saludar: function (){
           console.log(`Hola ${this.nombre} `)
    }
}

persona.saludar();