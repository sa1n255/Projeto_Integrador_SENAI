const { Model, DataTypes } = require('sequelize');

class Medico extends Model {
    static init(sequelize) {
        super.init({
            crm: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                unique: {
                    msg: 'O CRM do Médico já está cadastrado no Sistema'
                },
                validate: {
                    notNull: {
                        msg: 'O CRM do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O CRM do Médico não pode estar vazio'
                    },
                }
            },
            cpf_medico: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: 'O CPF do Médico já está cadastrado no Sistema'
                },
                validate: {
                    min: {
                        args: 14,
                        msg: 'O CPF do Médico deve conter os caracteres "-" e "." para serem validados corretamente pelo Sistema'
                    },
                    notNull: {
                        msg: 'O CPF do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O CPF do Médico não pode estar vazio'
                    },
                },
            },
            rg_medico: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: 'O RG do Médico já está cadastrado no Sistema'
                },
                validate: {
                    min: {
                        args: 14,
                        msg: 'RG inválido'
                    },
                    notNull: {
                        msg: 'O RG do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O RG do Médico não pode estar vazio'
                    }
                },
            },
            nome_medico: {
                type: DataTypes.STRING(120),
                allowNull: false,
                unique: {
                    msg: 'O Nome do Médico já está cadastrado no Sistema'
                },
                validate: {
                    len: {
                        args: [10, 120],
                        msg: 'O Nome do Médico é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Nome do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Nome do Médico não pode estar vazio'
                    },
                },
            },
            sexo_medico: {
                type: DataTypes.ENUM('H', 'M'),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'O Sexo do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Sexo do Médico não pode estar vazio'
                    },
                    notIn: {}
                }
            },
            telefone_medico: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                validate: {
                    isNumeric: {
                        msg: 'Número de Telefone inválido'
                    },
                    notNull: {
                        msg: 'O Telefone do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Telefone do Médico não pode estar vazio'
                    },
                },
            },
            email_medico: {
                type: DataTypes.STRING(120),
                allowNull: false,
                unique: {
                    msg: 'O E-Mail do Médico já está cadastrado no Sistema'
                },
                validate: {
                    isEmail: {
                        msg: 'O E-Mail do Médico é inválido'
                    },
                    notNull: {
                        msg: 'O E-mail do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O E-Mail do Médico não pode estar vazio'
                    }
                }
            },
            sangue_medico: {
                type: DataTypes.STRING(3),
                validate: {
                    isIn: {
                        args: [['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']],
                        msg: 'Tipo Sanguíneo inválido'
                    },
                },
            },
            nascimento_medico: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'A Data de Nascimento do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'A Data de Nascimento do Médico não pode estar vazia'
                    }
                }
            },
            especialidade: {
                type: DataTypes.STRING(30),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'A Especialidade do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'A Especialidade do Médico não pode estar vazia'
                    },
                },
            },
            senha: {
                type: DataTypes.STRING(25),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'A Senha do Médico não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'A Senha do Médico não pode estar vazia'
                    },
                },
            }
        }, {
            sequelize,
            modelName: 'medico',
        })
        return this;
    }
    static associations(models) {
        this.hasMany(models.Agenda)
        this.hasMany(models.Consulta)
    }
}

module.exports = Medico;