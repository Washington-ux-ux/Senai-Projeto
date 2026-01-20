const LINKS_JOGOS = {
  "btn-jogo-wordhunter": "https://washington-ux-ux.github.io/jogo-das-palavras/?authuser=0",
  "btn-jogo-stylesheet": "https://washington-ux-ux.github.io/jogo-do-css/?authuser=0",
  "btn-jogo-quizflash": "https://washington-ux-ux.github.io/projeto-do-senai/?authuser=0",
};

// --- TEMA (DARK/LIGHT) ---
function gerenciarTema() {
  const botao = document.getElementById("theme-toggle");
  const html = document.documentElement;
  if (!botao) return;

  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "dark") html.classList.add("dark");

  botao.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("tema", isDark ? "dark" : "light");
  });
}

// --- LOGIN E INTERFACE ---
function gerenciarLogin() {
  const emailSalvo = localStorage.getItem('usuarioEmail');
  const userTextMobile = document.getElementById('user-text-mobile');
  const userLinkMobile = document.getElementById('user-link-mobile');
  const loggedInInfoDesktop = document.getElementById('logged-in-info-desktop');
  const loginLinkDesktop = document.getElementById('login-link-desktop');
  const userDisplayDesktop = document.getElementById('user-display-desktop');

  if (emailSalvo && emailSalvo !== "null" && emailSalvo !== "") {
    const nomeUsuario = emailSalvo.split('@')[0];

    // Interface Desktop
    if (loginLinkDesktop) loginLinkDesktop.classList.add('hidden');
    if (loggedInInfoDesktop) {
      loggedInInfoDesktop.classList.remove('hidden');
      loggedInInfoDesktop.classList.add('flex');
    }
    if (userDisplayDesktop) userDisplayDesktop.innerText = nomeUsuario;

    // Interface Mobile
    if (userTextMobile) userTextMobile.innerText = nomeUsuario;
    if (userLinkMobile) {
      userLinkMobile.href = "javascript:void(0)";
      userLinkMobile.onclick = (e) => {
        e.preventDefault();
        const menu = document.getElementById('logout-menu-mobile');
        if (menu) menu.classList.toggle('hidden');
      };
    }
  } else {
    // Reset Deslogado
    if (userTextMobile) userTextMobile.innerText = "Login";
    if (userLinkMobile) userLinkMobile.href = "../../Login-page/public/index.html";
  }
}

// --- SAIR DA CONTA (LOGOUT) ---
function configurarLogout() {
  const acaoLogout = () => {
    localStorage.removeItem('usuarioEmail');
    window.location.reload();
  };

  const btnDesktop = document.getElementById('logout-btn-desktop');
  const btnMobile = document.getElementById('logout-btn-mobile');

  if (btnDesktop) btnDesktop.addEventListener('click', acaoLogout);
  if (btnMobile) btnMobile.addEventListener('click', acaoLogout);
}

// --- REDIRECIONAR PARA JOGOS (COM TRAVA) ---
function configurarRedirecionamentos() {
  Object.keys(LINKS_JOGOS).forEach((idBotao) => {
    const botao = document.getElementById(idBotao);
    if (!botao) return;

    botao.addEventListener("click", () => {
      // VERIFICAÇÃO DE LOGIN
      const usuarioLogado = localStorage.getItem('usuarioEmail');
      
      if (!usuarioLogado || usuarioLogado === "null" || usuarioLogado === "") {
        alert("Ops! Você precisa estar logado para acessar os jogos. 😊");
        window.location.href = "../../Login-page/public/index.html";
        return;
      }

      // SE ESTIVER LOGADO
      const url = LINKS_JOGOS[idBotao];
      window.open(url, "_blank");
    });
  });
}

// --- INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
  gerenciarTema();
  gerenciarLogin(); 
  configurarLogout(); 
  configurarRedirecionamentos();
});