const text = 'Hello world';
for (let i = 0; i < text.length; i++) {
  //   console.log(text.charAt(i));
  console.log(text[i]);
}

const ids = 'user1, user2, user3, user4';
console.log(ids.split(','));

const time = setInterval(() => {
  // console.log(Date());
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);

setTimeout(() => {
  console.log('STOP!');
  clearInterval(time);
}, 6000);
