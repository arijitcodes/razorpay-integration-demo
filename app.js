const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));

app.use("/api/", require("./routes/helloWorld.js"));
app.use("/api/razorpay", require("./routes/razorpay.js"));

module.exports = app;
