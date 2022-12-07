'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('consulta', {
            id: {
                type: Sequelize.BIGINT.UNSIGNED,
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
            fk_nome_paciente: {
                type: Sequelize.STRING(120),
                allowNull: false,
                references: {
                    model: 'paciente',
                    key: 'nome_paciente'
                }
            },
            especialidade: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            fk_nome_hospital: {
                type: Sequelize.STRING(30),
                allowNull: false,
                references: {
                    model: 'hospital',
                    key: 'nome_hospital'
                }
            },
            dia_consulta: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            hora_consulta: {
                type: Sequelize.TIME,
                allowNull: false,
            },
            diagnostico: {
                type: Sequelize.TEXT,
            },
            medicamento: {
                type: Sequelize.TEXT,
            },
            exame: {
                type: Sequelize.STRING(100),
            },
            observacao: {
                type: Sequelize.TEXT,
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

    down: async (queryInterface) => queryInterface.dropTable('consulta')
};