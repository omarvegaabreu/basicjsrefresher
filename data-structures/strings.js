const hideCreditCardNumber = (number) => {
  const creditCardNumber = number.slice(-4);
  // const hashedNumber = creditCardNumber[3].padStart(16, "x");
  console.log(creditCardNumber.padStart(16, "x"));
};

hideCreditCardNumber("1234 - 5678 - 9101 - 1121");

const passengerName = "jeSsica aNn smITh david";

const setNameToUpperCase = (nameToUpperCase) => {
  const names = nameToUpperCase.split(" ");
  const capitalName = [];

  for (const n of names) {
    const fixNames = n.toLowerCase();
    fixNames.split;

    capitalName.push(fixNames.replace(fixNames[0], fixNames[0].toUpperCase()));
    //capitalName.push(fixNames[0].toUpperCase() + fixNames.slice(1));
  }

  console.log(capitalName);
};

setNameToUpperCase(passengerName);
setNameToUpperCase(ann);
setNameToUpperCase(smith);

setNameToUpperCase(david);
console.log(name);

const paragraph = "this is a paragraph about this that is written";
console.log(paragraph.split(" "));
const checkedBaggageItems = (items) => {
  if (items.includes("ducks")) {
    console.log("cant bring");
  } else {
    console.log("bring it");
  }
};

checkedBaggageItems("ducks");

const priceGB = `288,95£`;
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passangers come to boarding door 23. Please go to door 24";
console.log(announcement.replaceAll("door", "Gate"));

const airline = "TAP air Portugal";

const plane = "A320";

console.log(airline.indexOf("t"));
const letter = airline.slice(7);
const tap = airline.slice(0);
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

const checkMiddleSeat = (seat) => {
  if (seat.slice(seat.indexOf("B")) === "B") {
    console.log(`${seat} is in the middle`);
  } else {
    console.log(`${seat} are not in the middle`);
  }
};

checkMiddleSeat("12B");
checkMiddleSeat("11A");
checkMiddleSeat("10C");

const personName = "oMar";

const nameCorrected = (nameCorrection) => {
  const nameToLowerCase = nameCorrection.toLowerCase();
  const firstLetterToUpperCase = nameCorrection[0].toUpperCase();
  const nameSlice = nameToLowerCase.slice(1);
  console.log(firstLetterToUpperCase + nameSlice);
};

nameCorrected(personName);
nameCorrected("jose");
nameCorrected("arBusto");
nameCorrected("gUillermo");
nameCorrected("artesaNo");

const realEmail = "omarvega@hotmail.com";

const compareEmail = (email1, email2) => {
  const lowerCaseEmail = email2.toLowerCase().trim();
  // const trimmedEmail = lowerCaseEmail;
  if (email1 === lowerCaseEmail) {
    console.log(true);
  } else {
    console.log(false);
  }
};

compareEmail(realEmail, "           omarvega@hotmail.com");
compareEmail(realEmail, "omarVega@hotmail.com");
compareEmail(realEmail, "    omarvega@hotmail.com");
