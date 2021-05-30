const bcrypt = require('bcryptjs');




module.exports = {

  register: async (req, res, next) => {
    const db = req.app.get('db');
    const {email, password, phone} = req.body;
    const [user] = await db.auth.check_user(email);
    if (user) {
      return res.status(409).send('This email is already registered. Please login.');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newuser] = await db.auth.create_newuser(email, hash, phone);
    delete newuser.password;
    req.session.user = newuser;
    return res.status(200).send(req.session.user);
  },
  login: async (req, res, next) => {
    console.log('login');
    const db = req.app.get('db');
    const {email, password} = req.body;
    const [user] = await db.auth.check_user(email);
    if (!user) {
      return res.status(404).send('No user registered for this email address.');
    }
    const auth = bcrypt.compareSync(password, user.password);
    if (auth) {
      delete user.password;
      req.session.user = user;
      return res.status(200).send(req.session.user);
    } else {
      return res.status(401).send('Incorrect username or password.');
    }

  },
  logout: async (req, res, next) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser: (req, res) => {
    const user = req.session.user;
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(511).send('User not logged in.');
    }
  }
};