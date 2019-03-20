var letters= ['a', 'b', 'c', 'd', 'e', 'f' ,'g', 'h', 'i', 'j', 'k', 'l', 
              'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 
              'y', 'z'];

var wins= 0;
var losses= 0;
var guesses= 9;                 // want to have an empty array for guessesSoFar so that when I create the .push function all the letters guessed will be pushed into this array and it will be visible to the user. 
var guessesSoFar= [];


document.onkeyup = function(event) {

    var userGuess = event.key;

    var CPU = letters[Math.floor(Math.random() * letters.length)]; //computer will generate random letter from here using lettersArray

    var TheRobotschoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    // I have decided to go with a conditional approach because it seems a lot clearer to me. Which is why I will be using var TheRobotschoice 
// use .indexof because indexof allows me to associate each string with a number. This will help me with eliminating letters much easier.  
// set the computerchoices.indexof(userGuess) to be greater than -1 so that there is no error. I did not know this until I started getting -1 error. 

if (TheRobotschoice.indexOf(userGuess) > -1) { // so using .indexOf will take TheRobotschoiceArray and it'll correspond with the userGuess. So everytime the user keys in a letter then the "if's"
                                               // will happen.                                                                                                                                                                                             
       if (userGuess === CPU) {
           wins++;
           guesses = 9;
           guessesSoFar = [];
           alert("Winner!")
       }
 
//Need to create a condition so that when a letter is guessed then it will be pushed to the the guessesSoFar and the # of guesses goes down. 
       if (userGuess != CPU) { 
           guesses --;
           guessesSoFar.push(userGuess);

       }

       if (guesses === 0) { //So this is where the condition will not only reset the game but will also lower the guesses counter. 
                            // Set this up to where if the counter hits 0 then the user will lose and the game resets. 

       guesses = 9;
       losses ++;
       guessesSoFar = [];
       alert("loser")

       }

    var html =   // had to look for this online because i did not know how to do the var= html part. 
   "<h1> Psychic Game </h1>" +
   "<p>Can you guess what I'm thinking?</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>You're about to lose: " + guesses + "</p>" +
   "<p>Letters Guessed So Far: " + guessesSoFar.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
       }

};
