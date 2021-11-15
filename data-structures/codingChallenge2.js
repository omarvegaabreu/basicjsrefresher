const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const keys = Object.keys(game);
const values = Object.values(game);
const entries = Object.entries(game); //removed for better option.
const scoredArray = Object.entries(game.scored);
const oddObject = Object.entries(game.odds);

const [index, playerName] = game.scored.entries();
console.log(scoredArray);
console.log(index, playerName);

console.log("************************************************************");
console.log("************************************************************");
console.log("************************************************************");

for (const [index, playerName] of game.scored.entries()) {
  scorers = { player: playerName, goals: +index };

  console.log(`Goal ${index + 1}: ${playerName}`);
}

for (const [key, value] of scoredArray) {
  const scorers = { player: value, goals: key };

  console.log(` ${scorers.player}: ${scorers.goals}`);
}

// for (const [keys, { team1, x, team2 }] of entries) {
//   const bayerMunic = entries[0][1];
//   const borrussiaDortmund = entries[1][1];

//   if (team1 && x && team2) {
//     console.log((team1 + x + team2) / 3);
//   }

//   bayerMunic &&
//     team1 &&
//     console.log(`odds of victory ${bayerMunic},are ${team1}`);
//   x && console.log(`odds of draw are ${x}`);
//   borrussiaDortmund &&
//     team2 &&
//     console.log(`odds of victory ${borrussiaDortmund},are ${team2}`);
// }
