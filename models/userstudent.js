const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
/*S.No	studentid	studentname	registerno	gender	
shortname	semesters	curyear	branch	bookingdate	
hostelname	roomno	roomtype	floorname	contactno	email	
address	pincode		
bookingtype	totallamt	*/

class Userstudent extends Model {}

Userstudent.init({
  studentid:{
    type:DataTypes.INTEGER,
    primarykey: true,
    allowNull: false,
    unique: {
      msg: 'Studentid already exists!',
    }
  },
  studentname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registerno: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Registerno already exists!',
    },
    // allowNull defaults to true
  },
  gender:{
    type: DataTypes.STRING,
    allowNull:false
  },
  branch:{
    type: DataTypes.STRING,
    allowNull:false
  },
  //QUERY 3
//   semesters:{
//     allowNull: false
//   },
//   curyear:{
//     allowNull: false
//   },
//   branch:{
//     type: DataTypes.STRING,
//     allowNull: false
//   },
  hostelname:{    //query 1
    type: DataTypes.STRING,
    allowNull: false
  },
  roomno:{
    type: DataTypes.STRING,
    allowNull: false
  },
  contactno:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  address:{
    type: DataTypes.STRING,
    allowNull: false
  }
  
}, {
  sequelize, 
  modelName: 'Userstudent' 
});


console.log(Userstudent === sequelize.models.Userstudent);