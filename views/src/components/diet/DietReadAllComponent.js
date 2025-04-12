import React, { useCallback, useEffect, useState } from "react";
import useCustomDiet from "../../hooks/useCustomDiet";
import useCustomLogin from "../../hooks/useCustomLogin";
import { Link, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deleteDiet, getDietAll } from "../../api/dietApi";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";

const chooseSwitch = (choose) => {
  if (!choose) {
    return;
  }
  console.log("chooseSwitch 매개변수 -> ", choose);
  switch (choose) {
    case "1":
      return "아침";
    case "2":
      return "점심";
    case "3":
      return "저녁";
    case "4":
      return "간식";
    default:
      return "아침";
  }
};
const chooseReturn = (number) => {
  //1234 이렇게 들어온다.
  console.log(
    "DietReadAllomponent.js chooseReturn() 진입 매개변수 => ",
    number,
    "typeof -> ",
    typeof number
  );
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  console.log("DietReadAllomponent.js chooseReturn() 진입 배열변경 => ", arr);
  let result = "";
  for (let n of arr) {
    switch (n) {
      case "1":
        return (result = "아침");
      case "2":
        return (result = "점심");
      case "3":
        return (result = "저녁");
      case "4":
        return (result = "간식");
      default:
        return null;
    }
  }
  console.log(result);
};

const initState = {
  content: "",
  //picture: "",
  dateobject: "",
  updatedAt: "",
  id: "",
  quantity: 0,
  choose: "",
};

const DietReadAllComponent = () => {
  const [dietParam, setDietParam] = useState([]);
  //Diet배열받아서 Dietdetails배열바음

  console.log("dietParam -> ", dietParam);
  const { dateobject } = useParams();
  const { moveToDietReadAll, moveToDietList, deleteDietC } = useCustomDiet();
  const [addDietParam, setAddDietParam] = useState([]);

  console.log("addDietParam -> ", addDietParam);

  useEffect(() => {
    console.log(
      "DietReadAllComponent.js useEffect() 진입 objectdate=> ",
      dateobject
    );

    //let dietData=[]
    //api
    const getDietEI = async () =>
      await getDietAll(dateobject)
        .then((result) => {
          console.log(
            "DietReadAllComponent.js useEffect 내 getDietAll axios 호출후 then() => ",
            result
          ); //acton.payload 받기에 data 없음
          setDietParam(result);

          let chooseArray = ["1", "2", "3", "4"];
          result.forEach((v) => {
            if (v.choose === "1") {
              let arrayIndex = chooseArray.indexOf("1");
              chooseArray.splice(arrayIndex, 1);
            } else if (v.choose === "2") {
              let arrayIndex = chooseArray.indexOf("2");
              chooseArray.splice(arrayIndex, 1);
            } else if (v.choose === "3") {
              let arrayIndex = chooseArray.indexOf("3");
              chooseArray.splice(arrayIndex, 1);
            } else if (v.choose === "4") {
              let arrayIndex = chooseArray.indexOf("4");
              chooseArray.splice(arrayIndex, 1);
            }
          }); //forEach

          console.log(
            "DietReadAllComponent.js useEffect 내 getDietAll axios 호출후 chooseArray => ",
            chooseArray
          );
          setAddDietParam(chooseArray);
        })
        .catch((err) => {
          console.log(
            "DietReadAllComponent.js useEffect 내 getDietAll axios 호출후 catch() => ",
            err
          );
        });

    getDietEI();
    return () => {
      setAddDietParam([]);
    };
  }, []);

  //---------------삭제
  const deleteOnClick = (choose) => {
    console.log(
      "DietReadAllComponent.js deleteOnClick() 삭제할 식단 choose => ",
      choose
    );

    if (window.confirm("해당 식단을 삭제하십니까?")) {
      deleteDiet({ choose, dateobject })
        .then((result) => {
          console.log(
            "DietReadAllComponent.js deleteOnClick() then() => ",
            result
          );
          if (result.result === "success") {
            alert(
              dateobject +
                "일자의 " +
                chooseSwitch(choose) +
                " 식단이 삭제되었습니다."
            );

            moveToDietList();
          }
          if (result.error === "error") {
            alert(dateobject + "일자의 식단 삭제를 실패했습니다.");
            moveToDietReadAll(dateobject);
          }
        })
        .catch((err) => {
          console.log(
            "DietReadAllComponent.js deleteOnClick() catch() => ",
            err
          );
          alert(dateobject + "일자의 식단 삭제를 실패했습니다.");
          moveToDietReadAll(dateobject);
        });
    } //window.confirm
  };

  return (
    <div className="container">
      <br />
      <br />
      <h4>식단조회</h4>
      <hr />
      <br />
      <p>각 식단의 단위는 생략합니다 (단위:g/ml) </p>
      &nbsp;&nbsp;
      <Link to={"../"}>
        <Button variant="outline-secondary" type="button">
          식단달력이동
        </Button>
      </Link>
      {addDietParam &&
        addDietParam.map((i) => (
          <>
            &nbsp;&nbsp;
            <Link to={`../create/${dateobject}?choose=${Number(i)}`}>
              <Button
                variant="outline-success"
                type="button"
                // onClick={handleDetailOnClick}
              >
                {chooseSwitch(i)}식단추가
              </Button>
            </Link>
          </>
        ))}
      <br />
      <br />
      {dietParam &&
        dietParam.map((i) => (
          <>
            <React.Fragment key={i.id}>
              <Card style={{ width: "18rem", display: "inline-block" }}>
                {/* <Card.Img
                variant="top"
                src="/smile.png"
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
              /> */}
                <Card.Body>
                  {i.choose === "1" && (
                    <Card.Title>
                      <Image
                        src="/img/cabbage.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      {chooseReturn(i.choose)} 식단
                    </Card.Title>
                  )}
                  {i.choose === "2" && (
                    <Card.Title>
                      <Image
                        src="/img/carrot.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      {chooseReturn(i.choose)} 식단
                    </Card.Title>
                  )}

                  {i.choose === "3" && (
                    <Card.Title>
                      <Image
                        src="/img/eggplant.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      {chooseReturn(i.choose)} 식단
                    </Card.Title>
                  )}

                  {i.choose === "4" && (
                    <Card.Title>
                      <Image
                        src="/img/tomato.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      {chooseReturn(i.choose)} 식단
                    </Card.Title>
                  )}
                  {/* <Card.Text>식단</Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                  {i.Dietdetails &&
                    i.Dietdetails.map((d) => (
                      <ListGroup.Item>
                        {d.content}&nbsp;
                        {d.quantity}{" "}
                      </ListGroup.Item>
                    ))}
                  {/* <ListGroup.Item>{i.content}</ListGroup.Item> */}
                </ListGroup>
                <Card.Body style={{ textAlign: "center" }}>
                  {/* <Card.Link href="#">수정/삭제</Card.Link>
                <Card.Link href="#">식단달력이동</Card.Link> */}
                  <Link to={`../modify/${i.dateobject}/${i.choose}`}>
                    <Button
                      variant="outline-primary"
                      type="button"
                      //onClick={handleDetailOnClick}
                    >
                      수정
                    </Button>
                  </Link>
                  &nbsp; &nbsp;
                  <Button
                    variant="outline-warning"
                    type="button"
                    onClick={() => deleteOnClick(i.choose)}
                  >
                    삭제
                  </Button>
                </Card.Body>
              </Card>
            </React.Fragment>
            &nbsp; &nbsp;
          </>
        ))}
      <br />
      <br />
    </div>
  );
};

export default DietReadAllComponent;
