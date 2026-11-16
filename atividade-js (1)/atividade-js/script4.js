const temperatura = 25; // testar também 30, 19 e 20

if (temperatura >= 30) {
  console.log("Calor");
} else if (temperatura >= 20) {
  console.log("Agradável");
} else {
  console.log("Frio");
}

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);

// Checkpoint 3: nota entre 0 e 10 (inclusive)
const nota = 7;
console.log(nota >= 0 && nota <= 10);
