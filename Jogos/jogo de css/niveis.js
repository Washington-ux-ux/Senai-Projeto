const listaDeNiveis = [
    // --- NÍVEL 1---
    {
        id: 1,
        titulo: "Nível 1: Flexbox Básico",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ff7675;">1</div>
            <div class="quadrado" style="background:#74b9ff;">2</div>
            <div class="quadrado" style="background:#55efc4;">3</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: flex-start;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: ; 
    gap: 10px;
    padding: 20px;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
}`,
        validacao: "display: flex",
        textoInicialJogador: `
#incompletoCSS {
    display: ;
    gap: 10px;
    padding: 20px;
}`
    },

    // --- NÍVEL 2 ---
    {
        id: 2,
        titulo: "Nível 2: Centralizando",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#a29bfe;">A</div>
            <div class="quadrado" style="background:#ffeaa7; color: #333;">B</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    height: 100%;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}`,
        validacao: "justify-content: center",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    height: 100%;
}`
    },

    // --- NÍVEL 3  ---
    {
        id: 3,
        titulo: "Nível 3: Espaçamento",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ff9ff3;">1</div>
            <div class="quadrado" style="background:#feca57;">2</div>
            <div class="quadrado" style="background:#48dbfb;">3</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    padding: 20px;
    height: 100%;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 100%;
}`,
        validacao: "justify-content: space-between",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    padding: 20px;
    height: 100%;
}`
    },

    // --- NÍVEL 4 ---
    {
        id: 4,
        titulo: "Nível 4: O Chão",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#1dd1a1;">Talk</div>
            <div class="quadrado" style="background:#5f27cd;">Is</div>
            <div class="quadrado" style="background:#ff6b6b;">Cheap</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    padding-bottom: 20px;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: ;
    height: 100%;
    padding-bottom: 20px;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    padding-bottom: 20px;
}`,
        validacao: "align-items: flex-end",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    justify-content: center;
    align-items: ;
    height: 100%;
    padding-bottom: 20px;
}`
    },

    // --- NÍVEL 5 ---
    {
        id: 5,
        titulo: "Nível 5: Mudança de Direção",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ee5253;">Top</div>
            <div class="quadrado" style="background:#0abde3;">Mid</div>
            <div class="quadrado" style="background:#10ac84;">Bot</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    flex-direction: ;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
}`,
        validacao: "flex-direction: column",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    flex-direction: ;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
}`
    },

    // --- NÍVEL 6 ---
    {
        id: 6,
        titulo: "Nível 6: Invertendo tudo",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:red;">1</div>
            <div class="quadrado" style="background:orange;">2</div>
            <div class="quadrado" style="background:yellow; color:black;">3</div>
            <div class="quadrado" style="background:green;">4</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    flex-direction: ;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}`,
        validacao: "flex-direction: row-reverse",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    flex-direction: ;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}`
    },

// --- NÍVEL 7 ---
    {
        id: 7,
        titulo: "Nível 7: Quebrando Linhas",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ff9f43;">1</div>
            <div class="quadrado" style="background:#f368e0;">2</div>
            <div class="quadrado" style="background:#54a0ff;">3</div>
            <div class="quadrado" style="background:#00d2d3;">4</div>
            <div class="quadrado" style="background:#1dd1a1;">5</div>
            <div class="quadrado" style="background:#ff6b6b;">6</div>
            <div class="quadrado" style="background:#5f27cd;">7</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-wrap: wrap;
    width: 250px; 
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    flex-wrap: ; 
    width: 250px;
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`,
        validacao: "flex-wrap: wrap",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    flex-wrap: ;
    width: 250px; 
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`
    },

    // --- NÍVEL 8 ---
    {
        id: 8,
        titulo: "Nível 8: Espaço ao Redor",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#c8d6e5; color:#333;">A</div>
            <div class="quadrado" style="background:#8395a7;">B</div>
            <div class="quadrado" style="background:#576574;">C</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    height: 100%;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}`,
        validacao: "justify-content: space-around",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    height: 100%;
}`
    },

    // --- NÍVEL 9 ---
    {
        id: 9,
        titulo: "Nível 9: O Rebelde",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ff9ff3;">1</div>
            <div class="quadrado amarelo" style="background:#feca57; color:#333;">2</div>
            <div class="quadrado" style="background:#48dbfb;">3</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    align-items: flex-start;
    height: 100%;
    gap: 10px;
    padding: 20px;
}
#completoCSS .amarelo {
    align-self: flex-end;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    align-items: flex-start;
}
#completoCSS .amarelo {
    align-self: ;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    align-items: flex-start;
}
#completoCSS .amarelo {
    align-self: flex-end;
}`,
        validacao: "align-self: flex-end",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    align-items: flex-start;
    height: 100%;
    gap: 10px;
    padding: 20px;
}

