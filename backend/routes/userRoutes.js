const express = require("express");
const {
  updateaccountinformation,
  showAccountInformation,
  allusers,
<<<<<<< HEAD
  addUser,
  edituser,
=======
  edituser
>>>>>>> c73989933118df8841a8ead3579468465d1f1064
} = require("../controllers/userController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.put(
  "/updateaccountinformation",
  authenticateToken,
  updateaccountinformation
);
router.post("/addusers", authenticateToken, addUser);
router.get(
  "/showAccountInformation",
  authenticateToken,
  showAccountInformation
);
<<<<<<< HEAD
router.get("/allusers", authenticateToken, allusers);
router.post("/edituser", authenticateToken, edituser);
=======
router.get("/allusers",authenticateToken ,allusers);
router.post("/edituser",authenticateToken, edituser);
>>>>>>> c73989933118df8841a8ead3579468465d1f1064
module.exports = router;
