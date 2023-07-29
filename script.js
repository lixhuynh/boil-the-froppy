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
    let top_recs = [];
    for (let i = 0; i < Math.min(n_recs, recdata["data"].length); i++) {
      let id_idx = recdata["data"][i]["url"].indexOf("-")+1;
      let id = recdata["data"][i]["url"].substring(id_idx);
      top_recs.push(id);
    }
    return top_recs;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

let str_ani1 = prompt("First anime? ");
let str_ani2 = prompt("Second anime? ");

(async () => {
  try {
    let id_ani1 = await getIdFromSearch(str_ani1);
    let id_ani2 = await getIdFromSearch(str_ani2);
    let queue = await getTopRecs(id_ani1, 5);
    console.log(queue);
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
})();