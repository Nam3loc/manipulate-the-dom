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
let pageTitle = (str) => {
  titleEl.textContent = str;
}
pageTitle('Dom Toretto Homepage');




// PART 2
const bodyEl = document.querySelector('body');
let pageColor = (color) => {
  bodyEl.style.backgroundColor = color;
}
pageColor('#FFCC00');




// PART 3

// Lots of google - This specifically removes the last child
const favList = document.querySelector('#favorite-things'); 

let notHisFavorite = () => {
  favList.removeChild(favList.lastElementChild);
}

notHisFavorite();

// Part 3 - First attempt -----------
// console.log(favList);
// for(let i = 0; i < favList.length; i++){
//   console.log(favList[i]);
// }

// for(let i of favList){ // Says it is not iterable.... rude
//   console.log(favList[i]);
// }

// PART 3 - Added id to last li ---------
// const removedLi = document.querySelector('.remove');
// removedLi.remove(); 



// PART 4
const titleFontSize = document.querySelector('.special-title');

let titleFont = (size) => {
  titleFontSize.style.fontSize = size;
}
titleFont('2rem');




// PART 5
const pastRaces = document.querySelectorAll('#past-races > li');
// console.log(pastRaces);

// After Office Hours

// Working code within the function

let removeChicago = () => {
  for(let i = 0; i < pastRaces.length; i++){
    // console.log(pastRaces[i].includes('Chicago'));
    let chicago = pastRaces[i].innerHTML.includes('Chicago');
    if(chicago === true){
      pastRaces[i].remove();
    }
  }
  return pastRaces;
}

removeChicago();
//===========================================================\\
// Working code

// for(let i = 0; i < pastRaces.length; i++){
//   // console.log(pastRaces[i].includes('Chicago'));
//   let chicago = pastRaces[i].innerHTML.includes('Chicago');
//   if(chicago === true){
//     pastRaces[i].remove();
//   }
// }
//===========================================================\\
// Stuff that did not work
// let index = pastRaces.findIndex(race =>
//   race.includes('Chicago')
//   )

// console.log(index);



// PART 6
const addToPastRaces = document.querySelector('#past-races');
const addRace = document.createElement('li');
// console.log(pastRaces);

let moreRaces = (city) => {
  addRace.textContent = city;
  // console.log(addRace);
  addToPastRaces.append(addRace);
}
moreRaces("New York");
// moreRaces('Hawaii');

// PART 7

let newDescription = () => {
  const domAdvMain = document.querySelector(".main");
  const newAdv = document.createElement('div');
  // console.log(domAdv);
  newAdv.classList.add('blog-post', 'purple');
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
}
newDescription();


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
console.log(allBlogs);

let newEvent = () => {
  for(let i =0; i < allBlogs.length; i++){
    allBlogs[i].addEventListener("mouseout", () => {
      // if(evt.target.classList = 'purple'){
      //   evt.target.toggle;
      // }

      allBlogs[i].classList.toggle('red');
    })

    allBlogs[i].addEventListener("mouseenter", () => {
      // if(evt.target.classList = 'red'){
      //   evt.target.toggle;
      // }

      allBlogs[i].classList.toggle('red');
    })
  }
}
newEvent();