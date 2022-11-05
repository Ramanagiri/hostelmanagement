const http = require("http");
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cookieparser = require('cookie-parser');
const authRoutes = require("./routes/authroutes");
const { requiredAuth , checkuser } = require("./middleware/authmiddleware");

const app = express();

const server = http.createServer();

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieparser());

//view engine
app.set('view engine', 'ejs');
// database connection
const dbURI =
  process.env.MONGODB_URI
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
app.get("/", (req, res) => res.render("./superadmin/index"));
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


