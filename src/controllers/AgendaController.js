import { selectMedicoWhere } from '../models/Agenda';

class AgendaController{
    async get(req, res) {
        res.render('agenda', {});
    }

    async procurar(req, res) {
        const query = `SELECT * FROM medico WHERE ?? = ?`
        const crm = req.body.crmagenda; // 23431231
        const data = ['crm', crm]
        res.json(selectMedicoWhere(query, data));
    }
}

export default new AgendaController();