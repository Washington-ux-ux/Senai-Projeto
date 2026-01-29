// 1. Selecionar os elementos do HTML 
const questionTextEl = document.getElementById('question-text');
const scoreDisplayEl = document.getElementById('score-display');
const timeDisplayEl = document.getElementById('time-display');
const answerButtonsEl = document.querySelectorAll('.btn-answer:not(#btn-restart)'); 
const restartBtn = document.getElementById('btn-restart'); 

// 2. Banco de Perguntas 
let questions = [];

// Carregar Perguntas do JSON
async function loadQuestions() {
    try {
        // Certifique-se que o arquivo 'questions.json' está na pasta correta
        const response = await fetch('questions.json'); 
        questions = await response.json();
        startGame(); 
    } catch (error) {
        console.error("Erro ao carregar as perguntas:", error);
        questionTextEl.innerText = "Erro ao carregar perguntas (Use o Live Server)";
    }
}

// 3. Função de Embaralhar 
function shuffleArray(array) {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// 4. Variáveis de controle
let currentQuestionIndex = 0;
let score = 0;
let timer; 
let timeLeft = 90; 

// 5. Funções de Fluxo do Jogo

function startGame() {
    // Esconde o botão de reiniciar e mostra os de resposta
    restartBtn.style.display = 'none';
    answerButtonsEl.forEach(btn => btn.style.display = 'block');

    // Reseta variáveis
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplayEl.innerText = score;
    
    shuffleArray(questions);
    startTimer(); 
    showQuestion();
}

function endGame(message) {
    pauseTimer(); 

    // Exibe mensagem final no lugar da pergunta
    questionTextEl.innerText = `${message}\n\nPontuação Final: ${score}\n\nDeseja jogar novamente?`;

    // Esconde as opções de resposta
    answerButtonsEl.forEach(button => {
        button.style.display = 'none';
    });

    // Mostra o botão de reiniciar
    restartBtn.style.display = 'block';
}

// --- Timer ---
function startTimer() {
    timeLeft = 90; 
    timeDisplayEl.innerText = formatTime(timeLeft); 
    resumeTimer();
}

function pauseTimer() {
    clearInterval(timer);
}

function resumeTimer() {
    clearInterval(timer); 
    timer = setInterval(() => {
        timeLeft--; 
        timeDisplayEl.innerText = formatTime(timeLeft); 
        if (timeLeft <= 0) {
            endGame("O tempo acabou!"); 
        }
    }, 1000);
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// 6. Mostrar a Pergunta 
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionTextEl.innerText = currentQuestion.question;

    let shuffledAnswers = [...currentQuestion.answers];
    shuffleArray(shuffledAnswers);

    answerButtonsEl.forEach((button, index) => {
        // Se houver resposta para este botão
        if (shuffledAnswers[index]) {
            let answer = shuffledAnswers[index]; 
            button.innerText = answer.text;
            
            if (answer.correct) {
                button.dataset.correct = "true";
            }
            button.style.display = "block"; 
        } else {
            button.style.display = "none"; 
        }
    });
}

// 7. Limpar Estado Visual
function resetState() {
    answerButtonsEl.forEach(button => {
        button.disabled = false;
        delete button.dataset.correct;
        button.classList.remove('correct', 'incorrect', 'wrong-answer');
    });
}

// 8. Selecionar Resposta
function selectAnswer(event) {
    pauseTimer(); 

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        score++; 
        timeLeft += 3; 
        timeDisplayEl.innerText = formatTime(timeLeft); 
    } else {
        score--; 
    }
    scoreDisplayEl.innerText = score;

    // Trava os botões
    answerButtonsEl.forEach(button => {
        button.disabled = true;
        
        // Aplica as cores
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        } else if (button === selectedButton) {
            button.classList.add('incorrect');
        } else {
            button.classList.add('wrong-answer');
        }
    });

    // Avança após 1.5 segundos
    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 
        resumeTimer(); 
    } else {
        endGame("Fim das perguntas!");
    }
}

// 9. Event Listeners (Cliques)
answerButtonsEl.forEach(button => {
    button.addEventListener('click', selectAnswer);
});

restartBtn.addEventListener('click', startGame);

// 10. Controle por Teclado (D, F, J, K)
document.addEventListener('keydown', (event) => {
    // Se o jogo acabou, as teclas somem
    if (restartBtn.style.display === 'block') return;

    const keyMap = {
        'd': 0, 'D': 0,
        'f': 1, 'F': 1,
        'j': 2, 'J': 2,
        'k': 3, 'K': 3
    };

    if (keyMap.hasOwnProperty(event.key)) {
        const index = keyMap[event.key];
        const button = answerButtonsEl[index];

        if (button && !button.disabled && button.style.display !== 'none') {
            button.classList.add('active-key');
            button.click(); 
            setTimeout(() => button.classList.remove('active-key'), 150);
        }
    }
});

// 11. Iniciar
loadQuestions();