const {
  checkValueInSet,
  convertSetToArray,
  createSets,
  unionTwoSets
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

  test('must get union of two sets', () => {
    expect(unionTwoSets(new Set('123'), new Set('234'))).toStrictEqual(new Set('1234'))
    expect(unionTwoSets(new Set([1, 2, 3]), new Set([3, 4, 5]))).toStrictEqual(new Set([1, 2, 3, 4, 5]))
    expect(unionTwoSets(new Set([false, false, NaN]), new Set([true, true, NaN]))).toStrictEqual(new Set([false, NaN, true]))
  })
})
