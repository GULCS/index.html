
const numeroSecreto = Math.floor(Math.random() * 100);
let tentativas = 0;

function verificar() {
  const campo = document.getElementById("palpite");
  const mensagem = document.getElementById("mensagem");
  const palpite = Number(campo.value);


  if (campo.value === "" || palpite < 0 || palpite > 99) {
    mensagem.textContent = "Digite um número entre 0 e 99.";
    return;
  }

 

  if (palpite > numeroSecreto) {
    mensagem.textContent = "Muito alto! Tente um número menor.";
    errou();
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "Muito baixo! Tente um número maior.";
    errou();
  } else {
    mensagem.textContent = "Parabéns! Você acertou em " + tentativas + " tentativa(s).";
    document.getElementById("caixa").style.setProperty("background-color", "lightgreen");
  }

  campo.value = "";
  campo.focus();
}

function errou() {
  document.getElementById("caixa").style.setProperty("background-color", "red");}