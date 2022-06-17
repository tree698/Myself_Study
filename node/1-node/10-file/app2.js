const fs = require('fs').promises;

// read a file
fs.readFile('text.txt', 'utf-8') //
  .then((data) => console.log(data))
  .catch(console.error);

// write a file
fs.writeFile('./file.txt', 'Hello Dream Coders') //
  .catch(console.error);

// data 추가
fs.appendFile('./file.txt', 'Yo!, Dream Coders') //
  .then(() => {
    // 순서 보장을 위해 append 후에 copy
    fs.copyFile('./file.txt', 'file3.txt') //
      .catch(console.error);
  })
  .catch(console.error);

// copy
fs.copyFile('./file.txt', 'file2.txt') //
  .catch(console.error);

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

// string 배열로 return
fs.readdir('./') //
  .then(console.log)
  .catch(console.error);
