{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; // 숫자타입의 인자를 받아 makeCoffee함수를 모두 실행해야한다. 규약
    }

    class CoffeeMachine implements CoffeeMaker { // 커피메이커, 상업용 커피메이커 인터페이스 둘다 구현하는 클래스
        // BEANS_GRAM_PER_SHOT: number = 7; // 만들 때 마다 인스턴스에 중복 존재 메모리 낭비
        private static BEANS_GRAM_PER_SHOT: number = 7; // static -> class level, private 외부에서 접근 불가
        private coffeeBeans: number = 0; // instance (object) level, this 쓰지 않음 클래스 이름 붙이기
        constructor(coffeeBeans: number) { // 상속 가능하게 protected or public
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
        }
    }

    // 인터페이스를 통해 확장
    interface milkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface sugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements milkFrother {
        private steamMilk(): void { // 내부적
            console.log('Steaming some milk...')
        }

        makeMilk(cup: CoffeeCup): CoffeeCup { // 접근 가능 커피컵을 받아서 우유 스티밍 후에 커피컵을 리턴
            this.steamMilk(); // 커피컵 받아서 스티밍
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    // 인터페이스를 통한 확장 예시
    class FancyMilkSteamer implements milkFrother {
        private steamMilk(): void { // 내부적
            console.log('Fancy Steaming some milk...')
        }

        makeMilk(cup: CoffeeCup): CoffeeCup { // 접근 가능 커피컵을 받아서 우유 스티밍 후에 커피컵을 리턴
            this.steamMilk(); // 커피컵 받아서 스티밍
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class ColdMilkSteamer implements milkFrother {
        private steamMilk(): void { // 내부적
            console.log('Cold Steaming some milk...')
        }

        makeMilk(cup: CoffeeCup): CoffeeCup { // 접근 가능 커피컵을 받아서 우유 스티밍 후에 커피컵을 리턴
            this.steamMilk(); // 커피컵 받아서 스티밍
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    // 설탕 제조기
    class AutoSugarMixer implements sugarProvider{
        private getSugar() {
            console.log('getting sugar')
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class SugarMixer implements sugarProvider{
        private getSugar() {
            console.log('sugar !!!')
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string, private milkFrother: milkFrother) { // 자식클래스에서 생성자를 만들면 반드시 super 를 호출해야함, 부모 생성자의 인수로 받아야함
            super(beans);
        }

        // private steamMilk(): void{
        //     console.log('Steaming some milk...')
        // }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots); // 부모의 기본적 기능 상속
            return this.milkFrother.makeMilk(coffee);

            // this.steamMilk();
            // return {
            //     ...coffee,
            //     hasMilk: true,
            // }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(private beans: number, private sugar: sugarProvider) {
            super(beans);
        }

        // getSugar() {
        //     console.log('sugar pouring')
        // }

        makeCoffee(shots: number): CoffeeCup { // 오버라이딩
            const sweetCoffee = super.makeCoffee(shots);
            return this.sugar.addSugar(sweetCoffee);
        }
    }
    class SweetCafeLatteMachine extends CoffeeMachine {
        constructor(private beans: number, private milk: milkFrother, private sugar: sugarProvider) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.milk.makeMilk(sugarAdded);
        }
    }

    //Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    
    //Sugar
    const candySugar = new AutoSugarMixer();
    const sugarCoffee = new SugarMixer();

    //
    const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
    const sweetMachine = new SweetCoffeeMaker(12, sugarCoffee);

    const latteMachine = new CaffeLatteMachine(23, 'SSSS', cheapMilkMaker);
    const coldlatteMachine = new CaffeLatteMachine(23, 'SSSS', coldMilkMaker);
    const sweetLatteMachine = new SweetCafeLatteMachine(12, cheapMilkMaker, candySugar);
}


