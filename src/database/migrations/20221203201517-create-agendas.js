'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('agenda', {
            id_agenda: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            fk_nome_medico: {
                type: Sequelize.STRING(120),
                allowNull: false,
                references: {
                    model: 'medico',
                    key: 'nome_medico'
                }
            },
            fk_especialidade: {
                type: Sequelize.STRING(30),
                allowNull: false,
                references: {
                    model: 'especialidade',
                    key: 'especialidade_medica'
                }
            },
            fk_nome_hospital: {
                type: Sequelize.STRING(30),
                allowNull: false,
                references: {
                    model: 'hospital',
                    key: 'nome_hospital'
                }
            },
            fk_endereco_hospital: {
                type: Sequelize.STRING(150),
                allowNull: false,
                references: {
                    model: 'hospital',
                    key: 'endereco_hospital'
                }
            },
            dia_semana_agenda: {
                type: Sequelize.STRING(13),
                allowNull: false,
            },
            inicio_expediente_agenda: {
                type: Sequelize.TIME,
                allowNull: false,
            },
            fim_expediente_agenda: {
                type: Sequelize.TIME,
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
        return queryInterface.dropTable('agenda');
    }
};