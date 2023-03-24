{
    // 추상화
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; // 숫자타입의 인자를 받아 makeCoffee함수를 모두 실행해야한다. 규약
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; // 숫자타입의 인자를 받아 makeCoffee함수를 모두 실행해야한다. 규약
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    // public -> default
    // private -> 어떤 누구도 접근 불가
    // protected -> 외부에서 접근불가하지만 상속받은 자식클래스에서는 접근 가능
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker { // 커피메이커, 상업용 커피메이커 인터페이스 둘다 구현하는 클래스
        // BEANS_GRAM_PER_SHOT: number = 7; // 만들 때 마다 인스턴스에 중복 존재 메모리 낭비
        private static BEANS_GRAM_PER_SHOT: number = 7; // static -> class level, private 외부에서 접근 불가
        private coffeeBeans: number = 0; // instance (object) level, this 쓰지 않음 클래스 이름 붙이기
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // 보통 object 생성함수를 제공한다면 생성자(constructor)를 사용하여 생성하는 것을 권장하지 않음 -> constructor를 private으로
        static makeMachine(coffeeBeans: number): CoffeeMachine { // constructor 호출 없이
            return new CoffeeMachine(coffeeBeans);
        }

        // 함수를 통해 커피콩 추가
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning..')
        }
        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`)
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
            // if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
            //     throw new Error('not enough coffee beans');
            // }
            // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            // return {
            //     shots: shots,
            //     hasMilk: false,
            // }
        }
    }

    // const maker = new CoffeeMaker(32); constructor가 private이기 때문에 new 생성자 함수를 사용할 수 없다 -> method 존재 유추
    // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32); // method 사용하여 객체 생성
    // // maker.coffeeBeans = -34; // 잘못된 할당.. 외부에서 에러 요소 -> private으로 설정하여 접근 못하도록
    // maker.fillCoffeeBeans(32);
    // maker.makeCoffee(2);

    // const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(32); // 인터페이스는 fill 함수를 가지고 있지 않다.
    // maker2.makeCoffee(2);

    // const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker3.fillCoffeeBeans(32);
    // maker3.makeCoffee(2);
    // maker3.clean();

    class Amateur {
        constructor(private machine: CoffeeMaker) { }
        makeCoffee() {
            const Coffee = this.machine.makeCoffee(2);
            console.log(Coffee);
        }
    }

    class Pro {
        constructor(private machine: CommercialCoffeeMaker) { }
        makeCoffee() {
            const Coffee = this.machine.makeCoffee(2);
            console.log(Coffee);
            this.machine.fillCoffeeBeans(50);
            this.machine.clean();
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new Amateur(maker);
    const pro = new Pro(maker);
    pro.makeCoffee();
}

