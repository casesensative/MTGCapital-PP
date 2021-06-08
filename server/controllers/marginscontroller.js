

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
  }
}