function smallestCommons(arr) {
  var min = arr.reduce(function(a, b) {return Math.min(a, b);}); 
  var max = arr.reduce(function(a, b) {return Math.max(a, b);});
  var smallestCommon = min * max;

  var calc = 0;
  
  while (calc === 0) {
    for (var i = min; i <= max; i++) {
      if (smallestCommon % i !== 0) {
        smallestCommon += max;
        calc = 0;
        break;
      }
      else {
        calc = 1;
      }
    }
  }

  return smallestCommon;
}
