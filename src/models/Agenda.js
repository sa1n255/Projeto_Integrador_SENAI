const { Model, DataTypes } = require('sequelize');

class Agenda extends Model {
    static init(sequelize) {
        super.init({
            fk_nome_medico: {
                type: DataTypes.STRING(120),
                allowNull: false,
                validate: {
                    len: {
                        args: [10, 120],
                        msg: 'O Nome do Medico é MUITO grande'
                    },
                    isAlpha: {
                        msg: 'O Nome do Medico deve conter apenas letras'
                    },
                    notNull: {
                        msg: 'O Nome do Medico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Nome do Medico não pode estar vazio'
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
            fk_endereco_hospital: {
                type: DataTypes.STRING(150),
                allowNull: false,
                validate: {
                    max: {
                        args: 150,
                        msg: 'O Endereço do Hospital é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Endereço do Hospital não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Endereço do Hospital não pode estar vazio'
                    },
                }
            },
            dia_semana_agenda: {
                type: DataTypes.STRING(13),
                allowNull: false,
                validate: {
                    max: {
                        args: 13,
                        msg: 'O Dia da Semana é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Dia da Semana não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Dia da Semana não pode estar vazio'
                    },
                }
            },
            inicio_expediente_agenda: {
                type: DataTypes.TIME,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'O Dia da Semana não pode ser nulo'
                    },
                }
            },
            fim_expediente_agenda: {
                type: DataTypes.TIME,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'O Dia da Semana não pode ser nulo'
                    },
                },
            },
        }, {
            sequelize,
            modelName: 'agenda',
        })
        return this;
    }
    static associations(models) {
        this.belongsTo(models.Medico)
        this.belongsTo(models.Hospital)
    }
}

module.exports = Agenda;