/** **Get nth element of array**
 * is a function that takes an Array `a` and a value `n` as argument.
 *
 * @param {*} a is an Array
 * @param {*} n is an Number
 * @returns number
 */

function getElementOfArray (a, n) {
  return a[n - 1]
}

/** **Get first n elements of an array**
 * is a function that takes an Array `a` as argument
 * and extract the first 3 elements of `a`.
 *
 * @param {*} a is an array
 * @returns number[]
 */

function getFirstsElementsOfArray (a) {
  return a.slice(0, 3)
}

/** **Count number of elements in JavaScript array**
 * is a function that takes an array `a` as argument
 * and return the number of elements in a.
 *
 * @param {*} a is an array
 * @returns number
 */

function countNumberOfArray (a) {
  return a.length
}

/** **Count number of negative values in array**
 * is a function that takes an array of numbers as argument.
 *
 * Return the number of negative values in the Array.
 *
 * @param {*} a is an Array
 * @returns number
 */

function getNegativeNumberOfArray (a) {
  return a.filter((i) => i < 0).length
}

/** **Remove first n elements of an array**
 * is a function that takes an array `a` as argument
 * and remove the first 3 elements of `a`.
 *
 * @param {*} a
 * @returns number[]
 */

function removeFirstElementsOfArray (a) {
  return a.slice(3)
}

/** **Sort an array of strings alphabetically**
 * is a function that takes an Array of Strings as argument
 * and sort the Array elements alphabetically.
 *
 * Return the result.
 *
 * @param {*} arr is Array
 * @returns string[]
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
 * @param {*} a is an Array
 * @returns number[]
 */

function getLastElementOfArray (a) {
  return a.slice(-3)
}

/** **Sort an array of numbers in descending order**
 * is a function that takes an array of numbers as argument
 * it should return an array with the numbers sorted in descending order.
 *
 * @param {*} arr is an Array
 * @returns number[]
 */

function sortNumberInDescendingOrder (arr) {
  return arr.sort((a, b) => b - a)
}

/** **Return last n array elements**
 * is a function that takes an Array `a` and a Number `n` as arguments.
 * It should return the last `n` elements of `a`
 *
 * @param {*} a is an Array
 * @param {*} n is an Number
 * @returns number[]
 */

function getLastArrayElements (a, n) {
  return a.slice(-n)
}

/** **Remove a specific array element**
 * is a function that takes an Array `a` and a value `b` as argument.
 * The function should clean a from all occurrences of `b`.
 *
 * Return the filtered array.
 *
 * @param {*} a is an array
 * @param {*} b is any
 * @returns any[]
 */

function removeSpecificArrayElement (a, b) {
  return a.filter((i) => i !== b)
}

module.exports = {
  getElementOfArray,
  getFirstsElementsOfArray,
  countNumberOfArray,
  getNegativeNumberOfArray,
  removeFirstElementsOfArray,
  sortElementsAlphabetically,
  getLastElementOfArray,
  sortNumberInDescendingOrder,
  getLastArrayElements,
  removeSpecificArrayElement
}
