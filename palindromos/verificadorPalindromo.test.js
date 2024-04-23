const verificaPalindromo = require('./verificadorPalindromo');

const { test, expect } = require('@jest/globals');

test('Verificar se uma string é um palíndromo', () => {
  expect(verificaPalindromo('ana')).toBe(true);
  expect(verificaPalindromo('Ame a ema')).toBe(true);

  expect(verificaPalindromo('cachorro')).toBe(false);
  expect(verificaPalindromo('hello world')).toBe(false);
});
