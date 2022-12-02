const { Model, DataTypes } = require('sequelize');

// Conflito Lógico na Coluna: Especialidade Medica
class Especialidade extends Model {
    static init(sequelize) {
        super.init({
            id_especialidade: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            especialidade_medica: {
                type: DataTypes.STRING(45),
                unique: true,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'especialidade',
        })
        return this;
    }
}

module.exports = Especialidade;