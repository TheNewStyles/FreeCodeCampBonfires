function updateInventory(arr1, arr2) {
  var i=0;
  var sortArr;
  var flattened = arr1.reduce(function(a, b) {return a.concat(b);},[]);
  
  while(i<arr2.length){
    if(!isInArray(flattened, arr2[i][1]) && arr2[i][1] !== []){
      arr1.push(arr2[i]);
    }else{    
      updateValueBasedOnProp(arr1, arr2[i][1], arr2[i][0]);
    }
    i++;
  }
  
  function isInArray(flatArr, property){
    
    if(flatArr.includes(property)){
      return true;
      }
    
    return false;
  }  
  
  function updateValueBasedOnProp(arr, property, propValue){   
    var newVal;
    var indexOf;
    
    for(var i=0; i<arr.length; i++){
      if(arr[i].includes(property)){
        newVal = arr[i][0] + propValue;
        arr[i].splice(0, 1, newVal);
      }
    }
  }
  
    sortArr = arr1.sort((function(index){
        return function(a, b){
            return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
        };
    })(1));
    
    return sortArr;
}
