const { Sequelize } = require('sequelize');
// nome do banco, nome do usuario, senha, objeto
// objeto: dialeto(Nome do SQL), host(endereço do banco)
// Senha: para fins de testes
const sequelize = new Sequelize('arpamed', 'root', 'Lima12345678', {
    dialect: 'mysql',
    host: 'localhost'
});

// Sem problemas: Connection pool automática de 10~13 segundos. 
try {
    sequelize.authenticate();
    console.log('Conexão com o MySQL estabelecida com sucesso');
} catch (error) {
    console.error(`Não foi possível se conectar ao MySQL: ${error}`)
}


module.exports = sequelize;