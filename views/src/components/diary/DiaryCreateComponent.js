import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useCustomDiary from "../../hooks/useCustomDiary";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import useCustomMove from "../../hooks/useCustomMove";
import Image from "react-bootstrap/Image";
import { postDiary } from "../../api/diaryApi";

const initState = {
  content: "",
  picture: "",
  dateobject: "",
  email: "",
};
const DiaryCreateComponent = () => {
  const [diaryParam, setDiaryParam] = useState({ ...initState });
  const [image, setImage] = useState("");
  const handleChange = useCallback(
    (e) => {
      console.log(e.target.value, e.target.name);

      diaryParam[e.target.name] = e.target.value;
      setDiaryParam({ ...diaryParam });
    },
    [diaryParam]
  );

  const [visible, setVisible] = useState(false);
  const { postDiaryC, moveToDiaryRead, moveToDiaryCreate } = useCustomDiary();
  let { loginState } = useCustomLogin();
  var { dateobject } = useParams();

  const handleImageChange = (e) => {
    console.log("DiaryCreateComponent.js handleImageChange()진입");
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      let image = window.URL.createObjectURL(file);
      setImage(image);
    }

    setVisible(true);
  };

  const handleSubmitDiaryMake = (e) => {
    e.preventDefault();

    diaryParam["email"] = loginState;
    diaryParam["dateobject"] = dateobject;
    setDiaryParam({ ...diaryParam });
    //setDiaryParam({ ...diaryParam, email: email });
    //setDiaryParam({ ...diaryParam, dateobject: dateobject });

    const { picture } = e.target;
    postDiary({ diaryParam, picture })
      .then((result) => {
        console.log(
          "DiaryCreateComponent.js axios postDiary then() 진입 -> ",
          result
        );
        if (result.result === "success") {
          alert(dateobject + " 일자 다이어리 등록했습니다.!");
          if (result.image) {
            URL.revokeObjectURL(image);
            setImage("");
          }
          moveToDiaryRead(result.id);
        }
        if (result.error) {
          console.log("result.payload.error -> ", result.payload.error);
          alert(dateobject + " 일자 다이어리 등록 실패했습니다.");
          moveToDiaryCreate(dateobject);
        }
      })
      .catch((err) => {
        console.log("DiaryCreateComponent.js axios postDiary catch()", err);
        alert(dateobject + "일자 다이어리 등록 실패했습니다.");
        moveToDiaryCreate(dateobject);
      });
  };

  return (
    <div className="container">
      <br />
      <br />

      <h4>사진일기장 작성</h4>
      <hr />
      <br />
      <Form onSubmit={handleSubmitDiaryMake}>
        <Form.Group className="mb-3">
          <Form.Label>다이어리 일자</Form.Label>
          <Form.Control
            type="text"
            name="dateobject"
            value={dateobject}
            disabled
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>일기내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            value={diaryParam.content}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>사진등록</Form.Label>
          <Form.Control
            type="file"
            name="picture"
            onChange={handleImageChange}
          />
          {visible && (
            <>
              <br />
              <Image src={image} rounded />
            </>
          )}
        </Form.Group>
        {/* 
        <Form.Group className="mb-3">
          <Form.Label>닉네임</Form.Label>
          <Form.Control
            type="text"
            name="nick"
            value={joinParam.nick}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group> */}
        {/* <Form.Group className="mb-3" >
         <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>  */}
        <Button variant="outline-primary" type="submit">
          다이어리 등록
        </Button>
        &nbsp;
        <Link to={"../list"}>
          <Button variant="outline-secondary" type="button">
            다이어리달력이동
          </Button>
        </Link>
        &nbsp;
        <Link to={`/`}>
          <Button variant="outline-success" type="button">
            메인으로
          </Button>
        </Link>
      </Form>

      <br />
      <br />
    </div>
  );
};

export default DiaryCreateComponent;
