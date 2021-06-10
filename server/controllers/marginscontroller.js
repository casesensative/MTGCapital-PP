

module.exports = {
  get_margins: async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.params;

    const margins = await db.margins.get_margins(user_id);

    if (margins) {
      return res.status(200).send(margins)
    } else {
      return res.status(500).send(`Couldn't get margins. Try again later.`)
    }
  },
  search_margins: async (req, res) => {
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

    const searchresults = await db.margins.search_margins(user_id, s1, s2, s3);

    if (searchresults) {
      return res.status(200).send(searchresults);
    } else {
      return res.status(500).send('Margins search failed. Try again later.');
    }
  }
}