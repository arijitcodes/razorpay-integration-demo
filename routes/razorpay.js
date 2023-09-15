const router = require("express").Router();

router.get("/generateOrder", (req, res) => {
  res.status(200);
});

module.exports = router;
