let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

// PART 1
const titleEl = document.querySelector('#main-title');
titleEl.textContent = 'Dom Toretto Homepage';

// PART 2
const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = '#FFCC00';

// PART 3 - First attempt to remove solely on the DOM without affecting HTML *************COME BACK TO REEVALUATE***************

const favList = document.querySelector('#favorite-things');
// console.log(favList);
// for(let i = 0; i < favList.length; i++){
//   console.log(favList[i]);
// }

// for(let i of favList){ // Says it is not iterable.... rude
//   console.log(favList[i]);
// }

// PART 3 - Added id to last li
const removedLi = document.querySelector('.remove');
removedLi.remove(); 

// PART 4
const titleFontSize = document.querySelector('.special-title');
titleFontSize.style.fontSize = '2rem';

// PART 5 - Same as Part 3 *************COME BACK TO REEVALUATE***************
const pastRaces = document.querySelector('#past-races');
// let fakeRace = document.querySelector('#past-races');
// for(let i = 0; i < fakeRace.clientHeight; i++){
//   console.log(fakeRace[i]);
// }

// PART 6
const addRace = document.createElement('li');
// console.log(pastRaces);
addRace.textContent = 'New York';
// console.log(addRace);
pastRaces.append(addRace);

// PART 7
const domAdvMain = document.querySelector(".main");
const newAdv = document.createElement('div');
// console.log(domAdv);
newAdv.classList.add('blog-post');
// console.log(newAdv.classList);
const newAdvTitle = document.createElement('h1'); // it says h2 but they're all h1's so I am basically a rebel
newAdvTitle.textContent = "New York";

const newAdvSummary = document.createElement('p');
newAdvSummary.textContent = 'I think at some point, I drove through New York with a large magnet on my car'

newAdv.append(newAdvTitle);
newAdv.append(newAdvSummary);
// console.log(newAdv);

domAdvMain.append(newAdv);
// console.log(domAdvMain);

// PART 8
const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};

const quoteEvent = document.querySelector('#quote-title');
quoteEvent.addEventListener('click', (evt) => {
  if(evt.target) {
    randomQuote();
  }
})

// PART 9
const allBlogs = document.querySelectorAll('.blog-post');
// console.log(allBlogs);
for(let i of allBlogs){
  console.log(allBlogs[i]);
}