const { getElementOfArray } = require('./index')

test('must return the nth element of a', () => {
  expect(getElementOfArray([1, 2, 3, 4, 5], 3)).toBe(3)
  expect(getElementOfArray([10, 9, 8, 7, 6], 5)).toBe(6)
  expect(getElementOfArray([7, 2, 1, 6, 3], 1)).toBe(7)
})
