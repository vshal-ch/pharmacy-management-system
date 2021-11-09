require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const loginRoute = require("./routes/loginRoute");
const adminRoute = require('./routes/adminRoute');
const pharmacistRoute = require('./routes/pharmacistRoute');
const cashierRoute = require('./routes/cashierRoute');
const managerRoute = require('./routes/managerRoute')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Connected to database");
});

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get('/logout',(req,res)=>{
  res.render('login',{removeAndRefresh: true})
})

app.use("/login", loginRoute);
app.use("/admin", adminRoute);
app.use('/pharmacist',pharmacistRoute);
app.use('/cashier',cashierRoute);
app.use('/manager',managerRoute);

app.listen("3000");
