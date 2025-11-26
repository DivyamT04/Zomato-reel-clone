const express = require("express");
const authController = require("../controllers/auth.controller.js");

const router = express.Router();

// User Auth APIS
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);

// Food Partner APIS
router.post("/food-partner/register", authController.registerfoodPartner);
router.post("/food-partner/login", authController.loginfoodPartner);
router.get("/food-partner/logout", authController.logoutfoodPartner);

module.exports = router;
