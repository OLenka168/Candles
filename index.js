const express = require("express");
const cors = require("cors");
const routes = require('./CandleRoutes')

const products = require("./products");

const app = express();

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Welcome to our shop...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 4000;

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

app.listen(port, console.log(`Server is running on port ${port}`));
