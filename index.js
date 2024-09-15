
const divisionSelector = document.getElementById('wt-division');
const generateSetButton = document.getElementById('generate-poomsae');
const poomsaeOne = document.getElementById('poomsae-one');
const poomsaeTwo = document.getElementById('poomsae-two');

const animationOptions = ['fade', 'drop', 'flip'];

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
  generateSetButton.disabled = false;

});


function generatePoomsae(division) {
  const poomsaeList = divisionPoomsaeRange[division];
  const poomsae1 = wtPoomsae[poomsaeList[Math.floor(Math.random() * poomsaeList.length)]];
  const poomsae2 = wtPoomsae[poomsaeList[Math.floor(Math.random() * poomsaeList.length)]];
  return [poomsae1, poomsae2];
}

function generateAnimationPrefix() {
  return animationOptions[Math.floor(Math.random() * animationOptions.length)];
}

  generateSetButton.addEventListener('click', (e) => {
  e.preventDefault;
  generateSetButton.disabled = true;
  let animationPrefix = generateAnimationPrefix();
  console.log(animationPrefix);
   
  poomsaeOne.classList.add(animationPrefix + '-out');
  poomsaeTwo.classList.add(animationPrefix + '-out');
 
  // a bit of a hack to trigger the css animation
  void poomsaeOne.offsetWidth;
  void poomsaeTwo.offsetWidth;

  const division = divisionSelector.value;
  const poomsae = generatePoomsae(division);
  
  setTimeout(() => {
  poomsaeOne.classList.remove(animationPrefix + '-out');
  poomsaeOne.classList.add(animationPrefix + '-in');
  poomsaeOne.innerHTML = poomsae[0];
}, 275);


  setTimeout(() => {

    poomsaeTwo.classList.remove(animationPrefix + '-out');
    poomsaeTwo.classList.add(animationPrefix + '-in');
    poomsaeTwo.innerHTML = poomsae[1];
  }, 825);

  setTimeout(() => {
    poomsaeOne.classList.remove(animationPrefix + '-in');
    poomsaeTwo.classList.remove(animationPrefix + '-in');
    generateSetButton.disabled = false;

  }, 2500);
 
});


