const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { createToken } = require("../controllers/memberController");
const ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = () => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.JWT_SECRET;
  opts.issuer = "picdiary";
  //opts.audience = 'yoursite.net';

  passport.use(
    new JwtStrategy(opts, function (payload, done) {
      try {
        const exUser = User.findOne({ where: payload });
        if (exUser) {
          return done(null, exUser);
        } else {
          return done(null, false, {
            message: "해당 회원이 존재하지않습니다.",
          });
        }
      } catch (err) {
        return done(err, false, { message: "에러발생" });
      }
    })
  );
};
