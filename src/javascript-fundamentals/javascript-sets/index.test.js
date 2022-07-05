const {
  checkValueInSet,
  convertSetToArray
} = require('./')

describe('Javascript Sets', () => {
  test('must check if value is present in Set', () => {
    expect(checkValueInSet(new Set([1, 2, 3]), 2)).toBe(true)
    expect(checkValueInSet(new Set([123]), 2)).toBe(false)
    expect(checkValueInSet(new Set(['1', '2', '3']), '2')).toBe(true)
    expect(checkValueInSet(new Set('123'), '2')).toBe(true)
  })

  test('must convert the Set an Array', () => {
    expect(convertSetToArray(new Set([1, 2, 3]))).toStrictEqual([1, 2, 3])
    expect(convertSetToArray(new Set([123]))).toStrictEqual([123])
    expect(convertSetToArray(new Set(['1', '2', '3']))).toStrictEqual(['1', '2', '3'])
    expect(convertSetToArray(new Set(['123']))).toStrictEqual(['123'])
  })
})
