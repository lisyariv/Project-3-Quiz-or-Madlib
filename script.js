let response = document.querySelector("#answer")
let photo = document.querySelector("#reactionPhoto")
var randomNumber = Math.floor((Math.random()*10)+1);

var guess = window.prompt("Insert your guess.")

if(guess == ""){
      response.innerHTML = "Silly you! Reload and type something in."
} else if(guess != randomNumber){
  response.innerHTML = `Incorrect! Refresh and guess again!`; 
  photo.innerHTML = `<img src = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/09/Super-Mario-Sunshine-Too-Bad-Game-Over.jpg">`
  }
else {
 response.innerHTML = (`Correct! Click this <a href="https://www.youtube.com/watch?v=DA7wDV4MbNo">link</a> for your prize! :)`);
}

