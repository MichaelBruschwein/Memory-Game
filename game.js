//GAME FILE\
// const md5 = require("md5")
// const axios = require("axios")
const publicKey = "09714c36f109af79663ce09d4dbb60d7fff7368af77c062e423e0f58fa46b9e7";
const privateKey = "6a4c1b7915c93fe11001dc8905558d73a1237489";
// const ts = Date.now()
// const hash = md5(ts + privateKey + publicKey);

const url = `https://api.unsplash.com/search/photos/?query=cat`;//generates photos based on search
const imgDivs = document.querySelectorAll(".box")
axios.get(url,
  {headers: {
    Authorization : "Client-ID 09714c36f109af79663ce09d4dbb60d7fff7368af77c062e423e0f58fa46b9e7" //allows our api access
  },params: {
    orientation: "squarish"
  }
  }
  ).then(function(obj){

  const result = obj.data.results //selects search results
  const resultCopy = result;
  const a = new Array(...resultCopy, ...result);

  a.sort(function() { return 0.5 - Math.random() });
  const grid = document.querySelector(".grid");
  grid.addEventListener("click", imageDisplay)
  function imageDisplay (e) {
   const findImage = e.target.firstChild
   console.log(e)
  //  findImage.innerHTML = `<img class="show" src="${element.urls.small}">`
  findImage.classList.add("show")
  }
  a.forEach((element, index) => {
    imgDivs[index].innerHTML = `<img src="${element.urls.small}">`

    // document.addEventListener('click', (e)=>{
      
      //imgDivs[index].innerHTML = `<img src="${element.urls.small}">`
    // )}

    /**** works for single image but calls 20 times *****/
    // grid.addEventListener("click", imageDisplay)
    // function imageDisplay (e) {
    //   e.path[0].innerHTML = `<img src="${element[index].urls.small}">`
    
    // }
    /** */
  });
})

// need click input
// need a card

// return a single image

// the user clicks on div and a single image is dsiplayed

// click niput(eventlistener)
// on click display image



//create axios get/fetch images
// figure out how to use a key

//Store images in either array or object

//assign each image to 2 cards

//pull 10 random images every reset and onload
//way of changing images

//loading indeicator
// click function to flip the card, first card stays up until second is clicked
// If second is the same both stay up else both go turn over
// when all cards are up flash "you win!"



//reset game function

