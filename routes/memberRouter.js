const { isLoggedIn, isNotLoggedIn, verifyToken } = require("../middlewares");
const {
  login,
  join,
  logout,
  forSession,
  getNewAccessToken,
} = require("../controllers/memberController");
const express = require("express");

const router = express.Router();

//api/member/xxx
router.post("/forSession", verifyToken, forSession);

router.post("/login", login);
router.post("/join", join);
router.get("/logout", verifyToken, logout);
router.get("/refreshToken", getNewAccessToken);

module.exports = router;
