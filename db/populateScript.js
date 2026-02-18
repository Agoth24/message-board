require("dotenv").config()
const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        message VARCHAR(255),
        name VARCHAR(255)
    );

    INSERT INTO messages (name, message) VALUES
     ('Ada Lovelace', 'Hello World'), ('Uncle Bob', 'Goodbye World :(');
`;

const main = async () => {
    console.log("seeding...")
	const client = new Client({
		connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
	});

	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("populated DB");
};

main();
