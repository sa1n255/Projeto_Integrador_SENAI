const { Model, DataTypes } = require('sequelize');

class Paciente extends Model {
    static init(sequelize) {
        super.init({
            cpf_paciente: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: 'O CPF do Paciente já está cadastrado no Sistema'
                },
                validate: {
                    min: {
                        args: 14,
                        msg: 'O CPF do Paciente deve conter os caracteres "-" e "." para serem validados corretamente pelo Sistema'
                    },
                    notNull: {
                        msg: 'O CPF do Paciente não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O CPF do Paciente não pode estar vazio'
                    },
                },
            },
            rg_paciente: {
                type: DataTypes.STRING(14),
                validate: {
                    min: {
                        args: 12,
                        msg: 'RG inválido'
                    },
                },
            },
            nome_paciente: {
                type: DataTypes.STRING(120),
                allowNull: false,
                unique: {
                    msg: 'Esse Paciente já está cadastrado no Sistema'
                },
                validate: {
                    len: {
                        args: [10, 120],
                        msg: 'O Nome do Paciente é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Nome do Paciente não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Nome do Paciente não pode estar vazio'
                    },
                },
            },
            sexo_paciente: {
                type: DataTypes.ENUM('H', 'M'),
            },
            telefone_paciente: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'O Telefone do Paciente não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Telefone do Paciente não pode estar vazio'
                    },
                },
            },
            celular_paciente: {
                type: DataTypes.BIGINT.UNSIGNED,
            },
            sangue_paciente: {
                type: DataTypes.STRING(3),
                validate: {
                    isIn: {
                        args: [['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']],
                        msg: 'Tipo Sanguíneo inválido'
                    },
                },
            },
            nascimento_paciente: {
                type: DataTypes.DATEONLY,
            },
            endereco_paciente: {
                type: DataTypes.STRING(150),
                validate: {
                    max: {
                        args: 50,
                        msg: 'O Endereço do Paciente é MUITO grande'
                    },
                },
            },
            bairro_paciente: {
                type: DataTypes.STRING(50),
                validate: {
                    max: {
                        args: 50,
                        msg: 'O nome do Bairro do Paciente é MUITO grande'
                    },
                },
            },
            cidade_paciente: {
                type: DataTypes.STRING(50),
                validate: {
                    max: {
                        args: 50,
                        msg: 'o nome da Cidade do Paciente é MUITO grande'
                    },
                },
            },
            uf_paciente: {
                type: DataTypes.STRING(2),
                validate: {
                    isIn: {
                        args: [['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']],
                        msg: 'Estado ou Distrito Federal inválido'
                    },
                },
            },
            cep_paciente: {
                type: DataTypes.STRING(9),
                validate: {
                    min: {
                        args: 9,
                        msg: 'CEP Inválido'
                    },
                },
            },
            email_paciente: {
                type: DataTypes.STRING(100),
                validate: {
                    isEmail: {
                        msg: 'E-mail Inválido'
                    },
                },
            },
            nome_pai: {
                type: DataTypes.STRING(120),
                validate: {
                    max: {
                        args: 120,
                        msg: 'O Nome do Pai do Paciente é MUITO grande'
                    },
                },
            },
            nome_mae: {
                type: DataTypes.STRING(120),
                validate: {
                    max: {
                        args: 120,
                        msg: 'O Nome da Mãe do Paciente é MUITO grande'
                    },
                },
            },
        }, {
            sequelize,
            modelName: 'paciente',
        })
        return this;
    }
    
    static associations(models) {
        this.hasMany(models.Consulta)
    }
}

module.exports = Paciente;
