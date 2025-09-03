// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const imputAmigos = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  if (imputAmigos.value === "") {
    alert("Por favor ingresa un nombre");
    return;
  }
  listaAmigos.push(imputAmigos.value);
  ullistaAmigos.innerHTML += `<li>${imputAmigos.value}</li>`;
  imputAmigos.value = "";
  imputAmigos.focus();
}

function sortearAmigo() {
  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos [random];
  ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
  listaAmigos.splice(random, 1);
  ullistaAmigos.innerHTML = "";
}


