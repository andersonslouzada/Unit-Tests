const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
    expect(typeof productDetails).not.toBe('object');
  });
  it('Verifica se `productDetails` retorna um array', () => {
    expect(Array.isArray(productDetails())).toBe(true);
    expect(Array.isArray(productDetails())).not.toBe(false);
  });
  it('Verifica se o array retornado por `productDetails` contém dois itens', () => {
    expect(productDetails()).toHaveLength(2);
  });
  it('Verifica se `productDetails` retorna uma array', () => {
    expect(typeof productDetails()[0] && typeof productDetails()[1]).toBe('object');
    expect(typeof productDetails()[0] && typeof productDetails()[1]).not.toBe('function');
  });
  it('Verifica se s dois itens dentro do array retornado pela função `productDetails` são objetos', () => {
    expect(productDetails('água', 'cerveja')[0] !== productDetails('água', 'cerveja')[1]).toBe(true);
    expect(productDetails('água', 'cerveja')[0] !== productDetails('água', 'cerveja')[1]).not.toBe(false);
  });
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica se `productDetails` retorna uma array', () => {
    fail();
  });
  // Teste se os dois productIds terminam com 123.
});
