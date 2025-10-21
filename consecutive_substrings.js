function consecutiveSubstrings(string) {
  let result = []

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      let sub = string.substring(i, j + 1);
      result.push(sub)
    }
  }
  return result;
}

console.log(consecutiveSubstrings("abc"))


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


