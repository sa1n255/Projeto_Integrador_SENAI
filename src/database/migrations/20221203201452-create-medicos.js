'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('medico', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            crm: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                unique: true,
            },
            cpf_medico: {
                type: Sequelize.STRING(14),
                allowNull: false,
                unique: true,
            },
            rg_medico: {
                type: Sequelize.STRING(14),
                allowNull: false,
                unique: true,
            },
            nome_medico: {
                type: Sequelize.STRING(120),
                allowNull: false,
                unique: true,
            },
            sexo_medico: {
                type: Sequelize.ENUM('H', 'M'),
                allowNull: false,
            },
            telefone_medico: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
            },
            email_medico: {
                type:Sequelize.STRING(120),
                allowNull: false,
                unique: true,
            },
            sangue_medico: {
                type: Sequelize.STRING(3),
                allowNull: false,
            },
            nascimento_medico: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            especialidade: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            senha: {
                type: Sequelize.STRING(25),
                allowNull: false,
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

    down: async (queryInterface) => queryInterface.dropTable('medico')

};