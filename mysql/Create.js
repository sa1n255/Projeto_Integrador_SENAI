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

var nome = "Henry";
var cpf = 155122133;
var nascimento = "2006-01-12";
var endereço = "pavuna";
var sangue = "B";
var email = "Henry@gmail.com";
var telefone = 54191567;
//CREATE dos pacientes
//funciona mais tem que adptar para as outras tabelas

connection.query('insert into pacientes (cpf, nome, nascimento, endereço, sangue, email, telefone) values (${cpf}, "${nome}", "${nascimento}", "${sangue}", "${email}", ${telefone});', function teste(err, rows, fields){
    
  if(!err){
        console.log('deu certo');
    }else{
        console.log('Erro ao realizar a consulta');
    }
    
});

//CREATE DO RESTO