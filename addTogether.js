function addTogether() {
  
  var checkArgs = function(arg){
    return Number.isInteger(arg) ? arg : undefined;
  };
  
  var arg0 = checkArgs(arguments[0]);
  var arg1 = checkArgs(arguments[1]); 
  
  if(arguments.length > 1){
    if(arg0 === undefined || arg1 === undefined){
      return undefined;
    }else{
      return arg0+arg1;
    }
  }else{

    var c = arguments[0];
    
    if (checkArgs(c)) {
      return function(arg2) {
        if (c === undefined || checkArgs(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      };
    }
  }   
}
