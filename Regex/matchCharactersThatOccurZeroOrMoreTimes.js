// Regular Expressions: Match Characters that Occur Zero or More Times
// The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex); // Returns ["goooooooo"]
// gPhrase.match(goRegex); // Returns ["g"]
// oPhrase.match(goRegex); // Returns null

// Create a regex chewieRegex that uses the * character to match all the upper and lower"a" characters in chewieQuote. Your regex does not need flags, and it should not match any of the other quotes.

// Your regex chewieRegex should use the * character to match zero or more a characters.
// Passed
// Your regex chewieRegex should match 16 characters.
// Passed
// Your regex should match "Aaaaaaaaaaaaaaaa".
// Passed
// Your regex should not match any characters in "He made a fair move. Screaming about it can't help you."
// Passed
// Your regex should not match any characters in "Let him have it. It's not wise to upset a Wookiee."

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /aaaa*/gi; // Change this line
let result = chewieQuote.match(chewieRegex);