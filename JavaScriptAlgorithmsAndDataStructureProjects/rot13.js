function rot13(str) {
  str = str.toUpperCase();  
  var charCodeAtIndexI = 0;
  var newString = "";
  
  for(var i=0; i<str.length; i++){
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newString += str.charAt(i);
    }
    else if (str.charCodeAt(i) > 77) {
      newString += String.fromCharCode(str.charCodeAt(i) - 13);
    }
    else {
      newString += String.fromCharCode(str.charCodeAt(i) + 13);
    }
  }
  
  return newString;
}
