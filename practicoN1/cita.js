// Valores iniciales
let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

// a. Recuperar la longitud de la cita
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamañoDeCita);

// b. Buscar la posición del índice donde aparece el substring en la cita
let indice = cita.indexOf(substring);
console.log("El índice del substring es: " + indice);

// c. Recortar la cita original y almacenarla en una variable llamada citaRevisada
let citaRevisada = cita.slice(0, 31);
console.log(citaRevisada);