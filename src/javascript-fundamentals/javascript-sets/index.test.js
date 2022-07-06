const {
  checkValueInSet,
  convertSetToArray,
  createSets
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

  test('must create Javascript Sets', () => {
    expect(createSets(1, 'b', 3)).toStrictEqual(new Set([1, 'b', 3]))
    expect(createSets(NaN, null, false)).toStrictEqual(new Set([NaN, null, false]))
    expect(createSets('a', ['b'], { c: 3 })).toStrictEqual(new Set(['a', ['b'], { c: 3 }]))
  })
})
