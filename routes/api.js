// Express app
const express = require("express");
const router = express.Router();

// Controller modules
const constantsController = require("../controllers/constantsController");

router.get("/", (req, res) => {
  res.json([{ title: "API" }]);
});

router.get("/constants", constantsController.constantList);

router.post("/constants", constantsController.createConstant);

module.exports = router;
