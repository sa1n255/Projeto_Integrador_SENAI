const Agenda = require('../models/Agenda');

class AgendaController {
    async index(req, res) {
        res.render('agenda', {});
    }

    async store(req, res) {
        try {
            const newAgenda = await Agenda.create(req.body);
            return res.status(201).json(newAgenda);
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }

    async show(req, res) {
        const showAgenda = await Agenda.findAll();
        res.status(200).json(showAgenda)
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Id Faltando'],
                });
            }

            const agenda = await Agenda.findByPk(id);

            if (!agenda) {
                return res.status(400).json({
                    errors: ['A Agenda não existe'],
                });
            }

            const agendaUpdated = await Agenda.update(req.body);
            return res.json(agendaUpdated);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Id faltando'],
                });
            }

            const agenda = await Agenda.findByPk(id);

            if (!agenda) {
                return res.status(400).json({
                    errors: ['A Agenda não existe'],
                });
            }

            await agenda.destroy();
            return res.json({ apagado: true });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new AgendaController();