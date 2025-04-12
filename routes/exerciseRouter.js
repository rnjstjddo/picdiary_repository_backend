const { isLoggedIn, isNotLoggedIn, verifyToken } = require("../middlewares");
const {
  getExerciseList,
  patchExercise,
  postExercise,
  deleteExercise,
  getExerciseEach,
  getChooseExercise,
  getExerciseAll,
} = require("../controllers/exerciseController");
const express = require("express");

const router = express.Router();

//api/exercise
router.post("/create/:dateobject", verifyToken, postExercise);
router.patch("/modify/:dateobject/:whenchoose", verifyToken, patchExercise);
router.get("/read/:dateobject", verifyToken, getExerciseAll);
router.get("/read/:dateobject/:whenchoose", verifyToken, getExerciseEach);
router.delete("/remove/:dateobject/:whenchoose", verifyToken, deleteExercise);
router.get("/:dateobject", verifyToken, getExerciseList);
router.get("/chooseexercise/:dateobject", verifyToken, getChooseExercise);

module.exports = router;
