const express = require('express');
const app = express();
const path = require('path');

// Caminhos de Estilo e views
const stylePath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');

// Import de Rotas
const agendaRoutes = require('./routes/agendaRoutes');
const areamedicaRoutes = require('./routes/areamedicaRoutes');
const cadastromedRoutes = require('./routes/cadastromedRoutes');
const cadastroRoutes = require('./routes/cadastroRoutes');
const loginRoutes = require('./routes/loginRoutes');
const pesquisaRoutes = require('./routes/pesquisaRoutes');

// Pegar o body da requisição agora é nativo do Express 😎
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template Engine (Uso de CSS e Renderização de HTML)
app.use('/public', express.static(stylePath));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', viewsPath);


const root = (req, res) => res.render('index', {});
const noRoute = (req, res, next) => res.status(404).render('404');

// Rotas
app.get('/', root); 
app.use('/agenda', agendaRoutes); 
app.use('/area-medica', areamedicaRoutes);
app.use('/cadastromed', cadastromedRoutes); 
app.use('/cadastro', cadastroRoutes); 
app.use('/login', loginRoutes); 
app.use('/pesquisa', pesquisaRoutes); 
app.use(noRoute); 

// Escuta do Servidor Local
app.listen(8080, () => console.log(`Servidor local ativo em http://localhost:8080`));