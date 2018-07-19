function slasher(arr, howMany) {
  var slicedArr = [];
  slicedArr = arr.slice(howMany,arr.length);
  
  return slicedArr;
}

slasher([1, 2, 3], 2);
