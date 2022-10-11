function squareDigits(num){
    let numArr = String(num)
    numArr = numArr.split('')
    numArr = numArr.map( digit => digit ** 2)
    return Number(numArr.join('') )
    
  
  }