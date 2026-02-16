const express = require("express");
const path = require("node:path")
const app = express();
const PORT = 3000;

const messages = [
    {
        text: "Hello there!",
        user: "user1",
        added: new Date(),
    },
    {
        text: "Hey world!",
        user: "user2",
        added: new Date(),
    }
]

const navLinks = [
    {href: "/", text: "Home"},
    {href: "new", text: "New Message"},
]

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))

app.get("/new", (req, res) => {
    res.render("form", {links: navLinks})
})

app.post("/new", (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    messages.push({text: message, user: name, added: new Date()})
    res.redirect("/")
})

app.use("/", (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages: messages, links: navLinks});
})





app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`We're up and running on port ${PORT}\nProcess: ${process.pid}`);
})
