import fetch from 'node-fetch';

export default async function handler(req, res) {
  console.log()
    var api_key = process.env.API_KEY || 'eyNjX12P8QKZfyccYamQTb1TCYOnQ49u'
    var path = `https://api.polygon.io/v2/aggs/ticker/${req.query.ticker}/prev?adjusted=true&apiKey=${api_key}`

    try {
        const data = await fetch(path)
        .then(res => res.json(),console.log('res in ticker',res))
        
        res.json(data)            
      } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
      }
  }