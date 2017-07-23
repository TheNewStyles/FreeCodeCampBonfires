function largestOfFour(arr) {  
  var largestNum = 0;
  var largestNumArray = [];
  
  for(var i=0; i<=arr.length-1; i++){
    for(var j=0; j<=arr[i].length-1; j++){
      if(arr[i][j] > largestNum){
        largestNum = arr[i][j];
      }
    }
    largestNumArray.push(largestNum);
    largestNum=0;
  }
  
  return largestNumArray;
}
