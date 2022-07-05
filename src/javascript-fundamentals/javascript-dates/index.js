/** **Check if one date is earlier than another**
 * is a function that takes two date instances (`a` and `b`) as arguments
 * and It should return `true` if `a` is earlier than `b`
 * otherwise it should return `false`.
 *
 * @param {*} a is an Date
 * @param {*} b is an Date
 * @returns boolean
 */

function checkDate (a, b) {
  return a.getMinutes() < b.getMinutes() // Other solution: return a < b
}

/** **Check if two dates are equal**
 * is a function that takes two date instances as arguments:
 * - It should return true if the dates are equal.
 * - It should return false otherwise
 *
 * @param {*} a is an Date
 * @param {*} b is an Date
 * @returns boolean
 */

function checkDatesAreEqual (a, b) {
  return (a.getFullYear() === b.getFullYear()) && (a.getMinutes() === b.getMinutes()) // Other solution: return a.getTime() === b.getTime()
}

module.exports = {
  checkDate,
  checkDatesAreEqual
}
