function sumAll(arr) {
  var upperLimit = arr.reduce(function(a, b){return Math.max(a, b);});     
  var lowerLimit = arr.reduce(function(a, b){return Math.min(a, b);});     
  var i = lowerLimit;
  var allValuesBetweenArr = [];
  
  while(i<=upperLimit){
    allValuesBetweenArr.push(i);
    i++;
  }
  
  var sum = allValuesBetweenArr.reduce(( a, b ) => a + b,0);
  
  return sum;
}
