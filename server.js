const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const appagenda = require('./javascript/Appagenda')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Renderizador do HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// Caminho da pasta estatica (Estilos)
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));
//javascript

// rotas 
// res = response, req = request
app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/cadastromed', (req, res) => {
    res.render('cadastromed', {});
});

app.get('/agenda', (req, res) => {
   res.render('agenda', {}); 
});

app.get('/area-medica', (req, res) => {
   res.render('area-medica', {}); 
});

app.get('/cadastro', (req, res) => {
   res.render('cadastro', {});

});

app.get('/login', (req, res) => {
    res.render('login', {});
});

app.post('/login', (req, res) => {
    let crm = req.body.crm;
    let senha = req.body.senha;
})

app.get('/pesquisa', (req, res) => {
    res.render('pesquisa', {});
});
app.get('/integrantes', (req, res) => {
    res.send('Página dos integrantes');
});

app.get('/documentacao-do-projeto', (req, res) => {
    //res.render('documentacao-do-projeto');
    res.send('Ainda não está pronta');
});

app.get('/:slug', (req, res) => {
    res.render('404');
});


// Ligar servidor
app.listen(8080, () => console.log(`Servidor local ativo em http://localhost:8080`));
