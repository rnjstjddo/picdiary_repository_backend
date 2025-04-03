const { isLoggedIn, isNotLoggedIn, verifyToken } = require("../middlewares");
const {
  chatList,
  // chatGetPost,
  // chatAdd,
} = require("../controllers/chatController");
const express = require("express");
const router = express.Router();

// router.post("/create", verifyToken, chatAdd);
// router.post("/:chatroomname", verifyToken, chatGetPost);
// router.get("/list", verifyToken, chatList);

//router.delete("/remove/:chatroomname", verifyToken, chatDelete);

module.exports = router;
