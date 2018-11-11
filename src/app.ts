const express = require("express");
const compression = require("compression");

const app = express();

const hello = require("./hello");

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", hello);

export default app;
