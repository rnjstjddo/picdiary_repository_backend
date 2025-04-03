import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import useCustomMoney from "../../hooks/useCustomMoney";
import { getChooseMoney, deleteMoney } from "../../api/moneyApi";

const chooseReturn = (number) => {
  let result = "";
  for (let n of number) {
    switch (n) {
      case "1":
        return (result = "수입");
      case "2":
        return (result = "지출");
      default:
        return null;
    }
  }
};

const chooseSectorExpenseReturn = (number) => {
  console.log(
    "MoneyModifyComponent.js chooseReturn() 진입 매개변수 => ",
    number,
    "typeof -> ",
    typeof number
  );
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  console.log("MoneyModifyComponent.js chooseReturn() 진입 배열변경 => ", arr);
  let result = "";
  for (let n of arr) {
    switch (n) {
      case "1":
        return (result = "식비");
      case "2":
        return (result = "교육비"); //식비  교육비 공과금 의류비 생필품 차량교통비 의류비 병원or보험비or약국 주거비 도서문화오락 기타
      case "3":
        return (result = "공과금");
      case "4":
        return (result = "의류비");
      case "5":
        return (result = "생필품");
      case "6":
        return (result = "차량교통비");
      case "7":
        return (result = "의료보험");
      case "8":
        return (result = "주거비");
      case "9":
        return (result = "도서문화오락");
      case "10":
        return (result = "투자");
      case "11":
        return (result = "기타");

      default:
        return null;
    }
  }
  console.log(result);
};

const chooseSectorIncomeReturn = (chooseincome) => {
  if (!chooseincome) {
    return;
  }
  console.log("chooseSectorIncomeReturn 매개변수 -> ", chooseincome);
  switch (chooseincome) {
    case "21":
      return "급여";
    case "22":
      return "투자";
    case "23":
      return "그외";
    default:
      return "";
  }
};

const chooseCheckbox = (number) => {
  console.log(
    "MoneyModifyComponent.js chooseCheckbox() 진입 매개변수 => ",
    number,
    "typeof -> ",
    typeof number
  );
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  console.log(
    "MoneyModifyComponent.js chooseCheckbox() 진입 배열변경 => ",
    arr
  );
  return arr;
};
const initDetailState = {
  content: "",
  amount: "",
  choose: "",
  choosesector: "",
};

const initState = {
  id: 0,
  expense: 0,
  income: 0,
  dateobject: "",
};

const convertDigit = (amount) => {
  return Number(amount).toLocaleString("ko-KR"); //문자열이된다 단지 자리수만 추가해준다
};

