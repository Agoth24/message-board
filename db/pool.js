require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});
