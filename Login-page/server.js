const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// --- 1. CONFIGURAÇÃO DE FICHEIROS ESTÁTICOS ---
// Isto permite que o browser aceda ao jogo.html, style.css, etc.
// Servir a pasta `public` tanto na raiz quanto no caminho /Login-page/public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Login-page/public', express.static(path.join(__dirname, 'public')));

// Servir arquivos estáticos da Home_Page montados em /Home_Page
app.use('/Home_Page', express.static(path.join(__dirname, '../Home_Page')));

// Servir a raiz da pasta Login-page em /Login-page (para /Login-page/style.css, /Login-page/script.js)
app.use('/Login-page', express.static(path.join(__dirname)));

// Banco de dados SQLite
const db = new sqlite3.Database('./usuarios.db', (err) => {
    if (err) console.error(err.message);
    else console.log('Conectado ao banco de dados SQLite.');
});

// Criar tabela de usuários
db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        senha TEXT
    )
`);

// --- 2. ROTA PRINCIPAL ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// --- 3. ROTA DE CADASTRO ---
app.post('/cadastro', async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.json({ message: 'Preencha todos os campos!' });
    }

    // Hash da senha
    const senhaHash = await bcrypt.hash(senha, 10);

    db.run(
        'INSERT INTO usuarios (email, senha) VALUES (?, ?)',
        [email, senhaHash],
        function (err) {
            if (err) {
                return res.json({ message: 'Email já cadastrado!' });
            }
            res.json({ message: 'Conta criada com sucesso!' });
        }
    );
});

// --- 4. ROTA DE LOGIN ---
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.json({ message: 'Preencha todos os campos!' });
    }

    db.get(
        'SELECT * FROM usuarios WHERE email = ?',
        [email],
        async (err, user) => {
            if (err) return res.json({ message: 'Erro no servidor!' });

            if (!user) {
                return res.json({ message: 'Email ou senha incorretos!' });
            }

            // Comparar senha
            const senhaCorreta = await bcrypt.compare(senha, user.senha);
            if (senhaCorreta) {
                // IMPORTANTE: A mensagem deve ser exatamente esta para o script.js redirecionar
                return res.json({ message: 'Login realizado com sucesso!' });
            } else {
                return res.json({ message: 'Email ou senha incorretos!' });
            }
        }
    );
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});