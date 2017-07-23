function permAlone(str) {
  var array = str.split('');
  var perms = [];
  var counter = 0;
  var i=0;
  
  generate(array, console.log ,array.length);  
  
  while(i<perms.length){
    console.log("looping ", perms[i]);
    var repeats = hasRepeatedLetters(perms[i]);
    console.log(repeats);
    if(repeats === true){
      console.log("has repeating letters");
    }else{
      counter++;
    }
    i++;
  }
  
  //heaps algorithm
  function generate(array, output, n) {
  n = n || array.length; 
  var j;
  
  if (n === 1) {
      perms.push(array.join(''));
    } else {
      for (var i = 1; i <= n; i += 1) {
        generate(array, output, n - 1);
        if (n % 2) {
          j = 1;
        } else {
          j = i;
        }
        swap(j - 1, n - 1); 
      }
    }
  }
  
  function swap(a, b){
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
    return tmp;
  }     
  
  function hasRepeatedLetters(str) {
    var repeats = /(.)\1/;
    return repeats.test(str);
  }  

  return counter;
}
