document.addEventListener('DOMContentLoaded', () => {

    // --- seleção de elemento ---
    const textareaGabarito = document.querySelector('.completo textarea');
    const textareaJogador = document.querySelector('.incompleto textarea');
    
    const viewAlvo = document.getElementById('completoCSS');
    const viewJogador = document.getElementById('incompletoCSS');
    
    const tituloNivel = document.getElementById('titulo-nivel');
    const instrucaoNivel = document.getElementById('instrucao-nivel');

    // botões 
    const btnProximo = document.getElementById('btn-proximo');
    const btnAnterior = document.getElementById('btn-anterior');

    // Tags de estilo
    const styleAlvo = document.createElement('style');
    const styleJogador = document.createElement('style');
    document.head.appendChild(styleAlvo);
    document.head.appendChild(styleJogador);

    let indiceAtual = 0;
    const respostasSalvas = []; 

    // --- carregar nivél ---
    function carregarNivel(index) {
        if (typeof listaDeNiveis === 'undefined') return;
        if (index < 0 || index >= listaDeNiveis.length) return;
        
        indiceAtual = index;
        const nivel = listaDeNiveis[index];

        // 1. visibilidade dos botões
        
        // esconde o botão anterior no primeiro nível
        if (index === 0) {
            if(btnAnterior) btnAnterior.style.display = "none";
        } else {
            if(btnAnterior) btnAnterior.style.display = "inline-block";
        }

        // esconde o botão proximo no último nível
        if (index === listaDeNiveis.length - 1) {
            if(btnProximo) btnProximo.style.display = "none";
        } else {
            if(btnProximo) {
                btnProximo.style.display = "inline-block";
                btnProximo.disabled = true; 
                btnProximo.style.backgroundColor = ""; 
                btnProximo.style.color = "";
            }
        }

        // 2. textos e HTML
        if(tituloNivel) tituloNivel.textContent = nivel.titulo;
        if(instrucaoNivel) instrucaoNivel.textContent = nivel.instrucao;
        viewAlvo.innerHTML = nivel.htmlInterno;
        viewJogador.innerHTML = nivel.htmlInterno;

        // 3. gabarito
        styleAlvo.textContent = nivel.cssGabaritoReal;

        // 4. carrega resposta
        let codigoParaMostrar;
        if (respostasSalvas[index]) {
            codigoParaMostrar = respostasSalvas[index];
        } else {
            codigoParaMostrar = nivel.textoInicialJogador.trim();
        }

        textareaJogador.value = codigoParaMostrar;
        styleJogador.textContent = codigoParaMostrar;

        // 5. liberar o botão Próximo se não for o último
        validarResposta(codigoParaMostrar, nivel);
    }

    // --- validação ---
    function validarResposta(textoUsuario, nivel) {
        const codigoUsuario = textoUsuario.toLowerCase();
        const validacao = nivel.validacao.toLowerCase();
        
        const codigoLimpo = codigoUsuario.replace(/\s+/g, '');
        const validacaoLimpa = validacao.replace(/\s+/g, '');

        if (codigoLimpo.includes(validacaoLimpa)) {
            // acertou
            textareaGabarito.value = nivel.textoGabaritoCompleto.trim();
            textareaGabarito.style.border = "2px solid #2ecc71"; 
            textareaGabarito.style.color = "#2ecc71";
            
            // Libera o botão
            if (btnProximo) {
                btnProximo.disabled = false;
                btnProximo.style.backgroundColor = "#2ecc71";
                btnProximo.style.color = "white";
            }

        } else {
            // ainda NÃO acertou
            textareaGabarito.value = nivel.textoGabaritoVisivel.trim();
            textareaGabarito.style.border = "1px solid #44475a"; 
            textareaGabarito.style.color = "#f8f8f2";

            // bloqueia o botão
            if (btnProximo) {
                btnProximo.disabled = true;
                btnProximo.style.backgroundColor = "";
                btnProximo.style.color = "";
            }
        }
    }

  
    textareaJogador.addEventListener('input', () => {
        const textoDigitado = textareaJogador.value;
        styleJogador.textContent = textoDigitado;
        respostasSalvas[indiceAtual] = textoDigitado;
        
        const nivel = listaDeNiveis[indiceAtual];
        validarResposta(textoDigitado, nivel);
    });

    window.proximoNivel = function() {
        if (btnProximo && btnProximo.disabled) return;
        if (indiceAtual < listaDeNiveis.length - 1) {
            carregarNivel(indiceAtual + 1);
        }
    };

    window.nivelAnterior = function() {
        if (indiceAtual > 0) {
            carregarNivel(indiceAtual - 1);
        }
    };

    // Inicia o nivel
    carregarNivel(0);
});