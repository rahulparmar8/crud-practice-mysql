const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const web = require("./src/routes/web");
const fileURLToPath = require("url");
var userController = require("./src/controllers/user");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// Database connection
require("./src/models/index");

const app = express();

const port = 3004;

//set Template Enging
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", web);
// app.get("/add", userController.addUser);

app.listen(port, () => {
  console.log("Server is runing...3004");
});
