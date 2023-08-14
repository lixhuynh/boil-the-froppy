const jikanjs = require('@mateoaranda/jikanjs');

// from await getTopAnime(2);
const top50 = {
  '1': {
    '30': {
      name: 'Neon Genesis Evangelion',
      votes: 9,
      url: 'https://myanimelist.net/anime/30/Neon_Genesis_Evangelion',
      img: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03',
      weight: 9.1
    },
    '1575': {
      name: 'Code Geass: Hangyaku no Lelouch',
      votes: 6,
      url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
      img: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0',
      weight: 9.4
    }
  },
  '20': {
    '21': {
      name: 'One Piece',
      votes: 45,
      url: 'https://myanimelist.net/anime/21/One_Piece',
      img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      weight: 5.5
    },
    '269': {
      name: 'Bleach',
      votes: 35,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 6.5
    },
    '6702': {
      name: 'Fairy Tail',
      votes: 30,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 7
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 11,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 8.9
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 43,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 5.7
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 29,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 7.1
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 25,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 7.5
    }
  },
  '21': {
    '20': {
      name: 'Naruto',
      votes: 45,
      url: 'https://myanimelist.net/anime/20/Naruto',
      img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
      weight: 5.5
    },
    '269': {
      name: 'Bleach',
      votes: 12,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 8.8
    },
    '1735': {
      name: 'Naruto: Shippuuden',
      votes: 15,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      img: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg?s=a92272fe7a37f1c114011b406d5390c8',
      weight: 8.5
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 5,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 9.5
    },
    '6702': {
      name: 'Fairy Tail',
      votes: 85,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 1.5
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 66,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 3.4
    },
    '23755': {
      name: 'Nanatsu no Taizai',
      votes: 5,
      url: 'https://myanimelist.net/anime/23755/Nanatsu_no_Taizai',
      img: 'https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485',
      weight: 9.5
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 11,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 8.9
    }
  },
  '30': {
    '1': {
      name: 'Cowboy Bebop',
      votes: 9,
      url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
      img: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg?s=bb1e96eb0a0224a57aa45443eab92575',
      weight: 9.1
    },
    '1535': {
      name: 'Death Note',
      votes: 7,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 9.3
    },
    '1575': {
      name: 'Code Geass: Hangyaku no Lelouch',
      votes: 17,
      url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
      img: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0',
      weight: 8.3
    },
    '10620': {
      name: 'Mirai Nikki (TV)',
      votes: 9,
      url: 'https://myanimelist.net/anime/10620/Mirai_Nikki_TV',
      img: 'https://cdn.myanimelist.net/images/anime/13/33465.jpg?s=47381246925211d3873b932cba7b2703',
      weight: 9.1
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 31,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 6.9
    },
    '22319': {
      name: 'Tokyo Ghoul',
      votes: 7,
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      img: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2',
      weight: 9.3
    },
    '31240': {
      name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      votes: 6,
      url: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu',
      img: 'https://cdn.myanimelist.net/images/anime/1522/128039.jpg?s=a0f123db562eb5b8a54e2480ebc53717',
      weight: 9.4
    }
  },
  '269': {
    '20': {
      name: 'Naruto',
      votes: 35,
      url: 'https://myanimelist.net/anime/20/Naruto',
      img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
      weight: 6.5
    },
    '21': {
      name: 'One Piece',
      votes: 12,
      url: 'https://myanimelist.net/anime/21/One_Piece',
      img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      weight: 8.8
    },
    '1535': {
      name: 'Death Note',
      votes: 5,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 9.5
    },
    '1735': {
      name: 'Naruto: Shippuuden',
      votes: 34,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      img: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg?s=a92272fe7a37f1c114011b406d5390c8',
      weight: 6.6
    },
    '6702': {
      name: 'Fairy Tail',
      votes: 9,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 9.1
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 9,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 9.1
    },
    '20507': {
      name: 'Noragami',
      votes: 11,
      url: 'https://myanimelist.net/anime/20507/Noragami',
      img: 'https://cdn.myanimelist.net/images/anime/1886/128266.jpg?s=a74efc6fc8fa714f6edb13c9f6222910',
      weight: 8.9
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 21,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 7.9
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 34,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 6.6
    }
  },
  '1535': {
    '30': {
      name: 'Neon Genesis Evangelion',
      votes: 7,
      url: 'https://myanimelist.net/anime/30/Neon_Genesis_Evangelion',
      img: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03',
      weight: 9.3
    },
    '269': {
      name: 'Bleach',
      votes: 5,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 9.5
    },
    '1575': {
      name: 'Code Geass: Hangyaku no Lelouch',
      votes: 632,
      url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
      img: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0',
      weight: 0.1
    },
    '2904': {
      name: 'Code Geass: Hangyaku no Lelouch R2',
      votes: 53,
      url: 'https://myanimelist.net/anime/2904/Code_Geass__Hangyaku_no_Lelouch_R2',
      img: 'https://cdn.myanimelist.net/images/anime/1088/135089.jpg?s=8228f599281b29c489dfc5a0a5761d0f',
      weight: 4.7
    },
    '9253': {
      name: 'Steins;Gate',
      votes: 15,
      url: 'https://myanimelist.net/anime/9253/Steins_Gate',
      img: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg?s=cd8506e6d26bad48a78aa985477a55ca',
      weight: 8.5
    },
    '10620': {
      name: 'Mirai Nikki (TV)',
      votes: 76,
      url: 'https://myanimelist.net/anime/10620/Mirai_Nikki_TV',
      img: 'https://cdn.myanimelist.net/images/anime/13/33465.jpg?s=47381246925211d3873b932cba7b2703',
      weight: 2.4
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 9,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 9.1
    },
    '19815': {
      name: 'No Game No Life',
      votes: 24,
      url: 'https://myanimelist.net/anime/19815/No_Game_No_Life',
      img: 'https://cdn.myanimelist.net/images/anime/1074/111944.jpg?s=3d63ffec8cd2a7f1e00e8dc15ef534f5',
      weight: 7.6
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 5,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 9.5
    },
    '22319': {
      name: 'Tokyo Ghoul',
      votes: 12,
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      img: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2',
      weight: 8.8
    },
    '22535': {
      name: 'Kiseijuu: Sei no Kakuritsu',
      votes: 14,
      url: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu',
      img: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg?s=aeb28b4778c7bcdfcb0004cbb1a55523',
      weight: 8.6
    },
    '28223': {
      name: 'Death Parade',
      votes: 47,
      url: 'https://myanimelist.net/anime/28223/Death_Parade',
      img: 'https://cdn.myanimelist.net/images/anime/5/71553.jpg?s=68833377dab9077cd7847c91eec46f08',
      weight: 5.3
    },
    '31043': {
      name: 'Boku dake ga Inai Machi',
      votes: 16,
      url: 'https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi',
      img: 'https://cdn.myanimelist.net/images/anime/10/77957.jpg?s=27f147795f08191cf1a96a2b50e1756c',
      weight: 8.4
    },
    '37779': {
      name: 'Yakusoku no Neverland',
      votes: 44,
      url: 'https://myanimelist.net/anime/37779/Yakusoku_no_Neverland',
      img: 'https://cdn.myanimelist.net/images/anime/1830/118780.jpg?s=4e8a1b5b13b15d3c9172d53e3aad887b',
      weight: 5.6
    },
    '37999': {
      name: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
      votes: 25,
      url: 'https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen',
      img: 'https://cdn.myanimelist.net/images/anime/1295/106551.jpg?s=ea15a93e0d25bce3e6c15e2c3ddb66a1',
      weight: 7.5
    }
  },
  '1575': {
    '1': {
      name: 'Cowboy Bebop',
      votes: 6,
      url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
      img: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg?s=bb1e96eb0a0224a57aa45443eab92575',
      weight: 9.4
    },
    '30': {
      name: 'Neon Genesis Evangelion',
      votes: 17,
      url: 'https://myanimelist.net/anime/30/Neon_Genesis_Evangelion',
      img: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03',
      weight: 8.3
    },
    '1535': {
      name: 'Death Note',
      votes: 631,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 0.1
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 15,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 8.5
    },
    '10620': {
      name: 'Mirai Nikki (TV)',
      votes: 6,
      url: 'https://myanimelist.net/anime/10620/Mirai_Nikki_TV',
      img: 'https://cdn.myanimelist.net/images/anime/13/33465.jpg?s=47381246925211d3873b932cba7b2703',
      weight: 9.4
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 9,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 9.1
    },
    '19815': {
      name: 'No Game No Life',
      votes: 26,
      url: 'https://myanimelist.net/anime/19815/No_Game_No_Life',
      img: 'https://cdn.myanimelist.net/images/anime/1074/111944.jpg?s=3d63ffec8cd2a7f1e00e8dc15ef534f5',
      weight: 7.4
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 13,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 8.7
    }
  },
  '1735': {
    '21': {
      name: 'One Piece',
      votes: 15,
      url: 'https://myanimelist.net/anime/21/One_Piece',
      img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      weight: 8.5
    },
    '269': {
      name: 'Bleach',
      votes: 34,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 6.6
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 9,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 9.1
    },
    '6702': {
      name: 'Fairy Tail',
      votes: 13,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 8.7
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 5,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 9.5
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 13,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 8.7
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 5,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 9.5
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 13,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 8.7
    }
  },
  '2904': {
    '1535': {
      name: 'Death Note',
      votes: 53,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 4.7
    }
  },
  '4224': {
    '6547': {
      name: 'Angel Beats!',
      votes: 8,
      url: 'https://myanimelist.net/anime/6547/Angel_Beats',
      img: 'https://cdn.myanimelist.net/images/anime/1244/111115.jpg?s=14607c2ea405539df501e29595daa582',
      weight: 9.2
    },
    '23273': {
      name: 'Shigatsu wa Kimi no Uso',
      votes: 5,
      url: 'https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso',
      img: 'https://cdn.myanimelist.net/images/anime/3/67177.jpg?s=bc267f764bffe825e1e8d60f7185a2e9',
      weight: 9.5
    },
    '37999': {
      name: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
      votes: 11,
      url: 'https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen',
      img: 'https://cdn.myanimelist.net/images/anime/1295/106551.jpg?s=ea15a93e0d25bce3e6c15e2c3ddb66a1',
      weight: 8.9
    }
  },
  '5114': {
    '21': {
      name: 'One Piece',
      votes: 5,
      url: 'https://myanimelist.net/anime/21/One_Piece',
      img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      weight: 9.5
    },
    '1575': {
      name: 'Code Geass: Hangyaku no Lelouch',
      votes: 15,
      url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
      img: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0',
      weight: 8.5
    },
    '1735': {
      name: 'Naruto: Shippuuden',
      votes: 9,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      img: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg?s=a92272fe7a37f1c114011b406d5390c8',
      weight: 9.1
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 17,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 8.3
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 100,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 0.1
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 42,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 5.8
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 10,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 9
    },
    '23755': {
      name: 'Nanatsu no Taizai',
      votes: 9,
      url: 'https://myanimelist.net/anime/23755/Nanatsu_no_Taizai',
      img: 'https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485',
      weight: 9.1
    },
    '33352': {
      name: 'Violet Evergarden',
      votes: 5,
      url: 'https://myanimelist.net/anime/33352/Violet_Evergarden',
      img: 'https://cdn.myanimelist.net/images/anime/1795/95088.jpg?s=9e24a139603a4e0ea8ea055a230b54d5',
      weight: 9.5
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 17,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 8.3
    }
  },
  '6547': {
    '4224': {
      name: 'Toradora!',
      votes: 8,
      url: 'https://myanimelist.net/anime/4224/Toradora',
      img: 'https://cdn.myanimelist.net/images/anime/13/22128.jpg?s=08c2b1b4a465fc43cbe15aae4a425b78',
      weight: 9.2
    },
    '11757': {
      name: 'Sword Art Online',
      votes: 9,
      url: 'https://myanimelist.net/anime/11757/Sword_Art_Online',
      img: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d',
      weight: 9.1
    },
    '23273': {
      name: 'Shigatsu wa Kimi no Uso',
      votes: 18,
      url: 'https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso',
      img: 'https://cdn.myanimelist.net/images/anime/3/67177.jpg?s=bc267f764bffe825e1e8d60f7185a2e9',
      weight: 8.2
    },
    '24833': {
      name: 'Ansatsu Kyoushitsu',
      votes: 16,
      url: 'https://myanimelist.net/anime/24833/Ansatsu_Kyoushitsu',
      img: 'https://cdn.myanimelist.net/images/anime/5/75639.jpg?s=f30fb4e81d2e9054f27fa76ee1e84a2d',
      weight: 8.4
    },
    '28223': {
      name: 'Death Parade',
      votes: 35,
      url: 'https://myanimelist.net/anime/28223/Death_Parade',
      img: 'https://cdn.myanimelist.net/images/anime/5/71553.jpg?s=68833377dab9077cd7847c91eec46f08',
      weight: 6.5
    }
  },
  '6702': {
    '20': {
      name: 'Naruto',
      votes: 30,
      url: 'https://myanimelist.net/anime/20/Naruto',
      img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
      weight: 7
    },
    '21': {
      name: 'One Piece',
      votes: 85,
      url: 'https://myanimelist.net/anime/21/One_Piece',
      img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      weight: 1.5
    },
    '269': {
      name: 'Bleach',
      votes: 9,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 9.1
    },
    '1735': {
      name: 'Naruto: Shippuuden',
      votes: 13,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      img: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg?s=a92272fe7a37f1c114011b406d5390c8',
      weight: 8.7
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 6,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 9.4
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 7,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 9.3
    },
    '23755': {
      name: 'Nanatsu no Taizai',
      votes: 29,
      url: 'https://myanimelist.net/anime/23755/Nanatsu_no_Taizai',
      img: 'https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485',
      weight: 7.1
    },
    '30831': {
      name: 'Kono Subarashii Sekai ni Shukufuku wo!',
      votes: 6,
      url: 'https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo',
      img: 'https://cdn.myanimelist.net/images/anime/8/77831.jpg?s=ae299e926b2d7a713c7daa9ab56876a4',
      weight: 9.4
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 5,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 9.5
    }
  },
  '9253': {
    '1535': {
      name: 'Death Note',
      votes: 15,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 8.5
    },
    '10620': {
      name: 'Mirai Nikki (TV)',
      votes: 27,
      url: 'https://myanimelist.net/anime/10620/Mirai_Nikki_TV',
      img: 'https://cdn.myanimelist.net/images/anime/13/33465.jpg?s=47381246925211d3873b932cba7b2703',
      weight: 7.3
    },
    '31043': {
      name: 'Boku dake ga Inai Machi',
      votes: 129,
      url: 'https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi',
      img: 'https://cdn.myanimelist.net/images/anime/10/77957.jpg?s=27f147795f08191cf1a96a2b50e1756c',
      weight: 0.1
    },
    '31240': {
      name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      votes: 129,
      url: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu',
      img: 'https://cdn.myanimelist.net/images/anime/1522/128039.jpg?s=a0f123db562eb5b8a54e2480ebc53717',
      weight: 0.1
    }
  },
  '9919': {
    '20': {
      name: 'Naruto',
      votes: 11,
      url: 'https://myanimelist.net/anime/20/Naruto',
      img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
      weight: 8.9
    },
    '269': {
      name: 'Bleach',
      votes: 9,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 9.1
    },
    '1735': {
      name: 'Naruto: Shippuuden',
      votes: 5,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      img: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg?s=a92272fe7a37f1c114011b406d5390c8',
      weight: 9.5
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 17,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 8.3
    },
    '6702': {
      name: 'Fairy Tail',
      votes: 6,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 9.4
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 10,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 9
    },
    '20507': {
      name: 'Noragami',
      votes: 34,
      url: 'https://myanimelist.net/anime/20507/Noragami',
      img: 'https://cdn.myanimelist.net/images/anime/1886/128266.jpg?s=a74efc6fc8fa714f6edb13c9f6222910',
      weight: 6.6
    },
    '22319': {
      name: 'Tokyo Ghoul',
      votes: 7,
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      img: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2',
      weight: 9.3
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 9,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 9.1
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 11,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 8.9
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 12,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 8.8
    }
  },
  '10620': {
    '30': {
      name: 'Neon Genesis Evangelion',
      votes: 9,
      url: 'https://myanimelist.net/anime/30/Neon_Genesis_Evangelion',
      img: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03',
      weight: 9.1
    },
    '1535': {
      name: 'Death Note',
      votes: 76,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 2.4
    },
    '1575': {
      name: 'Code Geass: Hangyaku no Lelouch',
      votes: 6,
      url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
      img: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0',
      weight: 9.4
    },
    '9253': {
      name: 'Steins;Gate',
      votes: 27,
      url: 'https://myanimelist.net/anime/9253/Steins_Gate',
      img: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg?s=cd8506e6d26bad48a78aa985477a55ca',
      weight: 7.3
    },
    '11757': {
      name: 'Sword Art Online',
      votes: 14,
      url: 'https://myanimelist.net/anime/11757/Sword_Art_Online',
      img: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d',
      weight: 8.6
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 10,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 9
    },
    '22319': {
      name: 'Tokyo Ghoul',
      votes: 8,
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      img: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2',
      weight: 9.2
    }
  },
  '11061': {
    '20': {
      name: 'Naruto',
      votes: 43,
      url: 'https://myanimelist.net/anime/20/Naruto',
      img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
      weight: 5.7
    },
    '21': {
      name: 'One Piece',
      votes: 66,
      url: 'https://myanimelist.net/anime/21/One_Piece',
      img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      weight: 3.4
    },
    '1735': {
      name: 'Naruto: Shippuuden',
      votes: 13,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      img: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg?s=a92272fe7a37f1c114011b406d5390c8',
      weight: 8.7
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 100,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 0.1
    },
    '6702': {
      name: 'Fairy Tail',
      votes: 7,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 9.3
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 10,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 9
    },
    '23755': {
      name: 'Nanatsu no Taizai',
      votes: 6,
      url: 'https://myanimelist.net/anime/23755/Nanatsu_no_Taizai',
      img: 'https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485',
      weight: 9.4
    },
    '30276': {
      name: 'One Punch Man',
      votes: 10,
      url: 'https://myanimelist.net/anime/30276/One_Punch_Man',
      img: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078',
      weight: 9
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 26,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 7.4
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 13,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 8.7
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 15,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 8.5
    }
  },
  '11757': {
    '6547': {
      name: 'Angel Beats!',
      votes: 9,
      url: 'https://myanimelist.net/anime/6547/Angel_Beats',
      img: 'https://cdn.myanimelist.net/images/anime/1244/111115.jpg?s=14607c2ea405539df501e29595daa582',
      weight: 9.1
    },
    '10620': {
      name: 'Mirai Nikki (TV)',
      votes: 14,
      url: 'https://myanimelist.net/anime/10620/Mirai_Nikki_TV',
      img: 'https://cdn.myanimelist.net/images/anime/13/33465.jpg?s=47381246925211d3873b932cba7b2703',
      weight: 8.6
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 8,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 9.2
    },
    '19815': {
      name: 'No Game No Life',
      votes: 52,
      url: 'https://myanimelist.net/anime/19815/No_Game_No_Life',
      img: 'https://cdn.myanimelist.net/images/anime/1074/111944.jpg?s=3d63ffec8cd2a7f1e00e8dc15ef534f5',
      weight: 4.8
    },
    '30831': {
      name: 'Kono Subarashii Sekai ni Shukufuku wo!',
      votes: 15,
      url: 'https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo',
      img: 'https://cdn.myanimelist.net/images/anime/8/77831.jpg?s=ae299e926b2d7a713c7daa9ab56876a4',
      weight: 8.5
    },
    '31240': {
      name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      votes: 12,
      url: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu',
      img: 'https://cdn.myanimelist.net/images/anime/1522/128039.jpg?s=a0f123db562eb5b8a54e2480ebc53717',
      weight: 8.8
    }
  },
  '16498': {
    '30': {
      name: 'Neon Genesis Evangelion',
      votes: 31,
      url: 'https://myanimelist.net/anime/30/Neon_Genesis_Evangelion',
      img: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03',
      weight: 6.9
    },
    '1535': {
      name: 'Death Note',
      votes: 9,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 9.1
    },
    '1575': {
      name: 'Code Geass: Hangyaku no Lelouch',
      votes: 9,
      url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
      img: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0',
      weight: 9.1
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 42,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 5.8
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 10,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 9
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 10,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 9
    },
    '11757': {
      name: 'Sword Art Online',
      votes: 8,
      url: 'https://myanimelist.net/anime/11757/Sword_Art_Online',
      img: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d',
      weight: 9.2
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 20,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 8
    },
    '22319': {
      name: 'Tokyo Ghoul',
      votes: 43,
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      img: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2',
      weight: 5.7
    },
    '22535': {
      name: 'Kiseijuu: Sei no Kakuritsu',
      votes: 9,
      url: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu',
      img: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg?s=aeb28b4778c7bcdfcb0004cbb1a55523',
      weight: 9.1
    },
    '37779': {
      name: 'Yakusoku no Neverland',
      votes: 51,
      url: 'https://myanimelist.net/anime/37779/Yakusoku_no_Neverland',
      img: 'https://cdn.myanimelist.net/images/anime/1830/118780.jpg?s=4e8a1b5b13b15d3c9172d53e3aad887b',
      weight: 4.9
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 21,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 7.9
    }
  },
  '18679': {
    '22199': {
      name: 'Akame ga Kill!',
      votes: 10,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 9
    },
    '30276': {
      name: 'One Punch Man',
      votes: 8,
      url: 'https://myanimelist.net/anime/30276/One_Punch_Man',
      img: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078',
      weight: 9.2
    }
  },
  '19815': {
    '1535': {
      name: 'Death Note',
      votes: 24,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 7.6
    },
    '1575': {
      name: 'Code Geass: Hangyaku no Lelouch',
      votes: 26,
      url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
      img: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0',
      weight: 7.4
    },
    '11757': {
      name: 'Sword Art Online',
      votes: 52,
      url: 'https://myanimelist.net/anime/11757/Sword_Art_Online',
      img: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d',
      weight: 4.8
    },
    '28223': {
      name: 'Death Parade',
      votes: 13,
      url: 'https://myanimelist.net/anime/28223/Death_Parade',
      img: 'https://cdn.myanimelist.net/images/anime/5/71553.jpg?s=68833377dab9077cd7847c91eec46f08',
      weight: 8.7
    },
    '30831': {
      name: 'Kono Subarashii Sekai ni Shukufuku wo!',
      votes: 23,
      url: 'https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo',
      img: 'https://cdn.myanimelist.net/images/anime/8/77831.jpg?s=ae299e926b2d7a713c7daa9ab56876a4',
      weight: 7.7
    },
    '31240': {
      name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      votes: 5,
      url: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu',
      img: 'https://cdn.myanimelist.net/images/anime/1522/128039.jpg?s=a0f123db562eb5b8a54e2480ebc53717',
      weight: 9.5
    }
  },
  '20507': {
    '269': {
      name: 'Bleach',
      votes: 11,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 8.9
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 34,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 6.6
    },
    '32182': {
      name: 'Mob Psycho 100',
      votes: 5,
      url: 'https://myanimelist.net/anime/32182/Mob_Psycho_100',
      img: 'https://cdn.myanimelist.net/images/anime/8/80356.jpg?s=1d7f8902c64d166b821e50ea68267c2a',
      weight: 9.5
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 18,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 8.2
    }
  },
  '20583': {
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 25,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 7.5
    }
  },
  '22199': {
    '1535': {
      name: 'Death Note',
      votes: 5,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 9.5
    },
    '1575': {
      name: 'Code Geass: Hangyaku no Lelouch',
      votes: 13,
      url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
      img: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg?s=b67496ea440a61c0d7ac14173e0bd6e0',
      weight: 8.7
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 10,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 9
    },
    '10620': {
      name: 'Mirai Nikki (TV)',
      votes: 10,
      url: 'https://myanimelist.net/anime/10620/Mirai_Nikki_TV',
      img: 'https://cdn.myanimelist.net/images/anime/13/33465.jpg?s=47381246925211d3873b932cba7b2703',
      weight: 9
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 20,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 8
    },
    '18679': {
      name: 'Kill la Kill',
      votes: 10,
      url: 'https://myanimelist.net/anime/18679/Kill_la_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1464/111943.jpg?s=b350450d3d98aa57f05bb4fbdb9d5209',
      weight: 9
    },
    '22319': {
      name: 'Tokyo Ghoul',
      votes: 14,
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      img: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2',
      weight: 8.6
    },
    '23755': {
      name: 'Nanatsu no Taizai',
      votes: 43,
      url: 'https://myanimelist.net/anime/23755/Nanatsu_no_Taizai',
      img: 'https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485',
      weight: 5.7
    },
    '24833': {
      name: 'Ansatsu Kyoushitsu',
      votes: 6,
      url: 'https://myanimelist.net/anime/24833/Ansatsu_Kyoushitsu',
      img: 'https://cdn.myanimelist.net/images/anime/5/75639.jpg?s=f30fb4e81d2e9054f27fa76ee1e84a2d',
      weight: 9.4
    },
    '27899': {
      name: 'Tokyo Ghoul ΓêÜA',
      votes: 5,
      url: 'https://myanimelist.net/anime/27899/Tokyo_Ghoul_ΓêÜA',
      img: 'https://cdn.myanimelist.net/images/anime/1889/123307.jpg?s=5755a607099b4e12700c1b11e606a733',
      weight: 9.5
    },
    '31240': {
      name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      votes: 7,
      url: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu',
      img: 'https://cdn.myanimelist.net/images/anime/1522/128039.jpg?s=a0f123db562eb5b8a54e2480ebc53717',
      weight: 9.3
    }
  },
  '22319': {
    '30': {
      name: 'Neon Genesis Evangelion',
      votes: 7,
      url: 'https://myanimelist.net/anime/30/Neon_Genesis_Evangelion',
      img: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03',
      weight: 9.3
    },
    '1535': {
      name: 'Death Note',
      votes: 12,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 8.8
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 7,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 9.3
    },
    '10620': {
      name: 'Mirai Nikki (TV)',
      votes: 8,
      url: 'https://myanimelist.net/anime/10620/Mirai_Nikki_TV',
      img: 'https://cdn.myanimelist.net/images/anime/13/33465.jpg?s=47381246925211d3873b932cba7b2703',
      weight: 9.2
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 43,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 5.7
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 14,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 8.6
    },
    '22535': {
      name: 'Kiseijuu: Sei no Kakuritsu',
      votes: 166,
      url: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu',
      img: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg?s=aeb28b4778c7bcdfcb0004cbb1a55523',
      weight: 0.1
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 9,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 9.1
    }
  },
  '22535': {
    '1535': {
      name: 'Death Note',
      votes: 14,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 8.6
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 9,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 9.1
    },
    '22319': {
      name: 'Tokyo Ghoul',
      votes: 166,
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      img: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2',
      weight: 0.1
    },
    '27899': {
      name: 'Tokyo Ghoul ΓêÜA',
      votes: 6,
      url: 'https://myanimelist.net/anime/27899/Tokyo_Ghoul_ΓêÜA',
      img: 'https://cdn.myanimelist.net/images/anime/1889/123307.jpg?s=5755a607099b4e12700c1b11e606a733',
      weight: 9.4
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 8,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 9.2
    }
  },
  '23273': {
    '4224': {
      name: 'Toradora!',
      votes: 5,
      url: 'https://myanimelist.net/anime/4224/Toradora',
      img: 'https://cdn.myanimelist.net/images/anime/13/22128.jpg?s=08c2b1b4a465fc43cbe15aae4a425b78',
      weight: 9.5
    },
    '6547': {
      name: 'Angel Beats!',
      votes: 18,
      url: 'https://myanimelist.net/anime/6547/Angel_Beats',
      img: 'https://cdn.myanimelist.net/images/anime/1244/111115.jpg?s=14607c2ea405539df501e29595daa582',
      weight: 8.2
    },
    '33352': {
      name: 'Violet Evergarden',
      votes: 18,
      url: 'https://myanimelist.net/anime/33352/Violet_Evergarden',
      img: 'https://cdn.myanimelist.net/images/anime/1795/95088.jpg?s=9e24a139603a4e0ea8ea055a230b54d5',
      weight: 8.2
    }
  },
  '23755': {
    '21': {
      name: 'One Piece',
      votes: 5,
      url: 'https://myanimelist.net/anime/21/One_Piece',
      img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      weight: 9.5
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 9,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 9.1
    },
    '6702': {
      name: 'Fairy Tail',
      votes: 29,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 7.1
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 6,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 9.4
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 43,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 5.7
    },
    '30276': {
      name: 'One Punch Man',
      votes: 5,
      url: 'https://myanimelist.net/anime/30276/One_Punch_Man',
      img: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078',
      weight: 9.5
    }
  },
  '24833': {
    '6547': {
      name: 'Angel Beats!',
      votes: 16,
      url: 'https://myanimelist.net/anime/6547/Angel_Beats',
      img: 'https://cdn.myanimelist.net/images/anime/1244/111115.jpg?s=14607c2ea405539df501e29595daa582',
      weight: 8.4
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 6,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 9.4
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 30,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 7
    }
  },
  '27899': {
    '22199': {
      name: 'Akame ga Kill!',
      votes: 5,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 9.5
    },
    '22535': {
      name: 'Kiseijuu: Sei no Kakuritsu',
      votes: 6,
      url: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu',
      img: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg?s=aeb28b4778c7bcdfcb0004cbb1a55523',
      weight: 9.4
    }
  },
  '28223': {
    '1535': {
      name: 'Death Note',
      votes: 47,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 5.3
    },
    '6547': {
      name: 'Angel Beats!',
      votes: 35,
      url: 'https://myanimelist.net/anime/6547/Angel_Beats',
      img: 'https://cdn.myanimelist.net/images/anime/1244/111115.jpg?s=14607c2ea405539df501e29595daa582',
      weight: 6.5
    },
    '19815': {
      name: 'No Game No Life',
      votes: 13,
      url: 'https://myanimelist.net/anime/19815/No_Game_No_Life',
      img: 'https://cdn.myanimelist.net/images/anime/1074/111944.jpg?s=3d63ffec8cd2a7f1e00e8dc15ef534f5',
      weight: 8.7
    },
    '33352': {
      name: 'Violet Evergarden',
      votes: 13,
      url: 'https://myanimelist.net/anime/33352/Violet_Evergarden',
      img: 'https://cdn.myanimelist.net/images/anime/1795/95088.jpg?s=9e24a139603a4e0ea8ea055a230b54d5',
      weight: 8.7
    }
  },
  '30276': {
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 10,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 9
    },
    '18679': {
      name: 'Kill la Kill',
      votes: 8,
      url: 'https://myanimelist.net/anime/18679/Kill_la_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1464/111943.jpg?s=b350450d3d98aa57f05bb4fbdb9d5209',
      weight: 9.2
    },
    '23755': {
      name: 'Nanatsu no Taizai',
      votes: 5,
      url: 'https://myanimelist.net/anime/23755/Nanatsu_no_Taizai',
      img: 'https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485',
      weight: 9.5
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 98,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 0.2
    },
    '32182': {
      name: 'Mob Psycho 100',
      votes: 156,
      url: 'https://myanimelist.net/anime/32182/Mob_Psycho_100',
      img: 'https://cdn.myanimelist.net/images/anime/8/80356.jpg?s=1d7f8902c64d166b821e50ea68267c2a',
      weight: 0.1
    }
  },
  '30831': {
    '6702': {
      name: 'Fairy Tail',
      votes: 6,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 9.4
    },
    '11757': {
      name: 'Sword Art Online',
      votes: 15,
      url: 'https://myanimelist.net/anime/11757/Sword_Art_Online',
      img: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d',
      weight: 8.5
    },
    '19815': {
      name: 'No Game No Life',
      votes: 23,
      url: 'https://myanimelist.net/anime/19815/No_Game_No_Life',
      img: 'https://cdn.myanimelist.net/images/anime/1074/111944.jpg?s=3d63ffec8cd2a7f1e00e8dc15ef534f5',
      weight: 7.7
    },
    '31240': {
      name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      votes: 51,
      url: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu',
      img: 'https://cdn.myanimelist.net/images/anime/1522/128039.jpg?s=a0f123db562eb5b8a54e2480ebc53717',
      weight: 4.9
    }
  },
  '31043': {
    '1535': {
      name: 'Death Note',
      votes: 16,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 8.4
    },
    '9253': {
      name: 'Steins;Gate',
      votes: 129,
      url: 'https://myanimelist.net/anime/9253/Steins_Gate',
      img: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg?s=cd8506e6d26bad48a78aa985477a55ca',
      weight: 0.1
    },
    '31240': {
      name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      votes: 51,
      url: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu',
      img: 'https://cdn.myanimelist.net/images/anime/1522/128039.jpg?s=a0f123db562eb5b8a54e2480ebc53717',
      weight: 4.9
    },
    '37779': {
      name: 'Yakusoku no Neverland',
      votes: 23,
      url: 'https://myanimelist.net/anime/37779/Yakusoku_no_Neverland',
      img: 'https://cdn.myanimelist.net/images/anime/1830/118780.jpg?s=4e8a1b5b13b15d3c9172d53e3aad887b',
      weight: 7.7
    }
  },
  '31240': {
    '30': {
      name: 'Neon Genesis Evangelion',
      votes: 6,
      url: 'https://myanimelist.net/anime/30/Neon_Genesis_Evangelion',
      img: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03',
      weight: 9.4
    },
    '9253': {
      name: 'Steins;Gate',
      votes: 129,
      url: 'https://myanimelist.net/anime/9253/Steins_Gate',
      img: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg?s=cd8506e6d26bad48a78aa985477a55ca',
      weight: 0.1
    },
    '11757': {
      name: 'Sword Art Online',
      votes: 12,
      url: 'https://myanimelist.net/anime/11757/Sword_Art_Online',
      img: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d',
      weight: 8.8
    },
    '19815': {
      name: 'No Game No Life',
      votes: 5,
      url: 'https://myanimelist.net/anime/19815/No_Game_No_Life',
      img: 'https://cdn.myanimelist.net/images/anime/1074/111944.jpg?s=3d63ffec8cd2a7f1e00e8dc15ef534f5',
      weight: 9.5
    },
    '22199': {
      name: 'Akame ga Kill!',
      votes: 7,
      url: 'https://myanimelist.net/anime/22199/Akame_ga_Kill',
      img: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg?s=54a1d4bcd881957ce164297f36df5a72',
      weight: 9.3
    },
    '30831': {
      name: 'Kono Subarashii Sekai ni Shukufuku wo!',
      votes: 51,
      url: 'https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo',
      img: 'https://cdn.myanimelist.net/images/anime/8/77831.jpg?s=ae299e926b2d7a713c7daa9ab56876a4',
      weight: 4.9
    },
    '31043': {
      name: 'Boku dake ga Inai Machi',
      votes: 51,
      url: 'https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi',
      img: 'https://cdn.myanimelist.net/images/anime/10/77957.jpg?s=27f147795f08191cf1a96a2b50e1756c',
      weight: 4.9
    }
  },
  '31964': {
    '20': {
      name: 'Naruto',
      votes: 29,
      url: 'https://myanimelist.net/anime/20/Naruto',
      img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
      weight: 7.1
    },
    '21': {
      name: 'One Piece',
      votes: 11,
      url: 'https://myanimelist.net/anime/21/One_Piece',
      img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      weight: 8.9
    },
    '1735': {
      name: 'Naruto: Shippuuden',
      votes: 5,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      img: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg?s=a92272fe7a37f1c114011b406d5390c8',
      weight: 9.5
    },
    '6702': {
      name: 'Fairy Tail',
      votes: 5,
      url: 'https://myanimelist.net/anime/6702/Fairy_Tail',
      img: 'https://cdn.myanimelist.net/images/anime/5/18179.jpg?s=24a281654f63558f3ef001950a9e6539',
      weight: 9.5
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 9,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 9.1
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 26,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 7.4
    },
    '20583': {
      name: 'Haikyuu!!',
      votes: 25,
      url: 'https://myanimelist.net/anime/20583/Haikyuu',
      img: 'https://cdn.myanimelist.net/images/anime/7/76014.jpg?s=ef5c00cb929dcd690c87f56e6d1b0c8a',
      weight: 7.5
    },
    '24833': {
      name: 'Ansatsu Kyoushitsu',
      votes: 30,
      url: 'https://myanimelist.net/anime/24833/Ansatsu_Kyoushitsu',
      img: 'https://cdn.myanimelist.net/images/anime/5/75639.jpg?s=f30fb4e81d2e9054f27fa76ee1e84a2d',
      weight: 7
    },
    '30276': {
      name: 'One Punch Man',
      votes: 98,
      url: 'https://myanimelist.net/anime/30276/One_Punch_Man',
      img: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078',
      weight: 0.2
    },
    '32182': {
      name: 'Mob Psycho 100',
      votes: 12,
      url: 'https://myanimelist.net/anime/32182/Mob_Psycho_100',
      img: 'https://cdn.myanimelist.net/images/anime/8/80356.jpg?s=1d7f8902c64d166b821e50ea68267c2a',
      weight: 8.8
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 16,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 8.4
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 12,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 8.8
    }
  },
  '32182': {
    '20507': {
      name: 'Noragami',
      votes: 5,
      url: 'https://myanimelist.net/anime/20507/Noragami',
      img: 'https://cdn.myanimelist.net/images/anime/1886/128266.jpg?s=a74efc6fc8fa714f6edb13c9f6222910',
      weight: 9.5
    },
    '30276': {
      name: 'One Punch Man',
      votes: 156,
      url: 'https://myanimelist.net/anime/30276/One_Punch_Man',
      img: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078',
      weight: 0.1
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 12,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 8.8
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 8,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 9.2
    }
  },
  '33352': {
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 5,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 9.5
    },
    '23273': {
      name: 'Shigatsu wa Kimi no Uso',
      votes: 18,
      url: 'https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso',
      img: 'https://cdn.myanimelist.net/images/anime/3/67177.jpg?s=bc267f764bffe825e1e8d60f7185a2e9',
      weight: 8.2
    },
    '28223': {
      name: 'Death Parade',
      votes: 13,
      url: 'https://myanimelist.net/anime/28223/Death_Parade',
      img: 'https://cdn.myanimelist.net/images/anime/5/71553.jpg?s=68833377dab9077cd7847c91eec46f08',
      weight: 8.7
    }
  },
  '37779': {
    '1535': {
      name: 'Death Note',
      votes: 44,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 5.6
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 51,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 4.9
    },
    '31043': {
      name: 'Boku dake ga Inai Machi',
      votes: 23,
      url: 'https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi',
      img: 'https://cdn.myanimelist.net/images/anime/10/77957.jpg?s=27f147795f08191cf1a96a2b50e1756c',
      weight: 7.7
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 9,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 9.1
    }
  },
  '37999': {
    '1535': {
      name: 'Death Note',
      votes: 25,
      url: 'https://myanimelist.net/anime/1535/Death_Note',
      img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a',
      weight: 7.5
    },
    '4224': {
      name: 'Toradora!',
      votes: 11,
      url: 'https://myanimelist.net/anime/4224/Toradora',
      img: 'https://cdn.myanimelist.net/images/anime/13/22128.jpg?s=08c2b1b4a465fc43cbe15aae4a425b78',
      weight: 8.9
    }
  },
  '38000': {
    '269': {
      name: 'Bleach',
      votes: 21,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 7.9
    },
    '5114': {
      name: 'Fullmetal Alchemist: Brotherhood',
      votes: 17,
      url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
      img: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
      weight: 8.3
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 11,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 8.9
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 13,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 8.7
    },
    '16498': {
      name: 'Shingeki no Kyojin',
      votes: 21,
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
      img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98',
      weight: 7.9
    },
    '22319': {
      name: 'Tokyo Ghoul',
      votes: 9,
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      img: 'https://cdn.myanimelist.net/images/anime/1498/134443.jpg?s=b6b415f545ed3a21b995f78dc73acde2',
      weight: 9.1
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 16,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 8.4
    },
    '37779': {
      name: 'Yakusoku no Neverland',
      votes: 9,
      url: 'https://myanimelist.net/anime/37779/Yakusoku_no_Neverland',
      img: 'https://cdn.myanimelist.net/images/anime/1830/118780.jpg?s=4e8a1b5b13b15d3c9172d53e3aad887b',
      weight: 9.1
    },
    '40748': {
      name: 'Jujutsu Kaisen',
      votes: 70,
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79',
      weight: 3
    }
  },
  '40748': {
    '20': {
      name: 'Naruto',
      votes: 25,
      url: 'https://myanimelist.net/anime/20/Naruto',
      img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6',
      weight: 7.5
    },
    '269': {
      name: 'Bleach',
      votes: 34,
      url: 'https://myanimelist.net/anime/269/Bleach',
      img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed',
      weight: 6.6
    },
    '1735': {
      name: 'Naruto: Shippuuden',
      votes: 13,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      img: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg?s=a92272fe7a37f1c114011b406d5390c8',
      weight: 8.7
    },
    '9919': {
      name: 'Ao no Exorcist',
      votes: 12,
      url: 'https://myanimelist.net/anime/9919/Ao_no_Exorcist',
      img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg?s=c2bb5ebd6f79c4ae21272da8215d189f',
      weight: 8.8
    },
    '11061': {
      name: 'Hunter x Hunter (2011)',
      votes: 15,
      url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
      img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
      weight: 8.5
    },
    '20507': {
      name: 'Noragami',
      votes: 18,
      url: 'https://myanimelist.net/anime/20507/Noragami',
      img: 'https://cdn.myanimelist.net/images/anime/1886/128266.jpg?s=a74efc6fc8fa714f6edb13c9f6222910',
      weight: 8.2
    },
    '22535': {
      name: 'Kiseijuu: Sei no Kakuritsu',
      votes: 8,
      url: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu',
      img: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg?s=aeb28b4778c7bcdfcb0004cbb1a55523',
      weight: 9.2
    },
    '31964': {
      name: 'Boku no Hero Academia',
      votes: 12,
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
      img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2',
      weight: 8.8
    },
    '32182': {
      name: 'Mob Psycho 100',
      votes: 8,
      url: 'https://myanimelist.net/anime/32182/Mob_Psycho_100',
      img: 'https://cdn.myanimelist.net/images/anime/8/80356.jpg?s=1d7f8902c64d166b821e50ea68267c2a',
      weight: 9.2
    },
    '38000': {
      name: 'Kimetsu no Yaiba',
      votes: 70,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda',
      weight: 3
    }
  }
};

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
module.exports.top50 = top50;