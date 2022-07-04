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

/** **Count number of elements in JavaScript array**
 * is a function that takes an array `a` as argument
 * and return the number of elements in a
 *
 * @param {*} a is an array
 * @returns the number of elements in `a`
 */

function countNumberOfArray (a) {
  return a.length
}

/** **Count number of negative values in array**
 * is a function that takes an array of numbers as argument
 *
 * @param {*} a is an array
 * @returns the number of negative values in the array
 */

function getNegativeNumberOfArray (a) {
  return a.filter((i) => i < 0).length
}

/** **Remove first n elements of an array**
 * is a function that takes an array `a` as argument
 * and remove the first 3 elements of `a`
 *
 * @param {*} a
 * @returns the result
 */

function removeFirstElementsOfArray (a) {
  return a.slice(3)
}

/** **Sort an array of strings alphabetically**
 * is a function that takes an array of strings as argument
 * and sort the array elements alphabetically
 *
 * Return the result.
 *
 * @param {*} arr is array
 * @returns array
 */

function sortElementsAlphabetically (arr) {
  return arr.sort()
}

/** **Get last n elements of an array**
 * is a function that takes an array `a` as argument
 * ans extract the last 3 elements of `a`.
 *
 * Return the resulting array.
 *
 * @param {*} a is an array
 * @returns array
 */

function getLastElementOfArray (a) {
  return a.slice(-3)
}

module.exports = {
  getElementOfArray,
  getFirstsElementsOfArray,
  countNumberOfArray,
  getNegativeNumberOfArray,
  removeFirstElementsOfArray,
  sortElementsAlphabetically,
  getLastElementOfArray
}
