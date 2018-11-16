import * as express from "express";

const router = express.Router();

// base_url => /

router.get("/", (req: express.Request, res: express.Response) => {
  res.json({ message: "Hello, World!" });
});

export default router;
