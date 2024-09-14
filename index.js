
const divisionSelector = document.getElementById('wt-division');
const generateButton = document.getElementById('generate-poomsae');

const wtPoomsae = [
  "Taegeuk sa jang",
  "Taeguk oh jang",
  "Taeguk yuk jang",
  "Taeguk chil jang",
  "Taeguk pal jang",
  "Koryo",
  "Keumgang",
  "Taebaek",
  "Pyongwon",
  "Sipjin",
  "Jitae",
  "Cheonkwon",
  "Hansu"
];

// for each division, create a list of poomsae. reference it by the index in the array

const divisionPoomsaeRange = {
  "cadets": [0, 1, 2, 3, 4, 5, 6, 7],
  "juniors": [1, 2, 3, 4, 5, 6, 7, 8],
  "u30": [3, 4, 5, 6, 7, 8, 9, 10],
  "u40": [3, 4, 5, 6, 7, 8, 9, 10],
  "u50": [4, 5, 6, 7, 8, 9, 10, 11],
  "u60": [5, 6, 7, 8, 9, 10, 11, 12],
  "u65": [5, 6, 7, 8, 9, 10, 11, 12],
  "o65": [5, 6, 7, 8, 9, 10, 11, 12],
};

divisionSelector.addEventListener('change', (e) => {
  console.log(divisionSelector.value);
  const poomsaeList = divisionPoomsaeRange[divisionSelector.value];
  const poomsaeNames = poomsaeList.map((index) => wtPoomsae[index]);
  console.log(poomsaeList);
  document.getElementById('poomsae-range').innerHTML = poomsaeNames.join(", ");
  generateButton.disabled = false;
 
});

// extract the poomsae generation to a function
function generatePoomsae(division) {
  const poomsaeList = divisionPoomsaeRange[division];
  const poomsae1 = wtPoomsae[poomsaeList[Math.floor(Math.random() * poomsaeList.length)]];
  const poomsae2 = wtPoomsae[poomsaeList[Math.floor(Math.random() * poomsaeList.length)]];
  return [poomsae1, poomsae2];
}

generateButton.addEventListener('click', (e) => {
  const division = divisionSelector.value;
  const poomsae = generatePoomsae(division);

  document.getElementById('poomsae-one').innerHTML = poomsae[0];
  document.getElementById('poomsae-two').innerHTML = poomsae[1];
  console.log("poomsae one is: ", poomsae[0]);
  console.log("poomsae two is: ", poomsae[1]);

});


