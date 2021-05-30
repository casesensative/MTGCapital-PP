

module.exports = {
  add_interest: async (req, res, next) => {
    const db = req.app.get('db');
    console.log(req.session.user.user_id);
    const {user} = req.session;
    const {card_id, buyprice, amount} = req.body;

    if (!user) {
      return res.status(511).send('User not logged in.');
    }
    const user_id = user.user_id;
    console.log(user_id);
    console.log('adding card to interests')
    const added = await db.interests.add_interest(user_id, card_id, buyprice, amount);

    if (added) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }

  }
}