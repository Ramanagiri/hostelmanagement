const { Sequelize, DataTypes, Model } = require('sequelize');
const { toDefaultValue } = require('sequelize/types/utils');
const sequelize = new Sequelize('sqlite::memory:');
/*S.No	studentid	studentname	registerno	gender	
shortname	semesters	curyear	branch	bookingdate	
hostelname	roomno	roomtype	floorname	contactno	email	
address	pincode		
bookingtype	totallamt	*/

class Userwarden extends Model {}

Userwarden.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // gender:{
  //   type: DataTypes.STRING,
  //   allowNull:false
  // },
  hostelname:{
    type: DataTypes.STRING,
    allowNull: false
  },

  floorno:{
    type: DataTypes.STRING,//can be single digit as a number
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
  roles:{
    type: DataTypes.STRING,
    allowNull: false,
    DefaultValue: '{"male_admin","female_Admin","super_admin"}'
  }


}, {
  sequelize, 
  modelName: 'Userwarden' 
});


console.log(Userwarden === sequelize.models.Userwarden);