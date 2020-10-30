const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express(); 
const mongoose = require('mongoose');
const routes = require('./routes');

const user = require('./routes/api/users');
const session = require('express-session');
const passport = require('./passport');
// const morgan = require('morgan');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.json());
// app.use(morgan());

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser

//sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false //required
  })
);
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

app.use(routes);
// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/marketplace", {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/marketplace', {
  useNewUrlParser: true,
  useFindAndModify: false
});

// --passport
app.use('/users', user);

app.post('/users', (req, res) => {
  console.log('user signup');
  req.session.username = req.body.username;
  res.end();
});
// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
