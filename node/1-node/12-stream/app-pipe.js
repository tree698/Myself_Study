const fs = require('fs');
const zlib = require('zlib'); //압축 파일 만들기

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');

// const pipping = readStream.pipe(writeStream);
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
  console.log('done!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  // fs.readFile('file.txt', (err, data) => {
  //     res.end(data);
  // });
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});
server.listen(3000);
