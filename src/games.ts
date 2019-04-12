const lolPath = require(`./assets/lol.jpg`);
const lolLogo = require(`./assets/lol-logo.png`);
const pubgPath = require(`./assets/pubg.png`);
const dota2Path = require(`./assets/dota2.png`);
const csgo = require(`./assets/csgo.jpg`);
const overwatch = require(`./assets/overwatch.png`);
const overwatchLogo = require(`./assets/overwatch-logo.png`);

export interface Game {
  id: String;
  name: String;
  title?: String;
  banner?: String;
}

export const Games: Array<Game> = [
  {
    id: `lol`,
    name: `League of Legends`,
    title: lolLogo,
    banner: lolPath,
  },
  { id: `dota2`, name: `DOTA 2`, banner: dota2Path },
  { id: `csgo`, name: `CS:GO`, banner: csgo },
  {
    id: `overwatch`,
    name: `Overwatch`,
    title: overwatchLogo,
    banner: overwatch,
  },
  { id: `pubg`, name: `PlayerUnknown's Battlegrounds`, banner: pubgPath },
];
