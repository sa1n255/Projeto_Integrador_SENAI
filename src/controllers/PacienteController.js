class PacienteController {
    async index(req, res) {
        res.render('cadastro', {});
    }

    async cadastrar(req, res) {
        const {cpf, rg, nome, sexo, telefone, sangue, nascimento, cep, bairro, municipio, estado, email, pai, mae} = req.body;

        console.log(`cpf do Paciente: ${cpf}`);
        console.log(`RG do Paciente: ${rg}`);
        console.log(`Nome do Paciente: ${nome}`);
        console.log(`Sexo Paciente: ${sexo}`);
        console.log(`Telefone Paciente: ${telefone}`);
        console.log(`Sangue Paciente: ${sangue}`);
        console.log(`Endereço Paciente: ${nascimento}`);
        console.log(`CEP do Paciente: ${cep}`);
        console.log(`Bairro do Paciente: ${bairro}`);
        console.log(`Municipio do Paciente: ${municipio}`);
        console.log(`Estado do Paciente: ${estado}`);
        console.log(`Email do Paciente: ${email}`);
        console.log(`Pai do Paciente: ${pai}`);
        console.log(`Mãe do Paciente: ${mae}`);
    }
}

export default new PacienteController();