function dropElements(arr, func) {
  var numArr = []; 
 
  for(var i=0; i<arr.length; i++){
    if(func(arr[i]) === true){
      numArr = arr.slice(i, arr.length);
      return numArr;
    }
  }
  
  return numArr;
}
