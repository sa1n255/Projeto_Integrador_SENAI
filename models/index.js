//index.js
/*
const butao = document.getElementById("butao");


butao.addEventListener("click", function (salvar) {
  salvar.preventDefault();

  var nome = document.getElementById("nome").value;
  var historico = document.getElementById("historico").value;
  var enferm = document.getElementById("enferm").value;
  var historicoconsul = document.querySelector("historicoconsul").value;
  var plano = document.querySelector("plano").value;
  var telefone = document.querySelector("telefone").value;
  var endereco = document.querySelector("endereco").value;
  var datanascimento = document.querySelector("datanascimento").value;
  var medicamentosa = document.querySelector("medicamentosa").value;
  var sanguineo = document.querySelector("sanguineo").value;
  var email = document.querySelector("email").value;

  (async () => {
  const db = require("./fucaoDB");
  console.log('INSERT INTO CLIENTES');
    const result = await db.insertpacientes({nome: nome, historico: historico, 
      enferm: enferm, historicoconsul: historicoconsul, plano: plano, telefone: telefone, 
      endereco: endereco, datanascimento: datanascimento, medicamentosa: medicamentosa, 
      sanguineo: sanguineo, email: email});
    console.log(result);



  })
});
*/
(async () => {
  const db = require("./fucaoDB");
  const result = await db.selectPacientes;
  console.log(result);
})









/*
(async () => {
    const db = require("./fucaoDB");
    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome: "Zé", idade: 18, uf: "SP"});
    console.log(result);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(6, {nome: "Zé José", idade: 19, uf: "SP"});
    console.log(result2);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);
});
*/
