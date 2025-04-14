import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
//채팅
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";

import Modal from "react-bootstrap/Modal";
import useCustomLogin from "../../hooks/useCustomLogin";
import { chatAdd, chatGetPost } from "../../api/chat";
import { weatherapi } from "../../api/openApi";

const BasicMenu = (props) => {
  const { loginState, isLogin } = useCustomLogin();
  const [modalVisible, setModalVisible] = useState(false);

  //채팅
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const [chatroomname, setChatroomname] = useState("");
  const [chatroompassword, setChatroompassword] = useState("");

  const refChatRoom = useRef();
  const refChatRoompassword = useRef();
  const { moveToLogin } = useCustomLogin();
  const refModalBody = useRef();
  //소켓
  const [socket, setSocket] = useState(null);

  const handleMsg = (e) => {
    //console.log("handleMsg 이벤트핸들러 진입 ->", e.target.value);
    setMsg(() => e.target.value);
  };

  const handleChatroomnameInput = (e) => {
    //console.log("handleChatroomnameInput 이벤트핸들러 진입 ->", e.target.value);
    setChatroomname(() => e.target.value);
  };

  const handleChatroompasswordInput = (e) => {
    //console.log("handleChatroompasswordInput 이벤트핸들러 진입 ->", e.target.value);
    setChatroompassword(() => e.target.value);
  };
  const chatStartClick = (e) => {
    console.log("chatStartClick 이벤트핸들러함수 진입 ");

    e.preventDefault();
    if (!isLogin) {
      alert("로그인 후 이용가능합니다.");
      return moveToLogin();
    }

    if (chatroomname === "" || chatroomname === undefined) {
      alert("방 이름을 입력하세요!");
      return;
    }
    if (chatroompassword === "" || chatroompassword === undefined) {
      alert("방 비밀번호를 입력하세요!");
      return;
    }

    //const socket = io("picdiary2025.store", {
    //const socket = io("52.78.155.180", {

    //const socket = io("wss://picdiary2025.store:3000/ws", {
    const socket = io("http://52.78.155.180:8081", {
      //path: "/my-custom-path/",

      autoConnect: false,
      // query: {
      //   username: loginState, //email
      //   chatroomname: e.target.chatroomname.value,
      //   chatroompassword: e.target.chatroompassword.value,
      // },
    });
    socket.connect();

    setSocket(() => socket);

    const sendData = {
      username: loginState, //email
      chatroomname,
      chatroompassword,
    };
    socket.emit("roomcreate", sendData);
  }; //chatStartClick

  const handleSubmitChat = (e) => {
    e.preventDefault();

    console.log("handleSubmitChat() 진입 ");
    const sendData = {
      //message: e.target.chatcontents.value,
      message: msg,
      username: loginState,
      chatroomname,
    };

    socket.emit("message", sendData);
  };

  useEffect(() => {
    function messageCallback(msg) {
      console.log("handleSubmitChat() 진입 message 콜백함수 진입 msg-> ", msg);

      const { message, username, chatroomname } = msg;

      setMsgList((prev) => [
        ...prev,
        {
          msg: message,
          type: loginState === username ? "me" : "other",
          id: username,
        },
      ]);
      refModalBody.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      setMsg(() => "");
    }
    function goodbyeCallback(msg) {
      console.log(
        "out 이벤트 리액트에서 받아서 goodbyeCallback() 진입 msg => ",
        msg
      );
      setMsgList((prev) => [
        ...prev,
        {
          msg: msg.message,
          type: "goodbye",
          id: "",
        },
      ]);

      const socketidcheck = socket.id;
      console.log("goodbyeCallback() 소켓 id확인 ", socketidcheck);
    }

    function roomcreateCallback(msg) {
      setMsgList((prev) => [
        ...prev,
        {
          msg: msg,
          type: "welcome",
          id: "",
        },
      ]);
      setModalVisible(() => true);
      refModalBody.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } //callback
    socket?.on("roomcreate", roomcreateCallback);
    socket?.on("message", messageCallback);
    socket?.on("out", goodbyeCallback);

    return () => {
      socket?.off("message");
      socket?.off("out");
      socket?.off("roomcreate");
    };
  }, [socket]);

  const chatCloseModal = () => {
    console.log("chatCloseModal() 진입");
    if (window.confirm("채팅방에서 나가시겠습니까?")) {
      console.log("chatCloseModal onClick 내 out 소켓이벤트 전달전 ");
      socket.emit("out", { chatroomname, loginState, chatroompassword });
      setSocket(null);
      setMsgList([]);
      setChatroomname("");
      setChatroompassword("");
      setModalVisible(() => false);
    }
  };

  return (
    <>
      <Navbar
        className="bg-body-tertiary"
        expand="lg"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container fluid>
          <Navbar.Brand>
            <Image
              src="/img/sunglass.png"
              style={{ height: "50px", width: "50px" }}
            />
            하루관리
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {isLogin ? (
                <>
                  <Nav.Link href="/diary">사진일기</Nav.Link>
                  <Nav.Link href="/diet">식단관리</Nav.Link>
                  <Nav.Link href="/exercise">운동관리</Nav.Link>
                  <Nav.Link href="/money">금전관리</Nav.Link>
                  <Nav.Link href="/logout">로그아웃</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">로그인</Nav.Link>
                  <Nav.Link href="/join">회원가입</Nav.Link>
                </>
              )}
            </Nav>
            <Form onSubmit={(e) => chatStartClick(e)}>
              {" "}
              <InputGroup size="sm" style={{ width: "600px" }}>
                <InputGroup.Text>채팅방명</InputGroup.Text>
                <Form.Control
                  //type="search"
                  //className="me-2"
                  type="text"
                  name="chatroomname"
                  onChange={handleChatroomnameInput}
                  value={chatroomname}
                  ref={refChatRoom}
                />
                <InputGroup.Text>방비밀번호</InputGroup.Text>
                <Form.Control
                  //type="search"
                  //className="me-2"
                  type="text"
                  name="chatroompassword"
                  ref={refChatRoompassword}
                  onChange={handleChatroompasswordInput}
                  value={chatroompassword}
                />
                <Button variant="outline-secondary" type="submit">
                  채팅하기
                </Button>
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {modalVisible && (
        <>
          <div className="modal show" style={{ display: "block" }}>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title> 채팅방명 : {chatroomname} </Modal.Title>
                &nbsp; &nbsp;
                <Button
                  variant="outline-secondary"
                  style={{ textAlign: "left" }}
                  onClick={() => chatCloseModal()}
                  type="button"
                >
                  채팅창닫기
                </Button>
              </Modal.Header>
              <Modal.Body>
                <div style={{ overflow: "scroll", height: "500px" }}>
                  <ul>
                    {msgList.map((v, i) =>
                      v.type === "welcome" || v.type === "goodbye" ? (
                        <li key={i} style={{ listStyle: "none" }}>
                          <div
                            style={{
                              height: "0.5px",
                              flex: "1 1 auto",
                              padding: "0 10px",
                              backgroundColor: "#cecece",
                            }}
                          />
                          <div>{v.msg}</div>
                          <div
                            style={{
                              height: "0.5px",
                              flex: "1 1 auto",
                              padding: "0 10px",
                              backgroundColor: "#cecece",
                            }}
                          />
                        </li>
                      ) : v.type === "me" ? (
                        <li
                          style={{
                            textAlign: "left",
                            listStyle: "none",
                          }}
                          key={`${i}_1`}
                        >
                          <div
                            style={{
                              marginTop: "5px",
                              fontSize: "13px",
                              fontWeight: "bold",
                            }}
                          >
                            {v.id}
                          </div>
                          <div
                            style={{
                              padding: "5px",
                              display: "inline-block",
                              borderTopRightRadius: "20px",
                              borderBottomLeftRadius: "20px",
                              borderBottomRightRadius: "20px",
                              backgroundColor: "#cecece",
                            }}
                          >
                            {v.msg}
                          </div>
                        </li>
                      ) : (
                        <li
                          style={{
                            textAlign: "right",
                            listStyle: "none",
                          }}
                          key={`${i}_2`}
                        >
                          <div
                            style={{
                              marginTop: "5px",
                              fontSize: "13px",
                              fontWeight: "bold",
                            }}
                          >
                            {v.id}
                          </div>
                          <div
                            style={{
                              padding: "5px",
                              display: "inline-block",
                              borderTopRightRadius: "20px",
                              borderBottomLeftRadius: "20px",
                              borderBottomRightRadius: "20px",
                              backgroundColor: "#000",
                              color: "#fff",
                            }}
                          >
                            {v.msg}
                          </div>
                        </li>
                      )
                    )}
                    <li ref={refModalBody} style={{ listStyle: "none" }} />
                  </ul>
                </div>
              </Modal.Body>
              <Form onSubmit={(e) => handleSubmitChat(e)}>
                <Modal.Footer>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      채팅내용
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={(e) => handleMsg(e)}
                      value={msg}
                      name="chatcontents"
                    />
                  </InputGroup>

                  <Button
                    variant="outline-primary"
                    type="submit"
                    style={{ textAlign: "right" }}
                  >
                    메시지보내기
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Dialog>
          </div>
        </>
      )}
    </>
  );
};

export default BasicMenu;
