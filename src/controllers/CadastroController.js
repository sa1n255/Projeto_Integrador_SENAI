import { db } from "../db/dbconnection";

class CadastroController {
    async get(req, res) {
        res.render('cadastro', {});
    }

    async post(req, res) {
        const paciente = {
            cpf: req.body.cpf,
            rg: req.body.rg,
            nome: req.body.nome,
            sexo: req.body.sexo,
            telefone: req.body.telefone,
            sangue: req.body.sangue,
            nascimento: req.body.nascimento,
            cep: req.body.cep,
            bairro: req.body.bairro,
            municipio: req.body.municipio,
            estado: req.body.estado,
            email: req.body.email,
            pai: req.body.pai,
            mae: req.body.mae
        }
        console.log(`Nome do Paciente: ${paciente.nome}`);
        console.log(`Historico Médico do Paciente: ${paciente.historicoMedico}`);
        console.log(`Enfermidades Cronicas do Paciente: ${paciente.enfermidadesCronicas}`);
        console.log(`Historico de consultas do Paciente: ${paciente.historicoConsultas}`);
        console.log(`Email do Paciente: ${paciente.email}`);
        console.log(`Telefone do Paciente: ${paciente.telefone}`);
        console.log(`endereco do Paciente: ${paciente.endereco}`);
        console.log(`Data de nascimento do Paciente: ${paciente.dataNascimento}`);
        console.log(`Medicamento do Paciente: ${paciente.medicamento}`);
        console.log(`Tipo Sanguineo do Paciente: ${paciente.tipoSanguineo}`);
    }
}

export default new CadastroController();