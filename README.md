Inspired by "Boil the Frog," a tool that finds a path between two musical artists. I find the relationship between two anime using the frequency of MyAnimeList recommendations.

# Workflow
- Prototyped path-finding algorithm (modified BFS).
  - No frontend; search conducted in console. Powered by JikanJS.
- Developed frontend prototype
  - Initially just modified Disappearing Act. No functionality.
  - Created Figma mockup.
  - Used React, Bootstrap, and custom components to create demo.
- Connected backend to frontend
  - Chose Node.js for consistency & pre-existing knowledge with JikanJS.
  - Primary problem was proxying from different ports (especially Vite).
- Created backend functions
  - Built graph, implemented Dijkstra.
- Integrated POSTing
  - Request: [animeTo, animeFrom] from text inputs
  - Response: path between the two (not including animeTo)

Currently:
- Improve display
  - Customize start card
- Look into Redux
- Visualize graph; increase graph size