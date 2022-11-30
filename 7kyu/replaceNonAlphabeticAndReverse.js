function reverseLetter(str) {
    //replace all non alphabetic chars with empty string
    //^ means negation in regexp
    let strArr = str.replace(/[^a-z]/gi,'').split('').reverse().join('')
  
    return strArr
    
  }
  
  