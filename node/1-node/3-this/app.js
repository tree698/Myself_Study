console.clear();

function hello() {
  console.log(this);
  console.log(this === global); //true
}
hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberfunction() {
    console.log('----class----');
    console.log(this);
    console.log(this === global); //false
  }
}
const a = new A(4);
a.memberfunction();

// 노드에서 this는 module에 있는 export를 가리킴 vs. 브라우저는 global을 가리킴
console.log('----global scope----');
console.log(this); // {}
console.log(this === module.exports); // true
