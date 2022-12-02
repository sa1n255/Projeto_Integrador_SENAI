'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('paciente', {
            cpf_paciente: {
                type: Sequelize.STRING(14),
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            rg_paciente: {
                type: Sequelize.STRING(14),
            },
            nome_paciente: {
                type: Sequelize.STRING(120),
                allowNull: false,
            },
            sexo_paciente: {
                type: Sequelize.ENUM('H', 'M'),
                allowNull: false,
            },
            telefone_paciente: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
            },
            celular_paciente: {
                type: Sequelize.BIGINT.UNSIGNED,
            },
            sangue_paciente: {
                type: Sequelize.STRING(3),
                allowNull: false,
            },
            nascimento_paciente: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            endereco_paciente: {
                type: Sequelize.STRING(150),
            },
            bairro_paciente: {
                type: Sequelize.STRING(50),
            },
            cidade_paciente: {
                type: Sequelize.STRING(50)
            },
            uf_paciente: {
                type: Sequelize.STRING(2)
            },
            cep_paciente: {
                type: Sequelize.STRING(9)
            },
            email_paciente: {
                type: Sequelize.STRING(100)
            },
            nome_pai: {
                type: Sequelize.STRING(100)
            },
            nome_mae: {
                type: Sequelize.STRING(100)
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('paciente');
    }
};
