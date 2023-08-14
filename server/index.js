const express = require('express');
const app = express();
const jikanjs = require('@mateoaranda/jikanjs');
const graph = require('./graph');

app.use(express.json());

app.post('/api', async (req, res) => {
    const [q1, q2] = req.body;
    try {
      const animeFrom = await jikanjs.search('anime', q1, 1);
      const animeTo = await jikanjs.search('anime', q2, 1);
      const idFrom = animeFrom['data'][0]['mal_id'].toString();
      const idTo = animeTo['data'][0]['mal_id'].toString();
      const responseData = graph.findPath(graph.top50, idFrom, idTo);
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(responseData);
    } catch(error) {
      throw error;
    }
})

app.get('/api', async (req, res) => {
  res.json(graph.top50);
})

app.listen(5000, () => {console.log('Server started')});