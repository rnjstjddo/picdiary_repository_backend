const Sequelize = require("sequelize");

class Diet extends Sequelize.Model {
  static initiate(sequelize) {
    Diet.init(
      {
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        choose: {
          type: Sequelize.STRING(2),
          allowNull: false,
        },
        // content: {
        //   type: Sequelize.STRING(300),
        //   allowNull: true,
        // },
        dateobject: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: "true",
        paranoid: "true",
        modelName: "Diet",
        tablename: "diets",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Diet.belongsTo(db.User, { targetKey: "email" });
    db.Diet.hasMany(db.Dietdetail, {
      sourceKey: "id",
    });
  }
}

module.exports = Diet;
