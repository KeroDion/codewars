function isPangram(string){
    // character set capturing group with negative lookahead
      let regex = /([a-z])(?!.*\1)/gi;
      return (string.match(regex)).length === 26;
    }