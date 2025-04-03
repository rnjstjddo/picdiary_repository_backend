const Sequelize = require("sequelize");

//User - email, nick, password  money
class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        email: {
          type: Sequelize.STRING(40),
          allowNull: false,
          unique: true,
        },
        nickname: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        refreshtoken: {
          type: Sequelize.STRING(500),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: "true",
        paranoid: "true",
        modelName: "User",
        tablename: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Diary, { sourceKey: "email" });
    db.User.hasMany(db.Diet, { sourceKey: "email" });
    db.User.hasMany(db.Money, { sourceKey: "email" });
    db.User.hasMany(db.Exercise, { sourceKey: "email" });
  }
}

module.exports = User;
