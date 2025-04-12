const User = require("../models/user");
const Money = require("../models/money");
const Moneydetail = require("../models/moneydetail");
const { Op } = require("sequelize");

//postMoney, patchMoney, getMoneyAll, getMoneyEach, deleteMoney, getChoosemoney, getMoneyList,
//머니 컨트롤러 함수
exports.getMoneyList = async (req, res, next) => {
  const dateobject = req.params;
  console.log("moneyController.js getDietList() 경로값확인 ", dateobject);
  const newdate = new Date(dateobject.dateobject);

  const lastday = new Date(newdate.getFullYear(), newdate.getMonth() + 1, 0);
  console.log("moneyController.js getDietList() lastday ", lastday);

  let monthfinal =
    newdate.getMonth() + 1 < 10
      ? "0" + (newdate.getMonth() + 1)
      : newdate.getMonth() + 1;
  console.log("moneyController.js getDietList() monthfinal ", monthfinal);

  const monthfirst = newdate.getFullYear() + "-" + monthfinal + "-" + "01";
  const monthlast =
    newdate.getFullYear() + "-" + monthfinal + "-" + lastday.getDate();

  console.log("moneyController.js monthfirst => ", monthfirst);
  console.log("moneyController.js monthlast => ", monthlast);

  const { jwtemail } = res.locals;

  try {
    const money = await Money.findAll({
      where: {
        dateobject: { [Op.between]: [monthfirst, monthlast] },
        UserId: jwtemail,
      },
    });
    if (money.length === 0) {
      return res.json("작성한 가계부가 없습니다.");
    }
    console.log("moneyController.js getMoneyList() findAll() ", money);
    return res.json(money);
  } catch (err) {
    console.log("moneyController.js getMoneyList() findAll() catch() ", err);
    return res.status(500).send(err);
  }
};

//머니수정
exports.patchMoney = (req, res, next) => {
  const { dateobject } = req.params;
  console.log("moneyController.js patchMoney () dateobject -> ", dateobject);
  const {
    finalIncomeObjectArray,
    finalExpenseObjectArray,
    moneyParam,
    bigchoose,
  } = req.body;
  const { jwtemail } = res.locals;

  const { income, expense, id: MoneyId } = moneyParam;
  console.log("moneyController.js patchMoney () MoneyId -> ", MoneyId);

  //let selectBigchoose = bigchoose === "1" ? income : expense;

  let resultid = null;

  try {
    if (bigchoose === "1" && finalIncomeObjectArray.length !== 0) {
      Money.update({ income }, { where: { UserId: jwtemail, dateobject } })
        .then((result) => {
          console.log("Money 모델 수입 update 결과 then() 진입-> ", result); //1
          resultid = result;

          return finalIncomeObjectArray.forEach((i) => {
            console.log("Moneydetail 모델 수입 destroy 결과 then() 진입-> ", i); //1

            let incomedelete = async () =>
              await Moneydetail.destroy({
                where: { dateobject, choose: "1", MoneyId },
              });

            incomedelete();
          });
        })
        .then((result) => {
          console.log("Moneydetail 모델 수입  destroy then() 진입-> ", result); //1

          finalIncomeObjectArray.forEach((i) => {
            let incomecreate = async () =>
              await Moneydetail.create({
                content: i.content,
                amount: Number(i.amount.replaceAll(",", "")),
                choose: i.choose,
                choosesector: i.choosesector,
                dateobject: dateobject,
                MoneyId,
              }).then((result) => {
                console.log("Moneydetail 모델 수입create 성공", result);
              });
            incomecreate();
          }); //forEach
          return res.json({ result: "success" });
        });
    } //bigchoose===1

    if (bigchoose === "2" && finalExpenseObjectArray.length !== 0) {
      Money.update({ expense }, { where: { UserId: jwtemail, dateobject } })
        .then((result) => {
          console.log("Money 모델 지출 update 결과 then() 진입-> ", result); //1
          resultid = result;

          return finalExpenseObjectArray.forEach((i) => {
            console.log(
              "Money 모델 지출 update 결과 then() 진입 forEach() -> ",
              i
            ); //1

            let expensedelete = async () =>
              await Moneydetail.destroy({
                where: { dateobject, choose: "2", MoneyId },
              });
            expensedelete();
          }); //forEach
        })
        .then((result) => {
          console.log(
            "Moneydetail 모델 지출 destroy 결과 then() 진입-> ",
            result
          );

          finalExpenseObjectArray.forEach((i) => {
            console.log(
              "Moneydetail 모델 지출 destroy 결과 then() 진입 forEach-> ",
              i
            );

            let expensecreate = async () =>
              await Moneydetail.create({
                content: i.content,
                amount: Number(i.amount.replaceAll(",", "")),
                choose: i.choose,
                choosesector: i.choosesector,
                dateobject: dateobject,
                MoneyId,
              }).then((result) => {
                console.log(
                  "Moneydetail 모델 지출 create 결과 then() 진입-> ",
                  result
                ); //1
              });
            expensecreate();
          }); //forEach
          return res.json({ result: "success" });
        });
    } //if bigchoose===2
  } catch (err) {
    console.log("moneyController.js patchMoney 에러발생", err);
  }
}; //patchMoney

