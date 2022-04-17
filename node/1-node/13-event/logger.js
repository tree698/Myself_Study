const EventEmitter = require('events');
// const emitter = new EventEmitter();

// function log(callback) {
//   emitter.emit('log', 'started..');
//   callback();
//   emitter.emit('log', 'ended!');
// }

// module.exports.log = log;

class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started..');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger;
