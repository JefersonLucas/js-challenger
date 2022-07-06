/**
 * **Sum two numbers**
 * is a function that takes two numbers (`a` and `b`) as argument
 * and sum `a` and `b`.
 *
 * Return the result.
 *
 * @param {number} a is a number.
 * @param {number} b is a number.
 * @returns {number} the sum `a` and `b`.
 */

function sumTwoNumbers (a, b) {
  return a + b
}

/**
 * **Comparison operators, strict equality**
 * is a function that takes two values, say `a` and `b`, as arguments
 * and return `true` if the two values are equal and of the same type.
 *
 * @param {string | number} a is string or number.
 * @param {string | number} b is string or number.
 * @returns {boolean} `true` if the two values are equal and of the same type.
 */

function compareTypes (a, b) {
  return a === b
}

/**
 * **Get nth character of string**
 * is a function that takes a String `a` and a Number `n` as argument
 * and return the nth character of `a`.
 *
 * @param {string} a is an string.
 * @param {number} n is an number.
 * @returns {string} the nth character of `a`.
 */

function nthCharacter (a, n) {
  return a[n - 1]
}

/**
 * **Remove last n characters of string**
 * is a function that takes a String `a` as argument
 * and remove the last 3 characters of `a`.
 *
 * Return the result.
 *
 * @param {string} a is an string.
 * @returns {string} remove the last 3 characters of `a`.
 */

function removeLastCharacters (a) {
  return a.slice(0, -3)
}

/**
 * **Get type of value**
 * is a function that takes a value as argument.
 *
 * Return the type of the value.
 *
 * @param {any} a is any
 * @returns {any} the type of the value.
 */

function typeValue (a) {
  return typeof a
}

/**
 * **Get last n characters of string**
 * is a function that takes a string as argument
 * and extract the last 3 characters from the string.
 *
 * Return the result.
 *
 * @param {string} str is an string.
 * @returns {string} extract the last 3 characters from the string.
 */

function extractLastCharacters (str) {
  return str.slice(-3)
}

/**
 * **Extract first half of string**
 * is a function that takes a string `a` as argument
 * and extract the first half `a`.
 *
 * @param {string} a is a string.
 * @returns {string} the extract the first half `a`.
 */

function extractFirstHalf (a) {
  return a.slice(0, a.length / 2)
}

/**
 * **Get first n characters of string**
 * is a function that takes a string `a` as argument and g
 * get the first 3 characters of `a`.
 *
 * @param {string} a is a string.
 * @returns {string} the first 3 characters of `a`.
 */

function getFirstCharacters (a) {
  return a.slice(0, 3)
}

/**
 * **Remove first n characters of string**
 * is a function that takes a string `a` as argument
 * and remove the first 3 characters of `a`.
 *
 * @param {string} a is an string
 * @returns {string} the first 3 characters of `a`.
 */

function removeFirstCharacters (a) {
  return a.slice(3)
}

/**
 * **Multiplication, division, and comparison operators**
 * is a function that takes two numbers (`a` and `b`) as arguments
 * and if a is smaller than b, divide a by b
 * or otherwise, multiply both numbers.
 *
 * Return the resulting value.
 *
 * @param {number} a is a number.
 * @param {number} b is a number.
 * @returns {number} the resulting value.
 */

function operatorCompare (a, b) {
  return a < b ? a / b : a * b
}

/**
 * **Return the percentage of a number**
 * is a function that takes two numbers (`a` and `b`) as argument.
 *
 * Return `b` percent of `a`.
 *
 * @param {number} a is an number.
 * @param {number} b is an number.
 * @returns {number} the b percent of a.
 */

function percentageOfNumber (a, b) {
  return (a * b) / 100 // Other solution: return b / 100 * a
}

/**
 * **Basic JavaScript math operators**
 * is a function that takes 6 values (`a`,`b`,`c`,`d`,`e`,`f`) as arguments:
 * - Sum `a` and `b`;
 * - Then substract by `c`;
 * - Then multiply by `d` and divide by `e`;
 * - Finally raise to the power of `f` and return the result.
 *
 * @param {number} a is an number.
 * @param {number} b is an number.
 * @param {number} c is an number.
 * @param {number} d is an number.
 * @param {number} e is an number.
 * @param {number} f is an number.
 * @returns {number} the math operators.
 */

function mathOperators (a, b, c, d, e, f) {
  return ((((a + b) - c) * d) / e) ** f
}

/**
 * **Check if a number is even**
 * is a function that takes a number as argument
 * and if the number is even, return `true`
 * otherwise, return `false`.
 *
 * @param {number} a is an number.
 * @returns {boolean} the number is even.
 */

function checkNumberIsEven (a) {
  return a % 2 === 0
}

/**
 * **Check if a number is a whole number**
 * is a function that takes a number `a` as argument.
 * If a is a whole number (has no decimal place), return `true`
 * otherwise, return `false`.
 *
 * @param {number} a is a number.
 * @returns {boolean} if whole number nas no decimal plance.
 */

