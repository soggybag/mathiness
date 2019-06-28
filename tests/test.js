import { mathinessVersion, spongepoop } from '../lib/index.js'

test('Version', () => {
  expect(mathinessVersion()).toBe('0.0.1')
})

test('Number Round', () => {
  const x = 3.14
  expect(x.round()).toBe(3)
})

test('BigNumber', () => {
  const bn = new BigNumber()
  expect(bn.value).toBe('0')
})

test('spongepoop', () => {
  expect(spongepoop(1,2)).toBe('💩💩💩')
})