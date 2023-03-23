{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; // 숫자타입의 인자를 받아 makeCoffee함수를 모두 실행해야한다. 규약
    }

    class CoffeeMachine implements CoffeeMaker {

        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;
        constructor(coffeeBeans: number, private milk: milkFrother, private sugar: sugarProvider) {
            this.coffeeBeans = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
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

    class NoMilk implements milkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // 설탕 제조기
    class AutoSugarMixer implements sugarProvider {
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

    class SugarMixer implements sugarProvider {
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

    class NoSugar implements sugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    //Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    //Sugar
    const candySugar = new AutoSugarMixer();
    const sugarCoffee = new SugarMixer();
    const NoSugarCoffee = new NoSugar();

    //
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugarCoffee);
    const latteMachine = new CoffeeMachine(23, cheapMilkMaker, NoSugarCoffee);
    const coldlatteMachine = new CoffeeMachine(23, coldMilkMaker, NoSugarCoffee);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, sugarCoffee);
}


