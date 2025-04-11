import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import "../layout/stylesCalendar.css";
import Image from "react-bootstrap/Image";
import useCustomMove from "../../hooks/useCustomMove";
import Card from "react-bootstrap/Card";
import useCustomMoney from "../../hooks/useCustomMoney";
import useCustomLogin from "../../hooks/useCustomLogin";
import { choosecheck, getMoneyList } from "../../api/moneyApi";

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

const chooseSectorReturn = (number) => {
  console.log("MoneyListComponent.js chooseReturn() 진입 매개변수 => ", number);
  let result = "";
  for (let n of number) {
    switch (n) {
      case "1":
        return (result = "식비");
      case "2":
        return (result = "교육비");
      case "3":
        return (result = "공과금");
      case "4":
        return (result = "의류비");
      case "5":
        return (result = "생필품");
      case "6":
        return (result = "차량");
      case "7":
        return (result = "의료보험");
      case "8":
        return (result = "주거비");
      case "9":
        return (result = "도서문화오락");
      case "10":
        return (result = "기타");
      default:
        return null;
    }
  }
  console.log(result);
};

const makeCalendar = (d) => {
  let date = new Date(d);
  const currentYear = new Date(date).getFullYear(); //예)Mon Apr 01 2024 10:27:04 GMT+0900 (한국 표준시)
  const currentMonth = new Date(date).getMonth() + 1;
  const firstDay = new Date(date.setDate(1)).getDay(); //1 앞에0안붙는다

  //현재 달력첫째날
  let calfirst = "";
  function getCalfirst() {
    calfirst += `${currentYear}-`;

    if (currentMonth < 10) {
      calfirst += `0${currentMonth}`;
    } else {
      calfirst += `${currentMonth}`;
    }
    //calfirst += `01`
    return calfirst;
  } //calfirst 현재달력첫날

  const lastDay = new Date(currentYear, currentMonth, 0).getDate();
  //console.log("lastDay값 ->"+lastDay)//30
  const limitDay = firstDay + lastDay;
  //console.log("limitDay값 ->"+limitDay)//31
  const nextDay = Math.ceil(limitDay / 7) * 7;
  //console.log("nextDay값 ->"+nextDay)//35 35-31=4칸 빈칸만들어진다.

  return { firstDay, lastDay, limitDay, nextDay };
};

