/** Accessing object properties one
 * Write a function that takes an object with two properties as argument
 * It should return the value of the property with key country
 */

function propertyKeyCountry (obj) {
  return obj.country
}

/** **Creating Javascript objects one**
 * is a function that a string `a` as argument and
 * create an object that has a property with key 'key' and a value of `a`

 * @param {*} a is a object
 * @returns the object
 */

function createObjectOne (a) {
  return { key: a }
}

/** **Accessing object properties three**
 * is a function that takes an object with two properties and a string as arguments
 *
 * @param {*} obj is an object
 * @param {*} key is a string argument
 * @returns the value of the property with key equal to the value of the string
 */

function accessingObjByPropertie (obj, key) {
  return obj[key]
}

/** **Check if property exists in object**
 * is a function that takes an object `a` and a string `b` as argument.
 * Return true if a has `a` property with key `b`
 * and return false otherwise.
 *
 * @param {*} a is an object
 * @param {*} b is an string
 * @returns boolean
 */

function checkPropertyExists (a, b) {
  return !!a[b] // another possible solution: `b in a`
}

/** **Creating Javascript objects two**
 *  is a function that takes two strings (`a` and `b`) as arguments
 * and create an object that has a property with key `a` and a value of `b`.
 *
 * Return the object
 *
 * @param {*} a is an string
 * @param {*} b is an string
 * @returns object
 */

function createObjects (a, b) {
  return { [a]: b }
}

/** **Extract keys from Javascript object**
 * is a function that takes an object `a` as argument
 * and return an array with all object keys.
 *
 * @param {*} a is a Object
 * @returns string[]
 */

function extractKeysFromObject (a) {
  return Object.keys(a)
}

module.exports = {
  propertyKeyCountry,
  createObjectOne,
  accessingObjByPropertie,
  checkPropertyExists,
  createObjects,
  extractKeysFromObject
}
