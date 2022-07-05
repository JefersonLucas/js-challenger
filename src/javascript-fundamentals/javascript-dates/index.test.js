const {
  checkDate,
  checkDatesAreEqual
} = require('./')

describe('Javascript Dates', () => {
  test('must check date is earliear that another', () => {
    expect(checkDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))).toBe(true)
    expect(checkDate(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))).toBe(false)
    expect(checkDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))).toBe(false)
  })

  test('must check if two dates are equal', () => {
    expect(checkDatesAreEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))).toBe(false)
    expect(checkDatesAreEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))).toBe(true)
    expect(checkDatesAreEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))).toBe(false)
  })
})
