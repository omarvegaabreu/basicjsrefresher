"use strict";

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

//   printGoals: function (...players) {
//     this.score = players.length ?? this.score;
//     console.log(
//       `${players.length} goals where scored. the score was ${this.score}`
//     );
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// for (let index = 0; index < players.length; index++) {
//   const element = players[index];
//   console.log(
//     ` number of players ${players.length} player names: ${element} `
//   );
// }
//     console.log(`the score was ${this.score}`);
//   },
// };
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

// const [player1, player2] = game.players;
// const [gk, ...gkFieldPlayers] = player1; // 2. The first player in any player array[0] is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
//game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
//game.printGoals("Davies", "Muller");
//team2
//Borrussia Dortmund
////const [bk, ...bdFieldPlayers] = player2;

//const allPlayers = [...gkFieldPlayers, ...bdFieldPlayers]; // 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

//const players1Final = ["Thiago", "Coutinho", "Perisic", ...gkFieldPlayers]; // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// console.log(gk);
// console.log(gkFieldPlayers);
// console.log(allPlayers);
// console.log(players1Final);

//const { team1, x: draw, team2 } = game.odds; // 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
//console.log(`Draw ${draw}`);
// console.log(team1);
// console.log(draw);
// console.log(team2);

// team1 > team2 && console.log(`team 1 has greater odds of winning ${team1}`);
// team1 < team2 && console.log(`team 2 has greater odds of winning ${team2}`);

// console.log(winningOdds);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK

// // Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 6,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (option1, option2) {
    return [this.starterMenu[option1], this.mainMenu[option2]];
  },

  orderDeliver: function ({ name, address, starterMenu, main }) {
    return `this suca ${name} wants a delivery to ${address} starter menu :${starterMenu} main menu ${main}`;
  },

  orderPasta: function (one, two, three) {
    console.log(`this shit is great it has ${one}, ${two}, ${three}`);
  },

  orderPizza: function (...toppings) {
    console.log(`the pizza you will order will contain ${toppings}`);
  },
};

const {
  openingHours: {
    thu: { open: thuOpen, close: thuClose },
    sat: { open: satOpen, close: satClose },
    fri: { open: friOpen, close: friClose },
  },
} = restaurant;
// console.log(satOpen);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";

  // console.log(`we are open ${day} at ${open}`);
}

const objectKeys = Object.keys(restaurant);
const objectValues = Object.values(restaurant);
const objectEntries = Object.entries(restaurant);

// console.log(objectKeys);
// console.log(objectValues);
// console.log(objectEntries);

// for (const restaurantObject of Object.keys(restaurant)) {
//   // const { name, location, categories, starterMenu, mainMenu, openingHours } =
//   //   restaurant;
//   console.log(restaurantObject, restaurant);

//   // console.log(location);
// }

// days.forEach((day) => {
//   const open = restaurant.openingHours[day]?.open;
//   console.log(`days open ${day} ${open} `);
// });

// restaurant.orderPizza && restaurant.orderPizza("cheese", "guatever");

// restaurant.orderPizza("chess");

// const pizzaToppings = ["ham", "croqueta", "bread", "ass", "pussy"];

// restaurant.orderPizza(...pizzaToppings);

// const adder = function (...numbers) {
//   let sum = 0;

//   for (let index = 0; index <= numbers.length; index++)
//     console.log((sum += +numbers[index]));
// };

// console.log(adder(1, 1, 1, 1));
// // const ingredients = [
//   prompt(`First Topping?`),
//   prompt(`second Topping?`),
//   prompt(`third Topping?`),
// ];

// const otherRestaurant = {
//   name1: "Omar ",
//   location1: "1545 nw 15th st rd",
//   categories1: ["cuban", "dominican", "not vegie", "non organic"],
//   ...restaurant,
// };

// const { openingHours, ...others } = restaurant;
// console.log(openingHours);
// console.log(otherRestaurant);
// console.log(toppings);

// restaurant.orderPasta(...ingredients);

// const newMenu = ["soup", "carrots", ...restaurant.starterMenu];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// restaurant.orderDeliver({
//   name: "Omar",
//   address: "1545 nw 15th st rd",
//   starterMenu: restaurant.order(0),
//   main: restaurant.order(1),
// });
// console.log(
//   restaurant.orderDeliver({
//     name: "Omar",
//     address: "1545 nw 15th st rd",
//     starterMenu: restaurant.order(0),
//     main: restaurant.order(1),
//   })
// );

// const {
//   openingHours: {
//     thu: { open: openSuca = "fuck", close: closeSuca = "you" },
//   },
// } = restaurant;

// console.log(openSuca);
// console.log(closeSuca);

// const {
//   name,
//   location: location1,
//   categories,
//   openingHours,
//   starterMenu,
//   mainMenu,
// } = restaurant;

// let a = "a";
// let b = "b";

// const obj = {
//   a: "c",
//   b: "d",
// };

// ({ a, b } = obj);
// console.log(a, b);

// console.log(location1);

// const [starter = null, mainCourse = null] = restaurant.order(0, 2);

// const nestedArray = ["first", "second", ["array1", "array2"]];

// const [butcrack, second, [array1, array2]] = nestedArray;

// console.log(butcrack);
// console.log(second);
// console.log(array1);
// console.log(array2);
