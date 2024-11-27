const express = require("express");
const {
  AdminLogin,
  checkLogin,
  changepassword,
} = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", AdminLogin);
router.post("/checklogin", authenticateToken, checkLogin);
router.post("/changepassword", authenticateToken, changepassword);

module.exports = router;
