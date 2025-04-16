const { isLoggedIn, isNotLoggedIn, verifyToken } = require("../middlewares");
const {
  getDiaryList,
  patchDiary,
  getDiary,
  postDiary,
  deleteDiary,
} = require("../controllers/diaryController");
const express = require("express");
const multer = require("multer");
const router = express.Router();

//이부분 aws사용시 주석처리
const fs = require("fs");
const path = require("path");

try {
  fs.readdirSync("uploads");
} catch (e) {
  fs.mkdirSync("uploads");
}

//AWS S3
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID, //ACCESS_KEY_ID SECRET_ACCESS_KEY
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});
const multerS3 = require("multer-s3");

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "picdiary-bucket",
    key: function (req, file, cb) {
      cb(null, `${Date.now()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

//api/diary //isLoggedIn
router.post("/create", verifyToken, upload.single("picture"), postDiary);
router.get("/:dateobject", verifyToken, getDiaryList);
router.get("/read/:id", verifyToken, getDiary);
router.patch("/modify/:id", verifyToken, upload.single("picture"), patchDiary);
router.delete("/remove/:id", verifyToken, deleteDiary);

module.exports = router;
