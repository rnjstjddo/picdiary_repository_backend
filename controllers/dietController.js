const User = require("../models/user");
const Diet = require("../models/diet");
const Dietdetail = require("../models/dietdetail");
const { Op } = require("sequelize");

//getDietList patchDiet postDiet deleteDiet getDiet

//식단 컨트롤러 함수
exports.getDietList = async (req, res, next) => {
  const dateobject = req.params;
  console.log("dietController.js getDietList() 경로값확인 ", dateobject);
  const newdate = new Date(dateobject.dateobject);

  const lastday = new Date(newdate.getFullYear(), newdate.getMonth() + 1, 0);
  console.log("dietController.js getDietList() lastday ", lastday);

  let monthfinal =
    newdate.getMonth() + 1 < 10
      ? "0" + (newdate.getMonth() + 1)
      : newdate.getMonth() + 1;
  console.log("dietController.js getDietList() monthfinal ", monthfinal);

  const monthfirst = newdate.getFullYear() + "-" + monthfinal + "-" + "01";
  const monthlast =
    newdate.getFullYear() + "-" + monthfinal + "-" + lastday.getDate();

  console.log("dietController.js monthfirst => ", monthfirst);
  console.log("dietController.js monthlast => ", monthlast);

  const { jwtemail } = res.locals;
  console.log("dietController.js jwtemail => ", jwtemail);

  try {
    const diet = await Diet.findAll({
      where: {
        dateobject: { [Op.between]: [monthfirst, monthlast] },
        UserId: jwtemail,
      },
      // include: [
      //   {
      //     model: Dietdetail,
      //   },
      // ],
    });
    if (diet.size === 0) {
      return res.json({ error: "작성한 식단이 없습니다." });
    }
    console.log("dietController.js getDietList() findAll() ", diet);
    return res.json(diet);
  } catch (err) {
    console.log("dietController.js getDietList() findAll() catch() ", err);
    return res.status(500).send(err);
  }
};

exports.patchDiet = (req, res, next) => {
  const { dateobject, choose } = req.params;
  console.log("dietController.js patchDiet()  choose -> ", choose);
  console.log("dietController.js patchDiet () dateobject -> ", dateobject);
  //수정리액트상태 quantity choose content dateobject email compound배열

  const finalObjectArray = req.body.finalObjectArray;
  //const dietModifyParam  = req.body.dietModifyParam;

  console.log(
    "dietController.js patchDiet () finalObjectArray -> ",
    finalObjectArray
  );
  // console.log(
  //   "dietController.js patchDiet () dietModifyParam -> ",
  //   dietModifyParam
  // );

  const { jwtemail } = res.locals;

  try {
    Diet.findAll({ where: { UserId: jwtemail, choose, dateobject } })
      .then((result) => {
        if (result[0].dataValues.id > 0) {
          //결과가 배열개수1개일떄
          //Dietdetail quantity choose content dateobject email 5개

          const DietId = result[0].dataValues.id;
          console.log("Diet.findAll() 결과 식단 id => ", DietId);
          Dietdetail.destroy({
            where: { choose, dateobject, email: jwtemail, DietId },
          }).then((result) => {
            console.log("patchDiet 수정전 먼저 Dietdetail 삭제성공,", result);
          });

          finalObjectArray.forEach((v) =>
            Dietdetail.create({
              content: v.content,
              quantity: v.quantity,
              choose,
              dateobject,
              email: jwtemail,
              DietId,
            }).then((result) => {
              console.log(
                "dietController.js patchDiet Dietdetail create() 결과 -> ",
                result
              );
              return res.json({ result: "success" });
            })
          );
        }
      })
      .catch((err) => {
        console.log("dietController.js patchDiet update() 결과 -> ", err);
        return res.json({ error: "식단 수정시 에러발생" });
      });
  } catch (err) {
    console.log("dietController.js patchDiet update() 결과 -> ", err);
    return res.json({ error: "식단 수정시 에러발생" });
  }
};

