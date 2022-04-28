// [Symbol.iterator](): IterableIterator<T>;

function makeIterabel(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]: () => {
      const max = maxValue;
      let initial = initialValue;
      return {
        next() {
          return {
            done: initial > max,
            value: callback(initial++),
          };
        },
      };
    },
  };
}

const arr = makeIterabel(0, 10, (num) => num * 2);
for (const num of arr) {
  console.log(num);
}
