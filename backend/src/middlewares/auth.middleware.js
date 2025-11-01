const foodPartnerModel = require("../models/foodpartner.model.js");
const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(re, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Please login first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const foodPartner = await foodPartnerModel.findById(decoded.id);

    re.foodPartner = foodPartner;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token, please login again",
    });
  }
}

module.exports = { authFoodPartnerMiddleware };
