'use strict';

// /**
//  * * Array ❤
//  */

// /**
//  * Declaration
//  */
// const arr1 = new Array();
// const arr2 = [1, 2];

// /**
//  * Index position
//  */
// const fruits = ['apple', 'banna'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]); // 마지막 원소 출력

// /**
//  * Looping over an array
//  * for, for of, forEach
//  */
// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i]);
// }

// for (let i of fruits) {
// 	console.log(i);
// }

// fruits.forEach(function (value, index, array) {
// 	console.log(value, index, array);
// });

// fruits.forEach((fruit, index) => console.log(fruit, index));

// /**
//  * Addition. deletion, copy
//  * push, pop, unshift, shift
//  * !note: shift, unshift are slower than pop and push
//  */
// fruits.push('straberry', 'peach');
// console.log(fruits);

// const poped = fruits.pop(); // pop: remove an item from the end
// console.log(fruits);
// console.log(poped);

// fruits.unshift('cherry'); // unshift: add an item to the beginning
// console.log(fruits);

// fruits.shift(); // shift: remove an item from the beginning
// console.log(fruits);

// fruits.push('💖', '🍔', '🍤');
// console.log(fruits);

// /**
//  * splice: remove an item by index position => (시작지점, 삭제 개수)
//  * 삭제 개수를 명시하지않으면 시작점부터 모두 삭제함
//  */
// fruits.splice(1, 1);
// console.log(fruits);

// fruits.splice(1, 1, '🍈', '🍊'); // 삭제와 추가를 동시에 할수 있다
// console.log(fruits);

// /**
//  * concat: combine two arrays
//  */
// const tree = ['🌳', '🌴'];
// const mix = fruits.concat(tree);
// console.log(mix);

// /**
//  * Searching => find the index
//  * indexOf, includes
//  */
// console.clear();
// console.log(fruits);
// console.log(fruits.indexOf('🍊'));

// console.log(fruits.indexOf('c')); // 없을 경우 -1 출력
// console.log(fruits.includes('c')); // includes => return boolean

// /**
//  * 원소가 중복되어 있을 경우
//  * indexof, lastIndexOf
//  */
// fruits.push('🍈');
// console.log(fruits);
// console.log(fruits.indexOf('🍈')); //indexof => 앞에 있는 것부터
// console.log(fruits.lastIndexOf('🍈')); //lastIndexOf=> 뒤에 있는 것부터

/**
 * * Exercise
 */

// Q1. make a string out of an array
{
	const fruits = ['apple', 'banna', 'orange'];
	const result1 = fruits.join(); // no separate => default ','
	console.log(result1);
}

// Q2. make an array out of a string
{
	const fruits = '🍊, 🥝, 🍌, 🍒';
	const result2 = fruits.split(','); //without separate => one string
	console.log(result2);
}

// Q3. make this array look like this: [5,4,3,2,1]
{
	const array = [1, 2, 3, 4, 5];
	const result3 = array.reverse();
	console.log(result3);
	console.log(array);
}

// Q4. make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	const result4 = array.slice(2, 5); // slice(2)
	console.log(result4);
	console.log(array);

	/* const result41 = array.splice(0, 2); array를 변형시킴
	console.log(result41); [1, 2]
	console.log(array); [3, 4, 5] */
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
	const result5 = students.find((student) => student.score === 90);
	console.log(result5);
}

// Q6. make an array of enrolled students
{
	const result6 = students.filter((student) => student.enrolled);
	console.log(result6);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	const result7 = students.map((student) => student.score);
	console.log(result7);
}

// Q8. check if there is a student with the score lower than 50
{
	const result8 = students.some((student) => student.score < 50); //compare: every
	console.log(result8);
}

// Q9. compute students' average score
{
	const result9 = students.reduce((prev, curr) => prev + curr.score, 0);
	console.log(result9 / students.length);
}

// Q10. make a string containing all the scores
// result shold be: '45,80,90,66,88'
{
	const result10 = students
		.map((student) => student.score)
		.filter((score) => score >= 50) // map으로 점수로 변환되었기에 score!
		.join();
	console.log(result10);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45,66,80,88,90'
{
	const result = students
		.map((student) => student.score)
		.sort((a, b) => a - b)
		.join();
	console.log(result);
}
