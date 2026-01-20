  // 1. Configura o Tailwind
  window.tailwind = window.tailwind || {};
  window.tailwind.config = {
    darkMode: 'class', // ativa o modo escuro via classe
  };

  // 2. Aplica o tema salvo imediatamente para evitar flash
  (function() {
    try {
      const temaSalvo = localStorage.getItem('tema');
      if (temaSalvo === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // Em caso de erro no acesso ao localStorage, mantém o tema claro
      document.documentElement.classList.remove('dark');
      console.warn('Erro ao aplicar o tema salvo:', e);
    }
  })();