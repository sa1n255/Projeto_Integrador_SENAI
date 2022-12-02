const { Model, DataTypes } = require('sequelize');

class Hospital extends Model {
    static init(sequelize) {
        super.init({
            cnpj_hospital: {
                type: DataTypes.STRING(18),
                primaryKey: true,
                unique: true
            },
            nome_hospital: DataTypes.STRING(100),
            endereco_hospital: DataTypes.STRING(150),
            cep_hospital: DataTypes.STRING(20),
            bairro_hospital: DataTypes.STRING(50),
            cidade_hospital: DataTypes.STRING(50),
            uf_hospital: DataTypes.STRING(2)
        }, {
            sequelize,
            modelName: 'hospital',
        })
        return this;
    }
}

module.exports = Hospital;