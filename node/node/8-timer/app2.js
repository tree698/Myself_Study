console.log('code 1');
// 두번째
setTimeout(() => {
  console.log('setTimeout');
}, 0);

console.log('code 2');
// 세번째
setImmediate(() => {
  console.log('setImmediate');
});

console.log('code 3');
// 첫번째
process.nextTick(() => {
  console.log('nextTick');
});
