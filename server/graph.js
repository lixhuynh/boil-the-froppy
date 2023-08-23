const jikanjs = require('@mateoaranda/jikanjs');

async function throttleRequest(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function getTopAnime(pages) {
  // 25 anime per page
  const topAnime = new Set();
  for (const page of Array.from(new Array(pages), (x, i) => i+1)) {
    const onPage = await jikanjs.loadTop('anime', page, 'tv', 'bypopularity');
    onPage['data'].forEach(item => topAnime.add(item['mal_id']));
  }
  return topAnime;
}

async function getRecsForSet(animeSet) {
  const minRecs = 5;
  const weightCap = 100; // minimize effect of outlier recs

  async function getRecsForAnime(animeId) {
    try {
      const raw = await jikanjs.loadAnime(animeId, 'recommendations');
      await throttleRequest(300); // jikan ratelimits
      const recs = raw['data'];
      const neighbors = {};
      for (const rec of recs) {
        const votes = rec['votes'];
        const id = rec['entry']['mal_id'];
        if (votes >= minRecs && animeSet.has(id)) { // outer vars
          neighbors[id] = {
            'name': rec['entry']['title'],
            'votes': votes,
            'url': rec['entry']['url'],
            'img': rec['entry']['images']['jpg']['image_url'],
            'weight': (weightCap-Math.min(weightCap-1, votes))/10
          };
        }
      }
      return neighbors;
    } catch (error) {
      throw error;
    }
  }
  
  const recGraph = {}
  for (const animeId of animeSet) {
    const neighbors = await getRecsForAnime(animeId);
    if (Object.keys(neighbors).length != 0) {
      recGraph[animeId] = neighbors;
    }
  }  
  return recGraph
}

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
  let prev = end;
  let next = parent[prev];
  while (next) {
    path.unshift(graph[next][prev]);
    prev = next;
    next = parent[next];
  }
  return path;
}

module.exports.findPath = findPath;