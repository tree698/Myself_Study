'use strict';

/* 
    class
    - template, declare once, no data in

    object
    - instance of a class, create many times, data in 

    JavaScript class
    - introduced in ES6
    - syntactical sugar over prototype-based inheritance
*/

/* 
    1. Class declarations
    - constructor => 인스턴스 생성시 항상 호출되는 함수로 전달되어야 하는 정보 포함 
        * const test = new Person() => ()에서 생성됨

    - (member) fields / member variable
        * (ex) this.coffeeBeans = coffeeBeans;   => 외부에서 전달받은 coffeeBeans을 함수내 (this) coffeeBenas에 대입
	    * (ex) coffeeBeans: number = 0;  => update됨 

    - class variable => class level 변수 (공통 사용) => static로 지정하여 메모리 사용 줄임 
    - instance variable => instance(object) level 변수 

    - method 
	* In object-oriented programming, a class is an extensible program-code-template for creating objects, 
	* providing initial values for state (member variables) and implementations of behavior (member functions or methods)
*/

class Person {
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}
	// method
	speak() {
		console.log(`${this.name}: hello`);
	}
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

/* 
    2. Getter & Setter
    - 초기화가 필요한 곳에 private로 설정
    - getter and setter 안에 변수는 다른 이름을 사용한다 ex) _age
*/

class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		// this.age는 getter가 생성되는 순간 getter를 호출, age는 setter가 생성되는 순간 setter를 호출
		// 전달받은 value 값을 this.age에 대입할때 무한 반복 => 다른 변수명 사용 (this._age)
	}
	// getter => 값을 return
	get age() {
		return this._age;
	}
	// setter => 값을 전달 받아 설정
	set age(value) {
		// if (value < 0) {
		//     throw new Error('age can not be negative');
		// }
		// this._age = value;
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User('steven', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private) => too soon!
class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods => too soon!
// object (전달되는 값)에 상관없이 쓰이는 것 (공통적으로 사용 / class level)에 사용함으로써 메모리 사용을 줄임
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color!`);
	}

	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
	draw() {
		super.draw(); // 부모의 draw도 호출됨 (super)
		console.log('TTTTTTT');
	}
	getArea() {
		return this.width * this.height * 0.5;
	}
}
const triangle = new Triangle(20, 20, 'red');
console.log(triangle.getArea());
triangle.draw();

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

console.log(triangle.toString());

// (end)
