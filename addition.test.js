const { default: expect } = require('expect');
const { calculerAddition, appliquerReduction } = require('./addition');

test('plat à 15€ + boisson à 5€ = 20€', () => {
  expect(calculerAddition(15, 5)).toBe(20);
});

test('plat à 15€ + boisson à 5€ ne doit pas égaler 25€', () => {
  expect(calculerAddition(15, 5)).not.toBe(25);
});

test('Réduction sur les plats', () => {
    expect(appliquerReduction(100, 10)).toBe(90);
});