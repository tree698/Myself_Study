const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// task queue에 콜백함수가 마무리된 뒤 실행
// 콜백 함수를 task queue에 넣고 콜스택이 모두 비워지면 0초 후 실행
setTimeout(() => {
  console.log('setTimeout');
}, 0);

// task queue에 콜백함수가 있어도 nextTick의 콜백함수를 먼저 실행
// 콜스택이 모두 비워지면 바로 실행 => setTimeout 보다 먼저 실행
process.nextTick(() => {
  console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
  console.log('for loop');
}
