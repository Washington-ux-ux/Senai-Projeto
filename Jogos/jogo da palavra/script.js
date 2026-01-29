// Função auxiliar para normalizar texto
function normalizeLetter(str) {
    if (!str) return '';
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.addEventListener('DOMContentLoaded', async () => {
    // --- SELEÇÃO DE ELEMENTOS ---
    const jogoPanel = document.querySelector('.jogo');
    const letrasContainer = document.querySelector('.letras');
    const hintTitle = document.querySelector('.dica-titulo');
    const hintText = document.querySelector('.dica-texto');
    const inputLetra = jogoPanel?.querySelector('input'); 
    const btnEnviarLetra = jogoPanel?.querySelector('button'); 

    if (!jogoPanel || !letrasContainer || !inputLetra || !btnEnviarLetra) {
        console.warn('Elementos do jogo não encontrados.');
        return;
    }

    // --- CARREGAMENTO DO JSON ---
    let WORD_BANK = [];
    try {
        const response = await fetch('palavras.json');
        if (!response.ok) throw new Error('Erro ao carregar JSON');
        WORD_BANK = await response.json();
    } catch (error) {
        console.error(error);
        hintTitle.textContent = "Erro";
        hintText.textContent = "Erro ao carregar palavras. Use o Live Server.";
        return;
    }

    // --- CONFIGURAÇÃO INICIAL DA PALAVRA ---
    const selectedWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
    const originalWord = selectedWord.word.toUpperCase(); 
    const normalizedWord = normalizeLetter(originalWord); 
    const originalWordLetters = originalWord.split(''); 
    const normalizedWordLetters = normalizedWord.split(''); 

    // Cria visual das letras 
    letrasContainer.innerHTML = '';
    originalWordLetters.forEach((char, index) => {
        const box = document.createElement('div');
        box.className = 'letra';
        // Guarda a letra original e a normalizada nos dados do elemento
        box.dataset.letter = char;     
        box.dataset.normalized = normalizedWordLetters[index]; 
        letrasContainer.appendChild(box);
    });

    const letterBoxes = Array.from(letrasContainer.querySelectorAll('.letra'));

    // Exibe Dica
    if (hintTitle) hintTitle.textContent = selectedWord.category || 'Dica';
    if (hintText) hintText.textContent = selectedWord.hint;

    // --- VARIÁVEIS DE ESTADO ---
    const targetWord = normalizedWord; 
    const uniqueLetters = new Set(normalizedWordLetters); 
    const correctLetters = new Set(); 
    const wrongLetters = new Set();
    const maxAttempts = 7;
    let attempts = 0;
    let gameOver = false;

    // --- CRIAÇÃO DOS ELEMENTOS EXTRAS (Via JS para não sujar o HTML) ---

    // 1. Botão de "Tudo ou Nada" (Chutar Palavra)
    const btnRisk = document.createElement('button');
    btnRisk.textContent = 'Chutar Palavra (Tudo ou Nada)';
    btnRisk.className = 'risk-button';
    jogoPanel.appendChild(btnRisk);

    // 2. Container para o Chute Final (Escondido inicialmente)
    const finalGuessWrapper = document.createElement('div');
    finalGuessWrapper.className = 'final-guess is-hidden';

    const finalGuessPrompt = document.createElement('p');
    finalGuessPrompt.textContent = 'Cuidado! Se errar, você perde.';
    
    const finalGuessInput = document.createElement('input');
    finalGuessInput.type = 'text';
    finalGuessInput.placeholder = 'Digite a palavra completa';
    
    // Container para os botões do chute final
    const finalButtonsContainer = document.createElement('div');
    finalButtonsContainer.style.display = 'flex';
    finalButtonsContainer.style.gap = '10px';
    finalButtonsContainer.style.justifyContent = 'center';
    finalButtonsContainer.style.marginTop = '10px';

    const btnConfirmGuess = document.createElement('button');
    btnConfirmGuess.textContent = 'Confirmar';
    
    const btnCancelGuess = document.createElement('button');
    btnCancelGuess.textContent = 'Cancelar';
    btnCancelGuess.style.backgroundColor = '#ccc'; 
    btnCancelGuess.style.boxShadow = 'none';

    finalButtonsContainer.append(btnConfirmGuess, btnCancelGuess);
    finalGuessWrapper.append(finalGuessPrompt, finalGuessInput, finalButtonsContainer);
    jogoPanel.appendChild(finalGuessWrapper);

    // 3. Status e Letras Tentadas
    const statusMessage = document.createElement('p');
    statusMessage.className = 'status-message';
    jogoPanel.appendChild(statusMessage);

    const letrasTentadasWrapper = document.createElement('div');
    letrasTentadasWrapper.className = 'letras-tentadas-wrapper';
    letrasTentadasWrapper.innerHTML = `<p>Letras usadas:</p><p class="letras-tentadas-display">Nenhuma</p>`;
    jogoPanel.appendChild(letrasTentadasWrapper);
    const letrasDisplay = letrasTentadasWrapper.querySelector('.letras-tentadas-display');

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Jogar Novamente';
    restartButton.className = 'restart-button is-hidden'; 
    restartButton.addEventListener('click', () => location.reload());
    jogoPanel.appendChild(restartButton); 


    // --- FUNÇÕES ---

    function updateBoard(reveal = false) {
        letterBoxes.forEach((box) => {
            const originalLetter = box.dataset.letter;   
            const normalizedLetter = box.dataset.normalized; 
            // Mostra a letra se tiver acerto
            const shouldShow = reveal || correctLetters.has(normalizedLetter) || originalLetter === '-' || originalLetter === ' ';
            box.textContent = shouldShow ? originalLetter : '';
        });
    }

    function updateStatus(message) {
        const remaining = Math.max(0, maxAttempts - attempts);
        statusMessage.textContent = `${message} (Tentativas: ${remaining})`;
    }

    function updateUsedLetters() {
        const all = [...correctLetters, ...wrongLetters].sort().join(', ');
        letrasDisplay.textContent = all || 'Nenhuma';
    }

    function endGame(message, isVictory) {
        gameOver = true;
        // Desabilita tudo
        inputLetra.disabled = true;
        btnEnviarLetra.disabled = true;
        btnRisk.classList.add('is-hidden');
        finalGuessWrapper.classList.add('is-hidden');
        
        // Mostra o tabuleiro completo
        updateBoard(true);
        updateStatus(message);
        restartButton.classList.remove('is-hidden');
        
        // Estilo visual de vitória ou derrota no texto
        statusMessage.style.color = isVictory ? '#2ecc71' : '#e74c3c';
        statusMessage.style.fontWeight = 'bold';
    }

    // --- CHUTE DE PALAVRA ---
    
    function toggleRiskMode(show) {
        if (gameOver) return;

        if (show) {
            // Esconde modo letra, mostra modo palavra
            inputLetra.classList.add('is-hidden');
            btnEnviarLetra.classList.add('is-hidden');
            btnRisk.classList.add('is-hidden');
            
            finalGuessWrapper.classList.remove('is-hidden');
            finalGuessInput.value = '';
            finalGuessInput.focus();
            statusMessage.textContent = "MODO TUDO OU NADA: Digite a palavra inteira.";
        } else {
            // Volta para o modo normal 
            inputLetra.classList.remove('is-hidden');
            btnEnviarLetra.classList.remove('is-hidden');
            btnRisk.classList.remove('is-hidden');
            
            finalGuessWrapper.classList.add('is-hidden');
            inputLetra.focus();
            updateStatus('Modo normal restaurado.');
        }
    }

    function handleWordGuess() {
        const guess = finalGuessInput.value.trim().toUpperCase();
        if (!guess) return;

        const normalizedGuess = normalizeLetter(guess);

        if (normalizedGuess === targetWord) {
            endGame('INCRÍVEL! Você acertou a palavra cheia!', true);
        } else {
            endGame(`ERRADO! A palavra era "${originalWord}". Você perdeu.`, false);
        }
    }

    // --- LÓGICA DO CHUTE DE LETRA ---

    function handleLetterGuess() {
        if (gameOver) return;

        const rawVal = inputLetra.value.trim().toUpperCase();
        inputLetra.value = '';
        inputLetra.focus(); 

        // Validação
        if (!rawVal) return updateStatus('Digite uma letra.');
        if (rawVal.length !== 1 || !/^[A-ZÇÁÉÍÓÚÂÊÎÔÛÃÕ]$/.test(rawVal)) {
            return updateStatus('Apenas uma letra válida por vez.');
        }

        const letter = normalizeLetter(rawVal);

        if (correctLetters.has(letter) || wrongLetters.has(letter)) {
            return updateStatus(`Você já tentou a letra "${letter}".`);
        }

        // Verifica acerto ou erro
        if (targetWord.includes(letter)) {
            correctLetters.add(letter);
            updateStatus(`Boa! Tem a letra "${letter}".`);
            
            // Verifica vitória por letras
            const allFound = Array.from(uniqueLetters).every(l => correctLetters.has(l));
            if (allFound) endGame('Parabéns! Você completou a palavra.', true);
        
        } else {
            wrongLetters.add(letter);
            attempts++;
            updateStatus(`Não tem a letra "${letter}".`);
            
            if (attempts >= maxAttempts) {
                // Se acabaram as tentativas, forçamos o modo de chute sem opção de cancelar
                toggleRiskMode(true);
                btnCancelGuess.style.display = 'none'; 
                finalGuessPrompt.textContent = "Sem tentativas! Chute a palavra final ou perca.";
            }
        }

        updateBoard();
        updateUsedLetters();
    }

   
    
    // Botão de Risco
    btnRisk.addEventListener('click', () => toggleRiskMode(true));
    
    // Botões dentro do modo de Risco
    btnConfirmGuess.addEventListener('click', handleWordGuess);
    btnCancelGuess.addEventListener('click', () => toggleRiskMode(false));
    
    // Inputs 
    finalGuessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleWordGuess();
    });

    inputLetra.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLetterGuess();
    });
    
    btnEnviarLetra.addEventListener('click', handleLetterGuess);

   
    updateBoard();
    updateStatus(`Você tem ${maxAttempts} tentativas.`);
    
    
    inputLetra.focus();
});