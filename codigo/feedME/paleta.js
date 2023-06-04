let currentTheme;
const temasDisponiveis = ["tema-claro", "tema-escuro","tema-paleta1","tema-paleta2","tema-paleta3"];

let storedTheme = localStorage.getItem("temaSelecionado");

if (storedTheme && temasDisponiveis.includes(storedTheme)) {
  currentTheme = storedTheme;
} else {
  currentTheme = "tema-claro"; 
}

function carregarTema(tema) {
  fetch('styles.json')
    .then(response => response.json())
    .then(data => {
      const estilos = data[tema];
      aplicarTema(estilos);
      salvarTema(tema);
    });
}

function aplicarTema(estilos) {
  const root = document.documentElement;

  for (let propriedade in estilos) {
    root.style.setProperty(propriedade, estilos[propriedade]);
  }
}

function salvarTema(tema) {
  localStorage.setItem('temaSelecionado', tema);
}

function carregarTemaSalvo() {
  const temaSalvo = localStorage.getItem('temaSelecionado');

  if (temaSalvo !== null && temasDisponiveis.includes(temaSalvo)) {
    carregarTema(temaSalvo);
  } else {
    carregarTema(currentTheme); // Carregar o tema padrão se nenhum tema válido estiver salvo
  }
}

document.addEventListener('DOMContentLoaded', carregarTemaSalvo);