const {
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
  multiplyObjectValues,
  createObjectThree,
  swapObject,
  replaceEmptyValues,
  checkProperty,
  addPropertyToEachObject,
  convertArrayToObjectWithCounter
} = require('./')

describe('Javascript Objects', () => {
  test('should return the value of the property with key country', () => {
    expect(propertyKeyCountry({ continent: 'Asia', country: 'Japan' })).toBe('Japan')
    expect(propertyKeyCountry({ country: 'Sweden', continent: 'Europe' })).toBe('Sweden')
  })

  test('must create an object as a property', () => {
    expect(createObjectOne('a')).toStrictEqual({ key: 'a' })
    expect(createObjectOne('z')).toStrictEqual({ key: 'z' })
    expect(createObjectOne('b')).toStrictEqual({ key: 'b' })
  })

  test('must return the value of the property with key equal to the value of the string', () => {
    expect(accessingObjByPropertie({ continent: 'Asia', country: 'Japan' }, 'continent')).toBe('Asia')
    expect(accessingObjByPropertie({ country: 'Sweden', continent: 'Europe' }, 'country')).toBe('Sweden')
  })

  test('must check if property exists in object', () => {
    expect(checkPropertyExists({ a: 1, b: 2, c: 3 }, 'b')).toBe(true)
    expect(checkPropertyExists({ x: 'a', y: 'b', z: 'c' }, 'a')).toBe(false)
    expect(checkPropertyExists({ x: 'a', y: 'b', z: 'c' }, 'z')).toBe(true)
  })

  test('must creating obejects two', () => {
    expect(createObjects('a', 'b')).toStrictEqual({ a: 'b' })
    expect(createObjects('z', 'x')).toStrictEqual({ z: 'x' })
    expect(createObjects('b', 'w')).toStrictEqual({ b: 'w' })
  })

  test('must return an array with all object keys', () => {
    expect(extractKeysFromObject({ a: 1, b: 2, c: 3 })).toStrictEqual(['a', 'b', 'c'])
    expect(extractKeysFromObject({ j: 9, i: 2, x: 3, z: 4 })).toStrictEqual(['j', 'i', 'x', 'z'])
    expect(extractKeysFromObject({ w: 15, x: 22, y: 13 })).toStrictEqual(['w', 'x', 'y'])
  })

  test('must sum object values', () => {
    expect(sumObjectValues({ a: 1, b: 2, c: 3 })).toBe(6)
    expect(sumObjectValues({ j: 9, i: 2, x: 3, z: 4 })).toBe(18)
    expect(sumObjectValues({ w: 15, x: 22, y: 13 })).toBe(50)
  })

  test('must accessing object properties two', () => {
    expect(accessObjectProperty({ one: 1, 'prop-2': 2 })).toBe(2)
    expect(accessObjectProperty({ 'prop-2': 'two', prop: 'test' })).toBe('two')
  })

  test('must remove a property from object', () => {
    expect(removePropertyObject({ a: 1, b: 7, c: 3 })).toStrictEqual({ a: 1, c: 3 })
    expect(removePropertyObject({ b: 0, a: 7, d: 8 })).toStrictEqual({ a: 7, d: 8 })
    expect(removePropertyObject({ e: 6, f: 4, b: 5, a: 3 })).toStrictEqual({ e: 6, f: 4, a: 3 })
  })

  test('must merge two objects matching key', () => {
    expect(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })).toStrictEqual({ a: 1, b: 2, c: 3, e: 5, d: 4 })
    expect(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })).toStrictEqual({ a: 5, b: 4, c: 3, e: 2, d: 1 })
  })

  test('must multiply all object values by x', () => {
    expect(multiplyObjectValues({ a: 1, b: 2, c: 3 }, 3)).toStrictEqual({ a: 3, b: 6, c: 9 })
    expect(multiplyObjectValues({ j: 9, i: 2, x: 3, z: 4 }, 10)).toStrictEqual({ j: 90, i: 20, x: 30, z: 40 })
    expect(multiplyObjectValues({ w: 15, x: 22, y: 13 }, 6)).toStrictEqual({ w: 90, x: 132, y: 78 })
  })

  test('must create an object taking from two arrays', () => {
    expect(createObjectThree(['a', 'b', 'c'], [1, 2, 3])).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(createObjectThree(['w', 'x', 'y', 'z'], [10, 9, 5, 2])).toStrictEqual({ w: 10, x: 9, y: 5, z: 2 })
    expect(createObjectThree([1, 'b'], ['a', 2])).toStrictEqual({ 1: 'a', b: 2 })
  })

  test('must swap object keys and values', () => {
    expect(swapObject({ z: 'a', y: 'b', x: 'c', w: 'd' })).toStrictEqual({ a: 'z', b: 'y', c: 'x', d: 'w' })
    expect(swapObject({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })).toStrictEqual({ a: '2', b: '4', c: '6', d: '8' })
    expect(swapObject({ a: 1, z: 24 })).toStrictEqual({ 1: 'a', 24: 'z' })
  })

  test('must replace empty string in object with null values', () => {
    expect(replaceEmptyValues({ a: 'a', b: 'b', c: '' })).toStrictEqual({ a: 'a', b: 'b', c: null })
    expect(replaceEmptyValues({ a: '', b: 'b', c: ' ', d: 'd' })).toStrictEqual({ a: null, b: 'b', c: null, d: 'd' })
    expect(replaceEmptyValues({ a: 'a', b: 'b ', c: ' ', d: '' })).toStrictEqual({ a: 'a', b: 'b ', c: null, d: null })
  })

  test('must check if property exists in object', () => {
    expect(checkProperty({ a: 1, b: 2, c: 3 }, 'b')).toBe(true)
    expect(checkProperty({ x: 'a', y: null, z: 'c' }, 'y')).toBe(false)
    expect(checkProperty({ x: 'a', b: 'b', z: undefined }, 'z')).toBe(false)
  })

  test('must add property to each object in array', () => {
    const arr1 = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }]
    const expectArr1 = [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
    const arr2 = [{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }]
    const expectArr2 = [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

    expect(addPropertyToEachObject(arr1, 'Asia')).toStrictEqual(expectArr1)
    expect(addPropertyToEachObject(arr2, 'Europe')).toStrictEqual(expectArr2)
  })

  test('must convert array to object', () => {
    expect(convertArrayToObjectWithCounter([1, 2, 2, 3])).toStrictEqual({ 1: 1, 2: 2, 3: 1 })
    expect(convertArrayToObjectWithCounter([9, 9, 9, 99])).toStrictEqual({ 9: 3, 99: 1 })
    expect(convertArrayToObjectWithCounter([4, 3, 2, 1])).toStrictEqual({ 1: 1, 2: 1, 3: 1, 4: 1 })
  })
})
