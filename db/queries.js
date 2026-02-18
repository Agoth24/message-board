const pool = require("./pool")

const getAllMessages = async () => {
    const {rows} = await pool.query("SELECT * FROM messages")
    return rows;
}


module.exports = {
    getAllMessages,
}