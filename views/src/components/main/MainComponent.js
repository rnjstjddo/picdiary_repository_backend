import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import useCustomLogin from "../../hooks/useCustomLogin";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { weatherapi } from "../../api/openApi";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import { getTodayManagement } from "../../api/mainApi";
import { Link } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

// const switchFn = (category, obsrValue) => {
//   let result = "";
//    console.log("T1H 진입");

//   switch (category) {
//     case "T1H":
//       result += `기온 : ${obsrValue}`;
//       break;
//     case "PTY":
//       result += `강수 : ${obsrValue}`;
//       break;
//     case "REH":
//       result += `습도 : ${obsrValue}`;
//       break;
//     case "RN1":
//       result += `강수량 : ${obsrValue}`;
//       break;
//     case "WSD":
//       result += `풍속 : ${obsrValue}`;
//       break;
//     default:
//       break;
//   }
//   console.log("switchFn 결과 -> ", result);
//   return result;
// }; //switchFn

const switchFn = (obsrValue) => {
  switch (obsrValue) {
    case "1":
      return "비";
      break;
    case "2":
      return "비/눈";
      break;
    case "3":
      return "눈";
      break;
    case "4":
      return "빗방울";
      break;
    case "5":
      return "빗방울&눈날림";
      break;
    case "6":
      return "눈날림";
      break;

    default:
      break;
  }
};

const chooseReturn = (number) => {
  if (!number) {
    return;
  }
  switch (number) {
    case "1":
      return "달리기";
    case "2":
      return "웨이트";
    case "3":
      return `구기종목or복싱`;
    case "4":
      return "등산";
    case "5":
      return "필라테스요가";
    case "6":
      return "그외";

    default:
      return null;
  }
};

