const User = require("../models/user");
const Exercise = require("../models/exercise");
const { Op } = require("sequelize");

//getExerciseList patchExercise postExercise deleteExercise getExercise

//운동 컨트롤러 함수
exports.getExerciseList = async (req, res, next) => {
  const dateobject = req.params;
  console.log("exerciseController.js getDietList() 경로값확인 ", dateobject);
  const newdate = new Date(dateobject.dateobject);

  const lastday = new Date(newdate.getFullYear(), newdate.getMonth() + 1, 0);
  console.log("exerciseController.js getDietList() lastday ", lastday);

  let monthfinal =
    newdate.getMonth() + 1 < 10
      ? "0" + (newdate.getMonth() + 1)
      : newdate.getMonth() + 1;
  console.log("exerciseController.js getDietList() monthfinal ", monthfinal);

  const monthfirst = newdate.getFullYear() + "-" + monthfinal + "-" + "01";
  const monthlast =
    newdate.getFullYear() + "-" + monthfinal + "-" + lastday.getDate();

  console.log("exerciseController.js monthfirst => ", monthfirst);
  console.log("exerciseController.js monthlast => ", monthlast);

  const { jwtemail } = res.locals;

  try {
    const exercise = await Exercise.findAll({
      where: {
        dateobject: { [Op.between]: [monthfirst, monthlast] },
        UserId: jwtemail,
      },
    });
    if (exercise.length === 0) {
      return res.json({ error: "작성한 운동이 없습니다." });
    }
    console.log("exerciseController.js getExerciseList() findAll() ", exercise);
    return res.json(exercise);
  } catch (err) {
    console.log(
      "exerciseController.js getExerciseList() findAll() catch() ",
      err
    );
    return res.status(500).send(err);
  }
};

//운동수정
exports.patchExercise = (req, res, next) => {
  const { dateobject, whenchoose } = req.params;
  console.log(
    "exerciseController.js patchExercise () dateobject -> ",
    dateobject
  );
  console.log(
    "exerciseController.js patchExercise () whenchoose -> ",
    whenchoose
  );
  //exercise컴포넌트 minute, choose, content, whenchoose

  const { minute, choose, content } = req.body;
  console.log("exerciseController.js patchExercise () content -> ", content);
  console.log(
    "exerciseController.js patchExercise () req.body minute -> ",
    minute
  );
  console.log(
    "exerciseController.js patchExercise () req.body choose -> ",
    choose
  );

  const { jwtemail } = res.locals;

  Exercise.update(
    { content, choose, minute },

    { where: { UserId: jwtemail, dateobject, whenchoose } }
  )
    .then((result) => {
      console.log(
        "exerciseController.js patchExercise Exercise update() 결과 -> ",
        result.dataValues
      );
      return res.json({ result: "success" });
    })
    .catch((err) => {
      console.log("exerciseController.js patchExercise update() 결과 -> ", err);
      return res.json({ error: "운동 수정시 에러발생" });
    });
};

//운동 작성
exports.postExercise = (req, res, next) => {
  const { minute, choose, content, whenchoose } = req.body;
  //exercise컴포넌트 minute, choose, content, whenchoose
  const { dateobject } = req.params;
  const { jwtemail } = res.locals;
  console.log(
    "컨트롤러함수 exerciseController.js postExercise() minute-> ",
    minute
  );

  console.log(
    "컨트롤러함수 exerciseController.js postExercise() choose-> ",
    choose
  );

  console.log(
    "컨트롤러함수 exerciseController.js postExercise() content-> ",
    content
  );
  console.log(
    "컨트롤러함수 exerciseController.js postExercise() whenchoose-> ",
    whenchoose
  );

  Exercise.create({
    content,
    dateobject,
    UserId: jwtemail,
    choose,
    whenchoose,
    minute,
  })
    .then((result) => {
      let id = result.dataValues.id;
      console.log(
        "exerciseController.js postExercise create() 결과 Exercise 모델 id-> ",
        id
      );

      if (id === null) {
        return res.json({ error: "운동등록 중 에러 발생" });
      }
      return res.json({ result: id });
    })
    .catch((err) => {
      console.log(
        "exerciseController.js postExercise create() 실패 Exercise 모델 -> ",
        err
      );
      return res.json({ error: "운동등록 중 에러 발생" });
    });
};

