// Rest Parameter
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);

/**
 * 일급객체 first class function
 * 일반 객체처럼 모든 연산이 가능한 것
 * - 함수의 매개변수로 전달
 * - 함수의 반환값
 * - 할당 명령문 => 변수에 할당
 * - 동일 비교 대상
 */

/**
 * 고차함수 Higher-order function
 * -인자로 함수를 받거나 (콜백 함수)
 * - 함수를 반환하는 함수
 */

const log = (num) => console.log(num);
const doubleAndLog = (num) => console.log(num * 2);
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(3, log);
iterate(3, doubleAndLog);

setTimeout(() => console.log('1초 후에 이 함수가 실행될것임'), 1000);

/**
 * 함수 내부에서 외부로부터 전달된 인자(변수)를 변경하지 않는다
 * 변경해야 한다면 새로운 상태(오브젝트, 값)를 만들어 반환한다 => 이름부터 변경하는 느낌을 주도록
 * 원시값 - 값에 의한 복사 copy by value
 * 객체값 - 참조에 의한 복사 copy by reference
 */
