function isPalindrome(x) {
    let word = x.toLowerCase()
    return word === word.split('').reverse().join('')
  }