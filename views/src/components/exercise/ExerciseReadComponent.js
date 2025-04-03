import React, { useCallback, useEffect, useState } from "react";
import useCustomDiet from "../../hooks/useCustomExercise";
import useCustomLogin from "../../hooks/useCustomLogin";
import { Link, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deleteExercise, getExerciseAll } from "../../api/exerciseApi";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import useCustomExercise from "../../hooks/useCustomExercise";

const whenchooseSwitch = (whenchoose) => {
  if (!whenchoose) {
    return;
  }
  console.log(
    "whenchooseSwitch 매개변수 -> ",
    whenchoose,
    " typeof -> ",
    typeof whenchoose
  );
  switch (whenchoose) {
    case "1":
      return "아침";
    case "2":
      return "점심";
    case "3":
      return "저녁";
    default:
      return null;
  }
};

const chooseReturn = (number) => {
  //1234 이렇게 들어온다.
  console.log(
    "ExerciseReadComponent.js chooseReturn() 진입 매개변수 => ",
    number,
    "typeof -> ",
    typeof number
  );
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

const initState = {
  content: "",
  //picture: "",
  dateobject: "",
  updatedAt: "",
  id: "",
  choose: "",
  whenchoose: "",
};

const addExercise = (param) => {
  const earray = ["1", "2", "3"];

  console.log("addExercise() 매개변수", param);

  const spliceall = [];
  for (let d of earray) {
    console.log("addExercise() 배열 ", earray);

    let iof = earray.indexOf(d);

    console.log("addExercise() 내 배열인덱스", iof);
    param.filter((i) => {
      console.log("addExercise() 내 whenchoose ", i.whenchoose);
      console.log("addExercise() 내 배열값 ", d);

      if (i.whenchoose === d) {
        console.log("addExercise() 내 일치");
        spliceall.push(d);
      }
    });
  }

  spliceall.forEach((a) => {
    const indexearray = earray.indexOf(a);
    earray.splice(indexearray, 1);
  });

  console.log("addExercise 결과 => ", earray);
  return earray;
};

const addExerciseMap = (param) => {
  const earray = [1, 2, 3];

  for (let d of earray) {
    let iof = earray.indexOf(d);

    console.log("d 인덱스", d);
    param.filter((i) => {
      if (i === d) earray.splice(iof);
    });
  }
  console.log("earray 결과 => ", earray);
};

const ExerciseReadComponent = () => {
  const [exerciseParam, setExerciseParam] = useState([]);

  console.log("exerciseParam -> ", exerciseParam);
  const { dateobject } = useParams();
  const { moveToExerciseRead, moveToExerciseList, deleteExerciseC } =
    useCustomExercise();
  const [addExerciseParam, setAddExerciseParam] = useState([]);

  console.log("addExerciseParam -> ", addExerciseParam);

  useEffect(() => {
    console.log(
      "ExerciseReadComponent.js useEffect() 진입 objectdate=> ",
      dateobject
    );

    //let dietData=[]
    //api
    const getExerciseEI = async () =>
      await getExerciseAll(dateobject)
        .then((result) => {
          console.log(
            "ExerciseReadComponent.js useEffect 내 getExerciseAll axios 호출후 then() => ",
            result
          ); //acton.payload 받기에 data 없음
          setExerciseParam(result);

          setAddExerciseParam(addExercise(result));
        })
        .catch((err) => {
          console.log(
            "ExerciseReadComponent.js useEffect 내 getExerciseAll axios 호출후 catch() => ",
            err
          );
        });

    getExerciseEI();
  }, []);

  const deleteOnClick = (whenchoose) => {
    console.log(
      "ExerciseReadComponent.js deleteOnClick() 삭제할 운동 whenchoose => ",
      whenchoose
    );

    //    deleteExerciseC({ whenchoose, dateobject })
    deleteExercise({ whenchoose, dateobject })
      .then((result) => {
        console.log(
          "ExerciseReadComponent.js deleteOnClick() then() => ",
          result
        );
        if (result.result === "success") {
          alert(
            dateobject +
              "일자의 " +
              whenchooseSwitch(whenchoose) +
              " 운동이 삭제되었습니다."
          );

          moveToExerciseList();
        }
        if (result.error === "error") {
          alert(dateobject + "일자의 운동 삭제를 실패했습니다.");
          moveToExerciseRead(dateobject);
        }
      })
      .catch((err) => {
        console.log(
          "ExerciseReadComponent.js deleteOnClick() catch() => ",
          err
        );
        alert(exerciseParam.dateobject + "일자의 운동 삭제를 실패했습니다.");
        moveToExerciseRead(exerciseParam.dateobject);
      });
  };

  return (
    <div className="container">
      <br />
      <br />
      <h4>운동조회</h4>
      <hr />
      <br />
      {/* <p>각 운동의 단위는 생략합니다 (단위:분) </p> */}
      &nbsp;&nbsp;
      <Link to={"../"}>
        <Button
          variant="outline-secondary"
          type="button"
          // onClick={handleDetailOnClick}
        >
          운동달력이동
        </Button>
      </Link>
      {addExerciseParam &&
        addExerciseParam.map(
          (
            i,
            index //whenchoose 없는것 배열담김
          ) => (
            <React.Fragment key={index}>
              &nbsp;&nbsp;
              <Link to={`../create/${dateobject}?whenchoose=${Number(i)}`}>
                <Button
                  variant="outline-success"
                  type="button"
                  // onClick={handleDetailOnClick}
                >
                  {whenchooseSwitch(i)}운동추가
                </Button>
              </Link>
            </React.Fragment>
          )
        )}
      <br />
      <br />
      {exerciseParam &&
        exerciseParam.map((i, index) => (
          <React.Fragment key={`${index}_o`}>
            <React.Fragment key={index}>
              <Card style={{ width: "18rem", display: "inline-block" }}>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {i.whenchoose === "1" && (
                      <>
                        <Image
                          src="/img/biceps.png"
                          style={{ width: "20px", height: "20px" }}
                          rounded
                        />
                        {whenchooseSwitch(i.whenchoose)} 운동
                      </>
                    )}
                    {i.whenchoose === "2" && (
                      <>
                        {" "}
                        <Image
                          src="/img/tennis.png"
                          style={{ width: "20px", height: "20px" }}
                          rounded
                        />
                        {whenchooseSwitch(i.whenchoose)} 운동
                      </>
                    )}

                    {i.whenchoose === "3" && (
                      <>
                        <Image
                          src="/img/basketball.png"
                          style={{ width: "20px", height: "20px" }}
                          rounded
                        />
                        {whenchooseSwitch(i.whenchoose)} 운동
                      </>
                    )}
                  </Card.Title>
                  {/* <Card.Title> {chooseReturn(i.choose)} </Card.Title> */}

                  {/* <Card.Text>식단</Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item style={{ textAlign: "center" }}>
                    {chooseReturn(i.choose)}
                  </ListGroup.Item>

                  <ListGroup.Item style={{ textAlign: "center" }}>
                    {" "}
                    {i.minute}분
                  </ListGroup.Item>
                  {i.content !== "" && (
                    <ListGroup.Item style={{ textAlign: "center" }}>
                      {i.content}
                    </ListGroup.Item>
                  )}
                </ListGroup>
                <Card.Body style={{ textAlign: "center" }}>
                  {/* <Card.Link href="#">수정/삭제</Card.Link>
                <Card.Link href="#">운동달력이동</Card.Link> */}
                  <Link to={`../modify/${i.dateobject}/${i.whenchoose}`}>
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
                    onClick={() => deleteOnClick(i.whenchoose)}
                  >
                    삭제
                  </Button>
                </Card.Body>
              </Card>
            </React.Fragment>
            &nbsp; &nbsp;
          </React.Fragment>
        ))}
      <br />
      <br />
    </div>
  );
};

export default ExerciseReadComponent;
