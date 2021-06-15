module.exports = {
  add_interest: async (req, res, next) => {
    const db = req.app.get('db');
    const {user} = req.session;
    const {card_id, buypricefixed, amount, isfoil} = req.body;

    if (!user) {
      return res.status(511).send('User not logged in.');
    }
    const user_id = user.user_id;
    console.log('adding card to interests')
    const added = await db.interests.add_interest(user_id, card_id, buypricefixed, amount, isfoil);

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
  },

  search_interests: async (req, res) => {
    const db = req.app.get('db');
    const {user_id, searchtext} = req.params;
    
    let s1, s2, s3 = '';


    const search = searchtext.split(' ');

    search[0] ? s1 = search[0] : s1 = '';
    console.log(s1);
    search[1] ? s2 = search[1] : s2 = '';
    console.log(s2);
    search[2] ? s3 = search[2] : s3 = '';
    console.log(s3);

    const searchresults = await db.interests.search_interests(user_id, s1, s2, s3);

    console.log(searchresults);

    if (searchresults) {
      return res.status(200).send(searchresults)
    } else {
      return res.status(500).send('Interests search failed. Try again later.')
    }
  },

  sell_interest: async (req, res) => {

    console.log('hitting sell endpoint!');
    const db = req.app.get('db');
    const {interest_id, sellamount, sellprice, currentmargin} = req.body;

    const addedMargin = await db.interests.sell_interest(interest_id, sellamount, sellprice, currentmargin);

    if (addedMargin) {
      return res.status(200).send('Interest sold. Margin added.');
    } else {
      return res.status(500).send('Error selling interest. Try again later.');
    }

  }
}