const { Model, DataTypes } = require('sequelize');

class Paciente extends Model {
    static init(sequelize){
        super.init({
           cpf_paciente: DataTypes.STRING(14),
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
           nome_pai: DataTypes.STRING(100),
        }, {
            sequelize,
        })
    }
}

module.exports = Paciente;


// `cpf_paciente` CHAR(14) UNIQUE NOT NULL PRIMARY KEY,
// `rg_paciente` VARCHAR(14), -- Check
// `nome_paciente` VARCHAR(120) NOT NULL, -- Check
// `sexo_paciente` ENUM('H', 'M') NOT NULL, -- Check
// `telefone_paciente` BIGINT UNSIGNED NOT NULL, -- Check
// `celular_paciente` BIGINT UNSIGNED, -- Check
// `sangue_paciente` VARCHAR(3) NOT NULL, -- Check
// `nascimento_paciente` DATE NOT NULL, -- Check
// `endereco_paciente` VARCHAR(150), -- Check
// `bairro_paciente` VARCHAR(50),-- Check
// `cidade_paciente` VARCHAR(50),-- Check
// `uf_paciente` CHAR(2), -- Check
// `cep_paciente` VARCHAR(9),-- Check
// `email_paciente` VARCHAR(100), -- Check
// `nome_pai` VARCHAR(100), -- Check
// `nome_mae` VARCHAR(100) -- Check