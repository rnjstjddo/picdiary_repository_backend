import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import useCustomMoney from "../../hooks/useCustomMoney";
import { choosecheck, getChooseMoney, postMoney } from "../../api/moneyApi";

const initState = {
  expense: 0,
  income: 0,
  //content: "",
  dateobject: "",
};

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
    "MoneyCreateComponent.js chooseReturn() 진입 매개변수 => ",
    number,
    "typeof -> ",
    typeof number
  );
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  console.log("MoneyCreateComponent.js chooseReturn() 진입 배열변경 => ", arr);
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
    "MoneyCreateComponent.js chooseCheckbox() 진입 매개변수 => ",
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
    "MoneyCreateComponent.js chooseCheckbox() 진입 배열변경 => ",
    arr
  );
  return arr;
};
const initDetailState = {
  content: "",
  amount: "", //자리수때문에.. 서버보낼때는 Number처리해야한다.
  choose: "",
  choosesector: "",
};

const MoneyCreateComponent = () => {
  //쿼리스트링
  const [searchParams, setSearchParams] = useSearchParams();

  const [paramChoose, setParamChoose] = useState(""); //쿼리스트링 choose 값담기
  const [moneyParam, setMoneyParam] = useState({ ...initState });
  const refAmount = useRef(null);
  const refIncomeReset = useRef(null);
  const refExpenseReset = useRef(null);
  const refReset = useRef(null);

  const [moneyDetailParam, setMoneyDetailParam] = useState({
    ...initDetailState,
  });
  const [detailExpenseVisible, setDetailExpenseVisible] = useState(false);
  const [detailIncomeVisible, setDetailIncomeVisible] = useState(false);

  const { exceptionHandle } = useCustomLogin();
  const [inputVisible, setInputVisible] = useState(true);
  const [expenseVisible, setExpenseVisible] = useState(false);
  const [incomeVisible, setIncomeVisible] = useState(false);

  const { postMoneyC, moveToMoneyRead, moveToMoneyCreate, moveToMoneyList } =
    useCustomMoney();
  let { loginState } = useCustomLogin();
  var { dateobject } = useParams();
  //  const [moneyExpenseFinalArray, setmoneyExpenseFinalArray] = useState([]);
  //  const [moneyIncomeFinalArray, setmoneyIncomeFinalArray] = useState([]);
  const [finalExpenseObjectArray, setFinalExpenseObjectArray] = useState([]);
  const [finalIncomeObjectArray, setFinalIncomeObjectArray] = useState([]);

  const [chooseCheckArray, setChooseCheckArray] = useState([]);
  const [chooseExpenseSectorArray, setChooseExpenseSectorArray] = useState([]);
  const [chooseIncomeSectorArray, setChooseIncomeSectorArray] = useState([]);

  const [expenseExist, setExpenseExist] = useState(false);
  const [incomeExist, setIncomeExist] = useState(false);

  //쿼리스트링 choose있을경우
  useLayoutEffect(() => {
    const choose = searchParams.get("choose");
    if (choose === "2" || choose === "1") {
      console.log(
        "MoneyCreateComponent.js 파라미터 choose 존재할경우 -> ",
        choose,
        " typeof -> ",
        typeof choose
      );
      setParamChoose(choose);
    } //if
  }, []);

  const handleChange = useCallback(
    (e) => {
      //    console.log(e.target.value, e.target.name);

      if (e.target.name === "choose" && e.target.value === "1") {
        setIncomeVisible(true);
        setExpenseVisible(false);
      }

      if (e.target.name === "choose" && e.target.value === "2") {
        setExpenseVisible(true);
        setIncomeVisible(false);
      }

      const regex = new RegExp(/^[0-9]+$/);

      if (e.target.name === "amount") {
        let value = Number(e.target.value);

        if (!regex.test(value) || value === "NaN") {
          alert("금액은 숫자만 입력가능합니다.");
          refAmount.current.value = 0;
          return;
        }
      }

      moneyParam[e.target.name] = e.target.value;
      setMoneyParam({ ...moneyParam });
    },
    [moneyParam]
  );

  //---------------------- 추가시 입력받는 state
  const handleDetailChange = useCallback(
    (e) => {
      console.log(
        "handleDetailChange() 진입 => ",
        e.target.value,
        e.target.name
      );

      const regex = new RegExp(/^[0-9]+$/);

      if (e.target.name === "amount") {
        let value = Number(e.target.value.replaceAll(",", ""));

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

  const handleDetailOnClick = () => {
    console.log("handleDetailOnClick 진입");
    if (moneyDetailParam.content === "" || moneyDetailParam.amount === 0) {
      alert("내용을 모두 입력해주세요!");
      return;
    }
    // console.log(
    //   "handleDetailOnclick moneyParam.choosesector-> ",
    //   moneyParam.choosesector
    // );

    if (!paramChoose) {
      console.log(
        "handleDetailOnclick  moneyParam.choose-> ",
        moneyParam.choose
      );

      if (
        moneyParam.choose === null ||
        moneyParam.choose === "" ||
        moneyParam.choose === undefined
      ) {
        alert("수입/지출을 선택해주세요");
        return;
      }
    }
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

    if (moneyParam.choose === "2") {
      // let transamountExpense = 0;
      // if (moneyDetailParam.amount) {
      //   transamountExpense += Number(
      //     moneyDetailParam.amount.replaceAll(",", "")
      //   );
      // }

      // const compound =
      //   moneyParam.choose +
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

      setFinalExpenseObjectArray((finalExpenseObjectArray) => {
        return [
          ...finalExpenseObjectArray,
          {
            choose: moneyParam.choose,
            choosesector: moneyParam.choosesector,
            content: moneyDetailParam.content,
            amount: moneyDetailParam.amount,
            //amount: transamountExpense,
          },
        ];
      });

      // setmoneyExpenseFinalArray((moneyExpenseFinalArray) => [
      //   ...moneyExpenseFinalArray,
      //   compound,
      // ]);
      setDetailExpenseVisible(true);
    }

    if (moneyParam.choose === "1") {
      // let transamountIncome = 0;
      // if (moneyDetailParam.amount) {
      //   transamountIncome += Number(
      //     moneyDetailParam.amount.replaceAll(",", "")
      //   );
      // }
      // const compound =
      //   moneyParam.choose +
      //   moneyParam.choosesector +
      //   moneyDetailParam.content +
      //   //moneyDetailParam.amount;
      //   transamountIncome;
      //console.log("handleDetailOnClick 수입일때 총합침-compound> ", compound);

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
            choose: moneyParam.choose,
            choosesector: moneyParam.choosesector,
            content: moneyDetailParam.content,
            //amount: transamountIncome,
            amount: moneyDetailParam.amount,
          },
        ];
      });

      // setmoneyIncomeFinalArray((moneyIncomeFinalArray) => [
      //   ...moneyIncomeFinalArray,
      //   compound,
      // ]);
      setDetailIncomeVisible(true);
    }

    setMoneyDetailParam({ ...initDetailState });
  };

  //------------------------------- 가계부등록
  const handleSubmitMoney = (e) => {
    console.log("handleSubmitMoney() 진입");
    e.preventDefault();
    setInputVisible(false);

    //moneyParam["email"] = loginState;
    moneyParam["dateobject"] = dateobject;

    //let submitcontent = "";
    let incomeValue = 0;
    let expenseValue = 0;

    //지출 객체배열로 만듬
    //if (moneyExpenseFinalArray.length !== 0) {
    //지출계산
    //  finalExpenseObjectArray.forEach((i) => {
    if (finalExpenseObjectArray.length !== 0) {
      finalExpenseObjectArray.forEach((i) => {
        // console.log("지출 문자열배열 amount 자리수 제거위해 한개씩 출력 => ", i.amount);
        expenseValue += Number(i.amount.replaceAll(",", ""));
      });
    }
    // finalExpenseObjectArray.map((i) => {
    //   console.log(
    //     "지출객체배열에서 amount 자리수제거해서 넣기 => ",
    //     i.amount
    //   );
    //   i["amount"] = Number(i.amount.replaceAll(",", ""));
    // });

    //   console.log("expense -> ", expenseValue);
    //   const moneyExpenseFinalObject = moneyExpenseFinalArray.join(" ");
    //   console.log(
    //     "MoneyCreateComponent.js moneyExpenseFinalArray 지출 문자열로 만듬 -> ",
    //     moneyExpenseFinalObject
    //   );
    //   submitcontent += " " + moneyExpenseFinalObject;

    //   console.log("지출 submitcontent -> ", submitcontent);
    // }

    //수입 객체배열로 만듬
    //    if (moneyIncomeFinalArray.length !== 0) {
    //수입계산
    //    finalIncomeObjectArray.forEach((i) => {
    if (finalIncomeObjectArray.length !== 0) {
      finalIncomeObjectArray.forEach((i) => {
        // console.log("수입 문자열배열 amount 자리수 제거위해 한개씩 출력 => ", i.amount);
        incomeValue += Number(i.amount.replaceAll(",", ""));
      });
      //  console.log("income -> ", incomeValue);
    }
    //   finalIncomeObjectArray.forEach((i) => {
    //     console.log(
    //       "수입객체배열에서 amount 자리수제거해서 넣기 => ",
    //       i.amount
    //     );
    //     i["amount"] = Number(i.amount.replaceAll(",", ""));
    //   });

    //   const moneyIncomeFinalObject = moneyIncomeFinalArray.join(" ");
    //   console.log(
    //     "MoneyCreateComponent.js moneyIncomeFinalArray 문자열로 만듬 -> ",
    //     moneyIncomeFinalObject
    //   );
    //   // moneyParam["content"] = moneyIncomeFinalObject;

    //   submitcontent += " " + moneyIncomeFinalObject;
    //   console.log("수입 submitcontent -> ", submitcontent);
    // }
    moneyParam["expense"] = expenseValue;
    moneyParam["income"] = incomeValue;

    // moneyParam["content"] = submitcontent;
    setMoneyParam({ ...moneyParam });
    //  console.log("MoneyCreateComponent.js handleSubmitMoney -> ", moneyParam);
    // console.log(
    //   "MoneyCreateComponent.js finalExpenseObjectArray -> ",
    //   finalExpenseObjectArray
    // );
    // console.log(
    //   "MoneyCreateComponent.js finalExpenseObjectArray -> ",
    //   finalIncomeObjectArray
    // );

    postMoney({
      moneyParam,
      finalExpenseObjectArray,
      finalIncomeObjectArray,
      dateobject,
    })
      .then((result) => {
        console.log(
          "MoneyCreateComponent.js axios postMoney then() 진입 -> ",
          result
        );
        if (result.result === "success") {
          alert(dateobject + " 일자 가계부를 등록했습니다.!");
          // if (result.payload.image) {
          //   URL.revokeObjectURL(image);
          //   setImage("");
          // }
          console.log(result.id);
          moveToMoneyList();
        }

        if (result.error) {
          console.log("result.error -> ", result.error);
          alert(dateobject + " 일자 가계부 등록 실패했습니다.");
          moveToMoneyCreate(dateobject);
        }
      })
      .catch((err) => {
        console.log("MoneyCreateComponent.js axios postMoneyC catch()", err);
        alert(dateobject + "일자 가계부 등록 실패했습니다.");
        moveToMoneyCreate(dateobject);
      });
  };

  const handleDetailRemoveOnClick = (e) => {
    console.log("handleDetailRemoveOnClick() 진입");

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
    const finalcontent = e.target.dataset.finalcontent;
    const finalamount = e.target.dataset.finalamount;
    const finalchoose = e.target.dataset.finalchoose;
    const finalchoosesector = e.target.dataset.finalchoosesector;

    // const newProduce = produce(moneyExpenseFinalArray, (draft) => {
    //   draft.filter((d) => d !== finalcontent);
    // });

    if (finalchoose === "2") {
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
        setFinalExpenseObjectArray([]);
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
        setFinalExpenseObjectArray(filterExpense);
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
      // return;
    } //if finalchoose=1
  };

  const handleOnKeyDown = (e) => {
    console.log("handleOnKeyDown() 진입");
    if (e.keyCode === 13) {
      e.preventDefault();
      return;
    }
  };

  //버튼초기화
  const handleRadioReset = (e) => {
    console.log("handleRadioReset() 진입");
    if (e.target.value === "true") {
      //  console.log("진입");
      refIncomeReset.current.checked = false;
      refExpenseReset.current.checked = false;
      refReset.current.checked = false;
      setExpenseVisible(false);
      setIncomeVisible(false);
    }
    return;
  };

  //수입지출 작성확인후 라디오버튼 비활성화
  useEffect(() => {
    choosecheck({ dateobject })
      .then((result) => {
        console.log("MoneyCreateComponent.js then() 결과 ", result);

        if (Number(result.result?.expense) > 0) {
          setIncomeExist(true);
          //alert(dateobject + "일자에 지출은 작성되어있습니다.");
        }

        if (Number(result.result?.income) > 0) {
          setExpenseExist(true);
          //alert(dateobject + "일자에 수입은 작성되어있습니다.");
        }
      })
      .catch((e) => {
        console.log("MoneyCreateComponent.js catch() 에러 ", e);
      });
  });

  return (
    <div className="container">
      <br />
      <br />

      <h4>가계부작성</h4>
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

      <Form onSubmit={handleSubmitMoney} onKeyDown={handleOnKeyDown}>
        <Form.Group className="mb-3">
          <Form.Label>가계부일자</Form.Label>
          <Form.Control
            type="text"
            name="dateobject"
            value={dateobject}
            disabled
          />
          <br />
          <Form.Text className="text-muted">
            {incomeExist && (
              <span>
                {dateobject}일자 수입 가계부는 작성되어있습니다. <br />
              </span>
            )}
            {expenseExist && (
              <span>{dateobject}일자 지출 가계부는 작성되어있습니다.</span>
            )}
          </Form.Text>
        </Form.Group>
        <br />
        {!paramChoose ||
          incomeExist ||
          (expenseExist && (
            <Form.Check
              inline
              label="버튼초기화"
              name="radioreset"
              type={"radio"}
              value={true}
              onChange={(e) => handleRadioReset(e)}
              ref={refReset}
            />
          ))}
        <Form.Group className="mb-3">
          <Form.Label>수입/지출선택</Form.Label>

          <div key={`inline-radio`} className="mb-3">
            {paramChoose && (
              <>
                {paramChoose === "1" ? (
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
                      value={paramChoose}
                      checked={"true"}
                      disabled={"true"}
                    />
                  </>
                ) : (
                  <>
                    {" "}
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
                      value={1}
                      disabled={"true"}
                    />
                  </>
                )}
                {paramChoose === "2" ? (
                  <>
                    {" "}
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
                      value={2}
                      checked={"true"}
                      disabled={"true"}
                    />
                  </>
                ) : (
                  <>
                    {" "}
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
                      value={paramChoose}
                      disabled={"true"}
                    />
                  </>
                )}
              </>
            )}
            {!paramChoose && !(!incomeExist && !expenseExist) && (
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
                  value={1}
                  onChange={(e) => handleChange(e)}
                  disabled={!incomeExist ? true : false}
                  checked={incomeExist ? true : false}
                  //              ref={refIncomeReset}
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
                  value={2}
                  onChange={(e) => handleChange(e)}
                  disabled={!expenseExist ? true : false}
                  checked={expenseExist ? true : false}
                  //            ref={refExpenseReset}
                />
              </>
            )}
            {!paramChoose && !incomeExist && !expenseExist && (
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
                  value={1}
                  onChange={(e) => handleChange(e)}
                  ref={refIncomeReset}
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
                  value={2}
                  onChange={(e) => handleChange(e)}
                  ref={refExpenseReset}
                />
              </>
            )}
          </div>
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>항목선택</Form.Label>
          <div key={`inline-radio`} className="mb-3">
            {/* {chooseExpenseSectorArray &&
              chooseExpenseSectorArray.map((i) => (
                <>
                  {i === "1" ? (
                    <Form.Check
                      inline
                      label="식비"
                      name="choosesector"
                      type={"radio"}
                      value={1}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="식비"
                      name="choosesector"
                      type={"radio"}
                      value={1}
                      onChange={() => handleChange()}
                    />
                  )}
                  {i === "2" ? (
                    <Form.Check
                      inline
                      label="교육비"
                      name="choosesector"
                      type={"radio"}
                      value={2}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="교육비"
                      name="choosesector"
                      type={"radio"}
                      value={2}
                      onChange={() => handleChange()}
                    />
                  )}

                  {i === "3" ? (
                    <Form.Check
                      inline
                      label="공과금"
                      name="choosesector"
                      type={"radio"}
                      value={3}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="공과금"
                      name="choosesector"
                      type={"radio"}
                      value={3}
                      onChange={() => handleChange()}
                    />
                  )}
                  {i === "4" ? (
                    <Form.Check
                      inline
                      label="의류비"
                      name="choosesector"
                      type={"radio"}
                      value={4}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="의류비"
                      name="choosesector"
                      type={"radio"}
                      value={4}
                      onChange={() => handleChange()}
                    />
                  )}

                  {i === "5" ? (
                    <Form.Check
                      inline
                      label="생필품"
                      name="choosesector"
                      type={"radio"}
                      value={5}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="생필품"
                      name="choosesector"
                      type={"radio"}
                      value={5}
                      onChange={() => handleChange()}
                    />
                  )}
                  {i === "6" ? (
                    <Form.Check
                      inline
                      label="차량교통비"
                      name="choosesector"
                      type={"radio"}
                      value={6}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="차량교통비"
                      name="choosesector"
                      type={"radio"}
                      value={6}
                      onChange={() => handleChange()}
                    />
                  )}

                  {i === "7" ? (
                    <Form.Check
                      inline
                      label="의료보험"
                      name="choosesector"
                      type={"radio"}
                      value={7}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="의료보험"
                      name="choosesector"
                      type={"radio"}
                      value={7}
                      onChange={() => handleChange()}
                    />
                  )}
                  {i === "8" ? (
                    <Form.Check
                      inline
                      label="주거비"
                      name="choosesector"
                      type={"radio"}
                      value={8}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="주거비"
                      name="choosesector"
                      type={"radio"}
                      value={8}
                      onChange={() => handleChange()}
                    />
                  )}

                  {i === "9" ? (
                    <Form.Check
                      inline
                      label="도서문화오락"
                      name="choosesector"
                      type={"radio"}
                      value={9}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="도서문화오락"
                      name="choosesector"
                      type={"radio"}
                      value={9}
                      onChange={() => handleChange()}
                    />
                  )}
                  {i === "10" ? (
                    <Form.Check
                      inline
                      label="투자"
                      name="choosesector"
                      type={"radio"}
                      value={10}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="투자"
                      name="choosesector"
                      type={"radio"}
                      value={10}
                      onChange={() => handleChange()}
                    />
                  )}
                  {i === "11" ? (
                    <Form.Check
                      inline
                      label="기타"
                      name="choosesector"
                      type={"radio"}
                      value={11}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="기타"
                      name="choosesector"
                      type={"radio"}
                      value={11}
                      onChange={() => handleChange()}
                    />
                  )}
                </>
              ))} */}
            {/* {chooseExpenseSectorArray.length === 0 && ( */}
            {(expenseVisible || paramChoose || expenseExist) && (
              <>
                <Form.Check
                  inline
                  label="식비"
                  name="choosesector"
                  type={"radio"}
                  value={1}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="교육비"
                  name="choosesector"
                  type={"radio"}
                  value={2}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="공과금"
                  name="choosesector"
                  type={"radio"}
                  value={3}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="의류비"
                  name="choosesector"
                  type={"radio"}
                  value={4}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="생필품"
                  name="choosesector"
                  type={"radio"}
                  value={5}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="차량교통비"
                  name="choosesector"
                  type={"radio"}
                  value={6}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="의료보험"
                  name="choosesector"
                  type={"radio"}
                  value={7}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="주거비"
                  name="choosesector"
                  type={"radio"}
                  value={8}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="도서문화오락"
                  name="choosesector"
                  type={"radio"}
                  value={9}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="투자"
                  name="choosesector"
                  type={"radio"}
                  value={10}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="기타"
                  name="choosesector"
                  type={"radio"}
                  value={11}
                  onChange={(e) => handleChange(e)}
                />
              </>
            )}
            {/* {chooseIncomeSectorArray &&
              chooseIncomeSectorArray.map((i) => (
                <>
                  {i === "21" ? (
                    <Form.Check
                      inline
                      label="급여"
                      name="choosesector"
                      type={"radio"}
                      value={21}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="급여"
                      name="choosesector"
                      type={"radio"}
                      value={21}
                      onChange={() => handleChange()}
                    />
                  )}
                  {i === "22" ? (
                    <Form.Check
                      inline
                      label="투자"
                      name="choosesector"
                      type={"radio"}
                      value={22}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="투자"
                      name="choosesector"
                      type={"radio"}
                      value={22}
                      onChange={() => handleChange()}
                    />
                  )}

                  {i === "23" ? (
                    <Form.Check
                      inline
                      label="그외"
                      name="choosesector"
                      type={"radio"}
                      value={23}
                      onChange={() => handleChange()}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="그외"
                      name="choosesector"
                      type={"radio"}
                      value={23}
                      onChange={() => handleChange()}
                    />
                  )}
                </>
              ))} */}
            {(incomeVisible || paramChoose || incomeExist) && (
              <>
                <Form.Check
                  inline
                  label="급여"
                  name="choosesector"
                  type={"radio"}
                  value={21}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="투자"
                  name="choosesector"
                  type={"radio"}
                  value={22}
                  onChange={(e) => handleChange(e)}
                />
                <Form.Check
                  inline
                  label="그외"
                  name="choosesector"
                  type={"radio"}
                  value={23}
                  onChange={(e) => handleChange(e)}
                />
              </>
            )}
          </div>
        </Form.Group>
        <br />
        {detailExpenseVisible &&
          Array.isArray(finalExpenseObjectArray) &&
          finalExpenseObjectArray.length !== 0 && (
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
              <br />
            </>
          )}
        {detailIncomeVisible &&
          Array.isArray(finalIncomeObjectArray) &&
          finalIncomeObjectArray !== 0 && (
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
              <br />
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
                onChange={(e) => handleDetailChange(e)}
              />
              <InputGroup.Text>금액(단위 원)&nbsp;&nbsp;</InputGroup.Text>
              <Form.Control
                type="text"
                name="amount"
                value={moneyDetailParam.amount}
                onChange={(e) => handleDetailChange(e)}
                ref={refAmount}
              />

              <Button
                variant="outline-warning"
                type="button"
                onClick={(e) => handleDetailOnClick(e)}
              >
                추가
              </Button>
            </InputGroup>
            <br />
          </>
        )}
        <Button variant="outline-primary" type="submit">
          가계부 등록
        </Button>
        &nbsp;
        <Link to={`../list`}>
          <Button variant="outline-secondary" type="button">
            가계부달력이동
          </Button>
        </Link>
        &nbsp;
        <Link to={`/`}>
          <Button variant="outline-success" type="button">
            메인으로
          </Button>
        </Link>
        <br />
        <br />
      </Form>
    </div>
  );
};

export default MoneyCreateComponent;
