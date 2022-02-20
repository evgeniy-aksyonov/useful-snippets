// Incapsulation

const createCounter = () => {
  // Переменная, определенная в области действия фабрики или конструктора
  // является приватной для этой функции.
  let count = 0;

  return ({
    // Любые другие функции, определенные в той же области, являются привилегированными:
    // Они имеют доступ к закрытой переменной `count`
    // определенной в любом месте их цепочки областей видимости (содержащей области действия функции).
    click: () => count += 1,
    getCount: () => count.toLocaleString()
  });
};

const counter = createCounter();

counter.click();
counter.click();
counter.click();

console.log(counter.getCount()); // "3"
