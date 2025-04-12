const User = require("../models/user");
const Diary = require("../models/diary");
//getDiaryList  patchDiary postDiary deleteDiary
const { Op } = require("sequelize");
const AWS = require("aws-sdk");
const fs = require("fs");
const s3 = new AWS.S3();

//다이어리 컨트롤러 함수
exports.getDiaryList = async (req, res, next) => {
  const dateobject = req.params;
  console.log("diaryController.js getDietList() 경로값확인 ", dateobject);
  const newdate = new Date(dateobject.dateobject);

  const lastday = new Date(newdate.getFullYear(), newdate.getMonth() + 1, 0);
  console.log("diaryController.js getDietList() lastday ", lastday);

  let monthfinal =
    newdate.getMonth() + 1 < 10
      ? "0" + (newdate.getMonth() + 1)
      : newdate.getMonth() + 1;
  console.log("diaryController.js getDietList() monthfinal ", monthfinal);

  const monthfirst = newdate.getFullYear() + "-" + monthfinal + "-" + "01";
  const monthlast =
    newdate.getFullYear() + "-" + monthfinal + "-" + lastday.getDate();

  console.log("diaryController.js monthfirst => ", monthfirst);
  console.log("diaryController.js monthlast => ", monthlast);
  const { jwtemail } = res.locals;
  try {
    const diary = await Diary.findAll({
      where: {
        dateobject: { [Op.between]: [monthfirst, monthlast] },
        UserId: jwtemail,
      },
    });
    if (diary.size === 0) {
      res.json({ error: "작성한 다이어리가 없습니다." });
    }
    console.log("diaryController.js getDiaryList() findAll() ", diary);
    return res.json(diary);
  } catch (err) {
    console.log("diaryController.js getDiaryList() findAll() catch() ", err);
  }
};

exports.patchDiary = async (req, res, next) => {
  const { content } = req.body;
  console.log(
    "컨트롤러함수 diaryController.js postDiary() content -> ",
    content
  );
  console.log(
    "컨트롤러함수 diaryController.js postDiary() req.file?.filename-> ",
    req.file?.filename
  );
  const { id } = req.params;

  console.log("컨트롤러함수 diaryController.js postDiary() id 경로값 -> ", id);
  try {
    const diaryFind = await Diary.findOne({ where: { id: id } });
    console.log("diaryController.js patchDiary findOne() 결과 -> ", diaryFind);

    if (
      diaryFind.dataValues.picture !== "" &&
      req.file.filename !== diaryFind.dataValues.picture
    ) {
      console.log(
        "diaryController.js patchDiary 새로운 사진을 올렸을경우 이전 사진 uploads폴더에서 삭제"
      );

      //uploads에서 삭제
      // fs.unlinkSync("./uploads/" + diaryFind.dataValues.picture);

      s3.deleteObject(
        {
          Bucket: "picdiary-bucket", // 삭제하고 싶은 이미지가 있는 버킷 이름 ap-northeast-2
          Key: findFilename.dataValues.path, // 삭제하고 싶은 이미지의 key
        },
        (err, data) => {
          if (err) console.log("diaryController.js s3삭제 실패");
          // 실패 시 에러 메시지
          else console.log("diaryController.js s3삭제 성공", data); // 성공 시 데이터 출력
        }
      );
    }

    const diary = await Diary.update(
      { content: content, picture: req.file?.filename, path: req.file?.path },
      { where: { id: id } }
    );
    console.log("diaryController.js patchDiary update() 결과 -> ", diary);
    return res.json({ result: "success" });
  } catch (err) {
    console.log("diaryController.js patchDiary update() 결과 -> ", err);
    return res.json({ error: "다이어리 수정시 에러발생" });
  }
};

//다이어리 작성
exports.postDiary = async (req, res, next) => {
  const { content, dateobject, email } = req.body;
  console.log(
    "컨트롤러함수 diaryController.js postDiary() req.body -> ",
    req.body
  );
  if (req.file) {
    console.log(
      "컨트롤러함수 diaryController.js postDiary() req.file 존재하는 경우 출력-> ",
      req.file
    );
  }
  try {
    const diary = await Diary.create({
      content,
      picture: req.file?.filename,
      dateobject,
      UserId: email,
      path: req.file?.path,
    });
    // diary.UserId(email);
    console.log("diaryController.js postDiary create() 결과 -> ", diary); //diary.dataValues.picture
    return res.json({
      result: "success",
      id: diary.id,
      image: req.file?.filename ? "true" : "true",
    });
  } catch (err) {
    console.log("diaryController.js postDiary create() 실패 -> ", err);
    return res.json({ error: "다이어리 등록중 에러 발생" });
  }
};

//삭제
exports.deleteDiary = async (req, res, next) => {
  const { id } = req.params;
  console.log("diaryController.js postDiary deleteDiary() id -> ", id);

  try {
    const findFilename = await Diary.findOne({ where: { id: id } });
    console.log(
      "diaryController.js postDiary deleteDiary() findOne() 결과 -> ",
      findFilename
    );

    if (findFilename.dataValues.picture !== "") {
      //uploads 폴더에서 삭제
      fs.unlinkSync("./uploads/" + findFilename.dataValues.path);

      // s3.deleteObject({
      //   Bucket: 'picdiary-bucket', // 삭제하고 싶은 이미지가 있는 버킷 이름 ap-northeast-2
      //   Key: findFilename.dataValues.picture, // 삭제하고 싶은 이미지의 key
      // }, (err, data) => {
      //      if (err) console.log("diaryController.js s3삭제 실패"); // 실패 시 에러 메시지
      //      else console.log("diaryController.js s3삭제 성공",data); // 성공 시 데이터 출력
      // });
    }
    const result = await Diary.destroy({ where: { id: id } });
    console.log(
      "diaryController.js postDiary deleteDiary() destory() 결과 -> ",
      result
    );

    return res.json({ result: "success" });
  } catch (err) {
    console.log("diaryController.js deleteDiary destory() 삭제 에러", err);
    return res.json({ error: "다이어리 삭제하지 못했습니다." });
  }
};
//조회
exports.getDiary = async (req, res, next) => {
  const { id } = req.params;

  console.log("diaryController.js getDiary 경로값 => ", id);
  try {
    const result = await Diary.findOne({ where: { id: id } });
    console.log("diaryController.js getDiary findOne() ", result);

    return res.json(result);
  } catch (err) {
    console.log("diaryController.js getDiary findOne() 에러", err);
    return res.json({ error: "해당 일자의 다이어리를 가져오지 못했습니다." });
  }
};
