const massive = require('massive');
const express = require('express');
const session = require('express-session');
require('dotenv').config();
const authControl = require('./controllers/authcontroller');
const searchControl = require('./controllers/searchcontroller');
const auth = require('./middleware/authCheck');
const interestControl = require('./controllers/interestcontroller');

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
app.get('/auth/getuser', authControl.getUser);


//CARDSEARCH ENDPOINTS

app.get('/api/cardsearch/:searchtext', searchControl.card_search);

//INTEREST ENDPOINTS

app.post('/api/interest', auth.authCheck, interestControl.add_interest);
app.get('/api/interests/:user_id', auth.authCheck, interestControl.get_interests);
app.get('/api/interests/:user_id/:searchtext', auth.authCheck, interestControl.search_interests);
app.post('/api/interests/sell', auth.authCheck, interestControl.sell_interest);
