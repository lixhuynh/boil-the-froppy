const jikanjs = require('@mateoaranda/jikanjs');
const readline = require("prompt-sync");

async function getIdFromSearch(str_ani) {
  try {
    let anime = await jikanjs.search("anime", str_ani, 1);
    return id = anime["data"][0]["mal_id"];
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

async function getTopRecs(id_ani, n_recs) {
  try {
    let recdata = await jikanjs.loadAnime(id_ani, "recommendations");
    let recs = recdata["data"].slice(0, Math.min(n_recs, recdata["data"].length));
    let top = [];
    for (let rec of recs){
      top.push(rec["entry"]["mal_id"]);
    }
    return top;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

async function getPath(ani1, ani2, n_recs) {
  try {
    let start = await getIdFromSearch(ani1);
    let end = await getIdFromSearch(ani2);
    let queue = [start];
    let parent = {}
    while (queue.length > 0) {
      let node = queue.shift();
      let recs = await getTopRecs(node, n_recs);
      for (let nbr of recs) {
        if (!(nbr in parent)) {
          parent[nbr] = node;
          queue.push(nbr);
        }
        if (nbr == end) {
          let curr = end;
          let path = []
          while (curr != start) {
            path.push(curr);
            curr = parent[curr];
          }
          path.push(start);
          return ("Path found! ", path.reverse());
        }
      }
    }
    return "Path not found.";
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

let ani1 = prompt("First anime? ");
let ani2 = prompt("Second anime? ");
let n_recs = prompt("How many of the top recs should be checked? ");

(async () => {
  path = await getPath(ani1, ani2, n_recs);
  console.log(path);
})();