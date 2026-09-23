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
function freelancer(freelancerProfile) {
  const tableRow = document.createElement("tr");

  //name
  const tableName = document.createElement("td");
  tableName.innerText = freelancerProfile.name;
  tableRow.append(tableName);

  const tableOccupation = document.createElement("td");
  tableOccupation.innerText = freelancerProfile.occupation;
  tableRow.append(tableOccupation);

  const tableRate = document.createElement("td");
  tableRate.innerText = freelancerProfile.rate;
  tableRow.append(tableRate);

  return tableRow;
}

//number six - all freelancers
function allFreelancers() {
  const tableBody = document.createElement("tbody");

  freelancers.forEach((person) => {
    const row = freelancer(person);
    tableBody.append(row);
  });
  return tableBody;
}

// number 7 - diplay avg
function avgOfAll() {
  const displayAvg = document.createElement("p");
  displayAvg.innerText = "The average rate is" + " " + storeAvg + ".";
  return displayAvg;
}

// number 8 - render
function displayData() {
  const dataDisplay = document.querySelector("#app");
  dataDisplay.innerHTML = `

  <h1>Freelancer Forum</h1>

  <p id="avgPlaceholder"></p>

  <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="tbodyPlaceholder"></tbody>
    </table>`;

  dataDisplay.querySelector("#avgPlaceholder").replaceWith(avgOfAll());
  dataDisplay.querySelector("#tbodyPlaceholder").replaceWith(allFreelancers());
}

displayData();
