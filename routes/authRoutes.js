const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
  app.post('/auth/facebook/token',
    passport.authenticate('facebook-token'),
    (req, res, next) => {
      req.token = jwt.sign({
        id: req.user.facebookId
      }, 'mysecret', {
        expiresIn: 1000 * 60 * 60 * 48
      });

      res.setHeader('x-auth-token', req.token);
      res.status(200).send(req.user);
    })

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current-user', (req, res) => {
    res.send(req.user);
  });
}
