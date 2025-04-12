const Diet = require("../models/diet");
const Dietdetail = require("../models/dietdetail");
const Exercise = require("../models/exercise");
const Money = require("../models/money");
const Moneydetail = require("../models/moneydetail");
const Diary = require("../models/diary");
const { Op, fn, col } = require("sequelize");
const { raw } = require("mysql2");
const jwt = require("jsonwebtoken");

exports.getTodayManagementController = async (req, res, next) => {
  const dateparams = req.params;

  const date = dateparams.date;
  const newdate = new Date(date);

  const lastday = new Date(newdate.getFullYear(), newdate.getMonth() + 1, 0);

  let monthfinal =
    newdate.getMonth() + 1 < 10
      ? "0" + (newdate.getMonth() + 1)
      : newdate.getMonth() + 1;

  const monthfirst = newdate.getFullYear() + "-" + monthfinal + "-" + "01";
  const monthlast =
    newdate.getFullYear() + "-" + monthfinal + "-" + lastday.getDate();

  console.log("컨트롤러함수 mainController.js monthfirst => ", monthfirst);
  console.log("컨트롤러함수 mainController.js monthlast => ", monthlast);

  try {
    let accessToken = req.headers.authorization;
    accessToken = accessToken.replace("Bearer ", "");
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    console.log(
      "컨트롤러함수 mainController.js verifyToken() 진입 verify결과-> ",
      decoded.email
    );

    res.locals.jwtemail = decoded.email;
  } catch (e) {
    console.log(
      "컨트롤러함수 mainController.js verifyToken() 진입 verify 과정 중 에러발생-> ",
      e
    );
  }
  const { jwtemail } = res.locals;

  if (jwtemail) {
    console.log("컨트롤러함수 mainController.js jwtemail 존재할 경우진입");

    try {
      const diet = await Diet.findAll({
        where: { dateobject: date, UserId: jwtemail },
        include: {
          model: Dietdetail,
          where: { dateobject: date },
        },
      });

      console.log(
        "컨트롤러함수 getTodayManagementController() 진입 Diet findAll() ",
        diet
      );
      const money = await Money.findAll({
        where: { dateobject: date, UserId: jwtemail },
        include: {
          model: Moneydetail,
          where: { dateobject: date },
        },
      });

      console.log(
        "컨트롤러함수 getTodayManagementController() 진입 Money findAll() ",
        money
      );

      const exercise = await Exercise.findAll({
        where: { dateobject: date, UserId: jwtemail },
      });

      console.log(
        "컨트롤러함수 getTodayManagementController() 진입 Exercise findAll() ",
        exercise
      );
      const diary = await Diary.findAll({
        where: { dateobject: date, UserId: jwtemail },
      });

      console.log(
        "컨트롤러함수 getTodayManagementController() 진입 diary findAll() ",
        diary
      );

      //가계부월합계
      const moneySum = await Money.findAll({
        raw: true,
        attributes: [
          //"income",
          //"expense",
          [fn("sum", col("income")), "sumincome"],
          [fn("sum", col("expense")), "sumexpense"],
        ],
        where: {
          dateobject: {
            [Op.between]: [monthfirst, monthlast],
          },
          UserId: jwtemail,
        },
        //group: ["income", "expense"],
      });

      console.log(
        "mainController.js getTodayManagementController() Money 확인 => ",
        moneySum
      );
      return res.json({
        money,
        diet,
        diary,
        exercise,
        sum: moneySum,
      });
    } catch (err) {
      console.log(
        "컨트롤러함수 getTodayManagementController() 진입 findAll() catch() ",
        err
      );
      return res.json({ message: "failure" });
    }
  } //if 토큰 존재시
  else {
    console.log(
      "컨트롤러함수 mainController.js jwtemail 존재하지 않을경우 경우진입"
    );

    return res.json({ message: "" });
  }
};
