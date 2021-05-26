const massive = require('massive');
const express = require('express');
const session = require('express-session');
require('dotenv').config();
const authControl = require('./controllers/authcontroller');

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 *60 *60 *24}
}))




massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(database => {
  app.set('db', database);
  console.log('Database connected.');
  app.listen(SERVER_PORT, () => console.log('Server listening on port ' + SERVER_PORT));
})


//AUTH ENDPOINTS

app.post('/auth/register', authControl.register);
app.post('/auth/login', authControl.login);
app.delete('/auth/logout', authControl.logout);
