"strict mode";

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:

// const mark = {
//   name: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calBmi(mass, height) {
//     return this.mass / this.height ** 2;
//   },
// };

// const john = {
//   name: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calBmi(mass, height) {
//     return this.mass / this.height ** 2;
//   },
// };

// function calBmi(mass, height) {
//   return mass / height ** 2;
// }

// const compareBmi = (mark, john) => {
//   if (mark["calBmi"]() > john["calBmi"]()) {
//     console.log(
//       `${mark.name}  BMI ${mark.calBmi()} is higher than ${john.name}'s `
//     );
//   } else if (john.calBmi() > mark.calBmi()) {
//     console.log(
//       `${john.name}  BMI ${john.calBmi()} is higher than ${mark.name}'s `
//     );
//   } else {
//     console.log(`error succa`);
//   }
// };
// compareBmi(mark, john);

// console.log(mark.calBmi());

// console.log(mark);

// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall

// const person = {
//   name: "Omar",
//   lastName: "Vega",
//   email: "omarvega@hotmail.com",
//   job: "engineer",
//   jobTitle: "junior engineer",
//   friends: ["marco", "rose", "julio"],
//   getSummary() {
//     prompt(
//       `his name is ${this.name} ${this.lastName}. He is a ${this.job} and loves ${this.friends[1]}`
//     );
//   },
// };
// const summary = person.getSummary();

// console.log(summary);

// const interestedIn = prompt(
//   `${person.name} . What do you want to know, last name? email? job? job title? or getSummary? `
// );

// const friends = prompt(
//   `${person["name"]} has ${person.friends.length} friends, his best friend is ${person["friends"][1]}`
// );

// console.log(person[interestedIn]);
// console.log(person[printToScreen(interestedIn)]);

// if (person[interestedIn] === undefined) {
//   prompt(
//     `${person.name} does not contain that info. Please choose  last name? email? job? job title? or summary?.`
//   );

//   const interestedIn = prompt(
//     `${person.name} has a file. What do you want to know, last name? email? job? job title?`
//   );
//   console.log(person[interestedIn]);
// }

// console.log(`summary ${person.summary}`);

// const bill = [125, 555, 44];
// const tip = [];
// const total = [calcTip(125), calcTip(555), calcTip(44)];

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     tip.push(bill * 0.15);
//     return bill * 0.15 + bill;
//   } else {
//     tip.push(bill * 0.2);
//     return bill * 0.2 + bill;
//   }
// }

// console.log(tip);
// console.log(total);

// Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + ti

// const calcAge = (birthYear) => {
//   return `Your age is ${2021 - birthYear}`;
// };

// const yearOfBirth = [1981, 1980, 1979, 1978, 1977, 1976, 1975];

// yearOfBirth.push([yearOfBirth]);

// console.log(calcAge(yearOfBirth[6]));

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.

// Your tasks:
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// const calcAverage = (first, second, third) => (first + second + third) / 3;
// 2. Use the function to calculate the average for both teams
// const dolphins = calcAverage(44, 23, 71);

// const koalas = calcAverage(65, 54, 49); //Koalas score 65, 54 and 49

// const dolphinsData2 = calcAverage(85, 54, 41); //85, 54 and 41

// const koalasData2 = calcAverage(1000, 34, 27);

// checkWinner(dolphins, koalas);
// checkWinner(dolphinsData2, koalasData2);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win with an average of ${avgDolphins}`);
//   } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win with an average of ${avgKoalas}`);
//   } else if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`average dolphin is double ${avgDolphins}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`average koalas is double ${avgKoalas}`);
//   } else if (!avgDolphins >= 2 * avgKoalas) {
//     console.log(
//       `dolphins ${avgDolphins} is not greater than double ${avgKoalas}`
//     );
//   } else if (!avgKoalas >= 2 * avgDolphins) {
//     console.log(
//       `koalas ${avgKoalas} is not greater than double ${avgDolphins}`
//     );
//   } else {
//     console.log(`dolphins ${avgDolphins}`);
//     console.log(`koalas ${avgKoalas}`);
//   }
// }

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
