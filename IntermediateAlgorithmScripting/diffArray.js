function diffArray(arr1, arr2) {
  var concatArr = arr1.concat(arr2).sort();
    
  for( var index = 0, single = []; index < concatArr.length; index++ ) {
    if( concatArr.indexOf( concatArr[index], concatArr.indexOf( concatArr[index] ) + 1 ) == -1 ) single.push( concatArr[index] );    
  }
  
  return single;
 }
