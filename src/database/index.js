const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Paciente = require('../models/Paciente');
const Hospital = require('../models/Hospital');
const Medico = require('../models/Medico');
const Agenda = require('../models/Agenda');
const Consulta = require('../models/Consulta');

const connection = new Sequelize(dbConfig);
// Paciente.init(connection)
// Hospital.init(connection)
// Medico.init(connection)
// Agenda.init(connection)
// Consulta.init(connection)
const models = [Paciente, Hospital, Medico, Agenda, Consulta]

models.forEach((model) => model.init(connection));


module.exports = connection;