#incompletoCSS .amarelo {
    align-self: ;
}`
    },

    // --- NÍVEL 10 ---
    {
        id: 10,
        titulo: "Nível 10: Trocando a Ordem",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado vermelho" style="background:#ff4757;">1</div>
            <div class="quadrado" style="background:#2ed573;">2</div>
            <div class="quadrado" style="background:#1e90ff;">3</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
}
#completoCSS .vermelho {
    order: 1; 
}`,
        textoGabaritoVisivel: `
#completoCSS { ... }

#completoCSS .vermelho {
    order: ; 
}`,
        textoGabaritoCompleto: `
#completoCSS { ... }

#completoCSS .vermelho {
    order: 1;
}`,
        validacao: "order: 1",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
}


#incompletoCSS .vermelho {
    order: ;
}`
    },

// --- NÍVEL 11 ---
    {
        id: 11,
        titulo: "Nível 11: O Conquistador de Espaço",
        instrucao: "Faça o item do meio crescer para ocupar todo o espaço vazio que sobra.",
        htmlInterno: `
            <div class="quadrado" style="background:#b2bec3;">Fixo</div>
            <div class="quadrado crescer" style="background:#0984e3; width: auto;">Crescer</div>
            <div class="quadrado" style="background:#b2bec3;">Fixo</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
}
#completoCSS .crescer {
    flex-grow: 1;
}`,
        textoGabaritoVisivel: `
#completoCSS { ... }

#completoCSS .crescer {
    flex-grow: ; 
}`,
        textoGabaritoCompleto: `
#completoCSS { ... }

#completoCSS .crescer {
    flex-grow: 1;
}`,
        validacao: "flex-grow: 1",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
}

#incompletoCSS .crescer {
    flex-grow: ;
}`
    },

    // --- NÍVEL 12 ---
    {
        id: 12,
        titulo: "Nível 12: Crescimento Proporcional",
        instrucao: "Os dois itens devem crescer, mas o azul deve crescer DUAS vezes mais rápido que o cinza.",
        htmlInterno: `
            <div class="quadrado item1" style="background:#b2bec3; width: 50px;">1x</div>
            <div class="quadrado item2" style="background:#0984e3; width: 50px;">2x</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
}
#completoCSS .item1 { flex-grow: 1; }
#completoCSS .item2 { flex-grow: 2; }
`,
        textoGabaritoVisivel: `
#completoCSS .item1 { flex-grow: 1; }

#completoCSS .item2 { 
    flex-grow: ; 
}`,
        textoGabaritoCompleto: `
#completoCSS .item1 { flex-grow: 1; }

#completoCSS .item2 { 
    flex-grow: 2; 
}`,
        validacao: "flex-grow: 2",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
}

#incompletoCSS .item1 {
    flex-grow: 1;
}

#incompletoCSS .item2 {
    flex-grow: ;
}`
    },

    // --- NÍVEL 13 ---
    {
        id: 13,
        titulo: "Nível 13: Alinhando o Bloco",
        instrucao: "Quando os itens quebram linha (wrap), sobrará espaço vertical. Use align-content.",
        htmlInterno: `
            <div class="quadrado" style="background:#fab1a0;">1</div>
            <div class="quadrado" style="background:#fab1a0;">2</div>
            <div class="quadrado" style="background:#fab1a0;">3</div>
            <div class="quadrado" style="background:#fab1a0;">4</div>
            <div class="quadrado" style="background:#fab1a0;">5</div>
            <div class="quadrado" style="background:#fab1a0;">6</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    flex-wrap: wrap;
    align-content: ; 
    ...
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    ...
}`,
        validacao: "align-content: center",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    height: 100%;
    align-content: ;
}`
    },

    // --- NÍVEL 14 ---
    // --- NÍVEL 14 (CORRIGIDO) ---
    {
        id: 14,
        titulo: "Nível 14: O Atalho (Shorthand)",
        instrucao: "Use a propriedade shorthand flex-flow para definir a direção.",
        htmlInterno: `
            <div class="quadrado" style="background:#00b894;">1</div>
            <div class="quadrado" style="background:#00b894;">2</div>
            <div class="quadrado" style="background:#00b894;">3</div>
            <div class="quadrado" style="background:#00b894;">4</div>
            <div class="quadrado" style="background:#00b894;">5</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-flow: column;
    height: 100%;
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    flex-flow: ; 
    ...
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    flex-flow: column;
    ...
}`,
        validacao: "flex-flow: column",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    flex-flow: ;
    height: 100%;
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`
    },

    // --- NÍVEL 15 ---
    {
        id: 15,
        titulo: "Nível 15: O Truque da Margem",
        instrucao: "Use margin-left: .",
        htmlInterno: `
            <div class="quadrado" style="background:#636e72;">Logo</div>
            <div class="quadrado" style="background:#636e72;">Link</div>
            <div class="quadrado direita" style="background:#55efc4; color:#333;">Login</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 10px;
}
#completoCSS .direita {
    margin-left: auto;
}`,
        textoGabaritoVisivel: `
