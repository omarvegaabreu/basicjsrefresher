const airline = "TAP air Portugal";

const plane = "A320";

console.log(airline.indexOf("t"));
const letter = airline.slice(7);
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

const checkMiddleSeat = (seat) => {
  console.log(seat.slice(seat.indexOf("B")));
};

checkMiddleSeat("12B");
checkMiddleSeat("11A");
checkMiddleSeat("10C");
