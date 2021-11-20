{
  // name에 접근하는 두가지 방법
  const obj = {
    name: 'ellie',
    age: 23,
  };
  obj.name; // ellie
  obj['name']; // ellie

  // index type
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const name: Name = 'Steve';

  type Gender = Animal['gender'];
  const gender: Gender = 'female'; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'name';

  type Person = {
    name: string;
    gender: Animal['gender']; // 'male' | 'female'
  };
  const person: Person = {
    name: 'ellie',
    gender: 'female',
  };
}
