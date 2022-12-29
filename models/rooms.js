const { Sequelize, DataTypes, Model } = require('sequelize');
const { toDefaultValue } = require('sequelize/types/utils');
const sequelize = new Sequelize('sqlite::memory:');
/*S.No	studentid	studentname	registerno	gender	
shortname	semesters	curyear	branch	bookingdate	
hostelname	roomno	roomtype	floorname	contactno	email	
address	pincode		
bookingtype	totallamt	*/

class Rooms extends Model {}

Rooms.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hostelname:{
    type: DataTypes.STRING,
    allowNull: false
  },
    roomno:{
    type: DataTypes.INTEGER,//can be single digit as a number
    allowNull: false
  },
  floorno:{
    type: DataTypes.STRING,//can be single digit as a number
    allowNull: false
  }


}, {
  sequelize, 
  modelName: 'Rooms' 
});


console.log(Rooms === sequelize.models.Rooms);