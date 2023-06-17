const readlineSync = require('readline-sync');
let mes = parseInt(readlineSync.question('Ingrese un numero del 1 al 12 representando un mes: '));

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let cantidadDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (mes >= 1 && mes <= 12) {
    console.log("La cantidad de días del mes de %s es %i", meses[mes - 1], cantidadDias[mes - 1]);
} else {
  console.log("Número de mes inválido");
}