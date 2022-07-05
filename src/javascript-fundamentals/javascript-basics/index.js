/** **Sum two numbers**
 * is a function that takes two numbers (`a` and `b`) as argument
 * and sum `a` and `b`.
 *
 * Return the result.
 *
 * @param {*} a is a number
 * @param {*} b is a number
 * @returns number
 */

function sumTwoNumbers (a, b) {
  return a + b
}

/** **Comparison operators, strict equality**
 * is a function that takes two values, say `a` and `b`, as arguments
 * and return `true` if the two values are equal and of the same type.
 *
 * @param {*} a is string | number
 * @param {*} b is string | number
 * @returns boolean
 */

function compareTypes (a, b) {
  return a === b
}

/** **Get nth character of string**
 * is a function that takes a String `a` and a Number `n` as argument
 * and return the nth character of `a`.
 *
 * @param {*} a is an string
 * @param {*} n is an number
 * @returns string
 */

function nthCharacter (a, n) {
  return a[n - 1]
}

/** **Remove last n characters of string**
 * is a function that takes a String `a` as argument
 * and remove the last 3 characters of `a`.
 *
 * Return the result.
 *
 * @param {*} a is an string
 * @returns string
 */

function removeLastCharacters (a) {
  return a.slice(0, -3)
}

/** **Get type of value**
 * is a function that takes a value as argument.
 *
 * Return the type of the value.
 *
 * @param {*} a is any
 * @returns any
 */

function typeValue (a) {
  return typeof a
}

/** **Get last n characters of string**
 * is a function that takes a string as argument
 * and extract the last 3 characters from the string.
 *
 * Return the result.
 *
 * @param {*} str is an string
 * @returns string
 */

function extractLastCharacters (str) {
  return str.slice(-3)
}

/** **Extract first half of string**
 * is a function that takes a string `a` as argument
 * and extract the first half `a`.
 *
 * @param {*} a is a string
 * @returns string
 */

function extractFirstHalf (a) {
  return a.slice(0, a.length / 2)
}

/** **Get first n characters of string**
 * is a function that takes a string `a` as argument and g
 * get the first 3 characters of `a`.
 *
 * @param {*} a is a string
 * @returns string
 */

function getFirstCharacters (a) {
  return a.slice(0, 3)
}

/** **Remove first n characters of string**
 * is a function that takes a string `a` as argument
 * and remove the first 3 characters of `a`.
 *
 * @param {*} a is an string
 * @returns string
 */

function removeFirstCharacters (a) {
  return a.slice(3)
}

/** **Multiplication, division, and comparison operators**
 * is a function that takes two numbers (`a` and `b`) as arguments
 * and if a is smaller than b, divide a by b
 * or otherwise, multiply both numbers.
 *
 * Return the resulting value.
 *
 * @param {*} a is a number
 * @param {*} b is a number
 * @returns number
 */

function operatorCompare (a, b) {
  return a < b ? a / b : a * b
}

/** **Return the percentage of a number**
 * is a function that takes two numbers (`a` and `b`) as argument.
 *
 * Return `b` percent of `a`.
 *
 * @param {*} a is a number
 * @param {*} b is a number
 * @returns number
 */

function percentageOfNumber (a, b) {
  return (a * b) / 100 // Other solution: return b / 100 * a
}

/** **Basic JavaScript math operators**
 * is a function that takes 6 values (`a`,`b`,`c`,`d`,`e`,`f`) as arguments.
 * - Sum `a` and `b`;
 * - Then substract by `c`;
 * - Then multiply by `d` and divide by `e`;
 * - Finally raise to the power of `f` and return the result;
 *
 * @param {*} a is a number
 * @param {*} b is a number
 * @param {*} c is a number
 * @param {*} d is a number
 * @param {*} e is a number
 * @param {*} f is a number
 * @returns number
 */

function mathOperators (a, b, c, d, e, f) {
  return ((((a + b) - c) * d) / e) ** f
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
  mathOperators
}
