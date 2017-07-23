function myReplace(str, before, after) {
  var replace = '';
  var afterFirstChar = '';
  var afterUpperChar = '';  
  var beforeFirstCharCode = before.charCodeAt(0);
  
  if(beforeFirstCharCode >= 65 && beforeFirstCharCode <= 90){
    afterUpperChar = after.slice(0,1);
    afterUpperChar = afterUpperChar.charCodeAt(0)-32;
    afterUpperChar = String.fromCharCode(afterUpperChar);    
    afterFirstChar = after.slice(1, after.length);
    after = afterUpperChar + afterFirstChar;
  }
    replace = str.replace(before, after);   
  
  return replace;
}
