import mysql2 from 'mysql2';

export const db = mysql2.createPool({
    connectionLimit: 10,
    host:"localhost",
    user:"root",
    password: "Lima12345678",
    database: "arpamed"
});