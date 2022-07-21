const {
  getElementOfArray,
  getFirstsElementsOfArray,
  countNumberOfArray,
  getNegativeNumberOfArray,
  removeFirstElementsOfArray,
  sortElementsAlphabetically,
  getLastElementOfArray,
  sortNumberInDescendingOrder,
  getLastArrayElements,
  removeSpecificArrayElement,
  averageArrayOfNumbers,
  longestStringOnArray,
  rangeOfNumbers,
  checkAllElementsAreEqual,
  mergeArbitraryArrays,
  sumArrayNumbers,
  mergeArraysWithDuplicateValues
} = require('./')

describe('Javascript Arrays', () => {
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

  test('must get the last element of array', () => {
    expect(getLastElementOfArray([1, 2, 3, 4])).toStrictEqual([2, 3, 4])
    expect(getLastElementOfArray([5, 4, 3, 2, 1, 0])).toStrictEqual([2, 1, 0])
    expect(getLastElementOfArray([99, 1, 1])).toStrictEqual([99, 1, 1])
  })

  test('must sort an array in descending order', () => {
    expect(sortNumberInDescendingOrder([1, 3, 2])).toStrictEqual([3, 2, 1])
    expect(sortNumberInDescendingOrder([4, 2, 3, 1])).toStrictEqual([4, 3, 2, 1])
  })

  test('must return the last n Array elements', () => {
    expect(getLastArrayElements([1, 2, 3, 4, 5], 2)).toStrictEqual([4, 5])
    expect(getLastArrayElements([1, 2, 3], 6)).toStrictEqual([1, 2, 3])
    expect(getLastArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual([6, 7, 8])
  })

  test('must remove a specific array element', () => {
    expect(removeSpecificArrayElement([1, 2, 3], 2)).toStrictEqual([1, 3])
    expect(removeSpecificArrayElement([1, 2, '2'], '2')).toStrictEqual([1, 2])
    expect(removeSpecificArrayElement([false, '2', 1], false)).toStrictEqual(['2', 1])
    expect(removeSpecificArrayElement([1, 2, '2', 1], 1)).toStrictEqual([2, '2'])
  })

  test('must return the average of an array of numbers', () => {
    expect(averageArrayOfNumbers([10, 100, 40])).toBe(50)
    expect(averageArrayOfNumbers([10, 100, 1000])).toBe(370)
    expect(averageArrayOfNumbers([-50, 0, 50, 200])).toBe(50)
  })

  test('must return the longest string', () => {
    expect(longestStringOnArray(['help', 'me'])).toBe('help')
    expect(longestStringOnArray(['I', 'need', 'candy'])).toBe('candy')
  })

  test('must create a range of numbers', () => {
    expect(rangeOfNumbers(2, 10)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(rangeOfNumbers(1, 3)).toStrictEqual([1, 2, 3])
    expect(rangeOfNumbers(-5, 5)).toStrictEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    expect(rangeOfNumbers(2, 7)).toStrictEqual([2, 3, 4, 5, 6, 7])
  })

  test('must check if all array elements are equal', () => {
    expect(checkAllElementsAreEqual([true, true])).toBe(true)
    expect(checkAllElementsAreEqual(['test', 'test'])).toBe(true)
    expect(checkAllElementsAreEqual([1, 2])).toBe(false)
    expect(checkAllElementsAreEqual(['10', 10])).toBe(false)
  })

  test('must merge an arbitrary numbers of arrays', () => {
    expect(mergeArbitraryArrays([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6])
    expect(mergeArbitraryArrays(['a', 'b', 'c'], [4, 5, 6])).toStrictEqual(['a', 'b', 'c', 4, 5, 6])
    expect(mergeArbitraryArrays([true, true], [1, 2], ['a', 'b'])).toStrictEqual([true, true, 1, 2, 'a', 'b'])
  })

  test('must calculate the sum of an array of numbers', () => {
    expect(sumArrayNumbers([10, 100, 40])).toBe(150)
    expect(sumArrayNumbers([10, 100, 1000, 1])).toBe(1111)
    expect(sumArrayNumbers([-50, 0, 50, 200])).toBe(200)
  })

  test('must merge two arrays with duplicate values', () => {
    expect(mergeArraysWithDuplicateValues([1, 2, 3], [3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    expect(mergeArraysWithDuplicateValues([-10, 22, 333, 42], [-11, 5, 22, 41, 42])).toStrictEqual([-11, -10, 5, 22, 41, 42, 333])
  })
})