const MainComponent = () => {
  const { loginState, isLogin } = useCustomLogin();
  //console.log(isLogin);

  const { exceptionHandle } = useCustomLogin();
  //console.log(loginState); //user, accessToken 2개 들어있다 이렇게 슬라이스에보관

  //공공api
  const [weatherVisible, setWeatherVisible] = useState(false);
  const [weatherResult, setWeatherResult] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [weatherTime, setWeatherTime] = useState("");
  const [weatherDate, setWeatherDate] = useState("");
  const [weatherStandard, setWeatherStandard] = useState("");
  const [selectMonth, setSelectMonth] = useState(3);
  const [selectYear, setSelectYear] = useState(2025);
  const [dateArray, setDateArray] = useState([]);
  const [diaryResultArray, setDiaryResultArray] = useState([]);
  const [exerciseResultArray, setExerciseResultArray] = useState([]);
  const [findDate, setFindDate] = useState("");
  const [todayDate, setTodayDate] = useState("");
  //const [selectDate, setSelectDate] = useState("");
  //diet
  //const [dietId, setDietId] = useState("");
  const { moveToLogin } = useCustomMove();
  const [dietMorning, setDietMorning] = useState([]);
  const [dietLunch, setDietLunch] = useState([]);
  const [dietEvening, setDietEvening] = useState([]);
  const [dietSnack, setDietSnack] = useState([]);
  //money
  const [moneyIncome, setMoneyIncome] = useState([]);
  const [moneyExpense, setMoneyExpense] = useState([]);
  //const [moneyId, setMoneyId] = useState("");
  const [moneySum, setMoneySum] = useState({});
  //moneySum  sumincome sumexpense monthsumincome monthsumexpense

  const [alertOpenApi, setAlertOpenApi] = useState(false);

  //  base_date: "20250310",
  // base_time: "2200",

  useLayoutEffect(() => {
    //console.log("MainComponent.js useLayoutEffect 기존데이터 초기화 진입");
    if (!isLogin) {
      alert("로그인이 필요합니다!");
      return moveToLogin();
    }
  }, []);
  useLayoutEffect(() => {
    // console.log(
    //   "MainComponent.js  useLayoutEffect 날짜구해서 state 데이터넣기 진입"
    // );

    let today = new Date();
    // 현재 날짜를 가져옵니다.

    //setTodayDate(() => today.getDate());

    let hour =
      today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    let minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    minutes = minutes < 30 ? "00" : "30";

    setWeatherTime(() => hour + minutes); //위치기반한 날씨위한 시간
    setWeatherStandard(() => `${hour}시 ${minutes}분`); //위치기반한 날씨위한 날짜
    setCurrentDate(
      //화면에 보일 오늘날짜
      () =>
        `${today.getFullYear()}년 ${
          today.getMonth() + 1
        }월 ${today.getDate()}일`
    );

    let monthfinal =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1) // `"0"${today.getMonth() + 1}`
        : today.getMonth() + 1;
    let datefinal =
      today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    setWeatherDate(() => `${today.getFullYear()}${monthfinal}${datefinal}`);
    setFindDate(() => `${today.getFullYear()}-${monthfinal}-${datefinal}`);
    setSelectMonth(today.getMonth() + 1);
    setSelectYear(today.getFullYear());
  }, []);

  useEffect(() => {
    const today = new Date();

    setTodayDate(() => today.getDate());
  }, []);

  useEffect(() => {
    //console.log("MainComponent.js useEffect() 위치기반 날씨 axios 요청 진입");

    const weatherapiEI = async () => {
      await weatherapi({ weatherDate, weatherTime }).then((result) => {
        // console.log(
        //   "MainComponent.js useEffect() 위치기반 날씨 axios 요청 후 결과 -> ",
        //   result
        // );

        if (Array.isArray(result) && result.length !== 0) {
          let newObj = [];

          result?.forEach((r) => {
            let newO = {};
            if (r.category === "T1H") {
              newO["category"] = "온도";
              newO["obsrValue"] = r.obsrValue + "(도)";
            }
            if (r.category === "REH") {
              newO["category"] = "습도";
              newO["obsrValue"] = r.obsrValue + "(%)";
            }
            if (r.category === "WSD") {
              newO["category"] = "풍속";
              newO["obsrValue"] = r.obsrValue + "(m/s)";
            }
            if (r.category === "PTY" && r.obsrValue > 1) {
              newO["category"] = "비/눈";
              newO["obsrValue"] = switchFn(r.obsrValue);
            }
            if (r.category === "RN1" && newObj["PTY"]) {
              newO["category"] = "강수량";
              newO["obsrValue"] = r.obsrValue + "(시간당mm)";
            }
            //console.log("newO 객체 => ", newO);
            if (Object.keys(newO).length !== 0) {
              newObj.push(newO);
            }
          });

          setWeatherResult(() => newObj);
          setWeatherVisible(true);

          // console.log(
          //   "weatherapiEI setState 후 출력 weatherResult => ",
          //   weatherResult
          // );
        } //공공api데이터 존재할경우진입
        else {
          //결과 undefined
          setAlertOpenApi(true);
        }
      }); //then
    }; //weatherapiEI

    if (weatherDate !== "" && weatherTime !== "") {
      weatherapiEI();
    }
  }, [weatherDate]);

  useEffect(() => {
    //console.log("useLayoutEffect() 서버axios요청으로 데이터 가져오기진입=>");

    const getTodayManagementEI = async () => {
      await getTodayManagement(findDate)
        .then((result) => {
          //console.log("useEffect()진입 axios 결과 -> ", result);

          if (result.message === "") {
            //console.log("서버에서 res.locals 담긴 jwtemail 없어서 그냥 보임");
          } else {
            //if (result) {
            //console.log("useEffect()진입 axios 결과 존재할경우 진입");

            setDiaryResultArray(() => result.diary);

            if (result.diet.length !== 0) {
              //console.log("result.diet 넣기 진입");

              //setDietId(result.diet[0]?.Dietdetails[0]?.DietId);

              //아래로 수정
              //setDietId(result.diet[0].id);
              result.diet?.forEach((v) => {
                // console.log(
                //   "result.diet 넣기 진입 result.diet forEach 진입 => ",
                //   v
                // );

                v.Dietdetails.forEach((d) => {
                  // console.log(
                  //   "result.diet 넣기 진입 result.diet.Dietdetails forEach 진입 => ",
                  //   d
                  // );

                  if (d.choose === "1") {
                    // console.log(
                    //   "result.diet 넣기 진입 result.diet.Dietdetails choose 1 진입"
                    // );

                    setDietMorning((prev) => [...prev, d]);
                  } else if (d.choose === "2") {
                    // console.log(
                    //   "result.diet 넣기 진입 result.diet.Dietdetails choose 2 진입"
                    // );

                    setDietLunch((prev) => [...prev, d]);
                  } else if (d.choose === "3") {
                    // console.log(
                    //   "result.diet 넣기 진입 result.diet.Dietdetails choose 3 진입"
                    // );

                    setDietEvening((prev) => [...prev, d]);
                  } else {
                    // console.log(
                    //   "result.diet 넣기 진입 result.diet.Dietdetails choose 4 진입"
                    // );

                    setDietSnack((prev) => [...prev, d]);
                  }
                });
              });
            }

            //console.log("diet dietMorning-> ", dietMorning);
            //console.log("diet dietLunch-> ", dietLunch);
            //console.log("diet dietEvening-> ", dietEvening);
            //console.log("diet dietSnack-> ", dietSnack);

            if (result.money.length !== 0) {
              //console.log("money 넣기 진입");

              result.money?.forEach((v) => {
                // console.log(
                //   "result.money 넣기 진입 result.money forEach 진입 => ",
                //   v
                // );

                v.Moneydetails.forEach((d) => {
                  // console.log(
                  //   "result.money 넣기 진입 result.money.Moneydetails forEach 진입 => ",
                  //   d
                  // );

                  if (d.choose === "1") {
                    // console.log(
                    //   "result.money 넣기 진입 result.money.Moneydetails choose 1 진입"
                    // );
                    d.amount = Number(d.amount).toLocaleString("ko-KR");
                    setMoneyIncome((prev) => [...prev, d]);
                  } else if (d.choose === "2") {
                    // console.log(
                    //   "result.money 넣기 진입 result.money.Moneydetails choose 2 진입"
                    // );
                    d.amount = Number(d.amount).toLocaleString("ko-KR");

                    setMoneyExpense((prev) => [...prev, d]);
                  }
                });
              });

              //console.log("money moneyIncome-> ", moneyIncome);
              //console.log("money moneyExpense-> ", moneyExpense);

              let sum = {};

              if (result.money.length !== 0 && result.sum.length !== 0) {
                //console.log("sum 넣기 진입");

                sum["sumincome"] = Number(
                  result.money[0].income
                ).toLocaleString("ko-KR");
                sum["sumexpense"] = Number(
                  result.money[0].expense
                ).toLocaleString("ko-KR");
                sum["monthsumincome"] = Number(
                  result.sum[0].sumincome
                ).toLocaleString("ko-KR");
                sum["monthsumexpense"] = Number(
                  result.sum[0].sumexpense
                ).toLocaleString("ko-KR");
                setMoneySum(() => sum);
              }
              //sum  sumincome sumexpense monthsumincome monthsumexpense
              //setMoneyId(result.money[0]?.Moneydetails[0]?.MoneyId);
            } //money배열존재할 경우

            if (result.exercise.length !== 0) {
              //console.log("exercise 넣기 진입");

              result.exercise.forEach((v) => {
                let objectexercise = {};
                objectexercise["content"] = v.content;
                objectexercise["choose"] = v.choose;
                objectexercise["whenchoose"] = v.whenchoose;
                objectexercise["minute"] = v.minute;
                setExerciseResultArray((prev) => [...prev, objectexercise]);
              });
            } //if exericse state만들기
          }
        }) //then
        .catch((err) => {
          //console.log("useEffect()진입 axios 에러-> ", err);
          //          exceptionHandle(err);
        });
    }; //getTodayManagementEI()

    if (findDate !== "") {
      getTodayManagementEI();
    }

    return () => {
      setDietEvening([]);
      setDietMorning([]);
      setDietSnack([]);
      setDietLunch([]);
      setMoneyExpense([]);
      setMoneyIncome([]);
      setExerciseResultArray([]);
      setDiaryResultArray([]);
      setExerciseResultArray([]);
    };
  }, [findDate]);

  useEffect(() => {
    //console.log("useEffect()진입 일자버튼 출력");

    const getDate = async () => {
      let getDateResult = [];
      let firstDay = new Date(selectYear, selectMonth - 1, 1).getDate();
      let lastDay = new Date(selectYear, selectMonth, 0).getDate();
      //console.log("getDate() firstDay => ", firstDay);
      //console.log("getDate() lastDay=> ", lastDay);

      for (let i = firstDay; i <= lastDay; i++) {
        getDateResult.push(i);
      }
      setDateArray(() => getDateResult);
    };
    getDate(); //해당 월에해당하는 일자들 배열로 setState()넣기

    return () => {
      setDateArray([]);
    };
  }, []);

  const handleSelectYear = (e) => {
    setSelectYear(() => Number(e.target.value));

    const getDate = async () => {
      let getDateResult = [];
      let firstDay = new Date(selectYear, selectMonth - 1, 1).getDate();
      let lastDay = new Date(selectYear, selectMonth, 0).getDate();
      //console.log("getDate() firstDay => ", firstDay);
      //console.log("getDate() lastDay=> ", lastDay);

      for (let i = firstDay; i <= lastDay; i++) {
        getDateResult.push(i);
      }
      setDateArray(() => getDateResult);
    };
    getDate(); //해당 월에해당하는 일자들 배열로 setState()넣기
  };

  const handleSelectMonth = (e) => {
    setSelectMonth(() => Number(e.target.value));

    const getDate = async () => {
      let getDateResult = [];
      let firstDay = new Date(selectYear, selectMonth - 1, 1).getDate();
      let lastDay = new Date(selectYear, selectMonth, 0).getDate();
      //console.log("getDate() firstDay => ", firstDay);
      //console.log("getDate() lastDay=> ", lastDay);

      for (let i = firstDay; i <= lastDay; i++) {
        getDateResult.push(i);
      }
      setDateArray(() => getDateResult);
    };
    getDate(); //해당 월에해당하는 일자들 배열로 setState()넣기
  };

  //달력일버튼나열
  const handleDateManagement = (d) => {
    //console.log("handleDateManagement()진입 선택한 일자 -> ", d);
    setTodayDate(() => d);
    let selectMonthAdd = selectMonth < 10 ? "0" + selectMonth : selectMonth;
    let dAdd = d < 10 ? "0" + d : d;

    setFindDate(() => `${selectYear}-${selectMonthAdd}-${dAdd}`);
  };

  // useEffect(() => {
  //   console.log("useEffect()진입 findDate 변경으로 axios 호출위해");

  //   const getTodayManagementUE = async () => {
  //     await getTodayManagement(findDate)
  //       .then((result) => {
  //         console.log("useEffect()진입 axios 결과 -> ", result);

  //         //다어이리
  //         setDiaryResultArray(() => result.diary);

  //         //식단
  //         if (result.diet.length !== 0) {
  //           //setDietId(result.diet[0]?.Dietdetails[0]?.DietId);

  //           //아래수정
  //           //setDietId(result.diet[0].id);

  //           result.diet.forEach((v) => {
  //             v.Dietdetails.forEach((d) => {
  //               if (d.choose === "1") {
  //                 setDietMorning((prev) => [...prev, d]);
  //               } else if (d.choose === "2") {
  //                 setDietLunch((prev) => [...prev, d]);
  //               } else if (d.choose === "3") {
  //                 setDietEvening((prev) => [...prev, d]);
  //               } else {
  //                 setDietSnack((prev) => [...prev, d]);
  //               }
  //             });
  //           });
  //           //setDietId(result.diet[0]?.Dietdetails[0]?.DietId);
  //         }
  //         //가계부
  //         if (result.money.length !== 0) {
  //           result.money?.forEach((v) => {
  //             v.Moneydetails.forEach((d) => {
  //               if (d.choose === "1") {
  //                 d.amount = Number(d.amount).toLocaleString("ko-KR");
  //                 setMoneyIncome((prev) => [...prev, d]);
  //               } else if (d.choose === "2") {
  //                 d.amount = Number(d.amount).toLocaleString("ko-KR");

  //                 setMoneyExpense((prev) => [...prev, d]);
  //               }
  //             });
  //           });

  //           let sum = {};

  //           if (result.money.length !== 0 && result.sum.length !== 0) {
  //             sum["sumincome"] = Number(result.money[0].income).toLocaleString(
  //               "ko-KR"
  //             );
  //             sum["sumexpense"] = Number(
  //               result.money[0].expense
  //             ).toLocaleString("ko-KR");
  //             sum["monthsumincome"] = Number(
  //               result.sum[0].sumincome
  //             ).toLocaleString("ko-KR");
  //             sum["monthsumexpense"] = Number(
  //               result.sum[0].sumexpense
  //             ).toLocaleString("ko-KR");
  //             setMoneySum(() => sum);
  //           }
  //           //sum  sumincome sumexpense monthsumincome monthsumexpense
  //           //setMoneyId(result.money[0]?.Moneydetails[0]?.MoneyId);
  //         }
  //         //운동
  //         if (result.exercise.length !== 0) {
  //           result.exercise.forEach((v) => {
  //             let objectexercise = {};
  //             objectexercise["content"] = v.content;
  //             objectexercise["choose"] = v.choose;
  //             objectexercise["whenchoose"] = v.whenchoose;
  //             objectexercise["minute"] = v.minute;
  //             setExerciseResultArray((prev) => [...prev, objectexercise]);
  //           });
  //         } //if exericse state만들기
  //       })
  //       .catch((err) => {
  //         console.log("useEffect()진입 axios 에러-> ", err);
  //       });
  //   };

  //   if (findDate !== "") {
  //     getTodayManagementUE();
  //   }
  // }, [findDate]);

  return (
    <>
      <Container>
        <br />
        <br />
        {isLogin && loginState ? (
          <>
            <span style={{ fontSize: "25px" }}>
              {" "}
              {loginState} 님의 하루관리
            </span>
            <br />
            <br />
          </>
        ) : (
          <>
            <span style={{ fontSize: "25px" }}>하루관리</span>
            <br />
            <br />
          </>
        )}
        <br />
        &nbsp;&nbsp;{" "}
        <Image
          src="/img/calendar.png"
          style={{ width: "30px", height: "30px" }}
          rounded
        />
        &nbsp;오늘은 &nbsp;
        {currentDate} &nbsp;&nbsp;
        {alertOpenApi && (
          <span style={{ color: "crimson", fontStyle: "italic" }}>
            *오늘의 날씨정보를 보시려면 팝업창의 위치확인을 허용해주세요!{" "}
          </span>
        )}
        {weatherVisible &&
          weatherResult.length !== 0 &&
          weatherResult?.map((w, i) => (
            <>
              {w.category === "비/눈" &&
                w.obsrValue === "7" &&
                w.obsrValue === "3" && (
                  <span key={`${i}_1`}>
                    <Image
                      src="/img/cloudsnow.png"
                      style={{ width: "30px", height: "30px" }}
                      rounded
                    />
                    {w.category} {w.obsrValue}
                  </span>
                )}
              {w.category === "비/눈" &&
                w.obsrValue === "1" &&
                w.obsrValue === "2" &&
                w.obsrValue === "5" &&
                w.obsrValue === "6" && (
                  <span key={`${i}_2`}>
                    <Image
                      src="/img/rain.png"
                      style={{ width: "30px", height: "30px" }}
                      rounded
                    />
                    {w.category} {w.obsrValue}&nbsp;&nbsp;
                  </span>
                )}
              {!w.category === "비/눈" && (
                <span key={`${i}_3`}>
                  <Image
                    src="/img/sun.png"
                    style={{ width: "30px", height: "30px" }}
                    rounded
                  />
                  {w.category} {w.obsrValue}&nbsp;&nbsp;
                </span>
              )}
              {w.category === "온도" && (
                <span key={`${i}_4`}>
                  <Image
                    src="/img/ther.png"
                    style={{ width: "30px", height: "30px" }}
                    rounded
                  />
                  {w.category} {w.obsrValue}&nbsp;&nbsp;
                </span>
              )}{" "}
              {w.category === "습도" && (
                <span key={`${i}_5`}>
                  <Image
                    src="/img/humidity.png"
                    style={{ width: "30px", height: "30px" }}
                    rounded
                  />
                  {w.category} {w.obsrValue} &nbsp;&nbsp;
                </span>
              )}{" "}
              {w.category === "풍속" && (
                <span key={`${i}_6`}>
                  <Image
                    src="/img/wind.png"
                    style={{ width: "30px", height: "30px" }}
                    rounded
                  />
                  &nbsp;
                  {w.category} {w.obsrValue}&nbsp;&nbsp;
                </span>
              )}
            </>
          ))}
        {weatherVisible && `(${weatherStandard} 기준)`}
      </Container>

      <hr />
      <br />

      <Container>
        <Form.Select
          style={{ width: "200px", display: "inline-block" }}
          value={selectYear}
          onChange={(e) => handleSelectYear(e)}
        >
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </Form.Select>
        <Form.Select
          style={{ width: "200px", display: "inline-block" }}
          value={selectMonth}
          onChange={(e) => handleSelectMonth(e)}
        >
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"4"}>4</option>
          <option value={"5"}>5</option>
          <option value={"6"}>6</option>
          <option value={"7"}>7</option>
          <option value={"8"}>8</option>
          <option value={"9"}>9</option>
          <option value={"10"}>10</option>
          <option value={"11"}>11</option>
          <option value={"12"}>12</option>
        </Form.Select>
        &nbsp;&nbsp;
        <span style={{ color: "red", fontStyle: "italic" }}>
          *날짜클릭시 작성한 하루관리를 한눈에 볼수있습니다!
        </span>
        <br />
        <br />
        {Array.isArray(dateArray) &&
          dateArray.length !== 0 &&
          dateArray.map((d, i) =>
            d === todayDate ? (
              <span key={i} style={{ fontSize: "20px" }}>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleDateManagement(d)}
                >
                  {d}
                </Button>
                &nbsp;
              </span>
            ) : (
              <span key={`${i}_1`} style={{ fontSize: "20px" }}>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => handleDateManagement(d)}
                >
                  {d}
                </Button>
                &nbsp;
              </span>
            )
          )}
        <br />
        <br />
      </Container>

      <Container style={{ textAlign: "center" }}>
        {Array.isArray(diaryResultArray) && diaryResultArray.length === 0 ? (
          <>
            <Card style={{ width: "18rem", display: "inline-block" }}>
              <Card.Body>
                <Card.Title>사진다이어리</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  오늘 다이어리를 아직 작성하지 않았어요! <br />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`../diary/create/${findDate}`}
                  >
                    <Button size="sm" variant="outline-primary">
                      다이어리작성{" "}
                    </Button>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </>
        ) : (
          diaryResultArray.length !== 0 &&
          diaryResultArray.map((d, i) => (
            <Card style={{ width: "18rem", display: "inline-block" }} key={i}>
              {d.picture ? (
                <Card.Img
                  variant="top"
                  //src={`http://localhost:8001/img/${d.picture}`}
                  src={`https://picdiary-bucket.s3.ap-northeast-2.amazonaws.com/${d.path}`}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <React.Fragment key={i}>업로드하지 않음😅</React.Fragment>
              )}

              <Card.Body>
                <Card.Title>사진다이어리</Card.Title>
                {/* <Card.Text>내용</Card.Text> */}
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{d.content}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link
                  style={{ textDecoration: "none" }}
                  href={`../diary/modify/${d.id}`}
                >
                  <Button variant="outline-warning" size="sm">
                    수정/삭제
                  </Button>
                </Card.Link>

                <Card.Link
                  href={"../diary/list"}
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="outline-primary" size="sm">
                    다이어리달력이동
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          ))
        )}
        &nbsp; &nbsp;
        {Array.isArray(dietMorning) &&
        dietMorning.length === 0 &&
        Array.isArray(dietEvening) &&
        dietEvening.length === 0 &&
        Array.isArray(dietLunch) &&
        dietLunch.length === 0 &&
        Array.isArray(dietSnack) &&
        dietSnack.length === 0 ? (
          <>
            <Card style={{ width: "18rem", display: "inline-block" }}>
              <Card.Body>
                <Card.Title>식단</Card.Title>
              </Card.Body>{" "}
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  오늘 식단을 아직 작성하지 않았어요! <br />
                  <Button size="sm" variant="outline-primary">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`../diet/create/${findDate}`}
                    >
                      식단작성
                    </Link>
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </>
        ) : (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Body>
              <Card.Title>식단</Card.Title>
              <Card.Text>(g/ml생략)</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ textAlign: "left" }}>
                아침
              </ListGroup.Item>
              <ListGroup.Item style={{ textAlign: "right" }}>
                {dietMorning.length !== 0 ? (
                  dietMorning.map((d, i) => (
                    <React.Fragment key={i}>
                      {d.content}
                      {d.quantity}
                      <br />
                    </React.Fragment>
                  )) //map
                ) : (
                  <React.Fragment>
                    <Link
                      style={{ textDecoration: "none" }}
                      href={`../diet/create/${findDate}`}
                    >
                      <Button variant="outline-success" size="sm">
                        아침작성
                      </Button>
                    </Link>
                  </React.Fragment>
                )}
              </ListGroup.Item>

              <ListGroup.Item style={{ textAlign: "left" }}>
                점심
              </ListGroup.Item>
              <ListGroup.Item style={{ textAlign: "right" }}>
                {dietLunch.length !== 0 ? (
                  dietLunch.map((d, i) => (
                    <React.Fragment key={i}>
                      {d.content}
                      {d.quantity}
                      <br />
                    </React.Fragment>
                  ))
                ) : (
                  <React.Fragment>
                    <Link
                      style={{ textDecoration: "none" }}
                      href={`../diet/create/${findDate}`}
                    >
                      <Button variant="outline-success" size="sm">
                        점심작성
                      </Button>
                    </Link>
                  </React.Fragment>
                )}
              </ListGroup.Item>
              <ListGroup.Item style={{ textAlign: "left" }}>
                저녁
              </ListGroup.Item>
              <ListGroup.Item style={{ textAlign: "right" }}>
                {dietEvening.length !== 0 ? (
                  dietEvening.map((d, i) => (
                    <React.Fragment key={i}>
                      {d.content} {d.quantity}
                      <br />
                    </React.Fragment>
                  ))
                ) : (
                  <React.Fragment>
                    <Link
                      style={{ textDecoration: "none" }}
                      href={`../diet/create/${findDate}`}
                    >
                      <Button variant="outline-success" size="sm">
                        저녁작성
                      </Button>
                    </Link>
                  </React.Fragment>
                )}
              </ListGroup.Item>

              <ListGroup.Item style={{ textAlign: "left" }}>
                간식
              </ListGroup.Item>
              <ListGroup.Item style={{ textAlign: "right" }}>
                {dietSnack.length !== 0 ? (
                  dietSnack.map((d, i) => (
                    <React.Fragment key={i}>
                      {d.content} {d.quantity}
                      <br />
                    </React.Fragment>
                  ))
                ) : (
                  <React.Fragment>
                    <Link
                      style={{ textDecoration: "none" }}
                      href={`../diet/create/${findDate}`}
                    >
                      <Button variant="outline-success" size="sm">
                        간식작성
                      </Button>
                    </Link>
                  </React.Fragment>
                )}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link
                style={{ textDecoration: "none" }}
                href={`../diet/readall/${findDate}`}
              >
                <Button variant="outline-warning" size="sm">
                  수정/삭제
                </Button>
              </Card.Link>
              <Card.Link
                style={{ textDecoration: "none" }}
                href={`../diet/list`}
              >
                <Button variant="outline-primary" size="sm">
                  식단달력이동
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        )}
        &nbsp; &nbsp;
        {Array.isArray(moneyIncome) &&
        moneyIncome.length === 0 &&
        Array.isArray(moneyExpense) &&
        moneyExpense.length === 0 ? (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Body>
              <Card.Title>가계부</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                오늘 가계부를 아직 작성하지 않았어요! <br />
                <Button size="sm" variant="outline-primary">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`../money/create/${findDate}`}
                  >
                    가계부작성
                  </Link>{" "}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ) : (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Body>
              <Card.Title>가계부</Card.Title>
              <Card.Text>(단위:원)</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {moneyIncome.length !== 0 ? (
                <ListGroup.Item style={{ textAlign: "left" }}>
                  {todayDate}일 &nbsp;총수입&nbsp;
                  {moneySum.sumincome}
                  <br />
                  <Card.Link
                    style={{ textDecoration: "none" }}
                    href={`../money/modify/${findDate}/1`}
                  >
                    <Button variant="outline-warning" size="sm">
                      수입수정/삭제
                    </Button>
                  </Card.Link>
                </ListGroup.Item>
              ) : (
                <></>
              )}
              <ListGroup.Item style={{ textAlign: "right" }}>
                {moneyIncome.length !== 0 ? (
                  moneyIncome.map((d, i) => (
                    <React.Fragment key={i}>
                      {d.content}&nbsp;
                      {d.amount}
                      <br />
                    </React.Fragment>
                  ))
                ) : (
                  <React.Fragment>
                    <Link
                      style={{ textDecoration: "none" }}
                      href={`../money/create?choose=1`}
                    >
                      <Button
                        variant="outline-success"
                        size="sm"
                        style={{ textAlign: "left" }}
                      >
                        수입작성
                      </Button>
                    </Link>
                  </React.Fragment>
                )}
              </ListGroup.Item>

              {moneyExpense.length !== 0 ? (
                <ListGroup.Item style={{ textAlign: "left" }}>
                  {todayDate}일 &nbsp;총지출&nbsp;
                  {moneySum.sumexpense}
                  <br />
                  <Card.Link
                    style={{ textDecoration: "none" }}
                    href={`../money/modify/${findDate}/2`}
                  >
                    <Button variant="outline-warning" size="sm">
                      지출수정/삭제
                    </Button>
                  </Card.Link>
                </ListGroup.Item>
              ) : (
                <></>
              )}
              <ListGroup.Item style={{ textAlign: "right" }}>
                {moneyExpense.length !== 0 ? (
                  moneyExpense.map((d, i) => (
                    <React.Fragment key={i}>
                      {d.content}&nbsp;
                      {d.amount}
                      <br />
                    </React.Fragment>
                  ))
                ) : (
                  <React.Fragment>
                    <Link
                      style={{ textDecoration: "none" }}
                      href={`../money/create?choose=2`}
                    >
                      <Button
                        variant="outline-success"
                        size="sm"
                        style={{ textAlign: "left" }}
                      >
                        지출작성
                      </Button>
                    </Link>
                  </React.Fragment>
                )}
              </ListGroup.Item>

              <ListGroup.Item style={{ textAlign: "left" }}>
                {selectMonth}월수입합계&nbsp;
                {moneySum.monthsumincome}
              </ListGroup.Item>

              <ListGroup.Item style={{ textAlign: "left" }}>
                {selectMonth}월지출합계&nbsp;
                {moneySum.monthsumexpense}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link
                style={{ textDecoration: "none" }}
                href={`../money/list`}
              >
                <Button variant="outline-primary" size="sm">
                  가계부달력이동
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        )}
        &nbsp; &nbsp;
        {Array.isArray(exerciseResultArray) &&
        exerciseResultArray.length !== 0 ? (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Body>
              <Card.Title>운동</Card.Title>
              {/* <Card.Text>운동</Card.Text> */}
            </Card.Body>
            <ListGroup className="list-group-flush">
              {exerciseResultArray.map((e, i) =>
                e.whenchoose === "1" ? (
                  <React.Fragment key={i}>
                    <ListGroup.Item>아침</ListGroup.Item>
                    <ListGroup.Item>
                      {chooseReturn(e.choose)}/{e.minute}(분)
                      <br />
                      {e.content}
                    </ListGroup.Item>
                  </React.Fragment>
                ) : (
                  <></>
                )
              )}
              {exerciseResultArray.map((e, i) =>
                e.whenchoose === "2" ? (
                  <React.Fragment key={i}>
                    <ListGroup.Item>점심</ListGroup.Item>
                    <ListGroup.Item>
                      {chooseReturn(e.choose)}/{e.minute}(분)
                      <br />
                      {e.content}
                    </ListGroup.Item>
                  </React.Fragment>
                ) : (
                  <></>
                )
              )}
              {exerciseResultArray.map((e, i) =>
                e.whenchoose === "3" ? (
                  <React.Fragment key={i}>
                    <ListGroup.Item>저녁</ListGroup.Item>
                    <ListGroup.Item>
                      {chooseReturn(e.choose)}/{e.minute}(분)
                      <br />
                      {e.content}
                    </ListGroup.Item>
                  </React.Fragment>
                ) : (
                  <></>
                )
              )}
            </ListGroup>
            <Card.Body>
              <Card.Link
                style={{ textDecoration: "none" }}
                href={`../exercise/${findDate}`}
              >
                <Button variant="outline-warning" size="sm">
                  수정/삭제
                </Button>
              </Card.Link>
              <Card.Link
                style={{ textDecoration: "none" }}
                href={`../exercise/list`}
              >
                <Button variant="outline-primary" size="sm">
                  운동달력이동
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        ) : (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Body>
              <Card.Title>운동</Card.Title>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                오늘 운동을 아직 작성하지 않았어요! <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={`../exercise/create/${findDate}`}
                >
                  <Button size="sm" variant="outline-primary">
                    운동작성{" "}
                  </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        )}
        <br />
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};
export default MainComponent;
