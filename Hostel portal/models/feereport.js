const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const addStudent = sequelize.define("student", {
  SNo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  StudentId: {
    type: Sequelize.INTEGER,
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
