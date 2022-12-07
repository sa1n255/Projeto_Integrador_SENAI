const { Model, DataTypes } = require('sequelize');

class Consulta extends Model {
    static init(sequelize) {
        super.init({
            fk_nome_medico: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    max: {
                        args: 120,
                        msg: 'O Nome do Médico é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Nome do Médico não pode ser Nulo'
                    },
                    notEmpty: {
                        msg: 'O Nome do Médico não pode estar vazio'
                    },
                }
            },
            fk_nome_paciente: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    max: {
                        args: 120,
                        msg: 'O Nome do Paciente é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Nome do Paciente não pode ser Nulo'
                    },
                    notEmpty: {
                        msg: 'O Nome do Paciente não pode estar vazio'
                    },
                }
            },
            especialidade: {
                type: DataTypes.STRING(30),
                allowNull: false,
                validate: {
                    max: {
                        args: 30,
                        msg: 'O Nome da Especialidade Médica é MUITO grande'
                    },
                    notNull: {
                        msg: 'A Especialidade do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'A Especialidade do Médico não pode estar vazia'
                    },
                },
            },
            fk_nome_hospital: {
                type: DataTypes.STRING(30),
                allowNull: false,
                validate: {
                    max: {
                        args: 30,
                        msg: 'O Nome do Hospital é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Nome do Hospital não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Nome do Hospital não pode ser vazio'
                    }
                }
            },
            dia_consulta: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            hora_consulta: {
                type: DataTypes.TIME,
                allowNull: false
            },
            diagnostico: {
                type: DataTypes.TEXT
            },
            medicamento: {
                type: DataTypes.TEXT
            },
            exame: {
                type: DataTypes.STRING(100),
            },
            observacao: {
                type: DataTypes.TEXT
            }
        }, {
            sequelize,
            modelName: 'consulta'
        })
        return this;
    }

    static associations(models) {
        this.belongsTo(models.Medico)
        this.belongsTo(models.Paciente)
        this.belongsTo(models.Hospital)
    }
}

module.exports = Consulta;