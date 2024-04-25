// Manipulación de Arrays

let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"];

// Laura supera a Javier
let idJavier = participantes.indexOf("Javier");
let idLaura = participantes.indexOf("Laura");
participantes[idJavier] = 'Laura';
participantes[idLaura] = 'Javier';

console.log(participantes);

// Patricia es descalificada y se elimina del concurso

participantes.pop();
console.log(participantes);
//Se incorporan dos nuevos concursantes, Raúl y Sofía, situándose detrás de Elena y antes de Carlos.

participantes.splice(2, 0, 'Raúl', 'Sofía');
console.log(participantes);

//Una nueva participante, Carmen, toma la posición principal en la clasificación
participantes.unshift('Carmen');
console.log(participantes);






