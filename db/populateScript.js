require("dotenv").config();
const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        message VARCHAR(255),
        name VARCHAR(255),
        date TIMESTAMPTZ DEFAULT NOW()
    );

    INSERT INTO messages (name, message, date) VALUES
     ('Ada Lovelace', 'Hello World', DEFAULT), ('Uncle Bob', 'Goodbye World :(', DEFAULT);
`;

const main = async () => {
	console.log("seeding...");
	const client = new Client({
		connectionString:
			process.env.DATABASE_URL ||
			`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
		ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
	});

	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("populated DB");
};

main();
