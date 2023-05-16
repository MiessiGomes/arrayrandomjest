class ArrayRandomValues<T> {
    private array: T[];
  
    constructor(array: T[]) {
      this.array = array;
    }
  
    public getRandomValues(randomQuantity: number): T[] {
      if (randomQuantity > this.array.length)
        throw new Error("Invalid number range");
  
      const randomProducts: T[] = [];
  
      while (randomProducts.length < randomQuantity) {
        const randomNumber = Math.floor(Math.random() * this.array.length);
        const randomProduct = this.array[randomNumber];
        if (!randomProducts.includes(randomProduct)) {
          randomProducts.push(randomProduct);
        }
      }
  
      return randomProducts;
    }
  }
  
  const produtos = [
    { nome: "Caneta", qtde: 10, preco: 7.99 },
    { nome: "Impressora", qtde: 0, preco: 649.50 },
    { nome: "Caderno", qtde: 4, preco: 27.10 },
    { nome: "Lapis", qtde: 3, preco: 5.82 },
    { nome: "Tesoura", qtde: 1, preco: 19.99 },
  ];
  
  export default ArrayRandomValues;
  