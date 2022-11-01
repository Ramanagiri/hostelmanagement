const mongoose = require("mongoose");

const { isEmail } = require("validator");

const bcrypt = require('bcrypt');

const userschema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter an password"],
    minlength: [6, "Please enter more than 6 characters"],
  },
  usertype: {
    type: String,
    enum: ['Super_admin','Male_admin','Female_admin'],
    required: [true, "Please choose your role"],
  }
});



userschema.pre('save', async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method
userschema.statics.login = async function (email,password,usertype){
  const user = await this.findOne({email});
  if(user){
    const auth = await bcrypt.compare(password, user.password);
    if(auth){
        const role = await this.findOne({usertype});
        if(role){
          return user
        }
        throw Error ('wrong role')
      }
    throw Error ('incorrect password') 
  }
  throw Error('incorrect email')
}

const User = mongoose.model("user", userschema);

module.exports = User;
