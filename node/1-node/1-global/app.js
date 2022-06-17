const fs = require('fs');
const fs = require('fs');

console.log(global);

global.hello = () => {
  console.log('Hello');
};

global.hello();
hello();
