from jikanpy import Jikan
import time

JIKAN = Jikan()
LAST_PAGE = 13
TOP = 50

results = []
for idx in range(1, LAST_PAGE):
    query = JIKAN.top(type="anime", page=idx)
    time.sleep(0.75) # Slow queries to avoid rate limit
    for anime in query["data"]:
        id = anime["mal_id"]
        rank = anime["rank"]
        popularity = anime["popularity"]
        title = anime["title"]
        results.append((id, title, rank, popularity))
ranking = sorted(results, key=lambda x: x[2]-x[3]) # Sort results by nicheness

for idx in range(1, TOP+1):
    id, title, rank, popularity = ranking[idx]
    line = "{place}. {title} ({rank}, {popularity})".format(place=idx, title=title, rank=rank, popularity=popularity)
    print(line)