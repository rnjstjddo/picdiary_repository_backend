const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { createToken } = require("../controllers/memberController");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        //console.log("localStrategy.js 진입 password 입력받은값 -> ", password);
        try {
          const exUser = await User.findOne({ where: { email } });
          // console.log(
          //   "localStrategy.js 진입 password 사용자DB값 -> ",
          //   exUser.password
          // );

          if (exUser) {
            bcrypt.compare(password, exUser.password).then((result) => {
              //              console.log("bcrypt 결과 -> ", result);

              if (result == true) {
                console.log("localStrategy.js 비밀번호 일치");
                //jwt발급 리프레시 저장위해
                //             const accessToken = createToken("accessToken", exUser._id);
                const refreshToken = createToken("refreshToken", exUser);
                exUser.refreshtoken = refreshToken;
                done(null, exUser);
              } else {
                console.log("localStrategy.js 비밀번호 불일치");

                done(null, false, { message: "비밀번호 불일치" });
              }
            }); //compare
          } else {
            console.log("localStrategy.js 회원정보없음");

            done(null, false, { message: "회원정보없습니다." });
          }
        } catch (e) {
          console.log("localStrategy.js 에러", e);

          done(e);
        }
      }
    )
  );
};
