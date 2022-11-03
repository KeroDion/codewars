function twoSum(numbers, target) {
    //tupel for solution
    let tupel = []
    //2 loop, sum of i and j gets compared to target
    //i loops from start to end
    for(let i = 0;i < numbers.length; i++){
      //j loops from end to start
      for(let j = numbers.length - 1; j >= 0; j--){
        //if sum of i and j equal target, add index of i,j to tupel
        if(numbers[i] + numbers[j] === target){
         tupel[0] = i
        tupel[1] = j
      }
      
    }
  }
    //returning the tupel when finished, return the indexis of the 2 elements
    return tupel
  }