const express = require('express');
const app = express();
const path = require('path');

// Caminhos de Estilo e views
const stylePath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');

// Import de Rotas
const otherRoutes = require('./routes/routes');
const loginRoutes = require('./routes/login');

// Pegar o body da requisição agora é nativo do Express 😎
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Template Engine (Uso de CSS e Renderização de HTML)
app.use('/public', express.static(stylePath));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', viewsPath);


const root = (req, res) => res.render('index', {});
const noRoute = (req, res, next) => res.status(404).render('404');

// Rotas
app.get('/', root); // Rota Raiz
app.use('/login', loginRoutes); // Rotas da tela de Login
app.use(otherRoutes); // Todas as rotas
app.use(noRoute); // Para rotas inexistentes

// Escuta do Servidor Local
app.listen(8080, () => console.log(`Servidor local ativo em http://localhost:8080`));