// function XO(str) {
//     //code here
//   let countX = 0
//   let countO = 0
//   let word = str.toLowerCase()
//   for(let i = 0; i < word.length; i++){
    
//     if(word[i] === "x"){
//       countX++
//     }else if(word[i] == "o"){
//       countO++
//     }
//   }
//   return countX === countO
// }

function XO(str) {
  let x = str.match(/x/gi); // returns an Array
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}