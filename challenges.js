
// Challenge 01 - Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  // Implement me
  if (name.toLowerCase().charAt(0) === 'r'){
    name = name + ' plays banjo'
  } else {
    name = name + ' does not play banjo'
  }
  return name;
}

// Challenge 02 - Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  let hoursToMilliS = h * 3600000
  let minutesToMilliS = m * 60000
  let secondsToMilliS = s * 1000
  let timeInMilliS = hoursToMilliS + minutesToMilliS + secondsToMilliS
  //returns timeInMilliS
  return timeInMilliS
}

  
  
past()

// Challenge 03 - 