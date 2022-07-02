const { propertyKeyCountry } = require('./index')

test('should return the value of the property with key country', () => {
  expect(propertyKeyCountry({ continent: 'Asia', country: 'Japan' })).toBe('Japan')
  expect(propertyKeyCountry({ country: 'Sweden', continent: 'Europe' })).toBe('Sweden')
})
