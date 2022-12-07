const Medico = require('../models/Medico');

class MedicoController {
    async index(req, res) {
        res.render('cadastromed', {});
    }

    async store(req, res) {
        console.log(req.body);

        try {
            const newMedico = await Medico.create(req.body);
            return res.status(201).json(newMedico);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }

    }

    async show(req, res) {
        const showMedicos = await Medico.findAll();
        return res.status(200).json(showMedicos);
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Id faltando'],
                });
            }

            const medico = await Medico.findByPk(id);

            if (!medico) {
                return res.status(400).json({
                    errors: ['O Médico não existe'],
                });
            }

            const medicoUpdated = await medico.update(req.body);
            return res.json(medicoUpdated);
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

            const medico = await Medico.findByPk(id);

            if (!medico) {
                return res.status(400).json({
                    errors: ['O Médico não existe'],
                });
            }

            await medico.destroy();
            return res.json({ apagado: true });

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}
export default new MedicoController();