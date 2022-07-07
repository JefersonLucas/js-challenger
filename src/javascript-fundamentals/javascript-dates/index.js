// Global time values
const MILLISECONDS = 1000
const MINUTES = 60
const SECONDS = 60
const HOURS = 24

/**
 * **Check if one date is earlier than another**
 * is a function that takes two date instances (`a` and `b`) as arguments
 * and It should return `true` if `a` is earlier than `b`
 * otherwise it should return `false`.
 *
 * @param {Date} a is an Date
 * @param {Date} b is an Date
 * @returns {boolean} if the date a earlier the date b.
 */

function checkDate (a, b) {
  return a.getMinutes() < b.getMinutes() // Other solution: return a < b
}

/**
 * **Check if two dates are equal**
 * is a function that takes two date instances as arguments:
 * - It should return true if the dates are equal.
 * - It should return false otherwise
 *
 * @param {Date} a is an Date
 * @param {Date} b is an Date
 * @returns {boolean} if the dates are equal.
 */

function checkDatesAreEqual (a, b) {
  return (a.getFullYear() === b.getFullYear()) && (a.getMinutes() === b.getMinutes())
  // Other solution: return a.getTime() === b.getTime()
}

/**
 * **Return the number of days between two dates**
 * is a function that takes two date instances as argument.
 * It should return the number of days that lies between those dates.
 *
 * @param {Date} a is an Date.
 * @param {Date} b is an Date.
 * @returns {number} the number of days that lies between those dates.
 */

function differenceInDays (a, b) {
  // The method `Math.abs(a - b)` returns the absolute time value of the two dates.
  return Math.abs(a - b) / MILLISECONDS / MINUTES / SECONDS / HOURS
}

module.exports = {
  checkDate,
  checkDatesAreEqual,
  differenceInDays
}
