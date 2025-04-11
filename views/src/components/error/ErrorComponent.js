import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <br />
      <br />
      <br />
      <br />
      <h3 style={{ color: "crimson" }}>
        <Image
          src="/img/smile.png"
          style={{ width: "30px", height: "30px" }}
          rounded
        />
        해당 페이지가 존재하지 않거나 로그인이 필요합니다!
      </h3>
      <br />
      <Button variant="outline-primary">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          메인으로
        </Link>
      </Button>
      <br />
      <br /> <br />
      <br />
    </div>
  );
};

export default ErrorComponent;
