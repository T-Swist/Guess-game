
// document.getElementById("reset_btn").addEventListener("click", (e) => {
//   display.value = "";
//   userInput = "";
// })

const randomNumber = Math.floor(Math.random() * 101);
let tryingTimes = 5;

function guessLuckyNumber() {
 
 
  // let showResult = display.value = randomNumber;
  document.getElementById("guess_btn").addEventListener("click", (e) => {

    let userInput = document.getElementById("user_input").value;
    let display = document.getElementById("display_container");
    let chancesLeftInWord = document.getElementById("the_second_para_span");
    let chancesLeftInNumber = parseInt(chancesLeftInWord);
  

    if (randomNumber == userInput) {
      
      document.getElementById("first_para").textContent = `You won by guessing the random number which is ${randomNumber}.`;
      display.textContent = randomNumber;
      
     
     } else if (userInput < randomNumber) {

      document.getElementById("first_para").textContent = "You lost, and your input value is too high.";
      display.textContent = randomNumber;
      tryingTimes--;
      document.getElementById("the_second_para").innerHTML = `You got ${tryingTimes} chances left`;

      if(tryingTimes == -1){
        display.value = "";
        userInput = "";
        document.getElementById("the_second_para").innerHTML = `You guessed it in 5 Guesses`;
        
       }


    } else {

      document.getElementById("first_para").textContent = "You lost, and your input value is too low.";
      display.textContent = randomNumber;
      tryingTimes--;
      document.getElementById("the_second_para").innerHTML = `You got ${tryingTimes} chances left`;

      if(tryingTimes == -1){
        display.value = "";
        userInput = "";
        document.getElementById("the_second_para").innerHTML = `You guessed it in 5 Guesses`;
        
       }

    }

    document.getElementById("user_input").value = "";
    
  })

}

guessLuckyNumber();


