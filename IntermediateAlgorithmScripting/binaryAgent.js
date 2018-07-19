function binaryAgent(str) {
  str = str.split(' ');
  var i=0;
  var bit;
  var decimalArr = [];
  
  while(i<str.length){
    bit=0;
    for(var j=0; j<str[i].length; j++){
        if(str[i][j]==="1"){ 
          switch(j){            
            case 0: 
              bit += 128;              
              break;
            case 1:              
              bit += 64;             
              break;
            case 2:              
              bit += 32;             
              break;
            case 3:              
              bit += 16;
              break;
            case 4:              
              bit += 8;       
              break;
            case 5:              
              bit += 4;            
              break;
            case 6:              
              bit += 2;      
              break;
            case 7:              
              bit += 1;            
              break;
          }
        }
    }
    decimalArr.push(String.fromCharCode(bit));
    i++;
  }
  
  var arrToString = decimalArr.toString();
  arrToString = arrToString.replace(/,/g , "");

  return arrToString;
}
