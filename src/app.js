require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

const database = require("./database/mongooseConnect");

const adocaoRoutes = require("./routes/adocaoRoutes")

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.use("/adocao", adocaoRoutes)

database.connect();

module.exports = app