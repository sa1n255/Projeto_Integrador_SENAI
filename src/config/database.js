require('dotenv').config();

module.exports = {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'updated_at'
    },
    timezone: '-03:00' // Escreve na DB na timezone de Brasília/ SãoPaulo
}