const { Model, DataTypes } = require('sequelize');

class Hospital extends Model {
    static init(sequelize) {
        super.init({
            cnpj_hospital: {
                type: DataTypes.STRING(20),
                unique: {
                    msg: 'O CNPJ já foi cadastrado no Sistema'
                },
                validate: {
                    max: {
                        args: 20,
                        msg: 'Tamanho de CNPJ inválido'
                    },
                    notNull: {
                        msg: 'O CNPJ do Hospital não pode ser Nulo'
                    },
                    notEmpty: {
                        msg: 'O CNPJ do Hospital não pode estar vazio'
                    },
                },
            },
            nome_hospital: {
                type: DataTypes.STRING(100),
                unique: {
                    msg: 'O Nome do Hospital já está cadastrado no Sistema'
                },
                validate: {
                    max: {
                        args: 100,
                        msg: 'O Nome do Hospital é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Nome do Hospital não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Nome do Hospital não pode estar vazio'
                    },
                },
            },
            endereco_hospital: {
                type: DataTypes.STRING(150),
                unique: {
                    msg: 'O Endereço já está sendo usado por outro Hospital'
                },
                validate: {
                    max: {
                        args: 150,
                        msg: 'O Tamanho do Endereço do Hospital é MUITO grande'
                    },
                    notNull: {
                        msg: 'O Endereço do Hospital não pode ser Nulo'
                    },
                    notEmpty: {
                        msg: 'O Endereço do Hospital não pode estar Vazio'
                    }
                },
            },
            cep_hospital: {
                type: DataTypes.STRING(9),
                validate: {
                    max: {
                        args: 9,
                        msg: 'O Tamanho do CEP é inválido'
                    },
                    notNull: {
                        msg: 'O CEP do Hospital não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O CEP do Hospital não pode estar vazio'
                    },
                },
            },
            bairro_hospital: {
                type: DataTypes.STRING(50),
                validate: {
                    max: {
                        args: 50,
                        msg: 'O nome do Bairro do Hospital é MUITO grande'
                    },
                    notNull: {
                        msg: 'O nome do Bairro do Hospital não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O nome do Bairro do Hospital não pode estar vazio'
                    },
                },
            },
            cidade_hospital: {
                type: DataTypes.STRING(50),
                validate: {
                    max: {
                        args: 50,
                        msg: 'O nome da Cidade do Hospital é MUITO grande'
                    },
                    notNull: {
                        msg: 'O nome da Cidade do Hospital não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O nome da Cidade do Hospital não pode estar vazio'
                    },
                },
            },
            uf_hospital: {
                type: DataTypes.STRING(2),
                validate: {
                    isIn: {
                        args: [['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']],
                        msg: 'Estado ou Distrito Federal do Hospital inválido'
                    },
                },
            },
        }, {
            sequelize,
            modelName: 'hospital',
        })
        return this;
    }
}

module.exports = Hospital;