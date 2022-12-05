const { Model, DataTypes } = require('sequelize');

class Especialidade extends Model {
    static init(sequelize) {
        super.init({
            especialidade_medica: {
                type: DataTypes.STRING(45),
                unique: {
                    msg: 'Especialidade Médica já cadastrada no Sistema'
                },
                validate: {
                    notNull: {
                        msg: 'O nome da Especialidade Médica não pode ser nulo'
                    },
                    notEmpty: {
                        msg: 'O Nome da Especialidade Médica não pode estar vazia'
                    },
                },
            },
        }, {
            sequelize,
            modelName: 'especialidade',
        })
        return this;
    }
}

module.exports = Especialidade;