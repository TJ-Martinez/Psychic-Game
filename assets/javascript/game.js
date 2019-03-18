var letters= ['a', 'b', 'c', 'd', 'e', 'f' ,'g', 'h', 'i', 'j', 'k', 'l', 
              'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 
              'y', 'z'];

var win= 0;
var losses= 0;
var guesses= 9;                 // want to have an empty array for guessesSoFar so that when I create the .push function all the letters guessed will be pushed into this array and it will be visible to the user. 
var left= 9;
var guessesSoFar= [];
var thewinningletter;