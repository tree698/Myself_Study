console.log('logging...');
console.clear();

// log level
console.log('log'); //개발
console.info('info'); //정보
console.warn('warn'); //경보
console.error('error'); //사용자 에러, 시스탬 에러

// assert => 특정한 조건일때만 출력
console.assert(2 === 3, 'not same'); //false일 경우만 출력
console.assert(2 === 2, 'same'); //출력되지 않음

// print object
const student = { name: 'ellie', age: 20, company: { name: 'as' } };
console.log(student);
console.table(student);

console.dir(student);
console.dir(student, { showhidden: true, depth: 0, colors: true });

// mesuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();
