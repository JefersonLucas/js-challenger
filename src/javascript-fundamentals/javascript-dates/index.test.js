const { checkDate } = require('./index')

describe('Javascript Dates', () => {
  test('must check date is earliear that another', () => {
    expect(checkDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))).toBe(true)
    expect(checkDate(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))).toBe(false)
    expect(checkDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))).toBe(false)
  })
})
