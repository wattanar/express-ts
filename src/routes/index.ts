import * as express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.render("page", { page: "index", title: "Hello, World!" });
});

export default router;
