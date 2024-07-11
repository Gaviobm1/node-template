const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Site running");
});

module.exports = router;
