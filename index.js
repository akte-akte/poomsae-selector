
const divisionSelector = document.getElementById('wt-division');
const generateButton = document.getElementById('generate-poomsae');
const poomsaeOne = document.getElementById('poomsae-one');
const poomsaeTwo = document.getElementById('poomsae-two');

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


const divisionPoomsaeRange = {
  "cadet": [0, 1, 2, 3, 4, 5, 6, 7],
  "junior": [1, 2, 3, 4, 5, 6, 7, 8],
  "u30": [3, 4, 5, 6, 7, 8, 9, 10],
  "u40": [3, 4, 5, 6, 7, 8, 9, 10],
  "u50": [4, 5, 6, 7, 8, 9, 10, 11],
  "u60": [5, 6, 7, 8, 9, 10, 11, 12],
  "u65": [5, 6, 7, 8, 9, 10, 11, 12],
  "o65": [5, 6, 7, 8, 9, 10, 11, 12],
};

divisionSelector.addEventListener('change', (e) => {
  const poomsaeList = divisionPoomsaeRange[divisionSelector.value];
  const poomsaeNames = poomsaeList.map((index) => wtPoomsae[index]);
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

  e.preventDefault;

  poomsaeOne.classList.add('drop-out');
  poomsaeTwo.classList.add('drop-out');

  void poomsaeOne.offsetWidth;
  void poomsaeTwo.offsetWidth;


  const division = divisionSelector.value;
  const poomsae = generatePoomsae(division);

  setTimeout(() => {
    poomsaeOne.classList.remove('drop-out');
    poomsaeOne.classList.add('drop-in');
    poomsaeOne.innerHTML = poomsae[0];
  }, 275);


  setTimeout(() => {

    poomsaeTwo.classList.remove('drop-out');
    poomsaeTwo.classList.add('drop-in');
    poomsaeTwo.innerHTML = poomsae[1];
  }, 825);


});


