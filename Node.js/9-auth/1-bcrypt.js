import bcrypt from 'bcrypt';

const password = 'abc123';
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync('abc12', hashed);
console.log(result);
