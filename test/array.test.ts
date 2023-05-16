import ArrayRandomValues from '../ArrayRandomValues/arrayRandomValues';

describe('ArrayRandomValues', () => {
  const produtos = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.99 },
  ];

  test('getRandomValues returns an array of random products', () => {
    const arrayRandomValues = new ArrayRandomValues(produtos);
    const randomValues = arrayRandomValues.getRandomValues(3);

    expect(randomValues.length).toBe(3);
    expect(produtos).toContain(randomValues[0]);
    expect(produtos).toContain(randomValues[1]);
    expect(produtos).toContain(randomValues[2]);
  });

  test('getRandomValues throws an error for invalid number range', () => {
    const arrayRandomValues = new ArrayRandomValues(produtos);

    expect(() => {
      arrayRandomValues.getRandomValues(6);
    }).toThrow('Invalid number range');
  });
});
