const express = require("express");
const foodController = require("../controllers/food.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();
const multer = require("../middlewares/food.multer.js");

const upload = multer({
  storage: multer.memoryStorage(),
});

/* POST /api/food/ [protected] */
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);

module.exports = router;
