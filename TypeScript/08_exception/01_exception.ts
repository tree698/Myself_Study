// Java: Exception
// JavsScript: Error

/**
 *  exception => 예상 x
 *  error => 예상 0
 */

// Error(Exception) Handling: try => catch => finally
function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error(`file not exist ${fileName}`);
  }
  return 'file content';
}

function closeFile(fileName: string) {
  console.log('closed');
}

const fileName = 'not exist';

// no error handling
console.log(readFile(fileName));
closeFile(fileName);

// error handling
// try-catch로 프로그램이 죽는 것을 방지할 수 있고,
// catch에서 return을 하여도,
// finally는 반드시 실행된다
function run() {
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log('catched');
    return;
  } finally {
    closeFile(fileName);
    console.log('finally');
  }
}
