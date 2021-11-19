// Java: Exception
// JavsScript: Error

/**
 *  exception & error => 예상 x
 *  error state => 예상 0
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
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log('catched');
} finally {
  closeFile(fileName);
  console.log('finally');
}
