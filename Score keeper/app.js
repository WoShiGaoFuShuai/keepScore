const firstP = document.querySelector('#firstPlayerSpan');
const secondP = document.querySelector('#secondPlayerSpan');
const firstPBtn = document.querySelector('#firstPlayerBtn');
const secondPBtn = document.querySelector('#secondPlayerBtn');
const resetBtn = document.querySelector('#resetBtn');
const playTo = document.querySelector('#playTo');


firstPBtn.onclick = upScoreP1;
secondPBtn.onclick = upScoreP2;
resetBtn.onclick = reset;
playTo.addEventListener('change', reset);



let p1Score = 0;
let p2Score = 0;
playTo.value = 3;


function upScoreP1() {
   p1Score++
   firstP.innerText = `${p1Score}`;

   if (p1Score === +playTo.value) {
      firstPBtn.disabled = true;
      secondPBtn.disabled = true;
      firstP.setAttribute('class', 'win');
      secondP.setAttribute('class', 'lose');
   }  
}

function upScoreP2() {
   p2Score++
   secondP.innerText = `${p2Score}`;

   if (p2Score >= +playTo.value) {
      secondPBtn.disabled = true;
      firstPBtn.disabled = true;
      secondP.setAttribute('class', 'win');
      firstP.setAttribute('class', 'lose');
   }  
}

function reset() {
   p1Score = 0;
   firstP.innerText = '0'
   p2Score = 0;
   secondP.innerText = '0'

   const firstPClassName = firstP.className;
   const secondPClassName = secondP.className;

   firstPBtn.disabled = false;
   secondPBtn.disabled = false;

   if (firstPClassName !== '') firstP.classList.remove(`${firstPClassName}`);
   if (firstPClassName !== '') secondP.classList.remove(`${secondPClassName}`);
}
