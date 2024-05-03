const express = require("express");
const router = express.Router();
const contributorsController = require("../controllers/contributors-controller");


router.route("/").get(contributorsController.index);



module.exports = router;