{
    // 객체 지향적으로
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker { // 클래스에서는 const, let, function 같은 선언을 하지 않는다.
        // BEANS_GRAM_PER_SHOT: number = 7; // 만들 때 마다 인스턴스에 중복 존재 메모리 낭비
        static BEANS_GRAM_PER_SHOT: number = 7; // static -> class level
        coffeeBeans: number = 0; // instance (object) level, this 쓰지 않음 클래스 이름 붙이기
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker { // constructor 호출 없이
            return new CoffeeMaker(coffeeBeans);
        }
        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    const make3 = CoffeeMaker.makeMachine(3);
}

