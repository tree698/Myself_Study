'use strict';

/**
 * HTTP (Hypertext Transfer Protocol)
 * - communication rules between client and server
 * AJAX (Asynchronous JavsScript And XML)
 * - A technology to transfer data between client and server synchronously
 * XHR (XMLHttpRequest) => one of Web APIs to transfer data
 * fetch() that transfer date has, recently, added
 */

/**
 * Data format while transfering data
 * - XML, JSON, YAML(.yml) etc.

/**
 * JSON (JavaScript Object Notation)
 * - simplest data interchange format
 * - lightweight text-based structure
 * - easy to read
 * - key-value pair
 * - used for serialization and transmission of data between the network connections
 * - independent programming language and platform
 * - object <===> sting
 */

// 1. Object to JSON  =>  stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	jump: () => {
		console.log(`${name} can jump`);
	},
};

json = JSON.stringify(rabbit); //function can't be serialized
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); // replacer(callback function)로 원하는 항목만 serialization
console.log(json);

// replacer로 serialization 내용 지정
json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object  =>  parse(json)
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
obj.jump(); // error => Beacuse when it is serialized, it can't be added
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // error => Because when it is serialized, it can't be added

// reviver(callback function)으로 함수 등 포함
const obj2 = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj2.birthDate.getDate());

// (end)
