const Paciente = require('../models/Paciente');

class PacienteController {
    // GET 
    async index(req, res) {
        res.render('cadastro', {});
    }

    // POST
    async store(req, res) {
        const {
            cpf_paciente,
            rg_paciente,
            nome_paciente,
            sexo_paciente,
            telefone_paciente,
            celular_paciente,
            sangue_paciente,
            nascimento_paciente,
            endereco_paciente,
            bairro_paciente,
            cidade_paciente,
            uf_paciente,
            cep_paciente,
            email_paciente,
            nome_pai,
            nome_mae
        } = req.body;

        console.log(`cpf do Paciente: ${cpf_paciente}`);
        console.log(`RG do Paciente: ${rg_paciente}`);
        console.log(`Nome do Paciente: ${nome_paciente}`);
        console.log(`Sexo do Paciente: ${sexo_paciente}`);
        console.log(`Telefone Paciente: ${telefone_paciente}`);
        console.log(`Celular do Paciente: ${celular_paciente}`);
        console.log(`Sangue Paciente: ${sangue_paciente}`);
        console.log(`Nascimento do Paciente: ${nascimento_paciente}`);
        console.log(`Endereço Paciente: ${endereco_paciente}`);
        console.log(`Bairro do Paciente: ${bairro_paciente}`);
        console.log(`Cidade do Paciente: ${cidade_paciente}`);
        console.log(`UF do Paciente: ${uf_paciente}`);
        console.log(`CEP do Paciente: ${cep_paciente}`);
        console.log(`Email do Paciente: ${email_paciente}`);
        console.log(`Pai do Paciente: ${nome_pai}`);
        console.log(`Mãe do Paciente: ${nome_mae}`);

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
            const updatePaciente = await Paciente.update()
            return res.status(201).json(updatePaciente);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })  
        }
    }
    // DELETE
    async delete(req, res) {
        const deletePaciente = await Paciente.destroy();
    }
}

export default new PacienteController();