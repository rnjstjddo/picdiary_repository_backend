const User = require("../models/user");
const Diary = require("../models/diary");
//getDiaryList  patchDiary postDiary deleteDiary
const { Op } = require("sequelize");

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
    const diary = await Diary.update(
      { content: content, picture: req.file?.filename },
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
  console.log(
    "컨트롤러함수 diaryController.js postDiary() req.file?.filename-> ",
    req.file?.filename
  );

  try {
    const diary = await Diary.create({
      content,
      picture: req.file?.filename,
      dateobject,
      UserId: email,
    });
    // diary.UserId(email);
    console.log("diaryController.js postDiary create() 결과 -> ", diary);
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
