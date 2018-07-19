function findElement(arr, func) {
  var numArr=[];
  
  numArr = arr.filter(func);  
  
  return numArr[0];
}
