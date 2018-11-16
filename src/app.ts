import * as express from "express";
import * as compression from "compression";
import * as helmet from "helmet";
import * as path from "path";
// routes
import index from "./routes/index";
import hello from "./routes/hello";

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));

app.use("/", index);
app.use("/hello", hello);

export default app;