function checkIsWholeNumber (a) {
  return a.toString().indexOf('.') === -1 // Other solution: return a - Math.floor(a) === 0
}

/**
 * **How many times does a character occur?**
 * is a function that takes two strings (`a` and `b`) as arguments.
 *
 * Return the number of times `a` occurs in `b`.
 *
 * @param {string} a is an string.
 * @param {string} b is an string.
 * @returns {number} the times `a` occurs in `b`.
 */

function manyTimesCharacterOccur (a, b) {
  return b.split('').filter((i) => i === a).length // Other solution: return b.split(a).length - 1
}

/**
 * **Check whether a string contains another string and concatenate**
 * is a function that takes two strings (`a` and `b`) as arguments:
 * - If `a` contains `b`, append `b` to the beginning of `a`;
 * - If not, append it to the end;
 * - Return the concatenation.
 *
 * @param {string} a is an string.
 * @param {string} b is an string.
 * @returns {string} the string contatenated.
 */

function stringConcatenate (a, b) {
  return a.at(0) === ' ' | a.at(-1) === b ? `${b}${a}` : `${a}${b}`
  // Other solution:
  // return a.indexOf(b) === -1 ? a + b : b + a
}

/**
 * **Round a number to 2 decimal places**
 * is a function that takes a number `a` as argument:
 * - Round `a` to the 2nd digit after the comma
 * - Return the rounded number.
 *
 * @param {number} a The number as argument.
 * @returns {number} The rounded number.
 */

function roundNumberTwoDecimals (a) {
  return Number(a.toFixed(2))
}

/**
 * **Split a number into its digits**
 * is a function that takes a number `a` as argument.
 * Split a into its individual digits and return them in an array.
 *
 * @param {number} a is an number.
 * @returns {number[]} the individual digits returned in an array.
 */

function splitNumberIntoDigits (a) {
  return a.toString().split('').map((i) => Number(i))
}

/**
 * **Clear up the chaos behind these strings**
 * is a function that joins these strings together such that they form the following words:
 * - `'Javascript'`, `'Countryside'`, and `'Downtown'`.
 *
 * @param {string} a is an string.
 * @param {string} b is an string.
 * @returns {string} join the a with b.
 */

function joinStrings (a, b) {
  // Other solution:
  // const func = x => x.replace('%','');
  // const first = func(a);
  // const second = func(b).split('').reverse().join('');
  // return first.charAt(0).toUpperCase() + first.slice(1) + second;

  const first = a.replace('%', '')
  const second = b.replace('%', '').split('').reverse().join('').toString()
  const phrase = first + second

  return phrase[0].toUpperCase() + phrase.substring(1, phrase.length)
}

/**
 * **Find the correct word by incrementing letters in alphabet**
 * is a function that takes a string as argument.
 * As it is, the string has no meaning.
 * Increment each letter to the next letter in the alphabet
 * and return the correct word.
 *
 * @param {string} str is an string.
 * @returns {string} the correct word.
 */

function toCorrectWord (str) {
  /**
   * The String.fromCharCode() method
   * returns a string created to use a specific sequence of Unicode values.
   *
   * Using `fromCharCode()`
   * The following example returns the string "ABC".
   *
   * `String.fromCharCode(65, 66, 67);`  // return "ABC"
   *
   * reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
   */

  /**
   * String.prototype.charCodeAt()
   * The `charCodeAt()` method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
   *
   * Using charCodeAt()
   * The following example returns 65, the Unicode value for A.
   *
   * 'ABC'.charCodeAt(0); // returns 65
   *
   * refecence: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
   */

  return str.split('').map((i) => String.fromCharCode(i.charCodeAt() + 1)).join('')
}

/**
 * **Insert character after every n characters (backwards)**
 * is a function that takes two strings (`a` and `b`) as arguments.
 * Beginning at the end of `a`, insert `b` after every 3rd character of `a`
 * and return the resulting string.
 *
 * @param {string} a is an string.
 * @param {string} b is an string.
 * @returns {string} the resulting string.
 */

function insertCharacter (a, b) {
  let phrase = a // A copy of the `a` argument

  const array = [] // This array will be used to receive elements

  while (phrase.length) {
    array.push(phrase.slice(-3)) // Take the last 3 elements and add them to the array
    phrase = phrase.slice(0, -3) // Remove the last 3 items
  }

  return array.reverse().join(b) // Invert the array and add the value of b between the elements
}

module.exports = {
  sumTwoNumbers,
  compareTypes,
  nthCharacter,
  removeLastCharacters,
  typeValue,
  extractLastCharacters,
  extractFirstHalf,
  getFirstCharacters,
  removeFirstCharacters,
  operatorCompare,
  percentageOfNumber,
  mathOperators,
  checkNumberIsEven,
  checkIsWholeNumber,
  manyTimesCharacterOccur,
  stringConcatenate,
  roundNumberTwoDecimals,
  splitNumberIntoDigits,
  joinStrings,
  toCorrectWord,
  insertCharacter
}
