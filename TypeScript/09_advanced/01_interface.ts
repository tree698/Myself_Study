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
  // z 구현 필요 => 아래에서 merge 했기 때문임
};

// ⭐️ class => 모두 적용 가능
class Test1 implements PositionType {
  x: number;
  y: number;
}

class Test2 implements PositionInterface {
  x: number;
  y: number;
  // z 구현 필요 => 아래에서 merge 했기 때문임
}

// ⭐️ extends => 모두 적용 가능
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// ⚡️ only interface can be merged => 한번 더 정의
interface PositionInterface {
  z: number;
}

// ⚡️ only type can => Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person['name'];

type NumberType = number;
type Direction = 'left' | 'right';

// type과 interface는 점점 비슷해져 감 => 계속 update 중 !
// interface는 규격을 정의
// type은 데이터를 담을 경우 데이터의 타입을 정의
