import dotenv from 'dotenv';
import express from 'express';
import { join } from 'path';
import cors from 'cors';
const app = express();


// Caminhos de Estilo e views
const paths = {
    style: join(__dirname, 'public'),
    views: join(__dirname, 'views')
}
// Import de Rotas
import loginRequired from './middlewares/authRequired';
import "./database"
import agendaRoutes from './routes/agendaRoutes';
import areamedicaRoutes from './routes/areamedicaRoutes';
import medicoRoutes from './routes/medicoRoutes';
import pacienteRoutes from './routes/pacienteRoutes';
import loginRoutes from './routes/loginRoutes';
import hospitalRoutes from './routes/hospitalRoutes';
import consulta from './routes/consultamedRoutes';
import mostrarpaciente from "./routes/mostrarpacienteRoutes";
import mostrarmedicos from "./routes/mostrarmedicosRoutes";
import homeRoutes from './routes/homeRoutes';

dotenv.config();
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


const noRoute = (req, res, next) => res.status(404).render('404');

// Rotas

app.use('/', homeRoutes); 
app.use('/agenda', agendaRoutes); 
app.use('/area-medica', areamedicaRoutes);
app.use('/cadastromed', medicoRoutes); 
app.use('/paciente', pacienteRoutes); 
app.use('/login', loginRoutes); 
app.use('/hospital', hospitalRoutes); 
app.use('/consulta', consulta);
app.use('/mostrarpaciente', mostrarpaciente);
app.use('/mostrarmedicos', mostrarmedicos); 
app.use(noRoute); 

app.listen(8080, () => console.log(`Servidor local ativo em http://localhost:8080`));