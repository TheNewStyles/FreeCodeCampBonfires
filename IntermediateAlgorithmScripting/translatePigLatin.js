function translatePigLatin(str) {
  var i=0;
  var vowelArr = [97,101,105,111,117];
  var strBeforeVowel = '';
  var strVowelOn = '';
  var pigLatin = '';
  
  while(i<str.length){
    if(vowelArr.includes(str.charCodeAt(i))){
      if(i===0){
        pigLatin = str + "way";
        console.log("in loop "+pigLatin);
        return pigLatin;
      }     
      
      strBeforeVowel = str.substr(0,i)+"ay";
      strVowelOn = str.substr(i, str.length);     
      pigLatin += strVowelOn + strBeforeVowel;
      
      return pigLatin;
    }    
    i++;
  }
}
