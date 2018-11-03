import express = require("express");
import compression = require("compression");
import * as hello from "./hello";

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", hello.index);

export default app;
