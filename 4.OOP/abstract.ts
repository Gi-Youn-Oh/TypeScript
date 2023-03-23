{
    // abstract 실수로 super 상속받지 않아서 빼먹는 경우 방지
    // 자식 클래스마다  다르게 사용할 수 있는 함수가 있다면 abstract

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots:number): CoffeeCup; // 숫자타입의 인자를 받아 makeCoffee함수를 모두 실행해야한다. 규약
    }
    abstract class CoffeeMachine implements CoffeeMaker{ // 커피메이커, 상업용 커피메이커 인터페이스 둘다 구현하는 클래스
        // BEANS_GRAM_PER_SHOT: number = 7; // 만들 때 마다 인스턴스에 중복 존재 메모리 낭비
        private static BEANS_GRAM_PER_SHOT: number = 7; // static -> class level, private 외부에서 접근 불가
        private coffeeBeans: number = 0; // instance (object) level, this 쓰지 않음 클래스 이름 붙이기
        constructor(coffeeBeans: number) { // 상속 가능하게 protected or public
            this.coffeeBeans = coffeeBeans;
        }
        // 함수를 통해 커피콩 추가
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning..')
        }
        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`)
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void{
            console.log('heating up')
        }

        // 구현사항은 작성하지 않는다 protected abstract 순서
        protected abstract extract(shots: number): CoffeeCup;
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine{
        constructor (beans:number, public readonly serialNumber: string){ // 자식클래스에서 생성자를 만들면 반드시 super 를 호출해야함, 부모 생성자의 인수로 받아야함
            super(beans);
        }
        private steamMilk(): void{
            console.log('Steaming some milk...')
        }
        // 자식 클래스에서 정의
        protected  extract(shots: number): CoffeeCup {
            this.steamMilk()
            return {
                shots,
                hasMilk: true,
            }
        }

        // makeCoffee(shots: number): CoffeeCup {
        //     const coffee = super.makeCoffee(shots); // 부모의 기본적 기능 상속
        //     this.steamMilk();
        //     return {
        //         ...coffee,
        //         hasMilk: true,
        //     }
        // }
    }

    class SweetCoffeeMaker extends CoffeeMachine{
        protected  extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true,
            }
        }
        // makeCoffee(shots: number): CoffeeCup { // 오버라이딩
        //     const sweetCoffee = super.makeCoffee(shots);
        //     return {
        //         ...sweetCoffee,
        //         hasSugar: true
        //     }
        // }
    }

    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ]
    machines.forEach(machine => {
        console.log('-------------------------')
        machine.makeCoffee(1);
    })
}


