import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <span style={{ fontSize: "15px", textAlign: "right" }}>
            <img
              alt=""
              src="/img/thumbs-up.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            "미래는 오늘 여러분이 무엇을 하느냐에 달려 있습니다." - 마하트마
            간디 <br />
            The future depends on what we do in the present. -Mahatma Gandhi
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Footer;
