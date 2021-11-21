'use strict';

// module1과 비교하면서 볼것
function add(a, b) {
  return a + b;
}

// defaul는 한개에만 적용
export default function add2(a, b) {
  return a + b;
}

// 나머지는 default 없이 사용
export function minus(a, b) {}

// 변수도 가능
export const num = 123;
