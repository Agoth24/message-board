const express = require("express");
const path = require("node:path")
const app = express();
const PORT = 3000;

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

app.use("/", (req, res) => {
    res.render("index");
})


app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`We're up and running on port ${PORT}\nProcess: ${process.pid}`);
})
