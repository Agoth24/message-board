const db = require("../db/queries")


const getAllMessages = async () => {
    return await db.getAllMessages();
}

const postMessage = async ({message, name}) => {
    await db.postMessage({message, name});
}


module.exports = {
    getAllMessages,
    postMessage,
}