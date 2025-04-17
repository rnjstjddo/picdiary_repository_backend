const { isLoggedIn, isNotLoggedIn, verifyToken } = require("../middlewares");
const {
  getTodayManagementController,
  openapiController,
} = require("../controllers/mainController");
const express = require("express");
const router = express.Router();

//router.post("/create", verifyToken, chatAdd);
//router.post("/:chatroomname", verifyToken, chatGetPost);

//날짜선택시 해당 날짜의 탭에 해당하는 데이터를 들고오기
router.get("/:date", getTodayManagementController);

//oepnapi
router.post("/openapi", openapiController);
//router.delete("/remove/:chatroomname", verifyToken, chatDelete);

module.exports = router;
