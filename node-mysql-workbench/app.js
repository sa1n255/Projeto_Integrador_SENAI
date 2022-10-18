//Conexao com BD MySQL
const mysql = require("mysql");

//A partir do MySQL 8 apresenta o erro ao utilizar o usuário root para conexão, necessário criar novo usuário (instrução no Readme)
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hospitalproject",
});
//TESTE DE CONEXÃO
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//TESTE DE SELECT 1 (funcional)
/*
connection.query('SELECT * FROM pacientes', function teste(err, rows, fields){
    if(!err){
        console.log('Resultado:');
    }else{
        console.log('Erro ao realizar a consulta');
    }
    console.log(rows);
});
*/
//TESTE DE INSERT 1 (funcional)
/*
connection.query("INSERT INTO hospital(cnpj, nome, endereço) VALUES (2552553, 'caxias', 'caxias centro')",function(err, result){
    if(!err){
        console.log('deu certo');
    }else{
        console.log('Erro');
    }
});
*/
//TESTE DE SELECT 2 (funcional)
connection.query("SELECT * FROM hospital", function teste(err, rows, fields) {
  if (!err) {
    console.log("Resultado:");
  } else {
    console.log("Erro ao realizar a consulta");
  }
  console.log(rows);
});
//o padrão é o mesmo falta testar a integração com o html
