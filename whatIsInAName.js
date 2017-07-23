function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  collection.forEach(function(obj, index) {
    var hasAllMatchingProperties = true;
    Object.keys(source).forEach(function(key) {
       if (obj.hasOwnProperty(key)) {
         if (source[key] !== obj[key]) {
           hasAllMatchingProperties = false;
         }
       } else {
         hasAllMatchingProperties = false;
       }
    });
    if (hasAllMatchingProperties) {
      arr.push(collection[index]);
    }
  });  
  // Only change code above this line
  return arr;
}
