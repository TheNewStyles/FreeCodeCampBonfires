function palindrome(str) {
  var isPalindrome = false;
  var cleanedStr = str.replace(/[' '`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
  var reversedStr = '';
  
  for(var i=cleanedStr.length-1; i>=0; i--){
    reversedStr += cleanedStr[i];
  }
  
  if(cleanedStr === reversedStr){
    isPalindrome = true;
  }
  
  return isPalindrome;
}
