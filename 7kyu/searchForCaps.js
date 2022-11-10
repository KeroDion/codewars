var capitals = function (word) {
	let words = word.split('')
  let arr = []
  for(let i = 0; i < words.length; i++){
    if( words[i] === words[i].toUpperCase() ){
     arr.push(i)
    }
  }
  return arr
};