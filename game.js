//GAME FILE\
// const md5 = require("md5")
// const axios = require("axios")
const publicKey = "09714c36f109af79663ce09d4dbb60d7fff7368af77c062e423e0f58fa46b9e7";
const privateKey = "6a4c1b7915c93fe11001dc8905558d73a1237489";
// const ts = Date.now()
// const hash = md5(ts + privateKey + publicKey);

const url = `https://api.unsplash.com/search/photos/?query=cat`;//generates photos based on search
const imgDivs = document.querySelectorAll(".box")


//user clicks on a card 
//click reduces flip by 1 
//when flip is at 0 
//checks for match, if match keep flipped
//else reapply visible:hidden

// function cardFlipper(){
//   if(flips>0){
//     flips = flips - 1;
//   }
//   else if(!match && flips === 0){
//     findImage.classList.remove("show");
//   }
// }
let flips = 0;
let urlCompareArray = []
let card1Flipped = null
let card2Flipped = null
let lastSelecetedDiv = ""
let numberOfFlips = 0;
numOfMatches = 0;

//no match
//fast clickng prevention
//same clicking prevention
const matchChecker = function(){
  debugger
  console.log(card1Flipped)
  //console.log(card1Flipped);
  if(card1Flipped.getAttribute("src") === card2Flipped.getAttribute("src")){
    numOfMatches = numOfMatches + 1;
    console.log("It's a match!")
    numberOfFlips = 0;
    card1Flipped = null
    card2Flipped = null
    return;
  }else{
    debugger
    card1Flipped.classList.remove("show");
    card2Flipped.classList.remove("show");
    card1Flipped = null
    card2Flipped = null
    numberOfFlips = 0;
  }

  //no match
  //check if 1 match is made
  //check if 10 matchees are made
  matches = 0
}

const sameCardClicked = (e)=>{
  if(lastSelecetedDiv === e.target.id) {
    return true;
  }
}
const imageDisplay = function(e) {
  console.log(e)
  //matchChecker();
  const findImage = e.target

  if(numberOfFlips === 2 ){//handles fast clicking
    matchChecker()
    return;
  }
  if(!card1Flipped) {
    numberOfFlips = numberOfFlips + 1;
    findImage.classList.add("show");
    card1Flipped = findImage.firstChild
    console.log(card1Flipped)
    return;
  }
  if(!card2Flipped){
    numberOfFlips = numberOfFlips + 1;
    findImage.classList.add("show");
    card2Flipped = findImage.firstChild
    matchChecker()
    return;
  }
 
  // need a card
  
  console.log("We're here!")
  // if (flips > 0) { //user cliicks for the first time
  //   urlCompareArray.push(findImage.getAttribute("src"))
  //   console.log(urlCompareArray)
  //   findImage.classList.add("show")
  //   flips = flips - 1;
  // }
  // if (flips === 0 && urlCompareArray[0] === urlCompareArray[1]) {
  //   console.log("that's a match!")
  //   flips = 2
  //   urlCompareArray = [];
  // } else if (flips === 0 && urlCompareArray[0] !== urlCompareArray[1]) {
  //   console.log("It's not a match, :(")
  //   setTimeout(() => {
  //     console.log(card1)
  //     console.log(document.querySelector("img")) -
  //       document.querySelector("img").classList.remove("show")
  //     findImage.classList.remove("show")
  //   }, 1500)
  //   //findImage.classList.remove("show")
  //   urlCompareArray = [];
  //   flips = 2

  //   // else  {
  //   //   findImage.classList.remove("show")
  //   //   urlCompareArray=[];
  //   //   flips = 2
  //   // }
  // }

}

axios.get(url,
  {
    headers: {
      Authorization: "Client-ID 09714c36f109af79663ce09d4dbb60d7fff7368af77c062e423e0f58fa46b9e7" //allows our api access
    }, params: {
      orientation: "squarish"
    }
  }
).then(function (obj) {

  const result = obj.data.results //selects search results
  const resultCopy = result;
  const a = new Array(...resultCopy, ...result);

  a.sort(function () { return 0.5 - Math.random() });
  const grid = document.querySelector(".grid");

  // need click input
  // the user clicks on div and a single image is dsiplayed
  grid.addEventListener("click", imageDisplay)


  a.forEach((element, index) => {
    imgDivs[index].innerHTML = `<img src="${element.urls.small}">`


  });
  

})














