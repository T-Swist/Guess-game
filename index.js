
// document.getElementById("reset_btn").addEventListener("click", (e) => {
//   display.value = "";
//   userInput = "";
// })

const randomNumber = Math.floor(Math.random() * 101);
let tryingTimes = 5;
console.log(randomNumber);
function guessLuckyNumber() {
 

  // A event to handles the guess function when the guess btn gets click
  document.getElementById("guess_btn").addEventListener("click", (e) => {
    // getting elements from the html
    let userInput = document.getElementById("user_input").value;
    let display = document.getElementById("display_container");
    let chancesLeftInWord = document.getElementById("the_second_para_span");
    let chancesLeftInNumber = parseInt(chancesLeftInWord);
    let firsthtmlp = document.getElementById("first_para");
    let secondhtmlp = document.getElementById("the_second_para");
    let htmlgussebtn = document.getElementById("guess_btn");
   

    if (randomNumber == userInput) {
      
      firsthtmlp.textContent = `You won by guessing the random number which is ${randomNumber}.`;
      display.value = randomNumber;
      userInput = "";
      htmlgussebtn.innerHTML = "Guess"; 
      
     
     } else if (userInput > randomNumber) {

      firsthtmlp.textContent = "Your input value is too high.";
      tryingTimes--;
      htmlgussebtn.innerHTML = "Try Again";
      secondhtmlp.innerHTML = `You got ${tryingTimes} chances left`;

      if(tryingTimes == 0){
        alert("Game Over")
        display.value = "";
        userInput = "";
        secondhtmlp.innerHTML = `You guessed it in 5 Guesses`;
        window.location = "index.html";
       }


    } else {

      firsthtmlp.textContent = "Your input value is too low.";
      tryingTimes--;
      htmlgussebtn.innerHTML = "Try Again";
      secondhtmlp.innerHTML = `You got ${tryingTimes} chances left`;

      if(tryingTimes == 0){
        alert("Game Over")
        display.value = "";
        userInput = "";
        secondhtmlp.innerHTML = `You guessed it in 5 Guesses`;
        window.location = "index.html";
        
       }

    }

    document.getElementById("user_input").value = "";
    
  })

}

guessLuckyNumber();