#completoCSS { ... }

#completoCSS .direita {
    margin-left: ;
}`,
        textoGabaritoCompleto: `
#completoCSS { ... }

#completoCSS .direita {
    margin-left: auto;
}`,
        validacao: "margin-left: auto",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 10px;
}

#incompletoCSS .direita {
    margin-left: ;
}`
    },
    // --- NÍVEL 17 ---
    {
        id: 16,
        titulo: "Nível 16: Tamanho Base",
        instrucao: "Ignore o width! Use flex-basis para definir o tamanho que deve ser ocupado.",
        htmlInterno: `
            <div class="quadrado alvo" style="background:#6c5ce7;">60%</div>
            <div class="quadrado" style="background:#a29bfe; flex-grow: 1;">Resto</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 10px;
}
#completoCSS .alvo {
    flex-basis: 60%;
}`,
        textoGabaritoVisivel: `
#completoCSS { ... }

#completoCSS .alvo {
    flex-basis: ; 
}`,
        textoGabaritoCompleto: `
#completoCSS { ... }

#completoCSS .alvo {
    flex-basis: 60%;
}`,
        validacao: "flex-basis: 60%",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 10px;
}

#incompletoCSS .alvo {
    flex-basis: ;
}`
    },

    // --- NÍVEL 17 ---
    {
        id: 17,
        titulo: "Nível 17: O Super Atalho (Shorthand)",
        instrucao: "Crie uma Sidebar fixa! Use a propriedade 'flex' para definir. dica : (numero1 numero2 100px).",
        htmlInterno: `
            <div class="quadrado sidebar" style="background:#2d3436;">Menu</div>
            <div class="quadrado" style="background:#b2bec3; flex-grow: 1;">Conteúdo</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    align-items: stretch;
    height: 100%;
    padding: 10px;
    gap: 10px;
}
#completoCSS .sidebar {
    flex: 0 0 100px;
}`,
        textoGabaritoVisivel: `
#completoCSS .sidebar {
    flex: ; 
}`,
        textoGabaritoCompleto: `
#completoCSS .sidebar {
    flex: 0 0 100px;
}`,
        validacao: "flex: 0 0 100px",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    align-items: stretch;
    height: 100%;
    padding: 10px;
    gap: 10px;
}

#incompletoCSS .sidebar {
    flex: ;
}`
    },
    // --- NÍVEL 18 ---
    {
        id: 18,
        titulo: "Nível 18: O Rodapé Fixo (Layout Vertical)",
        instrucao: "Temos um layout de coluna. Use flex: ; no conteúdo central (.main) para que ele ocupe todo o espaço e empurre o rodapé para o fundo.",
        htmlInterno: `
            <div class="quadrado" style="background:#636e72; height: 30px; width: 100%;">Topo</div>
            <div class="quadrado main" style="background:#dfe6e9; width: 100%; color:#333;">Conteúdo</div>
            <div class="quadrado" style="background:#2d3436; height: 30px; width: 100%;">Rodapé</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    gap: 5px;
}
#completoCSS .main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}`,
        textoGabaritoVisivel: `
#completoCSS { flex-direction: column... }

#completoCSS .main {
    flex: ;
}`,
        textoGabaritoCompleto: `
#completoCSS { ... }

#completoCSS .main {
    flex: 1;
}`,
        validacao: "flex: 1",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    gap: 5px;
}

#incompletoCSS .main {
    flex: ;
    display: flex; 
    justify-content: center;
    align-items: center;
}`
    }

];