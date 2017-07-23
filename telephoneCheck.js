function telephoneCheck(str) {  
  var zeroAscii = 48;
  var nineAscii = 57;
  var spaceAscii = 32;
  var leftParenAscii = 40;
  var rightParenAscii = 41;
  var dashAscii = 45;
  
  
  var cleanNum = checkForBadCharsAndRemoveSpaces(str);
  
  if(cleanNum === false){
    return false;
  }
  
  var numNoDashes = validateDashesAndParen(cleanNum);  
  
  var numCorrectCode = validateLengthAndCountryCode(numNoDashes);
  
  if(numCorrectCode === false || numNoDashes === false){
    return false;
  }else{
    return true;
  }    

  /// helper methods ///
  
  function checkForBadCharsAndRemoveSpaces(num){
    var i=0;
    var cleanNum = '';
    var code;
    
    while(i < num.length){
      code = num.charCodeAt(i);
      
      if(code>=zeroAscii && code<= nineAscii || code===dashAscii || code===leftParenAscii || code===rightParenAscii || code===spaceAscii){
        cleanNum += num[i];        
      }
      else{
        return false;
      }
      i++;
    } 
    return cleanNum.replace(/[ ]+/g, '');
  }
  
  
  function validateDashesAndParen(num){    
    var i=0;    
     
    while(i<num.length){
      var code = num.charCodeAt(i);
      var codePlus4 = num.charCodeAt(i+4); 
      
      if(i<num.length-5){
        if(code===leftParenAscii){
          if(codePlus4 != 41){
            return false;
          }
        }  
        if(code===dashAscii){
          if(codePlus4 != 45){
            return false;
          }
        }
        if(code===rightParenAscii){
          if(num.charCodeAt(i-4) != 40){
            return false;
          }
        }
      }   
      i++;
    }
    return num.replace(/[-()]/g, '');
  }
  
  function validateLengthAndCountryCode(num){
    var numLength = num.length;
    var minLength = 10;
    var maxLength = 11;
    
    if(numLength==maxLength && num[0]!=1 || numLength>maxLength || numLength<minLength){
      return false;
    }
  }
  
}//end
