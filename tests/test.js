import { mathinessVersion, spongepoop, random } from '../lib/index.js'

test('Version', () => {
  expect(mathinessVersion()).toBe('0.0.1')
})

test('Number Round', () => {
  const x = 3.14
  expect(x.round()).toBe(3)
})

test('Number Pad', () => {
  const x = 1.9
  expect(x.pad(2, 2)).toBe('01.90')
})

test('BigNumber', () => {
  const bn = new BigNumber()
  expect(bn.getValue()).toBe('0')
  expect(bn.value).toBe('0')
  bn.setValue(99)
  expect(bn.value).toBe('99')
})

test('spongepoop', () => {
  expect(spongepoop(1,2)).toBe('💩💩💩')
})

test('Random', () => {
  const x = random(10)
  expect(x).toBeLessThan(10)
})