// https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts

/**
 * interface로 정의된 API ==> class로 정의되어 있음
 * 객체를 만들어서 접근해야 하지 않을까?
 * class 內, static로 정의되어 있으면 class로 접근해야 하지 않을까?
 * why, 배열로 정의된 변수에서 접근 가능할까?
 */

Array;
[1, 2].map;

/*  every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean; */

type Student = {
  passed: boolean;
};

const students: Student[] = [{ passed: true }, { passed: false }];
// const result = students.every((student) => student.passed);
const result = students.every((student) => {
  return student.passed;
});
console.log(result); // false

/**
 * every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
 * S type의 배열인지 아닌지를 return  ==> value가 S 타입인지 아닌지  ==>  this가 s 타입의 배열일때만 true 리턴
 */

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = true;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

// Cat은 Animal을 상속, predicate로 isCat 전달
console.log(
  animals.every<Cat>((animal) => isCat(animal)) // why error ??
);
// 축약형 ?
console.log(animals.every<Cat>(isCat)); // false
