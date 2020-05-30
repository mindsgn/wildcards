const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
//const passport = require('passport');
const port = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const app = express();

var http = require('http').createServer(app);

//const db = require('./models/index.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'front/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/front/build/index.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port !`);
});
