import * as express from "express";

const router = express.Router();

// base_url => /hello

router.get("/:name", (req: express.Request, res: express.Response) => {
  res.json({ message: "Hello, " + req.params.name });
});

module.exports = router;
