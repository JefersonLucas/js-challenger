/** **Get nth element of array**
 * is a function that takes an array (a) and a value (n) as argument
 *
 * @param {*} a as Array
 * @param {*} n as ntn
 * @returns the nth element of 'a'
 */

function getElementOfArray (a, n) {
  return a[n - 1]
}

/** **Get first n elements of an array**
 * is a function that takes an array `a` as argument
 * and extract the first 3 elements of `a`
 *
 * @param {*} a is an array
 * @returns the first 3 elements of `a`
 */

function getFirstsElementsOfArray (a) {
  return a.slice(0, 3)
}

module.exports = {
  getElementOfArray,
  getFirstsElementsOfArray
}
