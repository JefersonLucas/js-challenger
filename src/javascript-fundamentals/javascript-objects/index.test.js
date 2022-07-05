const {
  propertyKeyCountry,
  createObjectOne,
  accessingObjByPropertie,
  checkPropertyExists,
  createObjects,
  extractKeysFromObject
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

  test('It should return the value of the property with key equal to the value of the string', () => {
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
})
