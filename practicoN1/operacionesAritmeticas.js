// a. Crea cuatro variables que contengan valores numéricos.
let num1 = 10;
let num2 = 12;
let num3 = 9;
let num4 = 11;

// b. Suma las dos primeras variables y guarda el resultado en otra variable.
let suma = num1 + num2;

// c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let resta = num4 - num3;

// d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal.
let resultadoFinal = suma * resta;

// e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.
let esPar = resultadoFinal % 2 === 0;

// f. Imprime por consola un mensaje con el formato requerido.
console.log("Mis variables iniciales fueron: %i, %i, %i y %i.La respuesta a verificar si el resultado final es par es: %s" , num1,num2,num3,num4,esPar)