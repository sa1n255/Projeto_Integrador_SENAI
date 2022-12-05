class MedicoController {
    async index(req, res) {
        res.render('cadastromed', {});
    }

    async store(req, res) {
        const {
            crm,
            cpf_medico,
            rg_medico,
            nome_medico,
            sexo_medico,
            telefone_medico,
            email_medico,
            sangue_medico,
            nascimento_medico,
            especialidade,
            especialidade_2,
            senha
        } = req.body;

        console.log(`crm: ${crm}`);
        console.log(`cpf: ${cpf_medico}`);
        console.log(`rg: ${rg_medico}`);
        console.log(`nome: ${nome_medico}`);
        console.log(`sexo: ${sexo_medico}`);
        console.log(`telefone: ${telefone_medico}`);
        console.log(`sangue: ${sangue_medico}`);
        console.log(`nascimento: ${nascimento_medico}`);
        console.log(`Email: ${email_medico}`);
        console.log(`especialidade: ${especialidade}`);
        console.log(`Especialidade 2: ${especialidade_2}`);
        console.log(`senha: ${senha}`);
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
        try {
            const showMedicos = await Medico.findall();
            return res.status(200).json(showMedicos);
            
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }
}

export default new MedicoController();