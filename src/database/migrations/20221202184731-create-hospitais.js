'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('hospital', {
            cnpj_hospital: {
                type: Sequelize.STRING(18),
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            nome_hospital: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            endereco_hospital: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            cep_hospital: {
                type: Sequelize.STRING(15),
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