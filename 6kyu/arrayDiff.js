function array_diff(a, b) {
    return a.filter(element => !b.includes(element));
  }