function sym(args) { 

  //REDUCE VARIABLES BY LOOPING THROUGH REPEATED CODE STARTING ON LINES 32
  var i=0;
  var sortedArgs;
  var sortedArgsIndexAhead;
  var sortedArgsIndexAhead0;
  var sortedArgsIndexAhead1;
  var sortedArgsIndexAhead2;
  var sortedArgsIndexAhead3;
  var uniqueArr;
  var uniqueArr0;
  var uniqueArr1;
  var uniqueArr2;
  var uniqueArr3;
  
  function getArgs(args){
    var i=0;
    var argsList = [];
    while(i<args.length){
      argsList.push(args);
      i++;
    }
    return argsList;
  }  

  /// TODO FIGURE OUT HOW TO LOOP THROUGH THESE. 
  //KEEP IT DRY AND CAN HANDLE OTHER ARGUMENT LENGTHS
  
  if(arguments.length === 2){     
    sortedArgs = getUniqueSortedArgs(arguments[i]);
    sortedArgsIndexAhead = getUniqueSortedArgs(arguments[i+1]);
    
    uniqueArr = uniqueArray(sortedArgs, sortedArgsIndexAhead);
  }
  
  if(arguments.length === 3){
    sortedArgs = getUniqueSortedArgs(arguments[i]);
    sortedArgsIndexAhead = getUniqueSortedArgs(arguments[i+1]);
    sortedArgsIndexAhead0 = getUniqueSortedArgs(arguments[i+2]);
    
    uniqueArr0 = uniqueArray(sortedArgs, sortedArgsIndexAhead);
    
    uniqueArr = uniqueArray(uniqueArr0, sortedArgsIndexAhead0);    
  }
  
  if(arguments.length === 4){
    sortedArgs = getUniqueSortedArgs(arguments[i]);
    sortedArgsIndexAhead = getUniqueSortedArgs(arguments[i+1]);
    sortedArgsIndexAhead0 = getUniqueSortedArgs(arguments[i+2]);
    sortedArgsIndexAhead1 = getUniqueSortedArgs(arguments[i+3]);
    
    uniqueArr0 = uniqueArray(sortedArgs, sortedArgsIndexAhead);
    
    uniqueArr1 = uniqueArray(uniqueArr0, sortedArgsIndexAhead0);
    
    uniqueArr = uniqueArray(uniqueArr1, sortedArgsIndexAhead1);    
  }
  
  if(arguments.length === 6){
    sortedArgs = getUniqueSortedArgs(arguments[i]);
    sortedArgsIndexAhead = getUniqueSortedArgs(arguments[i+1]);
    sortedArgsIndexAhead0 = getUniqueSortedArgs(arguments[i+2]);
    sortedArgsIndexAhead1 = getUniqueSortedArgs(arguments[i+3]);
    sortedArgsIndexAhead2 = getUniqueSortedArgs(arguments[i+4]);
    sortedArgsIndexAhead3 = getUniqueSortedArgs(arguments[i+5]);
    
    uniqueArr0 = uniqueArray(sortedArgs, sortedArgsIndexAhead);
    
    uniqueArr1 = uniqueArray(uniqueArr0, sortedArgsIndexAhead0);
    
    uniqueArr2 = uniqueArray(uniqueArr1, sortedArgsIndexAhead1);
    
    uniqueArr3 = uniqueArray(uniqueArr2, sortedArgsIndexAhead2);
    
    uniqueArr = uniqueArray(uniqueArr3, sortedArgsIndexAhead3);    
  }

  function uniqueArray(array1,array2){
    return array1.filter(x => array2.indexOf(x) == -1).concat(array2.filter(x => array1.indexOf(x) == -1));
  }    
  
  
  function getUniqueSortedArgs(args){
    var sortArr = [];
    sortArr = args.sort();  
    var uniqSortArr = sortArr.filter(function(item, pos) {return sortArr.indexOf(item) == pos;});    
    
    return uniqSortArr;
  }  
  
  return uniqueArr;
}
