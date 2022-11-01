const User = require("../models/User");
const jwt =require('jsonwebtoken');
//hadnle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" , usertype: ""};

  //incorrect email,password,usertype
  if(err.message ==='incorrect email'){
    errors.email = 'that email is not registered';
  }
  if(err.message ==='incorrect password'){
    errors.password = 'that password is incorrect';
  }
  if(err.message ==='wrong role'){
    errors.usertype = 'Select the right role';
  }
  //duplication errors
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }
  //validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
const maxAge = 3* 24* 60* 60 ; //expects in seconds (jwt), expects in milliseconds (cookies)

const createToken = (id) => {
  return jwt.sign({id }, 'srm institute of ktr technology ktr portal hostel', {
    expiresIn: maxAge
  });
}
module.exports.signup_get = (req, res) => {
  res.render("signup");
};
module.exports.login_get = (req, res) => {
  res.render("login");
};
module.exports.signup_post = async (req, res) => {
  const { email, password , usertype} = req.body;
  try {
    const user = await User.create({ email, password,usertype }); //(create creates an instance locally and saves it in database for us)
    const token = createToken(user._id);
    res.cookie('jwt', token, { secure: true, maxAge: maxAge*3000});
    res.status(201).json({user: user._id});
    
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password,usertype } = req.body;

  try{
    const user = await  User.login(email,password,usertype);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*3000});
    res.status(200).json({user: user._id});
  }
  catch (err){
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
};

module.exports.logout_get = (req,res) => {
  res.cookie('jwt','', {maxAge : 1 })
  res.redirect('/')
}