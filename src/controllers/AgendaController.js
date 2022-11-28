import { db } from "../db/dbconnection";

class AgendaController{
    async get(req, res) {
        res.render('agenda', {});
    }

    async post(req, res) {
        const crmAgenda = req.body.crmagenda;
        console.log(`crm: ${crmAgenda}`);
    }
}

export default new AgendaController();