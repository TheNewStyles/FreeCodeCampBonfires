function sumPrimes(num) {
 var sum = 0; 
  
 for(var i=2; i<=num; i++){
   if(i!=2 && i%2===0){
     //not prime
   }else if(i!=3 && i%3===0){
     //not prime
   }else if(i!=5 && i%5===0){
     //not prime
   }else if(i!=7 && i%7===0){
     //not prime
   }else if(i!=11 && i%11===0){
     //not prime
   }else if(i!=13 && i%13===0){
     //not prime
   }else if(i!=17 && i%17===0){
     //not prime
   }else if(i!=19 && i%19===0){
     //not prime
   }else if(i!=23 && i%23===0){
     //not prime
   }else if(i!=29 && i%29===0){
     //not prime
   }else if(i!=31 && i%31===0){
     //not prime
   }else{     
     sum += i;
   }
 }  
  return sum;
}
