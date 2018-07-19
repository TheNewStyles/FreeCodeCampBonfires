function pairElement(str) {
  var i=0;
  var pairArr = [];
  var dnaArr = [];
  
  while(i<str.length){
    switch(str[i]){
      case 'A':        
        pairArr.push("A","T");        
        dnaArr.push(pairArr);        
        break;
      case 'T':        
        pairArr.push("T","A");        
        dnaArr.push(pairArr);        
        break;
      case 'C':        
        pairArr.push("C","G");        
        dnaArr.push(pairArr);        
        break;
      case 'G':        
        pairArr.push("G","C");        
        dnaArr.push(pairArr);        
        break;
      default:
        console.log("wrong input");
    }    
    pairArr = [];
    i++;
  }
  
  return dnaArr;
}
