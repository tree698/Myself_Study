'use strict';

console.log(this); // this => window
function simpleFunc() {
  console.log(this);
}
// window.simpleFunc();
simpleFunc(); // this => window

/**
 * this will indicate different caller depend on who is calling
 * lose original class information
 */
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // this => Counter

const caller = counter.increase;
caller(); // this => undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this => Bob

// solution 1. binding
const caller2 = counter.increase.bind(counter);
caller2(); // Counter

// solution 2. arrow function
class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
