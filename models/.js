const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
/*S.No	studentid	studentname	registerno	gender	
shortname	semesters	curyear	branch	bookingdate	
hostelname	roomno	roomtype	floorname	contactno	email	
address	pincode		
bookingtype	totallamt	*/

class User extends Model {}

User.init({
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
  semesters:{
    allowNull: false
  },
  curyear:{
    allowNull: false
  },
  branch:{
    type: DataTypes.STRING,
    allowNull: false
  },
  bookingdate:{
    type: DataTypes.STRING,
  },
  hostelname:{
    type: DataTypes.STRING,
    allowNull: false
  },
  roomno:{
    type: DataTypes.STRING,
    allowNull: false
  },
  roomtype:{
    type: DataTypes.STRING,
    allowNull: false
  },
  floorno:{
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
  },
  pincode:{
    type: DataTypes.STRING,
    allowNull: false
  },
  bookingtype:{
    type: DataTypes.STRING,

  },
  totallamt:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }

}, {
  sequelize, 
  modelName: 'User' 
});


console.log(User === sequelize.models.User); 