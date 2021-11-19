export default function handler(req, res) {
    var path = `https://api.polygon.io/v2/aggs/ticker/${req.T}/prev`
    res.status(200).json({ msg: 'Success' })

  }