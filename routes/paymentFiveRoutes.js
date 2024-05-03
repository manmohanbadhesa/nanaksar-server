const express = require("express");
const router = express.Router();
const paymentFiveController = require("../controllers/paymentFive-controller");


router.route("/").post(paymentFiveController.add);



module.exports = router;