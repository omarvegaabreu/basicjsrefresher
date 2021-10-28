"strict ";

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
for (let index = 0; index < bills.length; index++) {
  if (bills >= 50 && bills <= 300) {
    const fifteenPercentTip = bills[index] * 0.15;

    const totalBillFifteenPercentTip = fifteenPercentTip[index] + bills[index];

    tips.push(fifteenPercentTip);

    totals.push(totalBillFifteenPercentTip);
  } else {
    const twentyPercentTip = bills[index] * 0.2;

    const totalBillTwentyPercentTip = twentyPercentTip + bills[index];

    tips.push(twentyPercentTip);

    totals.push(totalBillTwentyPercentTip);
  }
}

const calcAverage = (arr) => {
  let sum = null;
  for (let index = 0; index < arr.length; index++) {
    sum += +arr[index];
  }
  return +sum / +arr.length;
};

// calcAverage(totals);
console.log(bills, tips, totals);

console.log(calcAverage(totals));

// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK

// const years = [1991, 1981, 1951, 2016, 2011];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   if (typeof years[i] !== "string") continue;
//   const currentAge = 2021 - years[i];
//   age.push(`succa is ${currentAge}`);
// }

// for (let i = 0; i < years.length; i++) {
//   if (typeof years[i] !== "string") break;
//   const currentAge = 2021 - years[i];
//   age.push(`succa is ${currentAge}`);
// }

// console.log(age);
// console.log("connected");,1981
// const cars = ["Saab", "Volvo", true, 33, ["toyota", "wow", "still", 55]];
// const types = [];
// const otherTypes = [];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
//   types.push(typeof cars[i]);
//   otherTypes[i] = typeof cars[i];
// }

// console.log(types);
// console.log(otherTypes);

// const gym = ["monday", "tuesday", "wednesday"];

// for (let rep = 0; rep <= 10; rep++) {
//   // const element = array[index];
//   console.log(`will go to gym moda fuca ${rep}`);
// }
