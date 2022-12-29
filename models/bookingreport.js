const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


class bookingreport extends Model {}

bookingreport.init({
  StudentId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  StudentName: {
    type: Sequelize.STRING,
    allowNull:false
  },
  RoomNum: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  Roomtype: {
    type: Sequelize.STRING,
    allowNull:false
  },
  Bookingtype: {
    type: Sequelize.STRING,
  },
  TotalAmount: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  Status:{
    type: DataTypes.BOOLEAN,
    allowNull:false
  }
}, {
  sequelize, 
  modelName: 'bookingreport' 
});


console.log(bookingreport === sequelize.models.bookingreport);