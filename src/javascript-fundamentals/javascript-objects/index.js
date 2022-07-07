/**
 * **Accessing object properties one**
 * is a function that takes an object with two properties as argument
 * it should return the value of the property with key country.
 *
 * @param {object} obj is an object.
 * @returns {string} the value of the property with key country.
 */

function propertyKeyCountry (obj) {
  return obj.country
}

/**
 * **Creating Javascript objects one**
 * is a function that a string `a` as argument and
 * create an object that has a property with key 'key' and a value of `a`.

 * @param {object} a is a object.
 * @returns {object} the property with key 'key' and a value of `a`.
 */

function createObjectOne (a) {
  return { key: a }
}

/**
 * **Accessing object properties three**
 * is a function that takes an object with two properties and a string as arguments.
 *
 * Return the value of the property with key equal to the value of the string.
 *
 * @param {object} obj is an object.
 * @param {string} key is a string.
 * @returns {string} value of the property with key equal to the value of the string.
 */

function accessingObjByPropertie (obj, key) {
  return obj[key]
}

/**
 * **Check if property exists in object**
 * is a function that takes an object `a` and a string `b` as argument.
 *
 * Return true if a has `a` property with key `b`
 * and return false otherwise.
 *
 * @param {object} a is an object
 * @param {string} b is an string
 * @returns {boolean} true if a has `a` property with key `b` and return false otherwise.
 */

function checkPropertyExists (a, b) {
  return !!a[b] // another possible solution: `b in a`
}

/**
 * **Creating Javascript objects two**
 * is a function that takes two strings (`a` and `b`) as arguments
 * and create an object that has a property with key `a` and a value of `b`.
 *
 * Return the object.
 *
 * @param {string} a is an string.
 * @param {string} b is an string.
 * @returns {object} the object.
 */

function createObjects (a, b) {
  return { [a]: b }
}

/**
 * **Extract keys from Javascript object**
 * is a function that takes an object `a` as argument
 * and return an array with all object keys.
 *
 * @param {object} a is a Object.
 * @returns {string[]} an array with all object keys.
 */

function extractKeysFromObject (a) {
  return Object.keys(a)
}

/**
 * **Sum object values**
 * is a function that takes an object `a` as argument
 * and return the sum of all object values.
 *
 * @param {object} a is an Object.
 * @returns {number} the sum of all object values.
 */
function sumObjectValues (a) {
  return Object.values(a).reduce((a, b) => a + b, 0)
}

/**
 * **Accessing object properties two**
 * is a function that takes an object with two properties as argument.
 * It should return the value of the property with key `'prop-2'`
 *
 * @param {object} obj is an object
 * @returns {any} the value of the property with key `'prop-2'`.
 */

function accessObjectProperty (obj) {
  return obj['prop-2']
}

/**
 * **Remove a property from an object**
 * is a function that takes an object as argument.
 * It should return an object with all original object properties
 * except for the property with key `b`.
 *
 * @param {object} obj is object
 * @returns {object} an object with all original object properties except for the property with key `b`.
 */

function removePropertyObject (obj) {
  // Other solution:
  // const { b, ...rest } = obj;
  // return rest;

  const object = delete obj.b
  return obj.b ? object : obj
}

/**
 * **Merge two objects with matching keys**
 * is a function that takes two objects as arguments.
 * Unfortunately, the property `b` in the second object has the wrong key,
 * it should be named `d` instead
 * merge both objects and correct the wrong property name.
 * It should have the properties `a`, `b`, `c`, `d`, and `e`
 *
 * Return the resulting object.
 *
 * @param {object} x is an object
 * @param {object} y is an object
 * @returns {object} the resulting object.
 */

function mergeObjects (x, y) {
  const { b, ...newY } = y

  return { ...x, ...newY, d: b }
}

/**
 * **Multiply all object values by x**
 * is a function that takes an object (a) and a number (b) as arguments
 * Multiply all values of `a` by `b`
 * Return the resulting object
 *
 * @param {object} a is an object.
 * @param {number} b is an number.
 * @returns {object} the object multiply all values of `a` by `b`.
 */

function multiplyObjectValues (a, b) {
  return Object.entries(a).reduce((acc, [key, value]) => {
    return { ...acc, [key]: value * b }
  }, {})
}

module.exports = {
  propertyKeyCountry,
  createObjectOne,
  accessingObjByPropertie,
  checkPropertyExists,
  createObjects,
  extractKeysFromObject,
  sumObjectValues,
  accessObjectProperty,
  removePropertyObject,
  mergeObjects,
  multiplyObjectValues
}
