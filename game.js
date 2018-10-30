//GAME FILE
let cardsFlipped = [];

let picturesSelected =[]
//let pic2
let numOfMatches = 0;
const matchTotal = 10;
let url = ""

const wonGameAlert = function(){ // checks to see if all matches are complete if so alerts user telling them they have won the game
 setTimeout(()=>{
   if(numOfMatches === matchTotal){
     document.getElementById("music").pause()
     document.getElementById("winSound").play()
     alert("You have won the game congrats man :D")
   }
 },1000)
}
const matchChecker = function(matches){
 if(cardsFlipped[0] === cardsFlipped[1]){ //Checks to see if first selected card is the same as second selected card
   numOfMatches = numOfMatches + 1;
   cardsFlipped = [];
   wonGameAlert()
   return;
 }else{ //If first card selected isn't equal to card 2 resets card
   setTimeout(()=>{
     console.log("inside reset")
     picturesSelected.forEach((item)=>{item.classList.remove("show");})
     cardsFlipped = [];
   },300)
 }
}

const imageDisplay = function(e) {
 if(e.target.firstChild.localName !== "img"){ //Prevents Game from breaking if user clicks on something other than image box
   return;
 }
 const findImage = e.target.firstChild

 if(cardsFlipped.length<2) { // checks to see if a card is fliped if not assigns card image value then stores that value into variable
   picturesSelected.push(findImage)
   findImage.classList.add("show");
   cardsFlipped.push(findImage.getAttribute("src"))
   return;
 }
 if (cardsFlipped[1]){
   matchChecker();
 }
}

const publicKey = "09714c36f109af79663ce09d4dbb60d7fff7368af77c062e423e0f58fa46b9e7";
let userInput = "";
document.getElementById("searchbar").addEventListener("input",(e)=>{ // logs user input form text field.
 userInput = e.target.value
})

document.getElementById("searchButton").addEventListener("click",function(){ //Checks to make sure user at leasts inputs more than nothing
 if (userInput === ""){
   alert("You Must Input Text Before Searching...")
   return;
 }
 url = `https://api.unsplash.com/search/photos/?query=${userInput}`;//generates photos based on search
 gameBoard(numberOfBoxess)
})

// const imgDivs = document.querySelectorAll(".box")
const grabImagesFromApi = function(){
 const imgDivs = document.querySelectorAll(".box")
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
}
const numberOfBoxess = 20;
const gameBoard = function(value){ //creates the amount of squares based on original value set
 for (i = 0; i < value; i++) {
   let div = document.createElement("div")
   div.classList.add("box")
   let id = document.createAttribute("id")
   id.value = `${i+1}`
   div.setAttributeNode(id)
   const findGridElement = document.getElementById("img")
   findGridElement.appendChild(div)
 }
 grabImagesFromApi()
 document.getElementById("music").play()
}
const resetGame = function(){
  boxes = document.querySelectorAll(".box")
  boxes.forEach(function(){

  })
}












