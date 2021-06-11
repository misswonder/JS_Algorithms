// isPalindrome Solution
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function isPalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const lowerCasedStr = str.toLowerCase();
  for (let i = 0; i < lowerCasedStr.length; i++) {
    if (lowerCasedStr[i] !== lowerCasedStr[[lowerCasedStr.length - 1 - i]]) {
      return false;
    }
  }
  return true;
}
