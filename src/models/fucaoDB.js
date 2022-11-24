const conn = require("./Conexão");



async function selectPacientes(){
    const conn = require("./Conexão");
    const connect = await conn.connect();
    const [rows] = await connect.query('SELECT * FROM pacientes;');
    return rows;
}

async function insertpacientes(pacientes){
    const conn = await connect();
    const sql = 'INSERT INTO pacientes (cpf, nome, nascimento, endereço, sangue, email, telefone) VALUES ?';
    const values = [pacientes.nome, pacientes.idade, pacientes.uf];
    return await conn.query(sql, [values], (error, results, fields) => {
        if (error) return console.log(error);
        console.log("adicionou o registro");
        conn.end();
      });
}

async function updateCustomer(id, customer){
    const conn = await connect();
    const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [customer.nome, customer.idade, customer.uf, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM clientes where id=?;';
    return await conn.query(sql, [id]);
}

module.exports = {selectPacientes, insertpacientes, updateCustomer, deleteCustomer}





