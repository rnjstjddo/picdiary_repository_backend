const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.forSession = async (req, res, next) => {
  res.json("success");
};

//----------------회원가입---------------------------------------------------------------
exports.join = async (req, res, next) => {
  console.log(req);
  const { email, nick, password } = req.body;
  console.log("컨트롤러 join() 진입 req.body확인 => ", email, nick, password);
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.json({ error: "이미 가입된 이메일입니다." });
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nickname: nick,
      password: hash,
    });

    return res.status(200).json("회원가입성공");
  } catch (e) {
    console.log("member.js join 컨트롤러함수 catch진입", e);
    return res.json({ error: e });
  }
};

//exports.login = (req, res, next) => {
//세션사용하지 않고 jwt사용
exports.login = (req, res, next) => {
  //console.log("member.js 컨트롤러함수 login 진입 req -> ", req);

  passport.authenticate(
    "local",
    { session: false },
    (authError, user, info) => {
      if (authError) {
        console.log(
          "member.js 컨트롤러함수 login 진입 login전략실행후 authError발생",
          authError
        );

        //return next(authError);
        res.json({ error: authError });
      }
      if (!user) {
        //return res.redirect(`/?loginError=${info.message}`);
        console.log(
          "member.js 컨트롤러함수 login 진입 login전략실행후 사용자가 db없을경우진입"
        );

        return res.json({ error: info.message });
      }

      return req.login(user, { session: false }, (loginError) => {
        // console.log(
        //   "member.js 컨트롤러함수 login 진입 req.login() 호출후 req.isAuthenticated() -> ",
        //   req.isAuthenticated()
        // );
        // console.log(
        //   "member.js 컨트롤러함수 login 진입 req.login() 호출후 req.user -> ",
        //   req.user
        // );

        // if (loginError) {
        //   console.log(
        //     "member.js 컨트롤러함수 login 진입 login전략실행후 req.login() 세션에 id담기 에러 ",
        //     loginError
        //   );
        //   return res.json({ error: loginError });
        // }

        //jwt발급
        const accessToken = this.createToken("accessToken", user);
        //const refreshToken = this.createToken("refreshToken", user);
        //user.refreshToken = refreshToken;

        // res.cookie("accessToken", accessToken, {
        //   httpOnly: true,
        //   maxAge: 1000 * 60 * 30,
        //   sameSite: "none", //클라이언트백엔드 포트다를경우
        // });
        //엑세스토큰은 헤더로

        //return res.setHeader("accesstoken", accessToken).json(user);
        return res.json({ user, accessToken: accessToken });

        // console.log(
        //   "member.js 컨트롤러함수 login 진입 login전략실행후 req.login() 세션에 id 담은 후 확인  req.session ",
        //   req.session
        // );
        // console.log(
        //   "member.js 컨트롤러함수 login 진입 login전략실행후 req.login() 세션에 id 담은 후 확인 req.user",
        //   req.user
        // );
      });
    }
  )(req, res, next);
};

exports.logout = (req, res) => {
  // console.log(
  //   "member.js logout 컨트롤러함수에서 req.isAuthenticated() 확인 ",
  //   req.isAuthenticated()
  // );
  console.log("memberController.js logout() 컨트롤러함수 진입");
  req.logout(() => {
    //res.redirect("/");
    return res.send("success");
  });
};

exports.createToken = (type, user) => {
  if (type === "accessToken") {
    const accessToken = jwt.sign(
      { id: user?.id, email: user?.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    return accessToken;
  } else if (type === "refreshToken") {
    const refreshToken = jwt.sign(
      { id: user?.id, email: user?.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      }
    );
    return refreshToken;
  }
};

//재발급
exports.getNewAccessToken = (req, res) => {
  console.log("member.js getNewAccessToken 컨트롤러함수 진입 ");
  const refreshToken = req.query.refreshToken;
  console.log(
    "member.js getNewAccessToken 컨트롤러함수 진입 쿼리스트링값 리프레시토큰  => ",
    refreshToken
  );

  try {
    const verifyRefreshToken = jwt.verify(refreshToken, process.env.JWT_SECRET);
    console.log(
      "member.js getNewAccessToken 컨트롤러함수 진입 쿼리스트링값 리프레시토큰 검증결과 => ",
      verifyRefreshToken
    );
    const newAccessToken = this.createToken("accessToken", refreshToken.user);
    console.log(
      "member.js getNewAccessToken 컨트롤러함수 진입 쿼리스트링값 새로운 엑세스토큰 생성 => ",
      newAccessToken
    );
    return res.status(200).json({ code: 200, accessToken: newAccessToken });
  } catch (e) {
    console.log(
      "member.js getNewAccessToken 컨트롤러함수 진입 리프레시토큰도 만료 -> ",
      e
    );
    return res.status(401).json({
      code: 401,
      //message: "유효하지않는 토큰입니다.",
      error: "ERROR_REFRESH_TOKEN",
    });
  }
};
