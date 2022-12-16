function XO(str) {
    //code here
  let countX = 0
  let countO = 0
  let word = str.toLowerCase()
  for(let i = 0; i < word.length; i++){
    
    if(word[i] === "x"){
      countX++
    }else if(word[i] == "o"){
      countO++
    }
  }
  return countX === countO
}