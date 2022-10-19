function duplicateEncode(word){
  let smallWord = word.toLowerCase()
  smallWord = smallWord.split('')
  return smallWord.map( (x,i,array) => array.indexOf(x) === array.lastIndexOf(x) ? "(" : ")").join('')
}
