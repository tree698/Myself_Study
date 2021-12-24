const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'
// 운영체제가 달라도 path는 동일한 규칙으로...

console.log(__dirname);
console.log(__filename);

console.log(path.sep); //환경변수 확인
console.log(path.delimiter); //구분자 확인

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder/////sub'));

// join
// console.log(__dirname + '/' + 'image');
console.log(path.join(__dirname, 'image'));