//머니 작성
exports.postMoney = (req, res, next) => {
  const { finalIncomeObjectArray, finalExpenseObjectArray, moneyParam } =
    req.body;
  const { dateobject } = req.params;
  const { jwtemail } = res.locals;

  const { income, expense } = moneyParam;
  console.log(
    "컨트롤러함수 moneyController.js postMoney() finalIncomeObjectArray-> ",
    finalIncomeObjectArray
  );

  console.log(
    "컨트롤러함수 moneyController.js postMoney() finalExpenseObjectArray-> ",
    finalExpenseObjectArray
  );

  console.log(
    "컨트롤러함수 moneyController.js postMoney() moneyParam-> ",
    moneyParam
  );

  Money.create({
    dateobject,
    UserId: jwtemail,
    income,
    expense,
  }).then((result) => {
    let moneyid = result.dataValues.id;
    console.log(
      "moneyController.js postMoney 먼저 Money create() 결과 Money 모델 id-> ",
      moneyid
    );

    try {
      if (finalIncomeObjectArray.length !== 0) {
        finalIncomeObjectArray.forEach((i) => {
          let incomecreate = async () =>
            await Moneydetail.create({
              content: i.content,
              amount: Number(i.amount.replaceAll(",", "")),
              choose: i.choose,
              choosesector: i.choosesector,
              MoneyId: moneyid,
              dateobject: dateobject,
            });
          incomecreate();
        }); //forEach
      } //if 수입배열 존재시

      if (finalExpenseObjectArray.length !== 0) {
        finalExpenseObjectArray.forEach((i) => {
          let expensecreate = async () =>
            await Moneydetail.create({
              content: i.content,
              amount: Number(i.amount.replaceAll(",", "")),
              choose: i.choose,
              choosesector: i.choosesector,
              MoneyId: moneyid,
              dateobject: dateobject,
            }); //create
          expensecreate();
        }); //forEach
      } //if
      //2개 모두 넣고 처리해야한다
      return res.json({ result: "success" });
    } catch (err) {
      console.log("moneyController.js postMoney catch() err -> ", err);
      return res.json({ error: "가계부수정 중 에러 발생" });
    }
  });
};

