const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Addfeedetail = sequelize.define("student", {
  SNo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  StudentName: {
    type: Sequelize.STRING,
  },
  RegistrationNum: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  Branch: {
    type: Sequelize.STRING,
  },
  RoomNum: {
    type: Sequelize.INTEGER,
  },
  Bookingtype: {
    type: Sequelize.STRING,
  },
  TotalAmount: {
    type: Sequelize.DOUBLE,
  },
});

module.exports = Addfeedetail;
