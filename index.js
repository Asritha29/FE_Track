require('dotenv').config();

const multer = require('multer');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const connectDB = require('./server/config/db');
const checkForAuthentication = require("./server/middlewares/auth");
const bodyParser = require('body-parser');

const app = express();
const port = 5500 || process.env.PORT;


app.use(bodyParser.json());
app.use(express.static('public'));
//connect to db

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());

//image
const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    return cb(null,"./uploads");
  },
  filename: function(req,file,cd){
    return cb(null,`${req.employeeId}-${file.originalname}`);
  },
});

const upload = multer({storage:storage });

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//static files
app.use(express.static('public'));

// Express Session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage' }));

//Templates Engine 
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', require('./server/routes/customer'));
//app.use('/homepage', require('./server/routes/customer'))


// Handle 404
app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(port,() => {
    console.log(`App listening on port ${port}`)
});