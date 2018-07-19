function mutation(arr) {
  var firstArrToLower =  arr[0].toLowerCase();
  var secondArrToLower = arr[1].toLowerCase();
  var containsSecondArr = true;  

  for(var i=0; i<=firstArrToLower.length-1; i++){   
    if(firstArrToLower.indexOf(secondArrToLower[i]) === -1 && i<secondArrToLower.length){
      containsSecondArr = false;
      return containsSecondArr;
    }
  }
  
  return containsSecondArr;
}
