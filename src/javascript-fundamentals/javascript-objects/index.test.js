const {
  propertyKeyCountry,
  createObjectOne,
  accessingObjByPropertie,
  checkPropertyExists
} = require('./')

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
