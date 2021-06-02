

module.exports = {
  add_interest: async (req, res, next) => {
    const db = req.app.get('db');
    const {user} = req.session;
    const {card_id, buyprice, amount, isfoil} = req.body;

    if (!user) {
      return res.status(511).send('User not logged in.');
    }
    const user_id = user.user_id;
    console.log('adding card to interests')
    const added = await db.interests.add_interest(user_id, card_id, buyprice, amount, isfoil);

    if (added) {
      return res.status(200).send('Card added to interests.');
    } else {
      res.sendStatus(400);
    }

  },

  get_interests: async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.params;
    
    const interests = await db.interests.get_interests(user_id);
    res.status(200).send(interests);
  }
}