function uniteUnique(arr) {
  var sortedArr = [];
  var i=0;  
  
  for(var j=0; j<arguments.length; j++){
    for(var k=0; k<arguments[j].length; k++){
       if(sortedArr.includes(arguments[j][k]) === false){
         sortedArr.push(arguments[j][k]);
       } 
    }
  }
  
  return sortedArr;
}
