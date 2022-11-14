function high(x){
    // splitting string into an array of single words
    const words = x.split(' ');
    // creating an array with the length of words array, filled with 0 from the start
    const num = Array(words.length).fill(0);
    //iterate through words array to calculate score of single word
    for (let i = 0; i < words.length; ++i) {
      //binding single word to a new variable, now we can work with it without chaning original array
      const word = words[i];
      //Work through the letters of the single word and sum up the score into the num[i] place of the num array
      for (let j = 0; j < word.length; ++j) {
        //returns the decimal number from every letter in the word.
        // char 'a' starts with decimal number 97, so - 96 to have correct point system
        num[i] += word.charCodeAt(j) - 96;
      }
    }
    //get index of highest score from the num array
    let highestScore = num.indexOf(Math.max(...num))
    //returning the word with the highest score, using the index of num array. 
    //The index with the highest score in num is the same index with the highest word in words array
    return words[highestScore]
  }
  
    
  
  