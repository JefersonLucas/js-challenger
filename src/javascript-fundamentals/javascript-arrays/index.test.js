const { expect } = require('expect')
const {
  getElementOfArray,
  getFirstsElementsOfArray,
  countNumberOfArray,
  getNegativeNumberOfArray,
  removeFirstElementsOfArray,
  sortElementsAlphabetically
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

test('must return the number of elements is a', () => {
  expect(countNumberOfArray([1, 2, 2, 4])).toBe(4)
  expect(countNumberOfArray([9, 9, 9])).toBe(3)
  expect(countNumberOfArray([4, 3, 2, 1, 0])).toBe(5)
})

test('must return number of negative values in the array', () => {
  expect(getNegativeNumberOfArray([1, -2, 2, -4])).toBe(2)
  expect(getNegativeNumberOfArray([0, 9, 1])).toBe(0)
  expect(getNegativeNumberOfArray([4, -3, 2, 1, 0])).toBe(1)
})

test('must remove first 3 elements of array', () => {
  expect(removeFirstElementsOfArray([1, 2, 3, 4])).toStrictEqual([4])
  expect(removeFirstElementsOfArray([5, 4, 3, 2, 1, 0])).toStrictEqual([2, 1, 0])
  expect(removeFirstElementsOfArray([99, 1, 1])).toStrictEqual([])
})

test('must the array elememts alphabetically', () => {
  expect(sortElementsAlphabetically(['b', 'c', 'd', 'a'])).toStrictEqual(['a', 'b', 'c', 'd'])
  expect(sortElementsAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])).toStrictEqual(['a', 'a', 'c', 'd', 'w', 'y', 'z'])
})
