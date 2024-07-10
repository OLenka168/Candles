const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./CandleRoutes')

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", false);

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(routes);
});


mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

app.use(routes);

app.listen(port, console.log(`Server is running on port ${port}`));
