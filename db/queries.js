const pool = require("./pool")

const getAllMessages = async () => {
    const {rows} = await pool.query("SELECT * FROM messages")
    return rows;
}

const postMessage = async ({message, name}) => {
    await pool.query("INSERT INTO messages (message, name) VALUES ($1, $2)", [message, name])
}

module.exports = {
    getAllMessages,
    postMessage,
}