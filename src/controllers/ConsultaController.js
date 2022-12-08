const Consulta = require('../models/Consulta');

class ConsultaController {
    // async index(req, res) {
    //     res.render('', {});
    // }

    async store(req, res) {
        console.log(req.body);

        try {
            const newConsulta = await Consulta.create(req.body);
            return res.status(201).json(newConsulta);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }

    }

    async show(req, res) {
        const showConsultas = await Consulta.findAll();
        return res.status(200).json(showConsultas);
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Id faltando'],
                });
            }

            const consulta = await Consulta.findByPk(id);

            if (!consulta) {
                return res.status(400).json({
                    errors: ['A Consulta não existe'],
                });
            }

            const consultaUpdated = await consulta.update(req.body);
            return res.json(consultaUpdated);
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

            const consulta = await Consulta.findByPk(id);

            if (!consulta) {
                return res.status(400).json({
                    errors: ['A Consulta não existe'],
                });
            }

            await consulta.destroy();
            return res.json({ apagado: true });

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}
export default new ConsultaController();