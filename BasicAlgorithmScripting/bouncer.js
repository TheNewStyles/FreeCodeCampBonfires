function bouncer(arr) {
  var truthy = Boolean(true);
  var truthyArr = [];
  var i=0; 
  
  while(i<arr.length){
    if(Boolean(arr[i]) === truthy){
      truthyArr.push(arr[i]);
    }  
    i++;
  }
  
  return truthyArr;
}
