const express = require("express");
const {
  updateaccountinformation,
  showAccountInformation,
  allusers,
} = require("../controllers/userController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.put(
  "/updateaccountinformation",
  authenticateToken,
  updateaccountinformation
);
router.get(
  "/showAccountInformation",
  authenticateToken,
  showAccountInformation
);
router.get("/allusers", allusers);
module.exports = router;
