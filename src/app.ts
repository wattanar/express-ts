import * as express from "express";
import * as compression from "compression";

const app = express();

const index = require("./routes/index");
const hello = require("./routes/hello");

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", index);
app.use("/hello", hello);

export default app;
