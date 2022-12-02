const { Model, DataTypes } = require('sequelize');

class Paciente extends Model {
    static init(sequelize) {
        super.init({
            cpf_paciente: {
                type: DataTypes.STRING(14),
                primaryKey: true,
                allowNull: false
            },
            rg_paciente: DataTypes.STRING(14),
            nome_paciente: DataTypes.STRING(120),
            sexo_paciente: DataTypes.ENUM('H', 'M'),
            telefone_paciente: DataTypes.BIGINT.UNSIGNED,
            celular_paciente: DataTypes.BIGINT.UNSIGNED,
            sangue_paciente: DataTypes.STRING(3),
            nascimento_paciente: DataTypes.DATEONLY,
            endereco_paciente: DataTypes.STRING(150),
            bairro_paciente: DataTypes.STRING(50),
            cidade_paciente: DataTypes.STRING(50),
            uf_paciente: DataTypes.STRING(2),
            cep_paciente: DataTypes.STRING(9),
            email_paciente: DataTypes.STRING(100),
            nome_pai: DataTypes.STRING(100),
            nome_mae: DataTypes.STRING(100),
        }, {
            sequelize,
            modelName: 'paciente',
        })
        return this;
    }
}

module.exports = Paciente;
