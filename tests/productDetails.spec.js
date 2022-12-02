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
  it('Verifica se os dois itens dentro do array retornado pela função `productDetails` são objetos', () => {
    expect(typeof productDetails()[0] && typeof productDetails()[1]).toBe('object');
    expect(typeof productDetails()[0] && typeof productDetails()[1]).not.toBe('function');
  });
  it('Verifica se quando passado dois parametros, os itens retornados pela função `productDetails` são diferentes', () => {
    expect(productDetails('água', 'cerveja')[0] !== productDetails('água', 'cerveja')[1]).toBe(true);
    expect(productDetails('água', 'cerveja')[0] !== productDetails('água', 'cerveja')[1]).not.toBe(false);
  });
  it('Verifica se os dois productIds da função `productDetails` terminam com 123', () => {
    expect(productDetails('agua', 'cerveja')[0].details.productId && productDetails('agua', 'cerveja')[1].details.productId).toMatch(/123/);
  });
});
