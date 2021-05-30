

module.exports = {
  card_search: async (req, res) => {
    const db = req.app.get('db');
    const {searchtext} = req.params;
    let s1, s2, s3 = '';


    const search = searchtext.split(' ');

    search[0] ? s1 = search[0] : s1 = '';
    search[1] ? s2 = search[1] : s2 = '';
    search[2] ? s3 = search[2] : s3 = '';

    const searchresults = await db.cards.card_search(s1, s2, s3);
    
    console.log(searchresults);

    if (searchresults) {
      return res.status(200).send(searchresults)
    } else {
      return res.status(500).send('Card search failed. Try again later.')
    }
    
    
  }
}