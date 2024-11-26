const express = require("express");
const { AdminLogin, checkLogin } = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", AdminLogin);
router.post("/checklogin", authenticateToken, checkLogin);

module.exports = router;
