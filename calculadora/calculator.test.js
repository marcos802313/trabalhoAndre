const { adicao, subtracao, multiplicacao, divisao } = require('./calculadora');

const { test, expect } = require('@jest/globals');

test('Teste de adição', () => {
  expect(adicao(2, 3)).toBe(5);
  expect(adicao(-2, 3)).toBe(1);
  expect(adicao(0, 0)).toBe(0);
});

test('Teste de subtração', () => {
  expect(subtracao(5, 3)).toBe(2);
  expect(subtracao(-2, 3)).toBe(-5);
  expect(subtracao(0, 0)).toBe(0);
});

test('Teste de multiplicação', () => {
  expect(multiplicacao(2, 3)).toBe(6);
  expect(multiplicacao(-2, 3)).toBe(-6);
  expect(multiplicacao(0, 5)).toBe(0);
});

test('Teste de divisão', () => {
  expect(divisao(6, 3)).toBe(2);
  expect(divisao(-6, 3)).toBe(-2);
  expect(divisao(0, 5)).toBe(0);
  expect(() => divisao(6, 0)).toThrow();
});
