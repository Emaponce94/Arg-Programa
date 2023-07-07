const readlineSync = require('readline-sync');
const PIEDRA = "piedra"
const PAPEL = "papel"
const TIJERAS = "tijeras"
console.log("Bienvenido\nDebes elegir una opcion, entre piedra, papel o tijeras\nSUERTE!!!");
function obtenerJugadaComputadora() {
  let opcion = Math.floor(Math.random() * 3);
  
  if (opcion === 0) {
    return PIEDRA;
  } else if (opcion === 1) {
    return PAPEL;
  } else if (opcion === 2) {
    return TIJERAS;
  }
}

function obtenerJugadaUsuario() {
  let opcionJ = readlineSync.question("Ingresa una opcion: ");
  
  while (opcionJ !== TIJERAS  && opcionJ !== PAPEL && opcionJ !== PIEDRA) {
    console.log("Opción incorrecta");
    opcionJ = readlineSync.question("Ingresa una opcion correcta: ");
  }
  
  return opcionJ;
}
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
      return "Empate";
    } else if (
      (jugadaComputadora === PIEDRA && jugadaUsuario === TIJERAS) ||
      (jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA) ||
      (jugadaComputadora === TIJERAS && jugadaUsuario === PAPEL)
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
    console.log("¿Cuántas partidas quieres jugar? (Máximo 5)");
    let jugadasMaximas = readlineSync.questionInt("Ingresa la cantidad de partidas: ");
  
    jugadasMaximas = Math.min(jugadasMaximas, 5);
    for (let i = 1; i <= jugadasMaximas; i++) {
      console.log("Jugada " + i + ":");
      
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
      
      console.log("\n");
      
      if (partidasGanadasUsuario === 3 || partidasGanadasComputadora === 3) {
        break;
      }
      console.log("Partidas ganadas por el usuario: " + partidasGanadasUsuario);
      console.log("Partidas ganadas por la computadora: " + partidasGanadasComputadora);
      console.log("Partidas empatadas: " + empate);
    }
    
  
    console.log("Fin del juego.");
  }
  
  jugarPartida();
