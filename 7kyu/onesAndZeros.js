const binaryArrayToNumber = arr => {
  let sumInt = 0
  for(let i = 0; i < arr.length; i++){
    arr[i] === 0 ? sumInt += 0 : sumInt += 2 ** (arr.length - 1 - i)
    
  }
  return sumInt
};