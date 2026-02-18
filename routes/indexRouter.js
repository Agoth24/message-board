const { Router } = require("express");
const messageController = require("../controllers/messageController");

const indexRouter = Router();

const navLinks = [
	{ href: "/", text: "Home" },
	{ href: "new", text: "New Message" },
];

// for getting the new message page
indexRouter.get("/new", (req, res) => {
	res.render("form", { links: navLinks });
});

// for submitting a message
indexRouter.post("/new", async (req, res) => {
	const { name, message } = req.body;
	if (!name || !message) {
		res.status(500).send("Invalid form inputs");
		return;
	}
	await messageController.postMessage({ message: message, name: name });
	res.redirect("/");
});

indexRouter.use("/", async (req, res) => {
	const messages = await messageController.getAllMessages();
	res.render("index", {
		title: "Mini Messageboard",
		messages: messages,
		links: navLinks,
	});
});

module.exports = indexRouter ;
