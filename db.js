// 
const Sequelize = require('sequelize');
// nome do banco, nome do usuario, senha, objeto
// objeto: dialeto(Nome do SQL), host(endereço do banco)
const sequelize = new Sequelize('arpamed', 'root', '123456', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;