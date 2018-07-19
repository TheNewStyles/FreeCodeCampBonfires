function fearNotLetter(str) {  
  var i=0;
  var charAt;
  var charAtPlusOne;
  
  while(i<str.length-1){   
    charAt = str.charCodeAt(i);
    charAtPlusOne = str.charCodeAt(i+1);
    if(charAtPlusOne - charAt != 1){
      return String.fromCharCode(charAtPlusOne-1);
    }    
    i++;
  }
}
