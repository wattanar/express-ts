const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./app/hello'));

export default app;
