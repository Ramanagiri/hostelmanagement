const Sequelize = require("sequelize");

const sequelize = new Sequelize("hostelportal", "root", "Welcome@2021", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
