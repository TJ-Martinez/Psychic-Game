var letters= ['a', 'b', 'c', 'd', 'e', 'f' ,'g', 'h', 'i', 'j', 'k', 'l', 
              'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 
              'y', 'z'];

var wins= 0;
var losses= 0;
var guesses= 9;                 // want to have an empty array for guessesSoFar so that when I create the .push function all the letters guessed will be pushed into this array and it will be visible to the user. 
var guessesSoFar= [];


document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    var TheRobotschoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    // I have decided to go with a conditional approach because it seems a lot clearer to me. Which is why I will be using var TheRobotschoice 
// use .indexof because indexof allows me to associate each string with a number. This will help me with eliminating letters much easier.  
// set the computerchoices.indexof(userGuess) to be greater than -1 so that there is no error. I did not know this until I started getting -1 error. 

if (TheRobotschoice.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins++;
           guesses = 9;
           guessesSoFar = [];
           alert("Winner!")
       }
 
//Need to create a condition so that when a letter is guessed then it will be pushed to the the guessesSoFar and the # of guesses goes down. 
       if (userGuess != computerGuess) { 
           guesses --;
           guessesSoFar.push(userGuess);

       }

       if (guesses === 0) {

       guesses = 9;
       losses ++;
       guessesSoFar = [];
       alert("loser")

       
   });

