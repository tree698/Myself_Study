'use strict';

// module2와 비교하면서 볼것
console.log(add(1, 3)); // 모듈화로 인해 error => export / import 필요

// defatut를 import할 경우 이름 변경 가능
import add2 from './03_module1..js';
import cal from './03_module1.js'; // 이름 변경

// default가 아닐 경우 => 이름 변경할 경우 as 사용
import { minus } from './03_module1.js';
import { minus as sky } from './03_module1.js';

// default와 함께 사용
import add2, { minus } from './03_module1.js';

// 변수
import { num } from './03_module1.js';

// 모두 import => 이름 변경은 as로...
import * as sound from './03_module1.js';

sound.add(1, 2);
sound.add2(1, 3);
sound.minus(1, 4);
sound.num;