//삭제
exports.deleteMoney = async (req, res, next) => {
  const { dateobject, bigchoose } = req.params;
  console.log("moneyController.js deleteMoney() dateobject -> ", dateobject);
  console.log("moneyController.js deleteMoney() dateobject -> ", bigchoose);

  const { jwtemail } = res.locals;

  if (bigchoose === "1") {
    await Money.update(
      { income: 0 },
      {
        where: { dateobject, UserId: jwtemail },
      }
    )
      .then((result) => {
        console.log(
          "moneyController.jS 수입 Money update 삭제결과 -> ",
          result
        );

        const findOneResult = async () =>
          await Money.findOne({
            where: { dateobject, UserId: jwtemail },
          });

        findOneResult().then((result) => {
          console.log("moneyController.jS 수입 Money findOne -> ", result);
          console.log(
            "moneyController.jS 수입 Money findOne  result.dataValues.id;-> ",
            result.dataValues.id
          );

          let resultid = null;
          if (result.dataValues.id) {
            resultid = result.dataValues.id;
          }

          if (resultid !== null) {
            console.log("destroy전 값확인 dateobject-> ", dateobject);
            console.log("destroy전 값확인 bigchoose-> ", bigchoose);
            console.log("destroy전 값확인 resultid-> ", resultid);
            Moneydetail.destroy({
              where: { dateobject, choose: bigchoose, MoneyId: resultid },
            }).then((resultMoneydetail) => {
              console.log(
                "moneyController.js deleteMoney() Moneydetail destroy 결과 -> ",
                resultMoneydetail
              );

              if (resultMoneydetail >= 1) {
                return res.json({ result: "success" });
              } else {
                return res.json({
                  error: "해당일자의 가계부를 삭제하지 못했습니다.",
                });
              } //if-else
            }); //then
          } //if
        }); //findResult() async/await
      })
      .catch((err) => {
        console.log("moneyController.js deleteMoney() destroy 삭제 에러", err);
        return res.json({ error: "해당일자의 가계부를 삭제하지 못했습니다." });
      });
  }
  if (bigchoose === "2") {
    await Money.update(
      { expense: 0 },
      {
        where: { dateobject, UserId: jwtemail },
      }
    )
      .then((result) => {
        console.log(
          "moneyController.js deleteMoney() 지출 Money update  expense 0 결과 -> ",
          result
        );

        const findOneResult = async () => {
          const findOneResult = await Money.findOne({
            where: { dateobject, UserId: jwtemail },
          });
          return findOneResult;
        };
        findOneResult().then((result) => {
          console.log("moneyController.jS 지출 Money findOne -> ", result);
          console.log(
            "moneyController.jS 지출 Money findOne  result.dataValues.id;-> ",
            result.dataValues.id
          );

          let resultid = null;
          if (result.dataValues.id) {
            resultid = result.dataValues.id;
          }

          if (resultid !== null) {
            console.log("destroy전 값확인 dateobject-> ", dateobject);
            console.log("destroy전 값확인 bigchoose-> ", bigchoose);
            console.log("destroy전 값확인 resultid-> ", resultid);

            const destroyMoneydetails = async () => {
              const result = await Moneydetail.destroy({
                where: { dateobject, choose: bigchoose, MoneyId: resultid },
              });
              return result;
            };
            destroyMoneydetails().then((result) => {
              console.log(
                "moneyController.js deleteMoney() Moneydetail destroy 결과 -> ",
                result
              );

              if (result >= 1) {
                return res.json({ result: "success" });
              }
            });
          } else {
            return res.json({
              error: "해당일자의 가계부를 삭제하지 못했습니다.",
            });
          }
        });
      })
      .catch((err) => {
        console.log("moneyController.js deleteMoney() destroy 삭제 에러", err);
        return res.json({ error: "해당일자의 가계부를 삭제하지 못했습니다." });
      });
  }
};

