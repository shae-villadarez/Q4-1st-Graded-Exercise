const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/happy", (req, res) => {
  const formData = req.body;
  res.render("happy", { formData });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
