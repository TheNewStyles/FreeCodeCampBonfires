function pairwise(arr, arg) {
  var pairArr = arr.slice();
  var sum = 0;
  
  for(var i=0; i<pairArr.length; i++){
    for(var j=i+1; j<pairArr.length; j++){
      if(pairArr[i] + pairArr[j] === arg){    
        sum += i + j;
        pairArr[i] = pairArr[j] = NaN;
      }
    }
  }
  
  return sum;
}
