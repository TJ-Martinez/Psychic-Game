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

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (options.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins++;
           guesses = 9;
           guessesSoFar = [];
       }

       if (userGuess != computerGuess) {
           guesses --;
           guessesSoFar.push(userGuess);
       }

       if (guesses === 0) {

       guesses = 9;
       losses ++;
       guessesSoFar = [];

       
   }

   