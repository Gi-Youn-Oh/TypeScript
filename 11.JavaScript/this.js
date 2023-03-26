console.log(this); // window

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // window
window.simpleFunc(); // window

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
};
const counter = new Counter();
counter.increase(); // Counter {}
// const caller = counter.increase;
caller(); // undefined let, const 는 window객체에 속하지 않는다.
const caller = counter.increase.bind(counter); // bind 혹은 arrow function
caller(); // Counter {}

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob {}