const verificaPrimo = require('./verificadorPrimo');

const { test, expect } = require('@jest/globals');

test('Verificar se um número é primo', () => {
  expect(verificaPrimo(2)).toBe(true);
  expect(verificaPrimo(3)).toBe(true);
  expect(verificaPrimo(5)).toBe(true);
  expect(verificaPrimo(7)).toBe(true);
  expect(verificaPrimo(11)).toBe(true);
  expect(verificaPrimo(13)).toBe(true);

  expect(verificaPrimo(1)).toBe(false);
  expect(verificaPrimo(4)).toBe(false);
  expect(verificaPrimo(6)).toBe(false);
  expect(verificaPrimo(8)).toBe(false);
  expect(verificaPrimo(9)).toBe(false);
  expect(verificaPrimo(10)).toBe(false);
});
