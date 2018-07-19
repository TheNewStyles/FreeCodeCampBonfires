function confirmEnding(str, target) {
  var lastCharEqualsTarget = false;
  var lastChar = '';  

  lastChar = str.substring(str.length-target.length, str.length);
  
  if(lastChar === target){
    lastCharEqualsTarget = true;
  }
  
  return lastCharEqualsTarget;
}