//식단 작성
exports.postDiet = (req, res, next) => {
  //  const { content, dateobject, choose, quantity, email } = req.body;

  const { dietParam, finalObjectArray } = req.body;
  console.log(
    "컨트롤러함수 dietController.js postDiet() dietParam-> ",
    dietParam
  );

  console.log(
    "컨트롤러함수 dietController.js postDiet() dietDetailParam-> ",
    finalObjectArray
  );

  const { content, quantity, email, dateobject, choose } = dietParam;

  let id = null;
  Diet.create({
    //content,
    //      picture: req.file?.filename,
    dateobject,
    UserId: email,
    quantity,
    choose,
  }).then((result) => {
    console.log(
      "dietController.js postDiet create() 결과 diet 모델 id-> ",
      result.dataValues.id
    );

    id = result.dataValues.id;
    console.log("dietController.js postDiet id 확인-> ", id);

    if (id === null) {
      return res.json({ error: "식단등록 중 에러 발생" });
    }

    try {
      for (let f of finalObjectArray) {
        const contentDetail = f.content;
        const quantityDetail = f.quantity;

        console.log(
          "컨트롤러함수 dietController.js postDiet() dietDetailParam content",
          contentDetail,
          ",quantity-> ",
          quantityDetail
        );

        Dietdetail.create({
          quantity: Number(quantityDetail),
          choose,
          content: contentDetail,
          dateobject,
          email,
          DietId: id,
        }); //create
      } //for
      return res.json({ result: "success" });
    } catch (err) {
      console.log(
        "dietController.js postDiet create() 실패 dietdetail 모델 try0cath-> ",
        err
      );
      return res.json({ error: "식단등록 중 에러 발생" });
    }
  }); //then
}; //postDiet

//삭제
exports.deleteDiet = (req, res, next) => {
  const { dateobject, choose } = req.params;
  console.log("dietController.js deleteDiet() choose -> ", choose);
  console.log("dietController.js deleteDiet() dateobject -> ", dateobject);

  const { jwtemail } = res.locals;

  try {
    Diet.destroy({ where: { choose, dateobject, UserId: jwtemail } }).then(
      (result) => {
        console.log(
          "dietController.js deleteDiet() Diet destory 결과 -> ",
          result
        );

        Dietdetail.destroy({
          where: { choose, dateobject, email: jwtemail },
        }).then((result) => {
          console.log(
            "dietController.js deleteDiet() Dietdetail destory 결과 -> ",
            result
          );

          return res.json({ result: "success" });
        });
      }
    );
  } catch (err) {
    console.log("dietController.js deleteDiet() destory 삭제 에러", err);
    return res.json({ error: "해당일자의 식단을 삭제하지 못했습니다." });
  }
};

//조회일자전체
exports.getDietAll = async (req, res, next) => {
  const { dateobject } = req.params;
  const { jwtemail } = res.locals;
  console.log("dietController.js getDietAll 경로값 dateobject=> ", dateobject);
  console.log("dietController.js getDietAll res.locals => ", jwtemail);

  try {
    //const result = await Diet.findOne({ where: { id: id } });
    const result = await Diet.findAll({
      where: { dateobject: dateobject, UserId: jwtemail },
      include: [
        {
          model: Dietdetail, //Dietdetail quantity choose content dateobject email
          where: { dateobject },
        },
      ],
    });

    console.log("dietController.js getDietAll findAll() ", result);

    return res.json(result);
  } catch (err) {
    console.log("dietController.js getDietAll findOne() 에러", err);
    return res.json({ error: "해당 일자의 식단을 가져오지 못했습니다." });
  }
};

//조회 일자당 아침/점심 개별조회
exports.getDiet = async (req, res, next) => {
  const { choose, dateobject } = req.params;

  console.log(
    "dietController.js getDiet 경로값 => ",
    choose,
    "dateobject -> ",
    dateobject
  );
  try {
    //const result = await Diet.findOne({ where: { id: id } });
    const result = await Dietdetail.findAll({ where: { choose, dateobject } });

    console.log("dietController.js getDiet findOne() ", result); //

    return res.json(result);
  } catch (err) {
    console.log("dietController.js getDiet findOne() 에러", err);
    return res.json({ error: "해당 일자의 식단을 가져오지 못했습니다." });
  }
};
//getChooseDiet
exports.getChooseDiet = async (req, res) => {
  const { dateobject } = req.params;
  console.log("dietController.js getChooseDiet req.params-> ", dateobject);
  const accessToken = req.cookies;

  const { jwtemail } = res.locals;

  console.log(
    "dietController.js getChooseDiet 엑세스토큰 확인 app.locals-> ",
    jwtemail
  );
  try {
    const getChoose = await Diet.findAll({
      attributes: ["choose"],
      where: { dateobject: dateobject, UserId: jwtemail },
    });

    console.log("dietController.js getChooseDiet findAll() -> ", getChoose);

    // let result = [];
    // if (getChoose.size !== 0) {
    //   for (let c of getChoose) {
    //     result = c.choose;
    //   }
    //   console.log(
    //     "dietController.js getChooseDiet findAll() choose 컬럼만-> ",
    //     result
    //   );

    return res.json({ result: getChoose });
  } catch (err) {
    console.log("dietController.js getChooseDiet findAll() catch() -> ", err);
    return res.json({ error: "식단 시간 가져오기 에러" });
  }
};