const MoneyModifyComponent = () => {
  const [moneyParam, setMoneyParam] = useState(initState);
  const [visible, setVisible] = useState(false);
  const refAmount = useRef(null);

  const [moneyDetailParam, setMoneyDetailParam] = useState({
    ...initDetailState,
  });
  const [detailExpenseVisible, setDetailExpenseVisible] = useState(false);
  const [detailIncomeVisible, setDetailIncomeVisible] = useState(false);

  //    const [image, setImage] = useState("");
  const { exceptionHandle } = useCustomLogin();
  const [inputVisible, setInputVisible] = useState(true);
  const [expenseVisible, setExpenseVisible] = useState(false);
  const [incomeVisible, setIncomeVisible] = useState(false);

  const refchoosesector = useRef();
  const {
    postMoneyC,
    moveToMoneyRead,
    patchMoneyC,
    moveToMoneyCreate,
    moveToMoneyList,
  } = useCustomMoney();
  let { loginState } = useCustomLogin();
  const [chooseResult, setChooseResult] = useState("");
  // const [moneyExpenseFinalArray, setMoneyExpenseFinalArray] = useState([]);
  //const [moneyIncomeFinalArray, setMoneyIncomeFinalArray] = useState([]);
  const [finalExpenseObjectArray, setFinalExpenseObjectArray] = useState([]);
  const [finalIncomeObjectArray, setFinalIncomeObjectArray] = useState([]);

  const [chooseCheckArray, setChooseCheckArray] = useState([]);
  const [chooseExpenseSectorArray, setChooseExpenseSectorArray] = useState([]);
  const [chooseIncomeSectorArray, setChooseIncomeSectorArray] = useState([]);

  //수정에만 추가되는 기존 데이터 보여주기
  // const [exMoneyIncomeVisible, setExMoneyIncomeVisible] = useState(false);
  // const [exMoneyExpenseVisible, setExMoneyExpenseVisible] = useState(false);

  // const [exMoneyExpenseFinalArray, setExMoneyExpenseFinalArray] = useState([]);
  // const [exMoneyIncomeFinalArray, setExMoneyIncomeFinalArray] = useState([]);
  // const [exFinalExpenseObjectArray, setExFinalExpenseObjectArray] = useState(
  //   []
  // );
  //const [exFinalIncomeObjectArray, setExFinalIncomeObjectArray] = useState([]);
  const [bigchoose, setBigchoose] = useState("");
  const { dateobject, choose } = useParams();

  console.log("MoneyModifyComponent.js dateobject=> ", dateobject);
  console.log("MoneyModifyComponent.js choose=> ", choose);

  useLayoutEffect(() => {
    if (choose !== "" && choose !== undefined && choose !== null) {
      console.log("useLayoutEffect() if 진입");
      setBigchoose(choose);
    }
  }, []);

  const handleChange = useCallback(
    (e) => {
      console.log(e.target.value, e.target.name);

      // if (e.target.name === "choose" && e.target.value === "1") {
      //   setIncomeVisible(true);
      //   setExpenseVisible(false);
      // }

      // if (e.target.name === "choose" && e.target.value === "2") {
      //   setExpenseVisible(true);
      //   setIncomeVisible(false);
      // }

      const regex = new RegExp(/^[0-9]+$/);

      console.log("handleChange moneyParam id살아있는지확인 => ", moneyParam);
      if (e.target.name === "amount") {
        let value = Number(e.target.value);

        const result = regex.test(value);
        console.log("결과 ", result);
        if (!regex.test(value) || value === "NaN") {
          alert("금액은 숫자만 입력가능합니다.");
          refAmount.current.value = 0;
          return;
        }
      }

      moneyParam[e.target.name] = e.target.value;
      setMoneyParam((prev) => {
        return { ...prev, moneyParam };
      });
    },
    [moneyParam]
  );
  const refDetailText = useRef("");

  //---------------------- 추가시 입력받는 state
  const handleDetailChange = useCallback(
    (e) => {
      console.log(e.target.value, e.target.name);

      const regex = new RegExp(/^[0-9]+$/);

      if (e.target.name === "amount") {
        let value = Number(e.target.value.replaceAll(",", ""));

        const result = regex.test(value);
        console.log("regex결과 ", result);
        if (!regex.test(value) || value === "NaN") {
          alert("금액은 숫자만 입력가능합니다.");
          refAmount.current.value = 0;
          return;
        }
        moneyDetailParam["amount"] = value.toLocaleString("ko-KR");
      } else {
        moneyDetailParam[e.target.name] = e.target.value;
      }
      setMoneyDetailParam((prev) => {
        return { ...prev, moneyDetailParam };
      });
    },
    [moneyDetailParam]
  );
  // -------------------------세부항목추가시
  const handleDetailOnClick = () => {
    if (moneyDetailParam.content === "" || moneyDetailParam.amount === 0) {
      alert("내용을 모두 입력해주세요!");
      return;
    }
    console.log("handleDetailOnclick sameResult-> bigchoose ", bigchoose);
    console.log("handleDetailOnclick sameResult-> ", moneyParam.choosesector);

    if (
      moneyParam.choosesector === null ||
      moneyParam.choosesector === "" ||
      moneyParam.choosesector === undefined
    ) {
      alert("항목을 선택해주세요");
      return;
    }
    //  moneyParam.choose;
    //moneyParam.choosesector;
    //기존
    //    const compound = moneyDetailParam.content + moneyDetailParam.amount;
    //    const compound = moneyParam.choose+ moneyParam.choosesector +moneyDetailParam.content + moneyDetailParam.amount;

    if (bigchoose === "2") {
      // let transamountExpense = 0;
      // if (moneyDetailParam.amount) {
      //   transamountExpense += Number(
      //     moneyDetailParam.amount.replaceAll(",", "")
      //   );
      // }

      // const compound =
      //   //moneyParam.choose +
      //   bigchoose +
      //   moneyParam.choosesector +
      //   moneyDetailParam.content +
      //   // moneyDetailParam.amount;

      //   transamountExpense;
      // console.log("handleDetailOnClick 지출일때 총합침-compound> ", compound);

      // moneyExpenseFinalArray.forEach((i) =>
      //   console.log("moneyExpenseFinalArray -> ", i)
      // );
      // const sameResult = moneyExpenseFinalArray.filter((i) => i === compound);
      // console.log("handleDetailOnclick sameResult-> ", sameResult);
      // if (sameResult.length !== 0) {
      //   alert("이미 가계부에 추가했습니다!");
      //   setMoneyDetailParam({ ...initDetailState });

      //   return;
      // }
      setFinalExpenseObjectArray((prev) => {
        return [
          ...prev,
          {
            choose: bigchoose,
            choosesector: moneyParam.choosesector,
            content: moneyDetailParam.content,
            amount: moneyDetailParam.amount,
            //amount: transamountExpense,
          },
        ];
      });

      // setMoneyExpenseFinalArray((moneyExpenseFinalArray) => [
      //   ...moneyExpenseFinalArray,
      //   compound,
      // ]);
      // setDetailExpenseVisible(true);
    }

    if (bigchoose === "1") {
      // let transamountIncome = 0;
      // if (moneyDetailParam.amount) {
      //   transamountIncome += Number(
      //     moneyDetailParam.amount.replaceAll(",", "")
      //   );
      // }
      // const compound =
      //   bigchoose +
      //   moneyParam.choosesector +
      //   moneyDetailParam.content +
      //   //moneyDetailParam.amount;
      //   transamountIncome;
      // console.log("handleDetailOnClick 수입일때 총합침-compound> ", compound);

      // moneyIncomeFinalArray.forEach((i) =>
      //   console.log("moneyIncomeFinalArray -> ", i)
      // );
      // const sameResult = moneyIncomeFinalArray.filter((i) => i === compound);
      // console.log("handleDetailOnclick sameResult-> ", sameResult);
      // if (sameResult.length !== 0) {
      //   alert("이미 가계부에 추가했습니다!");
      //   setMoneyDetailParam({ ...initDetailState });

      //   return;
      // }
      setFinalIncomeObjectArray((finalIncomeObjectArray) => {
        return [
          ...finalIncomeObjectArray,
          {
            choose: bigchoose,
            choosesector: moneyParam.choosesector,
            content: moneyDetailParam.content,
            //amount: transamountIncome,
            amount: moneyDetailParam.amount,
          },
        ];
      });

      // setMoneyIncomeFinalArray((moneyIncomeFinalArray) => [
      //   ...moneyIncomeFinalArray,
      //   compound,
      // ]);
      //setDetailIncomeVisible(true);
    }

    setMoneyDetailParam({ ...initDetailState });
  };

  //------------------------------- 가계부등록
  const handleSubmitMoney = (e) => {
    e.preventDefault();
    setInputVisible(false);

    console.log("handleSubmitMoney moneyParam 넣기전 먼저 확인-> ", moneyParam);
    //    moneyParam["email"] = loginState;

    let incomeValue = 0;
    let expenseValue = 0;

    //지출 객체배열로 만듬
    //if (moneyExpenseFinalArray.length !== 0) {
    if (finalExpenseObjectArray.length !== 0) {
      //지출계산
      finalExpenseObjectArray.forEach((i) => {
        console.log("amount지출 => ", i.amount);
        expenseValue += Number(i.amount.replaceAll(",", ""));
      });
      moneyParam["dateobject"] = dateobject;

      moneyParam["expense"] = expenseValue;

      //  console.log("expense -> ", expenseValue);
      // const moneyExpenseFinalObject = moneyExpenseFinalArray.join(" ");
      // console.log(
      //   "MoneyModifyComponent.js moneyExpenseFinalArray 지출 문자열로 만듬 -> ",
      //   moneyExpenseFinalObject
      // );
      // submitcontent += " " + moneyExpenseFinalObject;

      // console.log("지출 submitcontent -> ", submitcontent);
      setMoneyParam((prev) => {
        return { ...prev, moneyParam };
      });

      patchMoneyC({
        moneyParam,
        finalIncomeObjectArray,
        finalExpenseObjectArray,
        bigchoose, //2
        dateobject,
      })
        .then((result) => {
          console.log(
            "MoneyModifyComponent.js axios 지출 postMoneyC then() 진입 -> ",
            result
          );
          if (result.type === "postMoneyAsync/rejected") {
            alert(dateobject + " 일자 지출 가계부수정을 실패했습니다.");
            moveToMoneyRead(dateobject);
          }
        })
        .catch((err) => {
          console.log("MoneyModifyComponent.js axios patchMoneyC catch()", err);
          alert(dateobject + "일자 지출 가계부수정을 실패했습니다.");
          moveToMoneyRead(dateobject);
        });
    } //지출 patchMoneyC

    //수입 객체배열로 만듬
    //if (moneyIncomeFinalArray.length !== 0) {
    if (finalIncomeObjectArray.length !== 0) {
      //수입계산
      finalIncomeObjectArray.forEach((i) => {
        console.log("amount수입 => ", i.amount);
        incomeValue += Number(i.amount.replaceAll(",", ""));
      });

      moneyParam["dateobject"] = dateobject;

      //   const moneyIncomeFinalObject = moneyIncomeFinalArray.join(" ");
      //   console.log(
      //     "MoneyModifyComponent.js moneyIncomeFinalArray 문자열로 만듬 -> ",
      //     moneyIncomeFinalObject
      //   );
      //   // moneyParam["content"] = moneyIncomeFinalObject;

      //   submitcontent += " " + moneyIncomeFinalObject;
      //   //console.log("수입 submitcontent -> ", submitcontent);
      // }
      moneyParam["income"] = incomeValue;

      setMoneyParam((prev) => {
        return { ...prev, moneyParam };
      });
      console.log("MoneyModifyComponent.js handleSubmitMoney -> ", moneyParam);

      patchMoneyC({
        moneyParam,
        finalIncomeObjectArray,
        finalExpenseObjectArray,
        dateobject,
        bigchoose,
      })
        .then((result) => {
          console.log(
            "MoneyModifyComponent.js axios postMoneyC 수입 then() 진입 -> ",
            result
          );
          if (result.type === "postMoneyAsync/rejected") {
            alert(dateobject + " 일자 수입 가계부수정을 실패했습니다.");
            moveToMoneyRead(dateobject);
          }
        })
        .catch((err) => {
          console.log("MoneyModifyComponent.js axios patchMoneyC catch()", err);
          alert(dateobject + "일자 수입 가계부수정을 실패했습니다.");
          moveToMoneyRead(dateobject);
        });
    } //수입 patchMoneyC
  }; //handleSubmitMoney

  const navigate = useNavigate();

  useEffect(() => {
    const getChooseMoneyEI = async () => {
      if (bigchoose !== "") {
        await getChooseMoney({ dateobject, bigchoose })
          .then((result) => {
            console.log(
              "MoneyModifyComponent.js useEffect() axios 결과 then() -> ",
              result
            );
            console.log(
              "MoneyModifyComponent.js useEffect() axios 결과 then() -> ",
              result.result
            );
            if (result.result !== null || result.result !== "") {
              if (bigchoose === "1") {
                let moneydetails = result.result.Moneydetails;
                // let finalcontent = moneydetails.content;
                // let finalamount = convertDigit(moneydetails.amount);//먼저 숫자타입변경후 자리수추가
                // let finalchoose = moneydetails.choose;
                // let finalchoosesector = moneydetails.choosesector;

                let id = moneydetails[0].id;

                moneyParam["id"] = id;
                setMoneyParam((prev) => {
                  return { ...prev, moneyParam };
                });

                console.log(
                  "useEffect() moneyParam id넣고 전체 출력 -> ",
                  moneyParam
                );
                moneydetails.forEach((i) => {
                  console.log(
                    "bigchoose 1일경우 moneydetails forEach 진입 => ",
                    i
                  );
                  let objectIncome = {
                    content: i.content,
                    choose: i.choose,
                    choosesector: i.choosesector,
                    amount: convertDigit(i.amount),
                  };

                  setFinalIncomeObjectArray((prev) => [...prev, objectIncome]);

                  // let combineIncomeArray = `${i.choose}${i.choosesector}${i.content}${i.amount}`;

                  // setMoneyIncomeFinalArray((prev) => [
                  //   ...prev,
                  //   combineIncomeArray,
                  // ]);
                });
              }
              if (bigchoose === "2") {
                let moneydetails = result.result.Moneydetails;
                // let finalcontent = moneydetails.content;
                // let finalamount = convertDigit(moneydetails.amount);
                // let finalchoose = moneydetails.choose;
                // let finalchoosesector = moneydetails.choosesector;

                let id = moneydetails[0].id;
                console.log(
                  "MoneyModifyComponent.js useEffect() axios 결과 then() id만 값가져오기-> ",
                  id
                );
                moneyParam[id] = toString(id);
                setMoneyParam((prev) => {
                  return { ...prev, moneyParam };
                });

                moneydetails.forEach((i) => {
                  console.log(
                    "bigchoose 2일경우 moneydetails forEach 진입 => ",
                    i
                  );

                  let objectExpense = {
                    content: i.content,
                    choose: i.choose,
                    choosesector: i.choosesector,
                    amount: convertDigit(i.amount),
                  };

                  setFinalExpenseObjectArray((prev) => {
                    return [...prev, objectExpense];
                  });

                  //                let combineExpenseArray = `${i.choose}${i.choosesector}${i.content}${i.amount}`;

                  // setMoneyExpenseFinalArray((prev) => [
                  //   ...prev,
                  //   combineExpenseArray,
                  // ]);
                });
              }
            }
          })
          .catch((err) => {
            console.log(
              "MoneyModifyComponent.js useEffect() axios 결과 catch() -> ",
              err
            );
            exceptionHandle(err);
          });
      } //EI
    };
    getChooseMoneyEI();

    return () => {
      getChooseMoneyEI();
    };
  }, [bigchoose]);

  //개별항목삭제시
  const handleDetailRemoveOnClick = (e) => {
    // console.log(
    //   "handleDetailRemoveOnClick() dataset =>",
    //   e.target.dataset.finalcontent,
    //   "e.target.dataset.finalamount -> ",
    //   e.target.dataset.finalamount,
    //   "e.target.dataset.finalchoose -> ",
    //   e.target.dataset.finalchoose,
    //   "e.target.dataset.finalchoosesector -> ",
    //   e.target.dataset.finalchoosesector
    // );
    console.log("입력값 타입 amount => ", typeof e.target.dataset.finalamount); //string 자리수표시된상태
    const finalcontent = e.target.dataset.finalcontent;
    const finalamount = e.target.dataset.finalamount;
    const finalchoose = e.target.dataset.finalchoose;
    const finalchoosesector = e.target.dataset.finalchoosesector;

    if (finalchoose === "1") {
      // const newProduce = moneyExpenseFinalArray.filter(
      //   (i) =>
      //     i !==
      //     `${finalchoose}${finalchoosesector}${finalcontent}${finalamount}`
      // );
      // console.log("handleDetailRemoveOnClick() 지출 newProduce =>", newProduce);
      // setmoneyExpenseFinalArray([...newProduce]);

      const indexNumber = finalExpenseObjectArray.findIndex(
        (i) =>
          i.content === finalcontent &&
          i.amount === finalamount &&
          i.choosesector === finalchoosesector
      );

      //console.log(" 지출 index넘버 -> ", indexNumber);

      if (indexNumber === 0 && finalExpenseObjectArray.length === 1) {
        setFinalIncomeObjectArray([]);
      } else {
        const filterExpense = finalExpenseObjectArray.filter(
          //싹다지워진다.
          (e) =>
            !(
              e.content === finalcontent &&
              e.amount === finalamount &&
              e.choosesector === finalchoosesector
            )
        );
        //console.log("필터처리후 -> ", filterExpense);
        setFinalIncomeObjectArray(filterExpense);
      }
    } //if finalchoose===2

    if (finalchoose === "1") {
      // const newProduce = moneyIncomeFinalArray.filter(
      //   (i) =>
      //     i !==
      //     `${finalchoose}${finalchoosesector}${finalcontent}${finalamount}`
      // );
      // console.log("handleDetailRemoveOnClick() 수입 newProduce =>", newProduce);
      // setmoneyIncomeFinalArray([...newProduce]);

      const indexNumber = finalIncomeObjectArray.findIndex(
        (i) =>
          i.content === finalcontent &&
          i.amount === finalamount &&
          i.choosesector === finalchoosesector
      );

      //console.log(" 수입 index넘버 -> ", indexNumber);

      if (indexNumber === 0 && finalIncomeObjectArray.length === 1) {
        setFinalIncomeObjectArray([]);
      } else {
        const filterIncome = finalIncomeObjectArray.filter(
          //싹다지워진다.
          (e) =>
            !(
              e.content === finalcontent &&
              e.amount === finalamount &&
              e.choosesector === finalchoosesector
            )
        );
        //        console.log("필터처리후 -> ", filterIncome);
        setFinalIncomeObjectArray(filterIncome);
      }
    } //if finalchoose=1
    return;
  };

  //수입/지출 전체삭제하기버튼 클릭시
  const handleRemoveOnClick = () => {
    console.log("MoneyModifyComponent.js handleRemoveOnClick -> ");

    deleteMoney({ dateobject, bigchoose })
      .then((result) => {
        console.log(
          "MoneyModifyComponent.js handleRemoveOnClick then -> ",
          result
        );
        if (result.result) {
          alert(dateobject + " 일자의 가계부를 삭제했습니다.");
          moveToMoneyList();
        }
      })
      .catch((err) => {
        console.log(
          "MoneyModifyComponent.js handleRemoveOnClick then -> ",
          err
        );
        moveToMoneyRead(dateobject);
      });
  };

  // console.log("moneyIncomeFinalArray -> ", moneyIncomeFinalArray);
  // console.log("finalIncomeObjectArray -> ", finalIncomeObjectArray);

  return (
    <div className="container">
      <br />
      <br />

      <h4>가계부수정</h4>
      <hr />
      <br />
      {/* {visible ? (
        <h5>
          😅 {dateobject} 일자에 {chooseResult} 가계부는 작성되어 있습니다!
        </h5>
      ) : (
        <h5>😅 {dateobject} 일자에 처음 작성하는 가계부입니다. </h5>
      )}
      <br /> */}

      <Form onSubmit={handleSubmitMoney}>
        <Form.Group className="mb-3">
          <Form.Label>가계부일자</Form.Label>
          <Form.Control
            type="text"
            name="dateobject"
            value={dateobject}
            disabled
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>수입/지출선택</Form.Label>

          <div key={`inline-radio`} className="mb-3">
            <>
              <Image
                src="/img/money.png"
                style={{ width: "50px", height: "50px" }}
                rounded
              />
              &nbsp;
              <Form.Check
                inline
                label="수입"
                name="choose"
                type={"radio"}
                disable={"true"}
                checked
                onChange={handleChange}
              />
              <Image
                src="/img/receipt.jpg"
                style={{ width: "50px", height: "50px" }}
                rounded
              />
              &nbsp;
              <Form.Check
                inline
                label="지출"
                name="choose"
                type={"radio"}
                //value={2}
                disabled
              />
            </>
          </div>
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>항목선택</Form.Label>
          <div key={`inline-radio`} className="mb-3">
            {chooseExpenseSectorArray &&
              chooseExpenseSectorArray.map((i) => (
                <>
                  {i === "1" ? (
                    <Form.Check
                      inline
                      label="식비"
                      name="choosesector"
                      type={"radio"}
                      value={1}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="식비"
                      name="choosesector"
                      type={"radio"}
                      value={1}
                      onChange={handleChange}
                    />
                  )}
                  {i === "2" ? (
                    <Form.Check
                      inline
                      label="교육비"
                      name="choosesector"
                      type={"radio"}
                      value={2}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="교육비"
                      name="choosesector"
                      type={"radio"}
                      value={2}
                      onChange={handleChange}
                    />
                  )}

                  {i === "3" ? (
                    <Form.Check
                      inline
                      label="공과금"
                      name="choosesector"
                      type={"radio"}
                      value={3}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="공과금"
                      name="choosesector"
                      type={"radio"}
                      value={3}
                      onChange={handleChange}
                    />
                  )}
                  {i === "4" ? (
                    <Form.Check
                      inline
                      label="의류비"
                      name="choosesector"
                      type={"radio"}
                      value={4}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="의류비"
                      name="choosesector"
                      type={"radio"}
                      value={4}
                      onChange={handleChange}
                    />
                  )}

                  {i === "5" ? (
                    <Form.Check
                      inline
                      label="생필품"
                      name="choosesector"
                      type={"radio"}
                      value={5}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="생필품"
                      name="choosesector"
                      type={"radio"}
                      value={5}
                      onChange={handleChange}
                    />
                  )}
                  {i === "6" ? (
                    <Form.Check
                      inline
                      label="차량교통비"
                      name="choosesector"
                      type={"radio"}
                      value={6}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="차량교통비"
                      name="choosesector"
                      type={"radio"}
                      value={6}
                      onChange={handleChange}
                    />
                  )}

                  {i === "7" ? (
                    <Form.Check
                      inline
                      label="의료보험"
                      name="choosesector"
                      type={"radio"}
                      value={7}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="의료보험"
                      name="choosesector"
                      type={"radio"}
                      value={7}
                      onChange={handleChange}
                    />
                  )}
                  {i === "8" ? (
                    <Form.Check
                      inline
                      label="주거비"
                      name="choosesector"
                      type={"radio"}
                      value={8}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="주거비"
                      name="choosesector"
                      type={"radio"}
                      value={8}
                      onChange={handleChange}
                    />
                  )}

                  {i === "9" ? (
                    <Form.Check
                      inline
                      label="도서문화오락"
                      name="choosesector"
                      type={"radio"}
                      value={9}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="도서문화오락"
                      name="choosesector"
                      type={"radio"}
                      value={9}
                      onChange={handleChange}
                    />
                  )}
                  {i === "10" ? (
                    <Form.Check
                      inline
                      label="투자"
                      name="choosesector"
                      type={"radio"}
                      value={10}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="투자"
                      name="choosesector"
                      type={"radio"}
                      value={10}
                      onChange={handleChange}
                    />
                  )}
                  {i === "11" ? (
                    <Form.Check
                      inline
                      label="기타"
                      name="choosesector"
                      type={"radio"}
                      value={11}
                      onChange={handleChange}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="기타"
                      name="choosesector"
                      type={"radio"}
                      value={11}
                      onChange={handleChange}
                    />
                  )}
                </>
              ))}{" "}
            {bigchoose === "2" && (
              <>
                <Form.Check
                  inline
                  label="식비"
                  name="choosesector"
                  type={"radio"}
                  value={1}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="교육비"
                  name="choosesector"
                  type={"radio"}
                  value={2}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="공과금"
                  name="choosesector"
                  type={"radio"}
                  value={3}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="의류비"
                  name="choosesector"
                  type={"radio"}
                  value={4}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="생필품"
                  name="choosesector"
                  type={"radio"}
                  value={5}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="차량교통비"
                  name="choosesector"
                  type={"radio"}
                  value={6}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="의료보험"
                  name="choosesector"
                  type={"radio"}
                  value={7}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="주거비"
                  name="choosesector"
                  type={"radio"}
                  value={8}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="도서문화오락"
                  name="choosesector"
                  type={"radio"}
                  value={9}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="투자"
                  name="choosesector"
                  type={"radio"}
                  value={10}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
                <Form.Check
                  inline
                  label="기타"
                  name="choosesector"
                  type={"radio"}
                  value={11}
                  onChange={handleChange}
                  ref={refchoosesector}
                />
              </>
            )}
            {bigchoose === "1" && (
              <>
                <Form.Check
                  inline
                  label="급여"
                  name="choosesector"
                  type={"radio"}
                  value={21}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="투자"
                  name="choosesector"
                  type={"radio"}
                  value={22}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="그외"
                  name="choosesector"
                  type={"radio"}
                  value={23}
                  onChange={handleChange}
                />
              </>
            )}
            {chooseIncomeSectorArray &&
              chooseIncomeSectorArray.map((i) => (
                <>
                  {i === "21" ? (
                    <Form.Check
                      inline
                      label="급여"
                      name="choosesector"
                      type={"radio"}
                      value={21}
                      onChange={handleChange}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="급여"
                      name="choosesector"
                      type={"radio"}
                      value={21}
                      onChange={handleChange}
                    />
                  )}
                  {i === "22" ? (
                    <Form.Check
                      inline
                      label="투자"
                      name="choosesector"
                      type={"radio"}
                      value={22}
                      onChange={handleChange}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="투자"
                      name="choosesector"
                      type={"radio"}
                      value={22}
                      onChange={handleChange}
                    />
                  )}

                  {i === "23" ? (
                    <Form.Check
                      inline
                      label="그외"
                      name="choosesector"
                      type={"radio"}
                      value={23}
                      onChange={handleChange}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="그외"
                      name="choosesector"
                      type={"radio"}
                      value={23}
                      onChange={handleChange}
                    />
                  )}
                </>
              ))}
          </div>
        </Form.Group>
        <br />
        {finalExpenseObjectArray.length !== 0 && (
          <>
            지출
            {finalExpenseObjectArray.map((i, index) => (
              <React.Fragment key={index}>
                {/* <Form key={index}> */}
                <InputGroup className="mb-3">
                  <InputGroup.Text>항목&nbsp;&nbsp;</InputGroup.Text>
                  <Form.Control
                    type="text"
                    readOnly
                    value={chooseSectorExpenseReturn(i.choosesector)}
                  />
                  <InputGroup.Text>내용&nbsp;&nbsp;</InputGroup.Text>
                  <Form.Control
                    type="text"
                    readOnly
                    value={`${i.content}${i.amount}`}
                  />
                  <Button
                    variant="outline-danger"
                    type="button"
                    data-finalcontent={i.content}
                    data-finalamount={i.amount}
                    data-finalchoose={i.choose}
                    data-finalchoosesector={i.choosesector}
                    onClick={handleDetailRemoveOnClick}
                  >
                    삭제
                  </Button>
                </InputGroup>
                {/* </Form> */}
              </React.Fragment>
            ))}
          </>
        )}
        {/* {detailExpenseVisible && ( */}
        <>
          {finalExpenseObjectArray.map((i, index) => (
            <React.Fragment key={index}>
              <InputGroup className="mb-3">
                <InputGroup.Text>항목&nbsp;&nbsp;</InputGroup.Text>
                <Form.Control
                  type="text"
                  readOnly
                  value={chooseSectorExpenseReturn(i.choosesector)}
                />
                <InputGroup.Text>내용&nbsp;&nbsp;</InputGroup.Text>
                <Form.Control
                  type="text"
                  readOnly
                  value={`${i.content}${i.amount}`}
                />
                <Button
                  variant="outline-danger"
                  type="button"
                  data-finalcontent={i.content}
                  data-finalamount={i.amount}
                  data-finalchoose={i.choose}
                  data-finalchoosesector={i.choosesector}
                  onClick={handleDetailRemoveOnClick}
                >
                  삭제
                </Button>
              </InputGroup>
            </React.Fragment>
          ))}
        </>
        <br />
        <br />
        {/* )} */}
        {finalIncomeObjectArray.length !== 0 && (
          <>
            수입
            {finalIncomeObjectArray.map((i, index) => (
              <React.Fragment key={index}>
                {/* <Form key={index}> */}
                <InputGroup className="mb-3">
                  <InputGroup.Text>항목&nbsp;&nbsp;</InputGroup.Text>
                  <Form.Control
                    type="text"
                    readOnly
                    value={chooseSectorIncomeReturn(i.choosesector)}
                  />
                  <InputGroup.Text>내용&nbsp;&nbsp;</InputGroup.Text>
                  <Form.Control
                    type="text"
                    readOnly
                    value={`${i.content}${i.amount}`}
                  />
                  <Button
                    variant="outline-danger"
                    type="button"
                    data-finalcontent={i.content}
                    data-finalamount={i.amount}
                    data-finalchoose={i.choose}
                    data-finalchoosesector={i.choosesector}
                    onClick={handleDetailRemoveOnClick}
                  >
                    삭제
                  </Button>
                </InputGroup>
                {/* </Form> */}
              </React.Fragment>
            ))}
          </>
        )}
        {inputVisible && (
          <>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text>내용&nbsp;&nbsp;</InputGroup.Text>
              <Form.Control
                type="text"
                name="content"
                value={moneyDetailParam.content}
                onChange={handleDetailChange}
              />
              <InputGroup.Text>금액(단위 원)&nbsp;&nbsp;</InputGroup.Text>
              <Form.Control
                type="text"
                name="amount"
                value={moneyDetailParam.amount}
                onChange={handleDetailChange}
                ref={refAmount}
              />

              <Button
                variant="outline-warning"
                type="button"
                onClick={handleDetailOnClick}
              >
                추가
              </Button>
            </InputGroup>
            <br />
          </>
        )}
        {/* <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control
            type="text"
            name="content"
            value={moneyDetailParam.content}
            onChange={handleChange}
            required
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3">
          <Form.Label>양(단위 g/ml)</Form.Label>
          <Form.Control
            type="text"
            name="amount"
            value={moneyDetailParam.amount}
            onChange={handleChange}
            ref={refAmount}
            required
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3" >
           <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>  */}
        <Button variant="outline-primary" type="submit">
          가계부 수정완료
        </Button>
        &nbsp;
        <Button
          variant="outline-danger"
          type="button"
          onClick={() => handleRemoveOnClick()}
        >
          삭제하기
        </Button>
        <br />
        <br />
      </Form>
    </div>
  );
};

export default MoneyModifyComponent;
