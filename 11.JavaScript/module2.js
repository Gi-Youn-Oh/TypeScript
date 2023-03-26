// import  add  from './module1.js';
// import  sum  from './module1.js'; // 이름 변경해도 됨
// default가 아니면 {}로 감싸서 사용한다.
// import { print as printMessage} from './module1.js';
// printMessage();
// console.log(sum(1, 2));

// export 되는 모든 함수를 가져온다.
import * as calculator from './module1.js';
console.log(calculator.add(1, 2));
calculator.print();
calculator.name;