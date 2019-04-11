const path = require(`path`);

export interface Game {
  id: String;
  name: String;
  banner?: String;
}

export const Games: Array<Game> = [
  { id: `lol`, name: `League of Legends`, banner: `lol.jpg` },
  { id: `dota2`, name: `DOTA 2` },
  { id: `csgo`, name: `CS:GO` },
  { id: `overwatch`, name: `Overwatch` },
  { id: `pubg`, name: `PlayerUnknown's Battlegrounds` },
];
