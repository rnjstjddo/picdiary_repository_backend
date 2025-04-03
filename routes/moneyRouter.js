const { isLoggedIn, isNotLoggedIn, verifyToken } = require("../middlewares");
const {
  postMoney,
  patchMoney,
  getMoneyAll,
  getMoneyEach,
  deleteMoney,
  getChooseMoney,
  getMoneyList,
  getChoosecheck,
} = require("../controllers/moneyController");
const express = require("express");

const router = express.Router();

//api/money
router.post("/create/:dateobject", verifyToken, postMoney);
router.patch("/modify/:dateobject", verifyToken, patchMoney);
router.get("/read/:dateobject", verifyToken, getMoneyAll);
//router.get("/read/:dateobject/:whenchoose", verifyToken, getMoneyEach);
router.delete("/remove/:dateobject/:bigchoose", verifyToken, deleteMoney);
router.get("/:dateobject", verifyToken, getMoneyList);
router.get("/choosemoney/:dateobject/:choose", verifyToken, getChooseMoney);
router.get("/choosecheck/:dateobject", verifyToken, getChoosecheck);

module.exports = router;