const CalendarItem = (props) => {
  const { money, dateobject } = props.i; //api서버후 db에서 받은값

  return (
    money &&
    money.map((i) => (
      <React.Fragment key={i.id}>
        {i.id && (
          <>
            <Link
              to={`../read/${i.dateobject}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {i.expense === "0" ? (
                <></>
              ) : (
                <>
                  지출
                  <Image
                    src="/img/rolling-eyes.png"
                    style={{ width: "20px", height: "20px" }}
                    rounded
                  />
                  {i.expense}
                  <br />
                </>
              )}
              {i.income === "0" ? (
                <></>
              ) : (
                <>
                  수입
                  <Image
                    src="/img/star-struck.png"
                    style={{ width: "20px", height: "20px" }}
                    rounded
                  />
                  {i.income}
                  <br />
                </>
              )}
            </Link>
          </>
        )}
      </React.Fragment>
    ))
  );
};

const MoneyListComponent = () => {
  const [searchParams] = useSearchParams();
  const { moveToCreate } = useCustomMove();
  const { exceptionHandle } = useCustomLogin();
  const navigate = useNavigate();

  const { moveToMoneyList } = useCustomMoney();
  const [money, setMoney] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [fullcurrentDate, setFullCurrentDate] = useState("");

  const [searchMonth, setSearchMonth] = useState(0);
  const [searchYear, setSearchYear] = useState(0);
  const [beforeDateItemArray, setBeforeDateItemArray] = useState([]);
  const [afterDateItemArray, setAfterDateItemArray] = useState([]);
  const [dateItem, setDateItem] = useState([]);
  const [lastDay, setLastDay] = useState("");
  const [firstDay, setFirstDay] = useState("");
  const [nextDay, setNextDay] = useState("");
  const [limitDay, setLimitDay] = useState("");
  const [check, setCheck] = useState(0);
  const [make, setMake] = useState(false);

  let searchParamsYear = searchParams.get("year");
  let searchParamsMonth = searchParams.get("month");

  useLayoutEffect(() => {
    console.log("useLayoutEffect()  진입");
    setDateItem(() => []);
    setMake(() => false);
    let date = new Date();

    let basicYear = date.getFullYear();
    let basicMonth = date.getMonth() + 1;
    basicMonth = basicMonth < 10 ? "0" + basicMonth : basicMonth;
    date = `${basicYear}-${basicMonth}-01`;

    if (searchParamsYear !== null && searchParamsMonth !== null) {
      console.log(
        "useLayoutEffect() 쿼리파라미터 존재할경우 진입 -> ",
        searchParamsYear
      );
      console.log(
        "useLayoutEffect() 쿼리파라미터 존재할경우 진입 -> ",
        searchParamsMonth
      );
      setSearchMonth(() => Number(searchParamsMonth));
      setSearchYear(() => searchParamsYear);

      date = new Date(`${searchParamsYear}-${searchParamsMonth}-01`);
      console.log("date-> ", date);
    }
    setCurrentDate(() => date);
    const newdate = new Date(date);
    setCurrentYear("" + newdate.getFullYear());
    setCurrentMonth(newdate.getMonth() + 1);
    setFullCurrentDate(() => newdate);
  }, [searchParamsYear, searchParamsMonth]);

  useEffect(() => {
    if (fullcurrentDate !== "") {
      console.log(
        "useEffect() fullcurrentDate 존재할경우 =>  ",
        fullcurrentDate
      );

      const { firstDay, nextDay, limitDay, lastDay } =
        makeCalendar(fullcurrentDate);

      setLastDay(lastDay);
      setFirstDay(firstDay);
      setNextDay(nextDay);
      setLimitDay(limitDay);
    } //if

    return () => {
      console.log("useEffect() makeCalendar() 반환변수들 초기화");

      setLastDay(() => "");
      setFirstDay(() => "");
      setNextDay(() => "");
      setLimitDay(() => "");
    };
  }, [fullcurrentDate]);

  //달력에서 이전빈칸
  useEffect(() => {
    console.log("useEffect() 달력 데이터넣기 진입");

    if (make === true) {
      console.log("useEffect() 달력 데이터넣기 진입 make상태가 true진입");

      let dateItem = [];

      for (let i = 1, j = 0; i <= lastDay; i++, j++) {
        console.log("useEffect() 달력 데이터넣기 for문 진입");

        let currentYear = new Date(fullcurrentDate).getFullYear();
        let currentMonth = new Date(fullcurrentDate).getMonth() + 1;
        currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
        let ichange = i < 10 ? "0" + i : i;
        let dateobject = `${currentYear}-${currentMonth}-${ichange}`;

        dateItem[j] = {
          dateitem: i,
          dateobject: dateobject,
          money: money.filter((a) => a.dateobject === dateobject),
        };
      }
      console.log("dateItem -> ", dateItem);
      setDateItem(() => dateItem);

      const beforeDateItem = firstDay - 0;
      let beforeDateItemArray = [];

      if (beforeDateItem !== 0) {
        for (let i = 1, j = 0; i <= beforeDateItem; i++, j++) {
          beforeDateItemArray[j] = i;
        }
      }
      setBeforeDateItemArray(() => beforeDateItemArray);

      //달력에서 이후빈칸
      const afterDateItem = nextDay - limitDay;
      let afterDateItemArray = [];

      if (afterDateItem !== 0) {
        for (let i = 1, j = 0; i <= afterDateItem; i++, j++) {
          afterDateItemArray[j] = i;
        }
      }
      setAfterDateItemArray(() => afterDateItemArray);
    }
  }, [make]);

  useEffect(() => {
    if (currentDate !== "") {
      console.log(
        "useEffect() 진입 axios 비동기요청 currentDate 존재할경우 ->",
        currentDate
      );
      const getMoneyListEI = async () =>
        await getMoneyList({ currentDate })
          .then((result) => {
            console.log("MoneyListComponent.js then()진입 ", result);

            if (Array.isArray(result)) {
              let moneyResult = result.map((i) => {
                return {
                  ...i,
                  income: Number(i.income).toLocaleString("ko-KR"),
                  expense: Number(i.expense).toLocaleString("ko-KR"),
                };
              });
              console.log(
                "서버에서 데이터 받고 새로운 배열 담은 결과 => ",
                moneyResult
              );
              setMoney(() => moneyResult);
              setMake(true);
            } else {
              setMake(true);
            } //if
          }) //then
          .catch((err) => {
            console.log("MoneyListComponent.js catch()진입 ", err);
            exceptionHandle(err);
          });
      getMoneyListEI();
    } //if

    return () => {
      setMoney([]);
    };
  }, [currentDate]);

  // 이전달 이동
  const BeforeMonthMove = (currentDate) => {
    console.log("BeforeMonthMove() 진입  => ", currentDate);
    const tempdate = new Date(currentDate);
    let beforechangeDate = new Date(tempdate.setMonth(tempdate.getMonth() - 1));
    let beforecurrentYear = new Date(beforechangeDate).getFullYear();
    console.log(
      "BeforeMonthMove() 진입 beforecurrentYear => ",
      beforecurrentYear
    );

    let beforechangeMonth = new Date(beforechangeDate).getMonth() + 1;
    beforechangeMonth =
      beforechangeMonth < 10 ? "0" + beforechangeMonth : beforechangeMonth;
    console.log(
      "BeforeMonthMove() 진입 beforechangeMonth => ",
      beforechangeMonth
    );

    navigate(`?year=${beforecurrentYear}&month=${beforechangeMonth}`);
  };

  //다음달이동
  const NextMonthMove = (currentDate) => {
    console.log("NextMonthMove() 진입 currentDate ->", currentDate);
    const tempdate = new Date(currentDate);

    let afterchangeDate = new Date(tempdate.setMonth(tempdate.getMonth()));
    console.log("NextMonthMove() 진입 afterchangeDate ->", afterchangeDate);

    let aftercurrentYear = new Date(afterchangeDate).getFullYear();
    console.log("NextMonthMove() 진입 aftercurrentYear ->", aftercurrentYear);

    let afterchangeMonth = new Date(afterchangeDate).getMonth() + 2;
    afterchangeMonth =
      afterchangeMonth < 10 ? "0" + afterchangeMonth : afterchangeMonth;
    console.log("NextMonthMove() 진입 afterchangeMonth ->", afterchangeMonth);

    navigate(`?year=${aftercurrentYear}&month=${afterchangeMonth}`);
  };

  const onClickDate = (dateobject) => {
    console.log(
      "MoneyListComponent.js 일자버튼 클릭 onClickDate() 함수진입 -> ",
      dateobject
    );
    choosecheck({ dateobject })
      .then((result) => {
        console.log("MoneyListComponent.js then() 결과 ", result);
        if (
          Number(result.result?.income) > 0 &&
          Number(result.result?.expense) > 0
        ) {
          alert(dateobject + " 일자에 수입 지출 모두 작성되어 있습니다!");
        }
      })
      .catch((e) => {
        console.log("MoneyListComponent.js catch() 에러 ", e);
      });
  };

  return (
    <div className="container">
      {" "}
      <section className="py-5">
        <div className="calrap" style={{ margin: "0 auto" }}>
          <div className="calheader">
            <div className="calbtn calprevDay">
              <button onClick={() => BeforeMonthMove(currentDate)}>이전</button>
            </div>
            <h2 className="caldateTitle">
              {currentYear}년 {currentMonth}월
            </h2>
            <div className="calbtn calnextDay">
              <button onClick={() => NextMonthMove(currentDate)}>이후</button>
            </div>
          </div>
          <br />
          <h6 style={{ textAlign: "right", color: "tomato" }}>
            <i>일자 클릭시 머니등록페이지로 이동합니다!</i>
          </h6>
          <br />

          <div className="calgrid caldateHead">
            <div key={"0"}>일</div>
            <div key={"1"}>월</div>
            <div key={"2"}>화</div>
            <div key={"3"}>수</div>
            <div key={"4"}>목</div>
            <div key={"5"}>금</div>
            <div key={"6"}>토</div>
          </div>

          <div className="calgrid caldateBoard">
            {beforeDateItemArray.map((i, index) => (
              <div key={index}></div>
            ))}

            {dateItem.map((i, index) => (
              <div key={index}>
                {i.money && i.money.length !== 0 ? (
                  <>
                    <button
                      style={{ all: "unset" }}
                      type="button"
                      onClick={() => onClickDate(i.dateobject)}
                    >
                      {i.dateitem}
                    </button>
                    {/* <Link
                      to={`../create/${i.dateobject}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {i.dateitem}
                    </Link> */}
                    <br />
                    <CalendarItem key={index} i={i} />
                  </>
                ) : (
                  <Link
                    to={`../create/${i.dateobject}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {i.dateitem}
                  </Link>
                )}
              </div>
            ))}
            {afterDateItemArray.map((i, index) => (
              <div key={index}></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoneyListComponent;
