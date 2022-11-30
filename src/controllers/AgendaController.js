class AgendaController{
    async index(req, res) {
        res.render('agenda', {});
    }

    async procurar(req, res) {
        
    }
}

export default new AgendaController();