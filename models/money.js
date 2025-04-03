const Sequelize = require("sequelize");

class Money extends Sequelize.Model {
  static initiate(sequelize) {
    Money.init(
      {
        // content: {
        //   type: Sequelize.STRING(200),
        //   allowNull: false,
        // },
        expense: {
          type: Sequelize.INTEGER,
          allowNull: true,
          // defaultValue: 0,
        },
        income: {
          type: Sequelize.INTEGER,
          allowNull: true,
          //수입없는날도있기에,
          //defaultValue: 0,
        },
        dateobject: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: "true",
        paranoid: "true",
        modelName: "Money",
        tablename: "moneys",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Money.belongsTo(db.User, { targetKey: "email" });
    db.Money.hasMany(db.Moneydetail, {
      sourceKey: "id",
    });
  }
}

module.exports = Money;
