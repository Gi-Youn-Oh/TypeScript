{
    // 프로토 타입은 객체지향 프로그래밍의 한 스타일
    // method 재사용 (상속), 객체 재사용 제공
}

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level 만들어지는 객체, instance마다 생성
    // this.makeCoffee = (shots) => {
    //     console.log('making... ☕');
    // }
}
// Prototype member level 프로토타입에 공통적으로 존재
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making... ☕');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}
// 상속
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
