import jwt from 'jsonwebtoken';

// https://www.lastpass.com/features/password-generator
// password length: 32
const secretKey = 'Uyn#$PjmQ^fR#w6nVWYjS4wjFM%UsA3*';

const token = jwt.sign(
  {
    id: 'userId',
    isAdmin: true,
  },
  secretKey,
  { expiresIn: 2 }
);

// https://jwt.io/  => 토큰 해독
// console.log(token);

setTimeout(() => {
  jwt.verify(token, secretKey, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000); //result: expired
