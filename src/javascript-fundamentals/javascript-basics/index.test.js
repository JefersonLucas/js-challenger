const { sumTwoNumbers, compareTypes, nthCharacter } = require('./index')

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
