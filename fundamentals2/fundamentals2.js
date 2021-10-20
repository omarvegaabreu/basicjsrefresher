"strict mode";

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.

// Your tasks:
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (first, second, third) => (first + second + third) / 3;
// 2. Use the function to calculate the average for both teams
const dolphins = calcAverage(44, 23, 71);

const koalas = calcAverage(65, 54, 49); //Koalas score 65, 54 and 49

const dolphinsData2 = calcAverage(85, 54, 41); //85, 54 and 41

const koalasData2 = calcAverage(1000, 34, 27);

checkWinner(dolphins, koalas);
checkWinner(dolphinsData2, koalasData2);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win with an average of ${avgDolphins}`);
  } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win with an average of ${avgKoalas}`);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`average dolphin is double ${avgDolphins}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`average koalas is double ${avgKoalas}`);
  } else if (!avgDolphins >= 2 * avgKoalas) {
    console.log(
      `dolphins ${avgDolphins} is not greater than double ${avgKoalas}`
    );
  } else if (!avgKoalas >= 2 * avgDolphins) {
    console.log(
      `koalas ${avgKoalas} is not greater than double ${avgDolphins}`
    );
  } else {
    console.log(`dolphins ${avgDolphins}`);
    console.log(`koalas ${avgKoalas}`);
  }
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

/***functions */

// function logger() {
//   console.log("line 5");
//   const logit = "loggit";
//   return logit;
// }

// function logger2() {
//   return console.log("logger 2");
// }

// const log = logger2();
// const log1 = logger();
// console.log(log1);
// function fruit(fruits) {
//   return fruits * 5;
// }

// function makeJuice(apple, orange) {
//   const fruit1 = fruit(apple);
//   const fruit2 = fruit(orange);
//   const juice = `juice is ${fruit1} and ${fruit2}`;
//   return juice;
// }

// console.log(makeJuice(2, 5));

// const myJuice = makeJuice("apple", "orange"); //assigned to variable

// console.log(myJuice); //logging variable

// console.log(makeJuice("other juice", "other juice")); //calling inside method

// makeJuice("called outside", "method"); //calling outside method
