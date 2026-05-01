console.log("Welcome to the Horoscope Generator!");
let month = "June";

let sign = "";
let symbol = "";

if (month === "January") {
  sign = "Capricorn"; symbol = "♑";
} else if (month === "February") {
  sign = "Aquarius"; symbol = "♒";
} else if (month === "March") {
  sign = "Pisces"; symbol = "♓";
} else if (month === "April") {
  sign = "Aries"; symbol = "♈";
} else if (month === "May") {
  sign = "Taurus"; symbol = "♉";
} else if (month === "June") {
  sign = "Gemini"; symbol = "♊";
} else if (month === "July") {
  sign = "Cancer"; symbol = "♋";
} else if (month === "August") {
  sign = "Leo"; symbol = "♌";
} else if (month === "September") {
  sign = "Virgo"; symbol = "♍";
} else if (month === "October") {
  sign = "Libra"; symbol = "♎";
} else if (month === "November") {
  sign = "Scorpio"; symbol = "♏";
} else if (month === "December") {
  sign = "Sagittarius"; symbol = "♐";
}

let randomNumber = Math.floor(Math.random() * 5) + 1;
let fortune = "";

if (randomNumber === 1) {
  fortune = "Today is a great day to try something new.";
} else if (randomNumber === 2) {
  fortune = "You will meet someone interesting soon.";
} else if (randomNumber === 3) {
  fortune = "A surprise opportunity is coming your way.";
} else if (randomNumber === 4) {
  fortune = "Take time to relax and recharge.";
} else {
  fortune = "Good news is on the horizon.";
}

console.log("Your sign: " + symbol + " " + sign);
console.log("Fortune: " + fortune);