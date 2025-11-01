const express = require("express");
const authController = require("../controllers/auth.controller.js");

const router = express.Router();

// User Auth APIS
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);

// Food Partner APIS
router.post("/foodpartner/register", authController.registerfoodPartner);
router.post("/foodpartner/login", authController.loginfoodPartner);
router.get("/foodpartner/logout", authController.logoutfoodPartner);

module.exports = router;
