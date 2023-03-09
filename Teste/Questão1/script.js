let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k++;
  soma += k;
}

let resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerText = "A soma é: " + soma;
