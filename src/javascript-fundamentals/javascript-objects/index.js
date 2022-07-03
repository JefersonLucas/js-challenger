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

module.exports = {
  propertyKeyCountry,
  createObjectOne
}
