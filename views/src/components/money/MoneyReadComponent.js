import React, { useCallback, useEffect, useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import { Link, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deleteMoney, getMoney } from "../../api/moneyApi";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import useCustomMoney from "../../hooks/useCustomMoney";

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
  // console.log(
  //   "MoneyCreateComponent.js chooseReturn() 진입 매개변수 => ",
  //   number,
  //   "typeof -> ",
  //   typeof number
  // );
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  //console.log("MoneyCreateComponent.js chooseReturn() 진입 배열변경 => ", arr);
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
  //console.log(result);
};

const chooseSectorIncomeReturn = (chooseincome) => {
  if (!chooseincome) {
    return;
  }
  //console.log("chooseSectorIncomeReturn 매개변수 -> ", chooseincome);
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

const initState = {
  content: "",
  dateobject: "",
  updatedAt: "",
  id: "",
  income: 0,
  expense: 0,
};

const addMoney = (param) => {
  const earray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

  //console.log("addMoney() 매개변수", param);

  const spliceall = [];
  for (let d of earray) {
    //console.log("addMoney() 배열 ", earray);

    let iof = earray.indexOf(d);

    //console.log("addMoney() 내 배열인덱스", iof);
    param.filter((i) => {
      //console.log("addMoney() 내 whenchoose ", i.whenchoose);
      //console.log("addMoney() 내 배열값 ", d);

      if (i.whenchoose === d) {
        //console.log("addMoney() 내 일치");
        spliceall.push(d);
      }
    });
  }

  spliceall.forEach((a) => {
    const indexearray = earray.indexOf(a);
    earray.splice(indexearray, 1);
  });

  //console.log("addMoney 결과 => ", earray);
  return earray;
};

const addExerciseMap = (param) => {
  const earray = [1, 2, 3];

  for (let d of earray) {
    let iof = earray.indexOf(d);

    //console.log("d 인덱스", d);
    param.filter((i) => {
      if (i === d) earray.splice(iof);
    });
  }
  //console.log("earray 결과 => ", earray);
};

const convertDigit = (amount) => {
  return Number(amount).toLocaleString("ko-KR");
};

const MoneyReadComponent = () => {
  const [moneyParam, setMoneyParam] = useState({});

  //console.log("moneyParam -> ", moneyParam);
  const { dateobject } = useParams();
  const { exceptionHandle } = useCustomLogin();
  const { moveToMoneyRead, moveToMoneyList } = useCustomMoney();
  const [moneyDetailIncomeParam, setMoneyDetailIncomeParam] = useState([]);
  const [moneyDetailExpenseParam, setMoneyDetailExpenseParam] = useState([]);

  // console.log(
  //   "MoneyReadComponent.js useEffect() 진입 objectdate=> ",
  //   dateobject
  // );

  //api
  useEffect(() => {
    const getExerciseEI = async () =>
      await getMoney(dateobject)
        .then((result) => {
          if (result !== null) {
            // console.log(
            //   "MoneyReadComponent.js useEffect 내 getMoney axios 호출후 then() => ",
            //   result
            // );

            moneyParam["id"] = result.id;
            setMoneyParam(moneyParam);

            result.result.forEach((i) => {
              if (i.choose === "1") {
                //let newIncome = moneyDetailIncomeParam.concat(i);
                //setMoneyDetailIncomeParam(newIncome);
                setMoneyDetailIncomeParam((income) => [...income, i]);
              }
              if (i.choose === "2") {
                // let newExpense = moneyDetailExpenseParam.concat(i);
                // setMoneyDetailExpenseParam(newExpense);
                setMoneyDetailExpenseParam((expense) => [...expense, i]);
              }
            });
          } //if 결과 null 아닐경우
        })
        .catch((err) => {
          // console.log(
          //   "MoneyReadComponent.js useEffect 내 getMoney axios 호출후 catch() => ",
          //   err
          // );
          exceptionHandle(err);
        }); //catch

    getExerciseEI();

    return () => {
      setMoneyParam([]);
      setMoneyDetailExpenseParam([]);
      setMoneyDetailIncomeParam([]);
    };
  }, []);

  const deleteOnClick = (bigchoose) => {
    // console.log(
    //   "MoneyReadComponent.js deleteOnClick() 삭제할 가계부 진입 bigchoose -> ",
    //   bigchoose
    // );
    if (window.confirm("해당 가계부를 삭제합니까?")) {
      deleteMoney({ dateobject, bigchoose })
        .then((result) => {
          // console.log(
          //   "MoneyReadComponent.js deleteOnClick() then() => ",
          //   result
          // );
          if (result.result === "success") {
            alert(dateobject + "일자의 가계부가 삭제되었습니다.");

            moveToMoneyList();
          }
          if (result.error === "error") {
            alert(dateobject + "일자의 가계부 삭제를 실패했습니다.");
            moveToMoneyRead(dateobject);
          }
        })
        .catch((err) => {
          //console.log("MoneyReadComponent.js deleteOnClick() catch() => ", err);
          alert(dateobject + "일자의 가계부 삭제를 실패했습니다.");
          moveToMoneyRead({
            dateobject: dateobject,
            id: moneyParam.id,
          });
        });
    } //window.confirm
  };

  return (
    <div className="container">
      <br />
      <br />
      <h4>가계부조회</h4>
      <hr />
      <br />
      <Link to={"../list"}>
        <Button
          variant="outline-secondary"
          type="button"
          // onClick={handleDetailOnClick}
        >
          가계부달력이동
        </Button>
      </Link>
      &nbsp;&nbsp;{" "}
      {moneyDetailIncomeParam.length === 0 && (
        <Link to={`../create/${dateobject}?choose=1`}>
          <Button variant="outline-primary" type="button">
            <Image
              src="/img/star-struck.png"
              style={{ width: "20px", height: "20px" }}
              rounded
            />
            수입가계부작성하러가기
          </Button>
        </Link>
      )}
      {moneyDetailExpenseParam.length === 0 && (
        <Link to={`../create/${dateobject}?choose=2`}>
          <Button variant="outline-primary" type="button">
            <Image
              src="/img/rolling-eyes.png"
              style={{ width: "20px", height: "20px" }}
              rounded
            />
            지출가계부작성하러가기
          </Button>
        </Link>
      )}
      <br />
      <br />
      {moneyDetailIncomeParam.length !== 0 && (
        <>
          <Card
            style={{
              width: "35rem",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <>
                  {dateobject} 일자 &nbsp;
                  <Image
                    src="/img/star-struck.png"
                    style={{ width: "20px", height: "20px" }}
                    rounded
                  />
                  수입가계부
                </>
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>항목</th>
                    <th>내용</th>
                    <th>금액</th>
                  </tr>
                </thead>
                <tbody>
                  {moneyDetailIncomeParam.map((i) => (
                    <React.Fragment key={i.id}>
                      <tr>
                        <td> {chooseSectorIncomeReturn(i.choosesector)}</td>
                        <td> {i.content}</td>
                        <td>{convertDigit(i.amount)}원</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </Table>
            </ListGroup>
            <Card.Body style={{ textAlign: "center" }}>
              <Link to={`../modify/${dateobject}/1`}>
                <Button
                  variant="outline-primary"
                  type="button"
                  //onClick={handleDetailOnClick}
                >
                  수정하러가기
                </Button>
              </Link>
              &nbsp; &nbsp;
              <Button
                variant="outline-warning"
                type="button"
                onClick={() => deleteOnClick(1)}
              >
                삭제
              </Button>
            </Card.Body>
          </Card>
          &nbsp; &nbsp;
        </>
      )}
      {moneyDetailExpenseParam.length !== 0 && (
        <>
          <Card
            style={{
              width: "35rem",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {dateobject} 일자 &nbsp;
                <Image
                  src="/img/rolling-eyes.png"
                  style={{ width: "20px", height: "20px" }}
                  rounded
                />
                지출가계부
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>항목</th>
                    <th>내용</th>
                    <th>금액</th>
                  </tr>
                </thead>
                <tbody>
                  {moneyDetailExpenseParam.map((i) => (
                    <React.Fragment key={i.id}>
                      <tr>
                        <td> {chooseSectorExpenseReturn(i.choosesector)}</td>
                        <td> {i.content}</td>
                        <td>{convertDigit(i.amount)}원</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </Table>
            </ListGroup>

            <Card.Body style={{ textAlign: "center" }}>
              <Link to={`../modify/${dateobject}/2`}>
                <Button
                  variant="outline-primary"
                  type="button"
                  //onClick={handleDetailOnClick}
                >
                  수정하러가기
                </Button>
              </Link>
              &nbsp; &nbsp;
              <Button
                variant="outline-warning"
                type="button"
                onClick={() => deleteOnClick(2)}
              >
                삭제
              </Button>
            </Card.Body>
          </Card>
          &nbsp; &nbsp;
        </>
      )}
      <br />
      <br />
      {/* {moneyParam &&
        moneyParam.map((i) => (
          <>
            <React.Fragment key={i.id}>
              <Card style={{ width: "18rem", display: "inline-block" }}>
                
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item style={{ textAlign: "center" }}>
                    {chooseReturn(i.choose)}
                  </ListGroup.Item>

                  <ListGroup.Item style={{ textAlign: "center" }}>
                    {" "}
                    {i.minute}분
                  </ListGroup.Item>
                  <ListGroup.Item style={{ textAlign: "center" }}>
                    {i.content}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body style={{ textAlign: "center" }}>
                <Card.Link href="#">운동달력이동</Card.Link> 
                  <Link to={`../modify/${i.dateobject}`}>
                    <Button
                      variant="outline-primary"
                      type="button"
                      onClick={handleDetailOnClick}
                    >
                      수정
                    </Button>
                  </Link>
                  &nbsp; &nbsp;
                  <Button
                    variant="outline-warning"
                    type="button"
                    onClick={() => deleteOnClick(i.whenchoose)}
                  >
                    삭제
                  </Button>
                </Card.Body>
              </Card>
            </React.Fragment>
            &nbsp; &nbsp;
          </>
        ))} */}
      <br />
      <br />
    </div>
  );
};

export default MoneyReadComponent;
