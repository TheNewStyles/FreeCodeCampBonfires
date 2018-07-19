function checkCashRegister(price, cash, cid) {
  var changeDue = cash-price;
  var hundredsArr=[], twentyArr=[], tensArr=[], 
      fivesArr=[], onesArr=[], quartersArr=[], 
      dimesArr=[], nickelsArr=[], penniesArr=[], 
      changeDueArr=[]; 
  var totalChangeInDrawer = getTotalCID(); 

  if(totalChangeInDrawer === changeDue){
     return "Closed";
  }  
  if(totalChangeInDrawer < changeDue){
    return "Insufficient Funds";
  }      

  //HUNDRED
  if(changeDue >= 100){ 
    changeDue = getNewChange(changeDue, cid, 8, hundredsArr, 100.00);
  }
  //TWENTY
  if(changeDue >= 20){
    changeDue = getNewChange(changeDue, cid, 7, twentyArr, 20.00);
  }
  //TENS
  if(changeDue >= 10){
    changeDue = getNewChange(changeDue, cid, 6, tensArr, 10.00);
  }
  //FIVES
  if(changeDue >= 5){
    changeDue = getNewChange(changeDue, cid, 5, fivesArr, 5.00);
  }
  //ONES
  if(changeDue >= 1){
    changeDue = getNewChange(changeDue, cid, 4, onesArr, 1.00);
  }
  //QUARTERS
  if(changeDue >= 0.25){
    changeDue = getNewChange(changeDue, cid, 3, quartersArr, 0.25);
  }
  //DIMES
  if(changeDue >= 0.10){
    changeDue = getNewChange(changeDue, cid, 2, dimesArr, 0.10);
  }
  //NICKELS
  if(changeDue >= 0.05){
    changeDue = getNewChange(changeDue, cid, 1, nickelsArr, 0.05);
  }
  //PENNIES
  if(changeDue >= 0.01){    
    changeDue = getNewChange(changeDue, cid, 0, penniesArr, 0.01);
  }
  
  var changeDueArrTotal =  arraySum(changeDueArr);
  if(changeDue > changeDueArrTotal){
    return "Insufficient Funds";
  } 
  
  function getNewChange(change, cid, denomIndex, denomArr, denom){
    var cashPerDenom = getDenominationValue(cid, denomIndex);
    var cashPerDenomMax = getDenominationValue(cid, denomIndex);

    for(var i=0; i<=change; i+=denom){
      if(i <= cashPerDenomMax){
        cashPerDenom = i;
      }      
    } 
    
    var total = Math.round((change - cashPerDenom)*100)/100;    
    var denomName = getDenominationName(cid, denomIndex);      
    denomArr.push(denomName, cashPerDenom);    
    changeDueArr.push(denomArr);
    
    return total;
  }  
  
  function arraySum(i) {
      var sum=0; // missing var added
      for(var a=0;a<i.length;a++){ // missing var added
          if(typeof i[a]=="number"){
              sum+=i[a];
          }else if(i[a] instanceof Array){
              sum+=arraySum(i[a]);
          }
      }
      return sum;
  }
  
  function getDenominationValue(cid, coinIndex){
    var total = cid[coinIndex][1];
          
    return total;
  }  
  
  function getDenominationName(cid, coinIndex){
    var coinName = cid[coinIndex][0];
          
    return coinName;
  }
   
  function getTotalCID(){
    var pennies = getDenominationValue(cid, 0);
    var nickels = getDenominationValue(cid, 1);
    var dimes = getDenominationValue(cid, 2);
    var quarters = getDenominationValue(cid, 3);
    var oneDollars = getDenominationValue(cid, 4);
    var fiveDollars = getDenominationValue(cid, 5);
    var tenDollars = getDenominationValue(cid, 6);
    var twentyDollars = getDenominationValue(cid, 7);
    var hundredDollars = getDenominationValue(cid, 8);
    
    var totalChangeInDrawer = Math.round((pennies+nickels+dimes+quarters+oneDollars+fiveDollars+tenDollars+twentyDollars+hundredDollars) * 100)/100;
    
    return totalChangeInDrawer;    
  }
  
  console.log('\n');
  return changeDueArr; 
}
