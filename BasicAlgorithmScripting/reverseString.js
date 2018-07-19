function reverseString(str) {
  var reversedString = '';
  
  for(i=str.length-1; i>=0; i--){
    reversedString += str[i];
  }
  
  return reversedString;
}
