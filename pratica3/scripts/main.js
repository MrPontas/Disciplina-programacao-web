// Matéria: Desenvolvimento web
// Professor: Albino Szesz Jr
// Aluno: Guilherme Pontarolo Cordeiro
// RA: 17163026

let minhaImagem = document.querySelector("img");

minhaImagem.onclick = function () {
  let meuSrc = minhaImagem.getAttribute("src");
  if (meuSrc === "images/logo.png") {
    minhaImagem.setAttribute("src", "images/logo2.png");
  } else {
    minhaImagem.setAttribute("src", "images/logo.png");
  }
};

let meuBotao = document.querySelector("button");
let meuCabecalho = document.querySelector("h1");

if (!localStorage.getItem("nome")) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem("nome");
  meuCabecalho.textContent = "Mozilla is cool, " + nomeGuardado;
}

meuBotao.onclick = function () {
  defineNomeUsuario();
};

function defineNomeUsuario() {
  let meuNome = prompt("Please, inform your name.");
  if (!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem("nome", meuNome);
    meuCabecalho.textContent = "Mozilla is cool, " + meuNome;
  }
}
