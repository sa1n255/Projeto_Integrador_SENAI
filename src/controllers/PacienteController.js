const Paciente = require('../models/Paciente');

class PacienteController {
    async index(req, res) {
        res.render('cadastro', {});
        //const pacientes = await Paciente.findAll()
        //res.json(pacientes);
    }

    async cadastrar(req, res) {
        const {cpf_paciente, rg_paciente, nome_paciente, sexo_paciente, telefone_paciente, celular_paciente, sangue_paciente, nascimento_paciente, endereco_paciente, bairro_paciente, cidade_paciente, uf_paciente, cep_paciente, email_paciente, nome_pai, nome_mae} = req.body;

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

        const novoPaciente = await Paciente.create({
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
        })
        res.json(novoPaciente);
    }
}

export default new PacienteController();