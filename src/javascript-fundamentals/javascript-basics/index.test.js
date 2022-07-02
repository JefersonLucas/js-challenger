const { sumTwoNumbers } = require('./index')

test('must sum two numbers', () => {
  expect(sumTwoNumbers(1, 2)).toBe(3)
  expect(sumTwoNumbers(1, 10)).toBe(11)
  expect(sumTwoNumbers(99, 1)).toBe(100)
})
