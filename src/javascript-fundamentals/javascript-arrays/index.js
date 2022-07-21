/**
 * **Get nth element of array**
 * is a function that takes an Array `a` and a value `n` as argument.
 *
 * @param {number[]} a is an Array of Numbers.
 * @param {number} n is an Number.
 * @returns {number} The nth element of `a`
 */

function getElementOfArray (a, n) {
  return a[n - 1]
}

/**
 * **Get first n elements of an array**
 * is a function that takes an Array `a` as argument
 * and extract the first 3 elements of `a`.
 *
 * @param {number[]} a is an Array of Numbers.
 * @returns {number[]} the first 3 elements of a.
 */

function getFirstsElementsOfArray (a) {
  return a.slice(0, 3)
}

/**
 * **Count number of elements in JavaScript array**
 * is a function that takes an array `a` as argument
 * and return the number of elements in `a`.
 *
 * @param {number[]} a is an Array.
 * @returns {number} the number of elements in `a`.
 */

function countNumberOfArray (a) {
  return a.length
}

/**
 * **Count number of negative values in array**
 * is a function that takes an array of numbers as argument.
 * Return the number of negative values in the Array.
 *
 * @param {number[]} a is an Array of Numbers
 * @returns {number} the number of negative values in the Array.
 */

function getNegativeNumberOfArray (a) {
  return a.filter((i) => i < 0).length
}

/**
 * **Remove first n elements of an array**
 * is a function that takes an array `a` as argument
 * and remove the first 3 elements of `a`.
 *
 * @param {number[]} a is an Array of Numbers.
 * @returns {number[]} the Array with the first 3 elements removed.
 */

function removeFirstElementsOfArray (a) {
  return a.slice(3)
}

/**
 * **Sort an array of strings alphabetically**
 * is a function that takes an `Array` of `Strings` as argument
 * and sort the Array elements alphabetically.
 *
 * Return the result.
 *
 * @param {string[]} arr is Array of Strings.
 * @returns {string[]} the Array elements alphabetically.
 */

function sortElementsAlphabetically (arr) {
  return arr.sort()
}

/**
 * **Get last n elements of an array**
 * is a function that takes an array `a` as argument
 * ans extract the last 3 elements of `a`.
 *
 * Return the resulting array.
 *
 * @param {number[]} a is an Array.
 * @returns {number[]} the Array with the last 3 elements extracted.
 */

function getLastElementOfArray (a) {
  return a.slice(-3)
}

/**
 * **Sort an array of numbers in descending order**
 * is a function that takes an `Array` of numbers as argument:
 * - it should return an array with the numbers sorted in descending order.
 *
 * @param {number[]} arr is an Array of Numbers.
 * @returns {number[]} The Array with the numbers sorted in descending order.
 */

function sortNumberInDescendingOrder (arr) {
  return arr.sort((a, b) => b - a)
}

/**
 * **Return last n array elements**
 * is a function that takes an Array `a` and a Number `n` as arguments.
 * It should return the last `n` elements of `a`
 *
 * @param {number[]} a is an Array of Numbers.
 * @param {Number} n is an Number.
 * @returns {number[]} the last n elements of Array.
 */

function getLastArrayElements (a, n) {
  return a.slice(-n)
}

/**
 * **Remove a specific array element**
 * is a function that takes an Array `a` and a value `b` as argument:
 * - The function should clean a from all occurrences of `b`.
 * - Return the filtered array.
 *
 * @param {Array<string | number | boolean>} a is an Array of Any.
 * @param {string | number | boolean} b is an String or Number or Boolean.
 * @returns {Array<string | number | boolean>} The filtered Array.
 */

function removeSpecificArrayElement (a, b) {
  return a.filter((i) => i !== b)
}

/**
 * **Return the average of an array of numbers**
 * is a function that takes an array of numbers as argument.
 * It should return the average of the numbers.
 *
 * @param {number[]} arr is an array of numbers.
 * @returns {number} the average of the numbers.
 */

function averageArrayOfNumbers (arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}

/**
 * **Return the longest string from an array of strings**
 * is a function that takes an array of strings as argument.
 * Return the longest string.

 * @param {string[]} arr is an array of strings.
 * @returns {string} the longest string;
 */

function longestStringOnArray (arr) {
  let longest = ''

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    if (element.length > longest.length) {
      longest = element
    }
  }

  return longest
  // Other solution: return arr.reduce((a, b) => a.length <= b.length ? b : a)
}

/**
 * **Create a range of numbers**
 * is a function that takes two numbers (`min` and `max`) as arguments.
 * Return an array of numbers in the range min to max.
 *
 * @param {number} min is an number.
 * @param {number} max is an number.
 * @returns {number[]} an array of numbers in the range min to max.
 */

function rangeOfNumbers (min, max) {
  const range = []

  for (let i = min; i <= max; i++) range.push(i)

  return range
}

/**
 * **Check if all array elements are equal**
 * is a function that takes an array as argument.
 * It should return true if all elements in the array are equal.
 * It should return false otherwise.
 *
 * @param {array} arr
 * @returns {boolean}
 */

/**
 * **Check if all array elements are equal**
 * is a function that takes an array as argument.
 * - It should return true
 *  if all elements in the array are equal.
 * - It should return false otherwise.
 *
 * @param {Array<string | number>} arr is an array of string or number.
 * @returns {boolean} if all elements in the array are equal.
 */

function checkAllElementsAreEqual (arr) {
  const arrUniq = new Set()

  arr.forEach(e => {
    arrUniq.add(e)
  })

  const result = [...arrUniq.values()]

  return !(result.length > 1)

  // Other solution: return new Set(arr).size === 1
}

/**
 * **Merge an arbitrary number of arrays**
 * is a function that takes arguments an arbitrary number of arrays.
 * It should return an array containing the values of all arrays.
 *
 * @param  {...any[]} arrays is an array of any.
 * @returns {array} the array containing the values of all arrays.
 */

function mergeArbitraryArrays (...arrays) {
  return arrays.reduce((a, b) => a.concat(b), [])

  /**
   * Others solutions
   *
   * **Array.prototype.flat()**
   *
   * The `flat()` method creates a new array with all sub-array elements concatenated into it recursively to the specified depth.
   *
   * example:
   * return arrays.flat()
   *
   * reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
   */
}

/**
 * **Calculate the sum of an array of numbers**
 * is a function that takes an array of numbers as argument.
 * It should return the sum of the numbers.
 *
 * @param {number[]} a is an array of numbers.
 * @returns {number} the sum of the numbers.
 */

function sumArrayNumbers (a) {
  return a.reduce((a, b) => a + b, 0)
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
  removeSpecificArrayElement,
  averageArrayOfNumbers,
  longestStringOnArray,
  rangeOfNumbers,
  checkAllElementsAreEqual,
  mergeArbitraryArrays,
  sumArrayNumbers
}
