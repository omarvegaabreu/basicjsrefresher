// const mark = {
//   kg: 78,
//   height: 1.69,
// };

// const john = {
//   kg: 92,
//   height: 1.76,
// };

// function getBmi() {
//   const markBmi = mark.kg / (mark.height * mark.height);
//   const johnBmi = john.kg / (john.height * john.height);

//   if (markBmi > johnBmi) {
//     console.log(`mark bmi ${markBmi}  is higher`);
//   } else {
//     console.log(`mark bmi ${markBmi}  is higher`);
//   }
// }

// getBmi();

//falsy values

// const num = 0;
// console.log(Boolean(num));

// if (num == false) {
//   console.log("true");
// } else {
//   console.log(num);
// }

// const height = 0;

// if (height) {
//   console.log(`height is defined`);
// } else {
//   console.log(`height is undefined`);
// }

// const person = {
//   name: prompt("what is your name?"),
//   age: prompt("what is your name?"),
//   vision: prompt("what is your name?"),
// };

// const { namePerson, age, vision } = person;

// const driver = {
//   namePerson,
//   age,
//   vision,
// };

// if (age > 16 && vision === "yes") {
//   // console.log(driver);
//   console.log(`${driver.namePerson} can drive. His/her age is ${driver.age},`);
// }
// // } else {
// //   console.log("moda fuca you cant drive");
// // }

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:

// 1. Calculate the average score for each team, using the test data below
// § Data 1: Dolphins score 96, 108 and 89.

// const calculateScore = (game1, game2, game3) => {
//   return (game1 + game2 + game3) / 3;
// };

// 2. Compare the team's average scores to determine the winner of the competition,
// Koalas score 88, 91 and 110
// and print it to the console. Don't forget that there can be a draw, so test for that
// const dophinAverage = calculateScore(200, 108, 89);
// const koalasAverage = calculateScore(88, 91, 110);
// console.log(dophinAverage);
// console.log(koalasAverage);

// if (dophinAverage > koalasAverage && dophinAverage >= 100) {
//   console.log(` Dolphins win with ${dophinAverage}`);
// } else if (koalasAverage > dophinAverage && koalasAverage >= 100) {
//   console.log(` Koalas win with ${koalasAverage}`);
// } else if (
//   (koalasAverage === dophinAverage &&
//     koalasAverage >= 100 &&
//     koalasAverage >= 50) ||
//   (dophinAverage === koalasAverage &&
//     dophinAverage >= 100 &&
//     dophinAverage >= 50)
// ) {
//   console.log("Its a draw");
// } else {
//   console.log("they suck ");
// }

// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

/***SWITCH */

const day = "monday";

switch (day) {
  case "monday":
    console.log("today is monday");

    break;
  case "tuesday":
    console.log("today is tuesday");

    break;
  case "wednesday":
    console.log("today is wednesday");

    break;

  case "thursday":
    console.log("today is thursday");

    break;

  case "friday":
    console.log("today is friday");

    break;

  case "saturday":
    console.log("today is saturday");

    break;

  case "sunday":
    console.log("today is sunday");

    break;

  default:
    console.log("not a valid day");
    break;
}

if (day === "monday") {
  console.log("monday");
} else if (day === `tuesday`) {
  console.log("tuesday");
} else if (day === `wednesday` || day === `thursday`) {
  console.log(`its wednesday or thursday`);
} else if (day === `friday`) {
  console.log(`its  friday`);
} else if (day === `saturday`) {
  console.log(`its saturday `);
} else if (day === `sunday`) {
  console.log(`its sunday `);
} else {
  console.log(`its not a day of the week`);
}
