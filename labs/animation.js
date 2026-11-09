const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

const TAMANHO = 60; 


const imagem = new Image();
imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzg6GyMwQtRV974RJYUcV00Z5OYgeO5jZalON4iSy6w&s=10"; 
let x = canvas.width / 2;
let y = canvas.height / 2;


function obterPosicao(evento) {
  const rect = canvas.getBoundingClientRect();


  const escalaX = canvas.width / rect.width;
  const escalaY = canvas.height / rect.height;

  return {
    x: (evento.clientX - rect.left) * escalaX,
    y: (evento.clientY - rect.top) * escalaY
  };
}

function limitar(valor, min, max) {
  return Math.min(Math.max(valor, min), max);
}


function desenhar() {
 
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  const desenhoX = x - TAMANHO / 2;
  const desenhoY = y - TAMANHO / 2;


  const xSeguro = limitar(desenhoX, 0, canvas.width - TAMANHO);
  const ySeguro = limitar(desenhoY, 0, canvas.height - TAMANHO);

  ctx.drawImage(imagem, xSeguro, ySeguro, TAMANHO, TAMANHO);
}


canvas.addEventListener('mousemove', function (evento) {
  const pos = obterPosicao(evento);
  x = pos.x;
  y = pos.y;
  desenhar();
});


canvas.addEventListener('mouseleave', function () {
  desenhar();
});

imagem.onload = desenhar;
desenhar();