//삭제
exports.deleteExercise = (req, res, next) => {
  const { dateobject, whenchoose } = req.params;
  console.log(
    "exerciseController.js deleteExercise() dateobject -> ",
    dateobject
  );
  console.log(
    "exerciseController.js deleteExercise() whenchoose -> ",
    whenchoose
  );
  const { jwtemail } = res.locals;
  Exercise.destroy({ where: { whenchoose, dateobject, UserId: jwtemail } })
    .then((result) => {
      console.log(
        "exerciseController.js deleteExercise() Exercisedetail destory 결과 -> ",
        result
      );
      return res.json({ result: "success" });
    })
    .catch((err) => {
      console.log(
        "exerciseController.js deleteExercise() destory 삭제 에러",
        err
      );
      return res.json({ error: "해당일자의 운동을 삭제하지 못했습니다." });
    });
};

//조회일자전체
exports.getExerciseAll = async (req, res, next) => {
  const { dateobject } = req.params;
  const { jwtemail } = res.locals;
  console.log(
    "exerciseController.js getExercise 경로값 dateobject=> ",
    dateobject
  );
  console.log("exerciseController.js getExercise res.locals => ", jwtemail);

  try {
    const result = await Exercise.findAll({
      where: { dateobject: dateobject, UserId: jwtemail },
    });

    console.log("exerciseController.js getExercise findAll() ", result);

    return res.json(result);
  } catch (err) {
    console.log("exerciseController.js getExercise findOne() 에러", err);
    return res.json({ error: "해당일자의 운동을 가져오지 못했습니다." });
  }
};

//조회일자 시간별
exports.getExerciseEach = async (req, res, next) => {
  const { dateobject, whenchoose } = req.params;
  const { jwtemail } = res.locals;
  console.log(
    "exerciseController.js getExerciseEach 경로값 dateobject=> ",
    dateobject
  );
  console.log("exerciseController.js getExerciseEach res.locals => ", jwtemail);

  try {
    const result = await Exercise.findOne({
      where: { dateobject: dateobject, UserId: jwtemail, whenchoose },
    });

    console.log("exerciseController.js getExerciseEach findAll() ", result);

    return res.json(result);
  } catch (err) {
    console.log("exerciseController.js getExerciseEach findOne() 에러", err);
    return res.json({ error: "해당일자의 운동을 가져오지 못했습니다." });
  }
};
//getChooseDiet
exports.getChooseExercise = async (req, res) => {
  const { dateobject } = req.params;
  console.log(
    "exerciseController.js getChooseExercise req.params-> ",
    dateobject
  );
  const accessToken = req.cookies;

  const { jwtemail } = res.locals;

  console.log(
    "exerciseController.js getChooseExercise 엑세스토큰 확인 app.locals-> ",
    jwtemail
  );
  try {
    const getChoose = await Exercise.findAll({
      where: { dateobject: dateobject, UserId: jwtemail },
    });

    console.log(
      "exerciseController.js getChooseExercise findAll() -> ",
      getChoose
    );

    let result = [];
    if (getChoose.size !== 0) {
      for (let c of getChoose) {
        result.push(c.whenchoose);
      }
      console.log(
        "exerciseController.js getChooseExercise findAll() choose 컬럼만-> ",
        result
      );

      return res.json({ result: result });
    } else {
      return res.status(200).end();
    }
  } catch (err) {
    console.log("dietController.js getChooseDiet findAll() catch() -> ", err);
    return res.json({ error: "식단 시간 가져오기 에러" });
  }
};
