/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// number one - freelancer function
function getFreelancer() {
  const getRandom = (list) => list[Math.floor(Math.random() * list.length)];
  const getRandomRate = () =>
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min)) +
    PRICE_RANGE.min;
  return {
    name: getRandom(NAMES),
    occupation: getRandom(OCCUPATIONS),
    rate: getRandomRate(),
  };
}
// console.log(getFreelancer());

// number two - state variable to an array
let freelancers = Array.from({ length: NUM_FREELANCERS }, () =>
  getFreelancer(),
);

// console.log(freelancers[0]);

// number three - getAvgRate
function getAvgRate() {
  let totalRates = 0;
  for (let i = 0; i < freelancers.length; i++) {
    totalRates = totalRates + freelancers[i].rate;
  }
  return totalRates / freelancers.length;
}
// console.log(getAvgRate());
// console.log(getAvgRate());
// console.log(getAvgRate());
// console.log(getAvgRate());

// number four -
let storeAvg = getAvgRate();
// console.log(storeAvg);

// number five - single freelancer
