import { useCallback, useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import KakaoLoginComponent from "./KakaoLoginComponent";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initState = {
  email: "",
  pw: "",
  nick: "",
  pwConfirm: "",
};

const JoinComponent = () => {
  const [joinParam, setJoinParam] = useState({ ...initState });

  const navigate = useNavigate();
  const { moveToPath, doJoin } = useCustomLogin();

  const handleChange = useCallback(
    (e) => {
      //console.log(e.target.value, e.target.name);

      joinParam[e.target.name] = e.target.value;
      setJoinParam({ ...joinParam });
    },
    [joinParam]
  );

  const handleSubmitJoin = (e) => {
    e.preventDefault();
    //console.log("handleSubmitJoin진입!!");
    //console.log(e);
    if (joinParam.pw !== joinParam.pwConfirm) {
      alert("비밀번호가 일치하지 않습니다 확인해주세요!");
      return;
    }

    // const form = new FormData();
    // form.append("email", joinParam.email);
    // form.append("pw", joinParam.pw);
    // form.append("nick", joinParam.nick);

    const form = {
      email: joinParam.email,
      pw: joinParam.pw,
      nick: joinParam.nick,
    };

    doJoin(joinParam)
      .then((data) => {
        // console.log(
        //   "JoinComponent.js handleSubmitJoin() joinPostAsync 결과 ",
        //   data
        // );
        if (data.error) {
          alert("이미 가입된 회원입니다. 다른 이메일주소를 입력해주세요!");
        } else {
          alert("회원가입성공");
          moveToPath("/");
        }
      })
      .catch((err) => {
        // console.log(
        //   "JoinComponent.js handleSubmitJoin() joinPostAsync 결과 err",
        //   err
        // );
      });
  };

  return (
    <div className="container">
      <br />
      <br />

      <h4>회원가입</h4>
      <hr />
      <br />
      <Form onSubmit={handleSubmitJoin}>
        <Form.Group className="mb-3">
          <Form.Label>이메일주소</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={joinParam.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>닉네임</Form.Label>
          <Form.Control
            type="text"
            name="nick"
            value={joinParam.nick}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>패스워드</Form.Label>
          <Form.Control
            type="password"
            name="pw"
            value={joinParam.pw}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>패스워드 재확인</Form.Label>
          <Form.Control
            type="password"
            name="pwConfirm"
            value={joinParam.pwConfirm}
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" >
         <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>  */}

        <Button variant="primary" type="submit">
          가입하기
        </Button>
      </Form>
      {/* <KakaoLoginComponent /> */}
      <br />
      <br />
    </div>
  );
};

export default JoinComponent;
