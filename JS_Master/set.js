const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

obj1.price = 10;
objs.add(obj1);
console.log(objs); //Shallow copy

// quiz
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs); //Shallow copy
