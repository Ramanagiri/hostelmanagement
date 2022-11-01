const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieparser = require('cookie-parser');
const authRoutes = require("./routes/authroutes");
const { requiredAuth , checkuser } = require("./middleware/authmiddleware");

const app = express();

const server = http.createServer();

//middleware
app.use(express.static("public"));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
// database connection
const dbURI =
  "mongodb+srv://rajarajan13:rajarajan13@cluster.39bespc.mongodb.net/Hostelportal";
  mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkuser);
app.get("/", (req, res) => res.render("index"));
app.get("/smoothies", requiredAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);

//cookies
app.get('/set-cookies', (req, res) => {

res.cookie('newUser', false);
res.cookie('isemployee' ,true, { maxAge: 24*60*60*1000, secured: true});

res.send('you got the cookies!');
})

app.get('/read-cookies', (req, res) => {
  
  const cookies = req.cookies;
  console.log(cookies);

  res.json(cookies);
})


// sequelize
//   .sync()
//   .then((result) => {
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
