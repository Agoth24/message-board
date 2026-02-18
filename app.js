const express = require("express");
const path = require("node:path");
const app = express();
const PORT = process.env.DB_PORT || 3000;
const indexRouter = require("./routes/indexRouter");

// const messages = [
//     {
//         text: "Hello world!",
//         user: "Ada Lovelace",
//         added: new Date(),
//     },
//     {
//         text: "Goodbye world.",
//         user: "Uncle Bob",
//         added: new Date(),
//     }
// ]

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => {
	console.log(
		`We're up and running on port ${PORT}\nProcess: ${process.pid}`,
	);
});

app.on("error", () => {
	console.error(err);
	process.exit(1);
});
