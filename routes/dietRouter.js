const { isLoggedIn, isNotLoggedIn, verifyToken } = require("../middlewares");

const {
  getDietList,
  patchDiet,
  postDiet,
  deleteDiet,
  getDiet,
  getChooseDiet,
  getDietAll,
} = require("../controllers/dietController");
const express = require("express");

const router = express.Router();

//api/diet
router.post("/create", verifyToken, postDiet);
router.patch("/modify/:choose/:dateobject", verifyToken, patchDiet);
router.get("/read/:choose/:dateobject", verifyToken, getDiet);
router.get("/readall/:dateobject", verifyToken, getDietAll);
router.delete("/remove/:choose/:dateobject", verifyToken, deleteDiet);
router.get("/:dateobject", verifyToken, getDietList);
router.get("/choosediet/:dateobject", verifyToken, getChooseDiet);

module.exports = router;
