// create server
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

let authRoutes;
let foodRoutes;
let foodPartnerRoutes;
try {
  authRoutes = require("./routes/auth.routes.js");
} catch (err) {
  console.error("Failed to load auth routes:", err);
  authRoutes = null;
}

try {
  foodRoutes = require("./routes/food.routes.js");
} catch (err) {
  console.error("Failed to load food routes:", err);
  foodRoutes = null;
}

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

if (
  authRoutes &&
  (typeof authRoutes === "function" ||
    (typeof authRoutes === "object" && (authRoutes.handle || authRoutes.stack)))
) {
  app.use("/api/auth", authRoutes);
} else {
  console.error(
    "Auth routes not mounted: exported value is not a valid express router or middleware."
  );
}

if (
  foodRoutes &&
  (typeof foodRoutes === "function" ||
    (typeof foodRoutes === "object" && (foodRoutes.handle || foodRoutes.stack)))
) {
  app.use("/api/food", foodRoutes);
} else {
  console.error(
    "Food routes not mounted: exported value is not a valid express router or middleware."
  );
}

try {
  foodPartnerRoutes = require("./routes/food-partner.routes.js");
} catch (err) {
  console.error("Failed to load food partner routes:", err);
  foodPartnerRoutes = null;
}

if (
  foodPartnerRoutes &&
  (typeof foodPartnerRoutes === "function" ||
    (typeof foodPartnerRoutes === "object" &&
      (foodPartnerRoutes.handle || foodPartnerRoutes.stack)))
) {
  app.use("/api/food-partner", foodPartnerRoutes);
} else {
  console.error(
    "Food partner routes not mounted: exported value is not a valid express router or middleware."
  );
}

module.exports = app;
