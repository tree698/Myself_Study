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

console.log('----global scope----');
console.log(this); // {}
console.log(this === module.exports); // true
