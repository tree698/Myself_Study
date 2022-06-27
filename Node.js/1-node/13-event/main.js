const logger = require('./logger.js');
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('log', (event) => {
//   console.log(event);
// });

// logger.log(() => {
//   console.log('...doing something!');
// });

const emitter = new logger.Logger();
emitter.on('log', (event) => {
  console.log(event);
});

emitter.log(() => {
  console.log('...doing something');
});
