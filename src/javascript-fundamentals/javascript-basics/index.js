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

module.exports = { sumTwoNumbers, compareTypes }
