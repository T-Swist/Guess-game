
// document.getElementById("reset_btn").addEventListener("click", (e) => {
//   display.value = "";
//   userInput = "";
// })

const randomNumber = Math.floor(Math.random() * 101);
let tryingTimes = 5;
console.log(randomNumber);
function guessLuckyNumber() {
 
 
  // let showResult = display.value = randomNumber;
  document.getElementById("guess_btn").addEventListener("click", (e) => {

    let userInput = document.getElementById("user_input").value;
    let display = document.getElementById("display_container");
    let chancesLeftInWord = document.getElementById("the_second_para_span");
    let chancesLeftInNumber = parseInt(chancesLeftInWord);
    
    let whenYouWon = ["1st", "2nd", "3rd", "4"]

    if (randomNumber == userInput) {
      
      document.getElementById("first_para").textContent = `You won by guessing the random number which is ${randomNumber}.`;
      display.value = randomNumber;
      userInput = "";
      document.getElementById("guess_btn").innerHTML = "Guess"; 
      // window.location = "index.html";
     
     } else if (userInput > randomNumber) {

      document.getElementById("first_para").textContent = "Your input value is too high.";
      tryingTimes--;
      document.getElementById("guess_btn").innerHTML = "Try Again";
      document.getElementById("the_second_para").innerHTML = `You got ${tryingTimes} chances left`;

      if(tryingTimes == 0){
        alert("Game Over")
        display.value = "";
        userInput = "";
        document.getElementById("the_second_para").innerHTML = `You guessed it in 5 Guesses`;
        window.location = "index.html";
       }


    } else {

      document.getElementById("first_para").textContent = "Your input value is too low.";
      tryingTimes--;
      document.getElementById("guess_btn").innerHTML = "Try Again";
      document.getElementById("the_second_para").innerHTML = `You got ${tryingTimes} chances left`;

      if(tryingTimes == 0){
        alert("Game Over")
        display.value = "";
        userInput = "";
        document.getElementById("the_second_para").innerHTML = `You guessed it in 5 Guesses`;
        window.location = "index.html";
        
       }

    }

    document.getElementById("user_input").value = "";
    
  })

}

guessLuckyNumber();