//조회일자전체
exports.getMoneyAll = async (req, res, next) => {
  const { dateobject } = req.params;
  const { jwtemail } = res.locals;
  console.log(
    "moneyController.js getMoneyAll 경로값 dateobject=> ",
    dateobject
  );
  console.log("moneyController.js getMoneyAll res.locals => ", jwtemail);

  try {
    const result = await Money.findOne({
      where: { dateobject: dateobject, UserId: jwtemail },
    });

    let resultid = null;
    let resultexpense = null;
    let resultincome = null;

    if (result !== null) {
      console.log("moneyController.js getMoneyAll Money findOne() ", result.id);
      console.log(
        "moneyController.js getMoneyAll Money findOne() ",
        result.expense
      );
      console.log(
        "moneyController.js getMoneyAll Money findOne() ",
        result.income
      );

      resultid = result.id;
      resultexpense = result.expense;
      resultincome = result.income;

      const moneyFindAll = async () => {
        return await Moneydetail.findAll({
          where: { dateobject: dateobject, MoneyId: result.id },
        });
      };

      moneyFindAll().then((result) => {
        console.log(
          "moneyController.js getMoneyAll Moneydetail findAll() ",
          result
        );

        return res.json({
          result: result,
          id: resultid,
          expense: resultexpense,
          income: resultincome,
        });
      });
    } //if Money존재할경우
  } catch (err) {
    console.log("moneyController.js getMoneyAll findOne() 에러", err);
    return res.json({ error: "해당일자의 가계부를 가져오지 못했습니다." });
  }
};

//조회일자 수입/지출별
exports.getMoneyEach = async (req, res, next) => {
  const { dateobject } = req.params;
  const { jwtemail } = res.locals;
  console.log(
    "moneyController.js getMoneyEach 경로값 dateobject=> ",
    dateobject
  );
  console.log("moneyController.js getMoneyEach res.locals => ", jwtemail);

  try {
    const result = await Money.findOne({
      where: { dateobject: dateobject, UserId: jwtemail, choose },
    });

    console.log("moneyController.js getMoneyEach findAll() ", result);

    return res.json(result);
  } catch (err) {
    console.log("moneyController.js getMoneyEach findOne() 에러", err);
    return res.json({ error: "해당일자의 가계부를 가져오지 못했습니다." });
  }
};

//getChooseDiet
exports.getChooseMoney = async (req, res) => {
  const { dateobject, choose } = req.params;
  console.log(
    "moneyController.js getChooseMoney req.params dateobject-> ",
    dateobject
  );
  console.log("moneyController.js getChooseMoney req.params choose-> ", choose);

  const { jwtemail } = res.locals;

  try {
    const getChoose = await Money.findOne({
      where: { dateobject: dateobject, UserId: jwtemail },
      include: [
        {
          model: Moneydetail,
          where: { choose: choose },
        },
      ],
    });

    console.log("moneyController.js getChooseMoney findOne() -> ", getChoose);

    if (getChoose.length !== 0) {
      console.log("moneyController.js getChooseMoney 존재할경우 진입-> ");

      return res.json({ result: getChoose });
    } else {
      console.log("moneyController.js getChooseMoney 존재하지않을경우 진입-> ");

      return res.status(200).end();
    }
  } catch (err) {
    console.log("dietController.js getChooseMoney findOne() catch() -> ", err);
    return res.json({ error: "가계부 지출/소비 가져오기 에러" });
  }
};

//getChoosecheck
exports.getChoosecheck = async (req, res) => {
  const { dateobject } = req.params;
  const { jwtemail } = res.locals;

  try {
    const getChoose = await Money.findOne({
      where: { dateobject: dateobject, UserId: jwtemail },
      include: [
        {
          model: Moneydetail,
        },
      ],
    });

    console.log("moneyController.js getChoosecheck findOne() -> ", getChoose);

    if (getChoose !== null) {
      return res.json({
        result: { expense: getChoose.expense, income: getChoose.income },
      });
    } else {
      return res.json({ result: "first" });
    }
  } catch (err) {
    console.log("dietController.js getChoosecheck findOne() catch() -> ", err);
    return res.json({ error: "가계부 지출/소비작성여부 에러" });
  }
};
