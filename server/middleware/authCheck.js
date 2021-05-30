module.exports = {
  authCheck: (req, res, next) => {
    !req.session.user ? res.status(511).send('User not logged in.') : next();
  }
}