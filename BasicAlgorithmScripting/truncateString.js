function truncateString(str, num) {  
  var ellipsis = '...';
  var slicedStr = '';
  
  if(num >= str.length){
    slicedStr = str;
  }else if(num > 3){
    slicedStr = str.slice(0, num-3) + ellipsis;
  }else{
    slicedStr = str.slice(0, num) + ellipsis;
  }  
  
  return slicedStr;
}
