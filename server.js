const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express(); 
const mongoose = require('mongoose');
const routes = require('./routes');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.json());

app.use(routes);
// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/marketplace", {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/marketplace', {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
