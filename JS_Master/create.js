//생성자 함수

function Fruits(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => console.log(`${this.name} is ${this.emoji}`);
  // return this;  생략 가능
}

const apple = new Fruits('apple', '🍎');

console.log(apple);
console.log(apple.name);
apple.display();
