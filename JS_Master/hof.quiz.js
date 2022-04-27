// quiz 1.
function replace2(arr, from, to) {
  return arr.map((fruit) => (fruit === from ? to : fruit));
}
const input1 = ['🍌', '🍓', '🍇', '🍓'];
console.log(replace2(input1, '🍓', '🥝'));

// quiz 2.
function counter2(array, search) {
  return array.filter((fruit) => fruit === search).length;
}
const input2 = ['🍌', '🥝', '🍇', '🥝'];
console.log(counter2(input2, '🥝'));

// quiz 3.
function subSet2(input, search) {
  return input.filter((fruit) => search.includes(fruit));
}
const input3 = ['🍌', '🥝', '🍇'];
const input4 = ['🍌', '🍓', '🍇', '🍓'];
console.log(subSet2(input3, input4));

// quiz 4.
function average(arr) {
  return arr
    .filter((num) => num > 5)
    .reduce((avg, value, _, array) => avg + value / array.length, 0);
}
const nums = [3, 16, 5, 25, 4, 34, 21];
console.log(average(nums));
