/*
 3. Destructuring con Objetos:
 ○ Utiliza destructuring para extraer las propiedades nombre y ciudad del
 objeto persona en variables separadas.
*/


const persona={ nombre:"Julieta",
    edad:30,
    ciudad:"San Luis"
}

const{nombre,edad,ciudad}=persona;// es mejor que luego andar poniendo "persona.propiedad"
console.log("Nombre: ",nombre);
console.log("Edad: ", edad);
console.log("Ciudad: ",ciudad);