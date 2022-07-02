/** Sum two numbers
 * Write a function that takes two numbers (a and b) as argument
 * Sum a and b
 * Return the result
 */

function sumTwoNumbers (a, b) {
  return a + b
}

/** Comparison operators, strict equality
 * Write a function that takes two values, say a and b, as arguments
 * Return true if the two values are equal and of the same type
 */

function compareTypes (a, b) {
  return a === b
}

/** Get nth character of string
 * Write a function that takes a string (a) and a number (n) as argument
 * Return the nth character of 'a'
*/

function nthCharacter (a, n) {
  return a[n - 1]
}

/** Remove last n characters of string
 * Write a function that takes a string (a) as argument
 * Remove the last 3 characters of a
 * Return the result
 */

function removeLastCharacters (a) {
  return a.slice(0, -3)
}

module.exports = {
  sumTwoNumbers,
  compareTypes,
  nthCharacter,
  removeLastCharacters
}
