
function chunkArrayInGroups(arr, size) {
  var chunkedArr = [];
  var multiChunkedArr = [];
  
  for(var i=0; i<arr.length; i+=size){    
      chunkedArr = arr.slice(i,i+size);
      multiChunkedArr.push(chunkedArr);
      chunkedArr = [];
  }    
  
  return multiChunkedArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
