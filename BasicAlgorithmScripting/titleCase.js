function titleCase(str) {
  var titleCased = '';
  var firstCharToUpper = '';
  var afterFirstCharToLower = '';
  var splitStringArray = str.split(' ');
  
  for(var i=0; i<splitStringArray.length; i++){
    firstCharToUpper = splitStringArray[i].substr(0,1).toUpperCase();
    afterFirstCharToLower = splitStringArray[i].substr(1, splitStringArray[i].length).toLowerCase();
    
    titleCased += firstCharToUpper + afterFirstCharToLower + " ";
  }  
  
  return titleCased.trim();
}
