const Sequelize = require("sequelize");
//Dietdetail quantity choose content dateobject email 5개
class Dietdetail extends Sequelize.Model {
  static initiate(sequelize) {
    Dietdetail.init(
      {
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        choose: {
          type: Sequelize.STRING(2),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        dateobject: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(40),
          allowNull: false,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: "true",
        paranoid: "true",
        modelName: "Dietdetail",
        tablename: "dietdetails",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    //처음
    db.Dietdetail.belongsTo(db.Diet, {
      targetKey: "id",
    });
  }
}

module.exports = Dietdetail;
