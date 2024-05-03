const express = require("express");
const router = express.Router();
const paymentTenController = require("../controllers/paymentTen-controller");

router.route("/").post(paymentTenController.add);



module.exports = router;