'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('especialidade', {
            id_especialidade: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            especialidade_medica: {
                type: Sequelize.STRING(30),
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
        return queryInterface.dropTable('especialidade');
    }
};