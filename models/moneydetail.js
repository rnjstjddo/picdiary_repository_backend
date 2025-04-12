const Sequelize = require("sequelize");

class Moneydetail extends Sequelize.Model {
  static initiate(sequelize) {
    Moneydetail.init(
      {
        content: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        amount: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        choose: {
          type: Sequelize.STRING(2),
          allowNull: false,
        },
        dateobject: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        choosesector: {
          type: Sequelize.STRING(2),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: "true",
        paranoid: "true",
        modelName: "Moneydetail",
        tablename: "moneydetails",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Moneydetail.belongsTo(db.Money, { targetKey: "id" });
  }
}

module.exports = Moneydetail;
