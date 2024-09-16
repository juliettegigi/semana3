/** 3. Spread Operator y Rest Operator:
 ○ Creaunnuevo arreglo otrosNumeros con los números 8, 9 y 10.
 ○ Utiliza el operador spread para combinar los arreglos numeros y
 otrosNumeros en un solo arreglo.
 ○ Utiliza el operador rest para recibir todos los números excepto el primero
 del arreglo combinado */

 const numeros=[1,2,3,4,5]
 const otrosNumeros=[8,9,10]

 const arrCombinado=[...numeros,...otrosNumeros]
 console.log(arrCombinado)
 const [a,...rest]=arrCombinado;
 console.log("Rest: ",rest)