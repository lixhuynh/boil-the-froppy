const graph = require('./graph');

(async () => {
    topAni = await graph.getTopAnime(8);
    recGraph = await graph.getRecsForSet(topAni);
    console.log(recGraph);
})(); 