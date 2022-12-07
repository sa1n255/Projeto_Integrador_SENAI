const Paciente = require('../models/Paciente');

class PacienteController {
    // GET 
    async index(req, res) {
        res.render('cadastro', {});
    }

    // POST
    async store(req, res) {
        // console.log(req.body);

        try {
            const newPaciente = await Paciente.create(req.body);
            return res.status(201).json(newPaciente);
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }
    // GET
    async show(req, res) {
        const showPacientes = await Paciente.findAll();
        res.status(200).json(showPacientes);
    }
    // PUT ou PATCH
    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Id faltando'],
                });
            }

            const paciente = await Paciente.findByPk(id);

            if (!paciente) {
                return res.status(400).json({
                    errors: ['Paciente não existe'],
                });
            }

            const pacienteUpdated = await paciente.update(req.body);
            return res.json(pacienteUpdated);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
    // DELETE
    async delete(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Id faltando'],
                });
            }

            const paciente = await Paciente.findByPk(id);

            if (!paciente) {
                return res.status(400).json({
                    errors: ['O Paciente não existe'],
                });
            }

            await paciente.destroy();
            return res.json({apagado: true});
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new PacienteController();