function factorialize(num) {
  factorial = 1;
  
  for(i=1; i<=num; i++){
    factorial *= i;
  }
  
  return factorial;
}
