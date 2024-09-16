/** 2. Métodos de Array:
 ○ Utiliza el método map para duplicar cada elemento del arreglo numeros.
 ○ Utiliza el método filter para obtener solo los números pares del arreglo
 numeros. */

 const arr=[1,2,3,4,5];
 const arrDuplicado=arr.map(elem=>{
    return elem*2
 })

 const arrPares=arr.filter(n=>n%2==0)
 console.log(arrDuplicado)
 console.log("---------------------------Pares:")
 console.log(arrPares)

