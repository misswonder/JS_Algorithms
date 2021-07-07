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

// Valid Palindrome
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
var isPalindrome = function (s) {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    let start = str[i];
    let end = str[str.length - 1 - i];
    if (start !== end) {
      return false;
    }
  }
  return true;
};

// Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
var isValid = function (s) {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    let start = str[i];
    let end = str[str.length - 1 - i];
    if (start !== end) {
      return false;
    }
  }
  return true;
};

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

// Using stack and hashmap
var isValid = function (s) {
  var temp = [];
  var map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") temp.push(s[i]);
    else if (map[temp.pop()] !== s[i]) {
      return false;
    }
  }

  if (temp.length > 0) return false;
  else return true;
};

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
