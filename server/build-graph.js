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
      await throttleRequest(100); // jikan ratelimits
      const recs = raw['data'];
      const neighbors = {};
      for (const rec of recs) {
        const votes = rec['votes'];
        const id = rec['entry']['mal_id'];
        if (votes >= minRecs && animeSet.has(id)) { // outer vars
          neighbors[id] = {'votes': votes,
            'weight': (weightCap-Math.min(weightCap-1, votes))/10};
        }
      }
      console.log(neighbors);
      return neighbors;
    } catch (error) {
      throw error;
    }
  }
  
  const recGraph = {}
  for (const animeId of animeSet) {
    console.log(animeId)
    const neighbors = await getRecsForAnime(animeId);
    if (Object.keys(neighbors).length != 0) {
      recGraph[animeId] = neighbors;
    }
  }  
  return recGraph
}

(async () => {
  const anime = await getTopAnime(1);
  const graph = await getRecsForSet(anime);
  console.log(graph);
})();