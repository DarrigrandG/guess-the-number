let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 4;
console.log(numeroSecreto);

function numberRandom() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numerosSorteados);
  console.log(numeroGenerado);
  if (numerosSorteados.length == numeroMaximo) {
    escribirTextos('p', 'Se han sorteado todos los números');
  } else {
    if (numerosSorteados.includes(numeroGenerado)) {
      return numberRandom();
    } else {
      numerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function escribirTextos(element, texto) {
  let innerHTML = document.querySelector(element);
  innerHTML.innerText = texto;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos);
  if (numeroSecreto === numeroUsuario) {
    escribirTextos(
      "p",
      `Has acertado en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroUsuario > numeroSecreto) {
    escribirTextos("p", "Tu número es muy alto");
  } else {
    escribirTextos("p", "Tu número es muy bajo");
  }
  intentos++;
  limpiar();
}

function condicionesInicio() {
  escribirTextos("h1", "Guess the number?");
  escribirTextos("p", `Elije un número del 1 al ${numeroMaximo}`);
  numeroSecreto = numberRandom();
  intentos = 1;
}

function limpiar() {
  let valor = (document.querySelector("#valorUsuario").value = "");
}

function reiniciar() {
  limpiar();
  condicionesInicio();
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesInicio();
