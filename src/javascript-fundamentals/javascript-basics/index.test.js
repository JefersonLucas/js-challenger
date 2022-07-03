const { expect } = require('expect')
const {
  sumTwoNumbers,
  compareTypes,
  nthCharacter,
  removeLastCharacters,
  typeValue,
  extractLastCharacters
} = require('./index')

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
