import express from 'express';
import { join } from 'path';
import cors from 'cors';
import loginRequired from './middlewares/loginRequired';
const app = express();

// Caminhos de Estilo e views
const paths = {
    style: join(__dirname, 'public'),
    views: join(__dirname, 'views')
}
// Import de Rotas
import agendaRoutes from './routes/agendaRoutes';
import areamedicaRoutes from './routes/areamedicaRoutes';
import cadastromedRoutes from './routes/cadastromedRoutes';
import cadastroRoutes from './routes/cadastroRoutes';
import loginRoutes from "./routes/loginRoutes"
import pesquisaRoutes from './routes/pesquisaRoutes';
import rootRoutes from './routes/rootRoutes';

// Habilitar o JSON do Corpo da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template Engine (Uso de CSS e Renderização de HTML)
app.use('/public', express.static(paths.style));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', paths.views);
app.use(loginRequired);
app.use(cors());

const root = (req, res) => res.render('index', {});
const noRoute = (req, res, next) => res.status(404).render('404');

// Rotas

app.get('/', rootRoutes); 
app.use('/agenda', agendaRoutes); 
app.use('/area-medica', areamedicaRoutes);
app.use('/cadastromed', cadastromedRoutes); 
app.use('/cadastro', cadastroRoutes); 
app.use('/login', loginRoutes); 
app.use('/pesquisa', pesquisaRoutes); 
app.get('/results', (req, res) => {
    
    res.json([{idade: 12, nome: 'Samuel'}])
})
app.use(noRoute); 
// Escuta do Servidor Local
app.listen(8080, () => console.log(`Servidor local ativo em http://localhost:8080`));