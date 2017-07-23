function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;     
  var PIE = Math.PI;
    
  findOrbitalPeriod( GM, PIE, arr);
  
  function findOrbitalPeriod( gm, pie, arr){
    var avgAlt; 
    var axis; 
    var orbit;
    var i=0;
    
    while(i<arr.length){
      avgAlt = arr[i].avgAlt;
      axis = avgAlt  + earthRadius;
      
      orbit = Math.round(((Math.sqrt((Math.pow(axis, 3))/GM)*pie))*2);
      arr[i].orbitalPeriod = orbit;
      delete arr[i].avgAlt;
      
      i++;
    }

  }
  
  return arr;
}
