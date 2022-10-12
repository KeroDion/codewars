function clean_string(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }