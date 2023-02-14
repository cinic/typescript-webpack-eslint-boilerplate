import {describe, expect, test} from '@jest/globals'
import {classNames} from '@shared/lib/class-names'

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('lol-kek')).toBe('lol-kek')
  })

  test('with array params', () => {
    expect(classNames(['lol', 'kek'])).toBe('lol kek')
  })

  test('with additional params', () => {
    expect(classNames('lol', {}, ['kek', 'cheburek'])).toBe('lol kek cheburek')
  })

  test('with mod params', () => {
    expect(classNames('lol', {hovered: true, active: true}, ['kek', 'cheburek'])).toBe(
      'lol kek cheburek hovered active',
    )
  })

  test('with mod params', () => {
    expect(classNames('lol', {hovered: false, active: true}, ['kek', 'cheburek'])).toBe(
      'lol kek cheburek active',
    )
  })
})
