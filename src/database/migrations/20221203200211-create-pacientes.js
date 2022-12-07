'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('paciente', {
            id: {
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            cpf_paciente: {
                type: Sequelize.STRING(14),
                allowNull: false,
                unique: true,
            },
            rg_paciente: {
                type: Sequelize.STRING(14),
            },
            nome_paciente: {
                type: Sequelize.STRING(120),
                allowNull: false,
                unique: true,
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
                type: Sequelize.STRING(2),
                allowNull: false,
            },
            cep_paciente: {
                type: Sequelize.STRING(10)
            },
            email_paciente: {
                type: Sequelize.STRING(120)
            },
            nome_pai: {
                type: Sequelize.STRING(120)
            },
            nome_mae: {
                type: Sequelize.STRING(120)
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

    down: async (queryInterface) => queryInterface.dropTable('paciente')
};
