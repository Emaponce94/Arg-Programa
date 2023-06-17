const readlineSync = require('readline-sync');
let mes = parseInt(readlineSync.question('Ingrese un numero del 1 al 12 representando un mes: '));

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let cantidadDias;

if (mes >= 1 && mes <= 12) {
  if (mes === 2) {
    cantidadDias =28; 
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    cantidadDias = 30;
} else {
    cantidadDias = 31;
   
  }
  
console.log("La cantidad de días del mes de %s es %i", meses[mes - 1], cantidadDias);
} else {
console.log("Número de mes inválido");
}