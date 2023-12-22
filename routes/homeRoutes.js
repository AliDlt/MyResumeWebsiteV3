const { Router } = require("express");
const mainController = require("../controllers/mainController");
const router = new Router();

//  @desc   Home Page
//  @route  GET /
router.get("/", mainController.homepage);

module.exports = router;
