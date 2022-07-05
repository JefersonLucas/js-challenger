const {
  sumTwoNumbers,
  compareTypes,
  nthCharacter,
  removeLastCharacters,
  typeValue,
  extractLastCharacters,
  extractFirstHalf,
  getFirstCharacters,
  removeFirstCharacters,
  operatorCompare,
  percentageOfNumber,
  mathOperators,
  checkNumberIsEven,
  checkIsWholeNumber
} = require('./')

describe('Javascript Basics', () => {
  test('must sum two numbers', () => {
    expect(sumTwoNumbers(1, 2)).toBe(3)
    expect(sumTwoNumbers(1, 10)).toBe(11)
    expect(sumTwoNumbers(99, 1)).toBe(100)
  })

  test('must equal and of the same type', () => {
    expect(compareTypes(2, 3)).toBe(false)
    expect(compareTypes(3, 3)).toBe(true)
    expect(compareTypes(1, '1')).toBe(false)
    expect(compareTypes('10', '10')).toBe(true)
  })

  test('should return the nth character of the string', () => {
    expect(nthCharacter('abcd', 1)).toBe('a')
    expect(nthCharacter('zyxbwpl', 5)).toBe('w')
    expect(nthCharacter('gfedcba', 3)).toBe('e')
  })

  test('must remove the last 3 characters', () => {
    expect(removeLastCharacters('abcdefg')).toMatch('abcd')
    expect(removeLastCharacters('1234')).toMatch('1')
    expect(removeLastCharacters('fgedcba')).toMatch('fged')
  })

  test('must return the type of the value', () => {
    expect(typeValue(1)).toMatch('number')
    expect(typeValue(false)).toMatch('boolean')
    expect(typeValue({})).toMatch('object')
    expect(typeValue(null)).toMatch('object')
    expect(typeValue('string')).toMatch('string')
    expect(typeValue(['array'])).toMatch('object')
  })

  test('must extract the last 3 characters from the string', () => {
    expect(extractLastCharacters('abcdefg')).toMatch('efg')
    expect(extractLastCharacters('1234')).toMatch('234')
    expect(extractLastCharacters('fgedcba')).toMatch('cba')
  })

  test('must extract the first half', () => {
    expect(extractFirstHalf('abcdefgh')).toMatch('abcd')
    expect(extractFirstHalf('1234')).toMatch('12')
    expect(extractFirstHalf('gedcba')).toMatch('ged')
  })

  test('must get the first 3 characters', () => {
    expect(getFirstCharacters('abcdefg')).toMatch('abc')
    expect(getFirstCharacters('1234')).toMatch('123')
    expect(getFirstCharacters('fgedcba')).toMatch('fge')
  })

  test('must remove the first 3 characters of string', () => {
    expect(removeFirstCharacters('abcdefg')).toBe('defg')
    expect(removeFirstCharacters('1234')).toBe('4')
    expect(removeFirstCharacters('fgedcba')).toBe('dcba')
  })

  test('must compare arguments and decide whether to divide or multiply the numbers', () => {
    expect(operatorCompare(10, 100)).toBe(0.1)
    expect(operatorCompare(90, 45)).toBe(4050)
    expect(operatorCompare(8, 20)).toBe(0.4)
    expect(operatorCompare(2, 0.5)).toBe(1)
  })

  test('must return percentage of number', () => {
    expect(percentageOfNumber(100, 50)).toBe(50)
    expect(percentageOfNumber(10, 1)).toBe(0.1)
    expect(percentageOfNumber(500, 25)).toBe(125)
  })

  test('must be math operators', () => {
    expect(mathOperators(6, 5, 4, 3, 2, 1)).toBe(10.5)
    expect(mathOperators(6, 2, 1, 4, 2, 3)).toBe(2744)
    expect(mathOperators(2, 3, 6, 4, 2, 3)).toBe(-8)
  })

  test('must check if number is even', () => {
    expect(checkNumberIsEven(10)).toBe(true)
    expect(checkNumberIsEven(-4)).toBe(true)
    expect(checkNumberIsEven(5)).toBe(false)
    expect(checkNumberIsEven(-111)).toBe(false)
  })

  test('must check check if a number is a whole number', () => {
    expect(checkIsWholeNumber(4)).toBe(true)
    expect(checkIsWholeNumber(1.123)).toBe(false)
    expect(checkIsWholeNumber(1048)).toBe(true)
    expect(checkIsWholeNumber(10.48)).toBe(false)
  })
})
