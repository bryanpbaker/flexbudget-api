const express = require('express');
const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

// connect to db using mongoose
mongoose.connect(keys.mongoURI);

// instantiate express app
const app = express();


app.use(passport.initialize());

// app.use(passport.session());

// call auth routes with app object
require('./routes/authRoutes')(app);

// bind to env port, or 5000 if not available
const PORT = process.env.PORT || 5000;
app.listen(PORT);
