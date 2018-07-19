function findLongestWord(str) {
  var arrayOfStrings = str.split(' ');
  var largestString = 0;
  
  for(var i=0; i<arrayOfStrings.length; i++){
    if(arrayOfStrings[i].length > largestString){
      largestString = arrayOfStrings[i].length;
    }
  }  
  
  return largestString;
}
