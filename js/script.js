// Ativars links do menu

const menuLinks = document.querySelectorAll(".header-menu a");

function ativarLink(menuLink) {
  if (window.location.href.includes(menuLink.href)) {
    menuLink.classList.add("link-ativo");
  }
}

menuLinks.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(window.location.search);

function ativarProduto(parametro) {
  console.log(parametro);
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Ativar FAQ

const faqDt = document.querySelectorAll(".faq button");

function ativarItem(event) {
  const pergunta = event.target;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativo");
  const ativa = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoFaq(item) {
  item.addEventListener("click", ativarItem);
}

faqDt.forEach(eventoFaq);

// Galeria

const imagens = document.querySelectorAll(".bicicletas-inter-galeria img");
const galeria = document.querySelector(".bicicletas-inter-galeria");

function mudarImagem(event) {
  if (
    window.matchMedia("(min-width: 1100px)").matches ||
    window.matchMedia("(max-width: 900px) and (min-width: 450px").matches
  ) {
    imagem = event.currentTarget;
    galeria.prepend(imagem);
  }
}

function eventoGaleria(imagem) {
  imagem.addEventListener("click", mudarImagem);
}

imagens.forEach(eventoGaleria);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
