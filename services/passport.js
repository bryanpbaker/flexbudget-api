const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(new FacebookStrategy(
    {
      clientID: keys.facebookAppID,
      clientSecret: keys.facebookAppSecret,
      callbackURL: '/auth/facebook/callback'
    },
    (accessToken, refreshToken, profile, done)  => {
      User.findOne({ facebookId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // already have a record of this user
            done(null, existingUser);
          } else {
            new User({ facebookId: profile.id }).save()
              .then(user => done(null, user));
          }
        });
    }
  )
);
