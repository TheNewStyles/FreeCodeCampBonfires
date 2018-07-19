function destroyer(arr) {
 var args = Array.prototype.slice.call(arguments);
 var itemToRemove = args.slice(1);  
  
 function checkArr(e){
   return itemToRemove.indexOf(e)<0;
 }   
  
  return arr.filter(checkArr);
}
