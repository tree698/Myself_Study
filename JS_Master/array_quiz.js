// quiz 1.
function replace(arr, from, to) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === from) {
      output.push(to);
    } else {
      output.push(arr[i]);
    }
  }
  return output;
}

const input1 = ['🍌', '🍓', '🍇', '🍓'];
console.log(replace(input1, '🍓', '🥝'));

// quiz 2.
function counter(array, fruit) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === fruit) {
      count++;
    }
  }
  return count;
}

const input2 = ['🍌', '🥝', '🍇', '🥝'];
console.log(counter(input2, '🥝'));

// quiz 3.
function subSet(input, search) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      output.push(input[i]);
    }
  }
  return output;
}

const input3 = ['🍌', '🥝', '🍇'];
const input4 = ['🍌', '🍓', '🍇', '🍓'];
console.log(subSet(input3, input4));
