/*
 2. Closures:
 ○ Define una función contador que tenga una variable local contadorInterno
  ○ Lafunción contador debe retornar otra función interna que incremente
 contadorInterno cada vez que se llame.
 */

 function contador(){
    let contadorInterno=0;
    return function(){
        return contadorInterno++;
    }
 }
 
 console.log("Contador 1")
 const c1=contador();
 for(let i=0;i<5;i++)console.log(c1())
console.log("Contador 2")// cada función tiene su propio contador
const c2=contador();
for(let i=0;i<5;i++)console.log(c2())

