// 주어진 배열에서 중복을 제거
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];

function removeDuplication(arr) {
  console.log([...new Set(arr)]);
}
removeDuplication(fruits);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function foundIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(foundIntersection(set1, set2));
