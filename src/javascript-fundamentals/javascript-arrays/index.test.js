const {
  getElementOfArray,
  getFirstsElementsOfArray
} = require('./index')

test('must return the nth element of a', () => {
  expect(getElementOfArray([1, 2, 3, 4, 5], 3)).toBe(3)
  expect(getElementOfArray([10, 9, 8, 7, 6], 5)).toBe(6)
  expect(getElementOfArray([7, 2, 1, 6, 3], 1)).toBe(7)
})

test('must return the first 3 elements of array', () => {
  expect(getFirstsElementsOfArray([1, 2, 3, 4])).toStrictEqual([1, 2, 3])
  expect(getFirstsElementsOfArray([5, 4, 3, 2, 1, 0])).toStrictEqual([5, 4, 3])
  expect(getFirstsElementsOfArray([99, 1, 1])).toStrictEqual([99, 1, 1])
})
