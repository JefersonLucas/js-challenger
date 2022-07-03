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

module.exports = { getElementOfArray }
