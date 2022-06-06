type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// ⭐️ object => 모두 적용 가능
const obj1: PositionType = {
  x: 1,
  y: 2,
};

const obj2: PositionInterface = {
  x: 1,
  y: 2,
};

// ⭐️ class => 모두 적용 가능
class Test1 implements PositionType {
  x: number;
  y: number;
}

class Test2 implements PositionInterface {
  x: number;
  y: number;
}

// ⚡️ only interface can be merged
// PositioinInterface에 Z를 추가했기 때문에 PositionInterface를 받는 object2, Test2는 Z를 구현해야 함
// 현재, Z를 구현하지 않았기에 에러 상태임
interface PositionInterface {
  z: number;
}

// ZPositionType은 x, y, z를 구현해야 함
type ZPositionType = PositionType & { z: number };
const obj3: ZPositionType = {
  x: 1,
  y: 1,
  z: 0,
};

// Only interface can use 'extends'
interface ZPositionInterface extends PositionInterface {
  z: number;
}
const test: ZPositionInterface = {
  x: 0,
  y: 0,
  z: 0,
};

// ⚡️ only type can => Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; //string type

type NumberType = number;
type Direction = 'left' | 'right';

// type과 interface는 점점 비슷해져 감 => 계속 update 중 !
// interface는 규격을 정의
// type은 데이터를 담을 경우 데이터의 타입을 정의
