const fs = require('fs');

// fs API는 3가지 형태로 제공
// rename(...., callback(error, data)) => 콜백함수, 비동기
// try { renameSync(....) } catch(e) {}
// promise.rename().then().catch(0)

// 첫번째
fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');

// 두번째
try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error);
}
console.log('hello');

// 세번째
fs.promises
  .rename('./text-new.txt', './text.txt') //
  .then(() => console.log('Done!'))
  .catch(console.error);
