const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./conversorTemperatura');

const { test, expect } = require('@jest/globals');

test('Conversão de Celsius para Fahrenheit', () => {
  expect(celsiusParaFahrenheit(0)).toBe(32);
  expect(celsiusParaFahrenheit(100)).toBe(212);
  expect(celsiusParaFahrenheit(-40)).toBe(-40);
  expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6);
});

test('Conversão de Fahrenheit para Celsius', () => {
  expect(fahrenheitParaCelsius(32)).toBe(0);
  expect(fahrenheitParaCelsius(212)).toBe(100);
  expect(fahrenheitParaCelsius(-40)).toBe(-40);
  expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37);
});
