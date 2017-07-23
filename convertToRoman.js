function convertToRoman(num) {
  var roman = '';
  var remainder;
  
  
  if(num >= 1000){
    var M = String(num).charAt(0);
    var M_as_number = Number(M); 
    var i=0;
    
    while(i<M_as_number){
      roman += 'M';
      i++;
    } 
  }     
 
  remainder = num % 1000;  
    //984 
    
  if(remainder > 100){
    var hundreds = String(remainder).charAt(0);
    var hundreds_as_number = Number(hundreds);    
    
    if(hundreds_as_number == 9){
      roman = roman + "CM";
    }else if(hundreds_as_number == 8){
      roman = roman + "DCCC";
    }else if(hundreds_as_number == 7){
      roman = roman + "DCC";
    }else if(hundreds_as_number == 6){
      roman = roman + "DC";
    }else if(hundreds_as_number == 5){
      roman = roman + "D";
    }else if(hundreds_as_number == 4){
      roman = roman + "CD";
    }else if(hundreds_as_number == 3){
      roman = roman + "CCC";
    }else if(hundreds_as_number == 2){
      roman = roman + "CC";
    }else if(hundreds_as_number == 1){
      roman = roman + "C";
    }    
  }
  
  remainder = remainder % 100;
  //84
  
  if(remainder>10){
    var tens = String(remainder).charAt(0);
    var tens_as_number = Number(tens); 
    
    if(tens_as_number == 9){
      roman = roman + "XC";
    }else if(tens_as_number == 8){
      roman = roman + "LXXX";
    }else if(tens_as_number == 7){
      roman = roman + "LXX";
    }else if(tens_as_number == 6){
      roman = roman + "LX";
    }else if(tens_as_number == 5){
      roman = roman + "L";
    }else if(tens_as_number == 4){
      roman = roman + "XL";
    }else if(tens_as_number == 3){
      roman = roman + "XXX";
    }else if(tens_as_number == 2){
      roman = roman + "XX";
    }else if(tens_as_number == 1){
      roman = roman + "X";
    }
  }
  
  remainder = remainder % 10; 
  
  var singles = String(remainder).charAt(0);
  var singles_as_number = Number(singles); 
  
  if(singles_as_number == 9){
    roman = roman + "IX";
  }else if(singles_as_number == 8){
    roman = roman + "VIII";
  }else if(singles_as_number == 7){
    roman = roman + "VII";
  }else if(singles_as_number == 6){
    roman = roman + "VI";
  }else if(singles_as_number == 5){
    roman = roman + "V";
  }else if(singles_as_number == 4){
    roman = roman + "IV";
  }else if(singles_as_number == 3){
    roman = roman + "III";
  }else if(singles_as_number == 2){
    roman = roman + "II";
  }else if(singles_as_number == 1){
    roman = roman + "I";
  }
  
 return roman;
}
