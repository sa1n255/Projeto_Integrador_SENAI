const Hospital = require('../models/Hospital');

class HospitalController {
    index(req, res) {
        res.render('hospital', {});
    }

    async store(req, res) {
        console.log(req.body);

        try {
            const newHospital = await Hospital.create(req.body);
            return res.status(201).json(newHospital);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }

    }

    async show(req, res) {
        const showHospitais = await Hospital.findAll();
        return res.status(200).json(showHospitais);
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Id faltando'],
                });
            }

            const hospital = await Hospital.findByPk(id);

            if (!hospital) {
                return res.status(400).json({
                    errors: ['O Hospital não existe'],
                });
            }

            const hospitalUpdated = await hospital.update(req.body);
            return res.json(hospitalUpdated);
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

            const hospital = await Hospital.findByPk(id);

            if (!hospital) {
                return res.status(400).json({
                    errors: ['O Hospital não existe'],
                });
            }

            await hospital.destroy();
            return res.json({ apagado: true });

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}
export default new HospitalController();