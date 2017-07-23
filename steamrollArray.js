function steamrollArray(arr) {  
  var flattened = arr;
  var i=0;
  
  while(i < flattened.length){
    while(Array.isArray(flattened[i]) === true){
      flattened = flattened.reduce(function(a, b) {return a.concat(b);},[]);
    }    
    i++;
  }
  
  return flattened;
}
