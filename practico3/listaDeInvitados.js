let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let invitados = "";
let i = 0;

while (i < personas.length) {
  invitados += (personas[i] !=="Jose" && personas[i] !== "Sofia") ? personas[i] : personas[i] +" (Rechazados)";
  invitados += "\n";
  i++;
}

console.log("Invitados:\n"+invitados);

//

let d = 0;
let admitidos = [];
let rechazados = [];
for (; d < personas.length; d++) {
 if  (personas[d] === "Jose"  ||  personas[d] === "Sofia" ){
 rechazados.push(personas[d]);
} else  {
admitidos.push(personas[d])
}
}
console.log("La lista de invitados admitidos es:\n"+admitidos.join("\n"));
console.log("La lista de invitados rechazados es:\n"+rechazados.join("\n"));

//

let e = 0;
let admitidos1 = [];
let rechazados1 = [];
for (; e < personas.length; e++) {
 if  (personas[e] === "Jose"  ||  personas[e] === "Sofia" ){
 rechazados1.push(personas[e]);
} else  {
admitidos1.push(personas[e]);
}

admitidos1.sort()
rechazados1.sort()

}
console.log("La lista ordenada de invitados admitidos es:\n"+admitidos1.join("\n"));
console.log("La lista ordenada de invitados rechazados es:\n"+rechazados1.join("\n"));