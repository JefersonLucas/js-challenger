/** **Check if value is present in Set**
 * is a function that takes a `Set` and a value as arguments
 * and check if the value is present in the `Set`.
 *
 * @param {*} set is an Set
 * @param {*} val is an string
 * @returns boolean
 */
function checkValueInSet (set, val) {
  return set.has(val)
}

/** **Convert a Set to Array**
 * is a function that takes a `Set` as argument
 * and convert the `Set` to an `Array`.
 *
 * Return the Array.
 *
 * @param {*} set is an Set
 * @returns Array
 */
function convertSetToArray (set) {
  return [...set]
}

module.exports = {
  checkValueInSet,
  convertSetToArray
}
