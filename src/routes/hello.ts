import * as express from "express";

const router = express.Router();

router.get("/:name", (req: express.Request, res: express.Response) => {
  res.json({ message: "Hello, " + req.params.name });
});

export default router;
