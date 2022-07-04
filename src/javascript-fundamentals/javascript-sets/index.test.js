const { checkValueInSet } = require('./')

test('must check if value is present in Set', () => {
  expect(checkValueInSet(new Set([1, 2, 3]), 2)).toBe(true)
  expect(checkValueInSet(new Set([123]), 2)).toBe(false)
  expect(checkValueInSet(new Set(['1', '2', '3']), '2')).toBe(true)
  expect(checkValueInSet(new Set('123'), '2')).toBe(true)
})
