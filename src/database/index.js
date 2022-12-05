const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Especialidade = require('../models/Especialidade');
const Hospital = require('../models/Hospital');

const Paciente = require('../models/Paciente');
// const models = [Paciente, Hospital, Especialidade, Medico, Agenda, Consulta]
const connection = new Sequelize(dbConfig);

Paciente.init(connection);

module.exports = connection;