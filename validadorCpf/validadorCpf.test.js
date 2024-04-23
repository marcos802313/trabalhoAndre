const validaCPF = require('./validadorCpf');

const { test, expect } = require('@jest/globals');

test('Validar CPFs válidos e inválidos', () => {
  expect(validaCPF('529.982.247-25')).toBe(true);
  expect(validaCPF('52998224725')).toBe(true);

  expect(validaCPF('123.456.789-00')).toBe(false);
  expect(validaCPF('12345678900')).toBe(false);
  expect(validaCPF('529.982.247-26')).toBe(false);
  expect(validaCPF('52998224726')).toBe(false);
});
