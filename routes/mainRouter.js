const { isLoggedIn, isNotLoggedIn, verifyToken } = require("../middlewares");
const {
  getTodayManagementController,
} = require("../controllers/mainController");
const express = require("express");
const router = express.Router();

//router.post("/create", verifyToken, chatAdd);
//router.post("/:chatroomname", verifyToken, chatGetPost);
router.get("/:date", getTodayManagementController);

//router.delete("/remove/:chatroomname", verifyToken, chatDelete);

module.exports = router;
