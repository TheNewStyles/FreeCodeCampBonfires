function sumFibs(num) {
  var currentNum = 1;
  var previousNum = 0;
  var result = 0;
  
  while(currentNum <= num){
    if (currentNum % 2 !== 0) {
       result += currentNum;
    }    
    var added = currentNum + previousNum;
    previousNum = currentNum;
    currentNum = added;
    console.log(previousNum);
  }  
  
  return result;
}
