const express = require('express');
const app = express();

function findPath(graph, start, end) {
    const distance = {};
    const parent = {};
    const visited = new Set();
  
    for (const node in graph) {
      distance[node] = Infinity;
    }
    distance[start] = 0;
  
    let curr = start;
    while (curr && curr != end) {
      visited.add(curr);
      for (const nbr in graph[curr]) {
        if (!visited.has(nbr)) {
          const distToNbr = distance[curr] + graph[curr][nbr]['weight'];
          if (distToNbr < distance[nbr]) {
            distance[nbr] = distToNbr;
            parent[nbr] = curr;
          } 
        }
      }
      let shortestDist = Infinity;
      let next;
      for (const node in distance) {
        if (!visited.has(node) && distance[node] < shortestDist) {
          shortestDist = distance[node];
          next = node;
        }
      }
      curr = next;
    }
  
    const path = [];
    let node = end;
    while (node) {
      path.unshift(node);
      node = parent[node];
    }
    return path;
}

const g = {
    '20': {
      '21': { votes: 45, weight: 5.5 },
      '11061': { votes: 43, weight: 5.7 },
      '31964': { votes: 29, weight: 7.1 },
      '40748': { votes: 25, weight: 7.5 }
    },
    '21': {
      '20': { votes: 45, weight: 5.5 },
      '1735': { votes: 15, weight: 8.5 },
      '5114': { votes: 5, weight: 9.5 },
      '11061': { votes: 67, weight: 3.3 },
      '31964': { votes: 11, weight: 8.9 }
    },
    '1535': {
      '1575': { votes: 631, weight: 0.1 },
      '9253': { votes: 15, weight: 8.5 },
      '16498': { votes: 9, weight: 9.1 },
      '19815': { votes: 24, weight: 7.6 },
      '22319': { votes: 12, weight: 8.8 }
    },
    '1575': {
      '1535': { votes: 631, weight: 0.1 },
      '5114': { votes: 15, weight: 8.5 },
      '16498': { votes: 9, weight: 9.1 },
      '19815': { votes: 26, weight: 7.4 }
    },
    '1735': {
      '21': { votes: 15, weight: 8.5 },
      '5114': { votes: 9, weight: 9.1 },
      '11061': { votes: 13, weight: 8.7 },
      '31964': { votes: 5, weight: 9.5 },
      '40748': { votes: 13, weight: 8.7 }
    },
    '4224': { '23273': { votes: 5, weight: 9.5 } },
    '5114': {
      '21': { votes: 5, weight: 9.5 },
      '1575': { votes: 15, weight: 8.5 },
      '1735': { votes: 9, weight: 9.1 },
      '11061': { votes: 100, weight: 0.1 },
      '16498': { votes: 42, weight: 5.8 },
      '38000': { votes: 17, weight: 8.3 }
    },
    '9253': {
      '1535': { votes: 15, weight: 8.5 },
      '31240': { votes: 129, weight: 0.1 }
    },
    '11061': {
      '20': { votes: 43, weight: 5.7 },
      '21': { votes: 67, weight: 3.3 },
      '1735': { votes: 13, weight: 8.7 },
      '5114': { votes: 100, weight: 0.1 },
      '16498': { votes: 10, weight: 9 },
      '30276': { votes: 10, weight: 9 },
      '31964': { votes: 26, weight: 7.4 },
      '38000': { votes: 13, weight: 8.7 },
      '40748': { votes: 15, weight: 8.5 }
    },
    '11757': {
      '16498': { votes: 8, weight: 9.2 },
      '19815': { votes: 52, weight: 4.8 },
      '31240': { votes: 12, weight: 8.8 }
    },
    '16498': {
      '1535': { votes: 9, weight: 9.1 },
      '1575': { votes: 9, weight: 9.1 },
      '5114': { votes: 42, weight: 5.8 },
      '11061': { votes: 10, weight: 9 },
      '11757': { votes: 8, weight: 9.2 },
      '22319': { votes: 43, weight: 5.7 },
      '38000': { votes: 21, weight: 7.9 }
    },
    '19815': {
      '1535': { votes: 24, weight: 7.6 },
      '1575': { votes: 26, weight: 7.4 },
      '11757': { votes: 52, weight: 4.8 },
      '31240': { votes: 5, weight: 9.5 }
    },
    '20507': { '40748': { votes: 18, weight: 8.2 } },
    '22319': {
      '1535': { votes: 12, weight: 8.8 },
      '16498': { votes: 43, weight: 5.7 },
      '38000': { votes: 9, weight: 9.1 }
    },
    '23273': { '4224': { votes: 5, weight: 9.5 } },
    '30276': {
      '11061': { votes: 10, weight: 9 },
      '31964': { votes: 98, weight: 0.2 }
    },
    '31240': {
      '9253': { votes: 129, weight: 0.1 },
      '11757': { votes: 12, weight: 8.8 },
      '19815': { votes: 5, weight: 9.5 }
    },
    '31964': {
      '20': { votes: 29, weight: 7.1 },
      '21': { votes: 11, weight: 8.9 },
      '1735': { votes: 5, weight: 9.5 },
      '11061': { votes: 26, weight: 7.4 },
      '30276': { votes: 98, weight: 0.2 },
      '38000': { votes: 16, weight: 8.4 },
      '40748': { votes: 12, weight: 8.8 }
    },
    '38000': {
      '5114': { votes: 17, weight: 8.3 },
      '11061': { votes: 13, weight: 8.7 },
      '16498': { votes: 21, weight: 7.9 },
      '22319': { votes: 9, weight: 9.1 },
      '31964': { votes: 16, weight: 8.4 },
      '40748': { votes: 70, weight: 3 }
    },
    '40748': {
      '20': { votes: 25, weight: 7.5 },
      '1735': { votes: 13, weight: 8.7 },
      '11061': { votes: 15, weight: 8.5 },
      '20507': { votes: 18, weight: 8.2 },
      '31964': { votes: 12, weight: 8.8 },
      '38000': { votes: 70, weight: 3 }
    }
  };

app.use(express.json());

app.post('/api', (req, res) => {
    const [animeTo, animeFrom] = req.body;
    const path = findPath(g, animeFrom, animeTo);
    const responseData = [path];
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(responseData);
})

app.listen(5000, () => {console.log('Server started')});