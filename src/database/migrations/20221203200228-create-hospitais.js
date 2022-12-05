'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('hospital', {
            id_hospital: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            cnpj_hospital: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            nome_hospital: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
            },
            endereco_hospital: {
                type: Sequelize.STRING(150),
                allowNull: false,
                unique: true,
            },
            cep_hospital: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            bairro_hospital: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            cidade_hospital: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            uf_hospital: {
                type: Sequelize.STRING(2),
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

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('hospital');
    }
};