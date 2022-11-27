const express = require('express');
const path = require('path');

const routes = {
    agendaRoutes: require('./routes/agendaRoutes'),
    areamedicaRoutes: require('./routes/areamedicaRoutes'),
    cadastromedRoutes: require('./routes/cadastromedRoutes'),
    cadastroRoutes: require('./routes/cadastroRoutes'),
    loginRoutes: require('./routes/loginRoutes'),
    pesquisaRoutes: require('./routes/pesquisaRoutes')
}

const paths = {
    stylePath: path.join(__dirname, 'public'),
    viewsPath: path.join(__dirname, 'views')
}

const callbacks = {
    root: (req, res) => res.render('index', {}),
    noRoute: (req, res, next) => res.status(404).render('404')
}

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.templateEngines();
        this.listening();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.get('/', callbacks.root);
        this.app.use('/agenda', routes.agendaRoutes);
        this.app.use('/area-medica', routes.areamedicaRoutes);
        this.app.use('/cadastromed', routes.cadastromedRoutes);
        this.app.use('/cadastro', routes.cadastroRoutes);
        this.app.use('/login', routes.loginRoutes);
        this.app.use('/pesquisa', routes.pesquisaRoutes);
        this.app.use(callbacks.noRoute);
    }

    templateEngines() {
        this.app.use('/public', express.static(paths.stylePath));
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('view engine', 'html');
        this.app.set('views', paths.viewsPath);
    }

    listening(){
        this.app.listen(8080, () => console.log(`Servidor local ativo em http://localhost:8080`));
    }
}

const app = new App();