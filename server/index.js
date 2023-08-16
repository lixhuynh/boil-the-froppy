const cors = require('cors');
const cors = require('cors');
const express = require('express');
const app = express();
const jikanjs = require('@mateoaranda/jikanjs');
const graph = require('./graph');
const graphData = require('./graph-data.json')

const allowedOrigins = ['*'];
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));

app.use(express.json());

app.post('/api', async (req, res) => {
    const [q1, q2] = req.body;
    try {
      const animeFrom = await jikanjs.search('anime', q1, 1);
      const startData = {
        name: animeFrom['data'][0]['title'],
        votes: 0,
        img: animeFrom['data'][0]['images']['jpg']['image_url'],
        url: animeFrom['data'][0]['url']
      }
      const animeTo = await jikanjs.search('anime', q2, 1);
      const idFrom = animeFrom['data'][0]['mal_id'].toString();
      const idTo = animeTo['data'][0]['mal_id'].toString();
      const path = graph.findPath(graphData, idFrom, idTo);
      path.unshift(startData);
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(path);
    } catch(error) {
      throw error;
    }
})

app.get('/api', async (req, res) => {
  res.json(graphData);
})

app.listen(5000, () => {console.log('Server started')});