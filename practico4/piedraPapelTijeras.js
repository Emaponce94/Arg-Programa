const readlineSync = require('readline-sync');
console.log("Bienvenido\nDebes elegir una opcion, entre piedra, papel o tijeras\nSUERTE!!!");
function obtenerJugadaComputadora() {
  let opcion = Math.floor(Math.random() * 3);
  
  if (opcion === 0) {
    return "piedra";
  } else if (opcion === 1) {
    return "papel";
  } else if (opcion === 2) {
    return "tijeras";
  }
}

function obtenerJugadaUsuario() {
  let opcionJ = readlineSync.question("Ingresa una opcion: ");
  
  while (opcionJ !== "tijeras" && opcionJ !== "papel" && opcionJ !== "piedra") {
    console.log("Opción incorrecta");
    opcionJ = readlineSync.question("Ingresa una opcion correcta: ");
  }
  
  return opcionJ;
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return "Empate";
  } else if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

function jugarPartida() {
  
  let partidasGanadasUsuario = 0;
  let partidasGanadasComputadora = 0; 
  let empate = 0
 
    
    let jugadaComputadora = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
    
    console.log("La computadora eligio: " + jugadaComputadora + ". El usuario eligio: " + jugadaUsuario + ".");
    console.log("Resultado: " + resultado);
    
    if (resultado === "Gana el usuario") {
      partidasGanadasUsuario++;
    } else if (resultado === "Gana la computadora") {
      partidasGanadasComputadora++;
    } else if (resultado  === "Empate"){
      empate++
    }
    
  }
  
jugarPartida();
