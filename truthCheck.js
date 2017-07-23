function truthCheck(collection, pre) {
  var i=0;
  var collectionPropsArr = [];
  var collectionValuesArr = [];
  
  while(i<collection.length){
    collectionPropsArr.push(Object.getOwnPropertyNames(collection[i])); 
    collectionValuesArr.push(Object.values(collection[i]));
    i++;
  }  
  
  for(var j=0; j<collectionValuesArr.length; j++){
    for(var k=0; k<collectionValuesArr[j].length; k++){
      if(Boolean(collectionValuesArr[j][k]) === false){
        return false; 
      }
      if(!collectionPropsArr[j].includes(pre)){
        return false;
      }
    }   
  }
  
  return true;
}
