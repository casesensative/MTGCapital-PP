

module.exports = {
  card_search: async (req, res) => {
    const db = req.app.get('db');
    const {searchtext} = req.params;
    console.log(searchtext);

    const searchresults = await db.cards.card_search(searchtext);
    
    console.log(searchresults);

    if (searchresults) {
      return res.status(200).send(searchresults)
    } else {
      return res.status(500).send('Card search failed. Try again later.')
    }
    
    
  }
}