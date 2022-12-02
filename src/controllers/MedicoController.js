class MedicoController {
    async index(req, res) {
        res.render('cadastromed', {});
    }

    async cadastrar(req, res) {
       const { crm, cpf, rg, nome, sexo, telefone, sangue, nascimento, especialidade, senha } = req.body

       console.log(`crm: ${crm}`);
       console.log(`cpf: ${cpf}`);
       console.log(`rg: ${rg}`);
       console.log(`nome: ${nome}`);
       console.log(`sexo: ${sexo}`);
       console.log(`telefone: ${telefone}`);
       console.log(`sangue: ${sangue}`);
       console.log(`nascimento: ${nascimento}`);
       console.log(`especialidade: ${especialidade}`);
       console.log(`senha: ${senha}`);
    }
}

export default new MedicoController();