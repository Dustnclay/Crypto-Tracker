import fetch from 'node-fetch';

export default function handler(req, res) {
    
        var path = `https://api.polygon.io/v2/aggs/ticker/${req.query.ticker}/prev?adjusted=true&apiKey=${process.env.API_KEY}`

    console.log(path)
    fetch(path)
        .then(res => res.json())
        .then(text => console.log(text))
        .catch(err => {console.log('err in ticker api',err)})
    res.status(200).json({ msg: 'Success' })

  }