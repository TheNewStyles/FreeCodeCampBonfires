function getIndexToIns(arr, num) {
  var sortedArr = arr.sort(function(a,b){return a-b;});
  
  for(var i=0; i<sortedArr.length+1; i++){
    if(sortedArr[i] >= num){      
      return i;
    }else if(i === sortedArr.length-1){
      return i+1;
    }
  } 
}
