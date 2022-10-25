function descendingOrder(n){
     //one variable for the number
     // convert number into string, then into array
    let sortedNumber = String(n)
    sortedNumber = sortedNumber.split('')
    //sort the array in descending order
    sortedNumber = sortedNumber.sort( (a,b) => b - a ).join('')
    //return variable as number again
    return Number(sortedNumber)
  }
  
//   //alternative with parseInt
//   function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }