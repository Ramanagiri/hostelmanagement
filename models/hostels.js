const { Sequelize, DataTypes, Model } = require('sequelize');
const { toDefaultValue } = require('sequelize/types/utils');
const sequelize = new Sequelize('sqlite::memory:');

class Hostels extends Model {}

Hostels.init({
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
    },
  roomtype:{
    type: DataTypes.STRING,
    allowNull: false
  }


}, {
  sequelize, 
  modelName: 'Hostels' 
});


console.log(Hostels === sequelize.models.Hostels);