import express from 'express';
import path from 'path';


import agendaRoutes from './routes/agendaRoutes';
import areamedicaRoutes from './routes/areamedicaRoutes';
import cadastromedRoutes from './routes/cadastromedRoutes';
import cadastroRoutes from './routes/cadastroRoutes';
import loginRoutes from "./routes/loginRoutes"
import pesquisaRoutes from './routes/pesquisaRoutes';
import rootRoutes from './routes/rootRoutes';
import consulta from "./routes/consultamedRoutes";
import mostrarpaciente from "./routes/mostrarpacienteRoutes";
import mostrarmedicos from "./routes/mostrarmedicosRoutes";

const paths = {
    stylePath: path.join(__dirname, 'public'),
    viewsPath: path.join(__dirname, 'views')
}

const callbacks = {
    noRoute: (req, res, next) => res.status(404).render('404')
}

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use('public', express.static(paths.stylePath));
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('view engine', 'html');
        this.app.set('views', paths.viewsPath);
    }

    routes() {
        this.app.get('/', rootRoutes);
        this.app.use('/agenda', agendaRoutes);
        this.app.use('/area-medica', areamedicaRoutes);
        this.app.use('/cadastromed', cadastromedRoutes);
        this.app.use('/cadastro', cadastroRoutes);
        this.app.use('/login', loginRoutes);
        this.app.use('/pesquisa', pesquisaRoutes);
        this.app.use("/consulta", consulta);
        this.app.use("/mostrarpaciente", mostrarpaciente);
        this.app.use("/mostrarmedicos", mostrarmedicos);
        this.app.use(callbacks.noRoute);
    }

}

export default new App().app;