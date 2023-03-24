{
    // 캡슐화
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public -> default
    // private -> 어떤 누구도 접근 불가
    // protected -> 외부에서 접근불가하지만 상속받은 자식클래스에서는 접근 가능
    class CoffeeMaker { // 클래스에서는 const, let, function 같은 선언을 하지 않는다.
        // BEANS_GRAM_PER_SHOT: number = 7; // 만들 때 마다 인스턴스에 중복 존재 메모리 낭비
        private static BEANS_GRAM_PER_SHOT: number = 7; // static -> class level, private 외부에서 접근 불가
        private coffeeBeans: number = 0; // instance (object) level, this 쓰지 않음 클래스 이름 붙이기
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // 보통 object 생성함수를 제공한다면 생성자(constructor)를 사용하여 생성하는 것을 권장하지 않음 -> constructor를 private으로
        static makeMachine(coffeeBeans: number): CoffeeMaker { // constructor 호출 없이
            return new CoffeeMaker(coffeeBeans);
        }

        // 함수를 통해 커피콩 추가
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
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

    // const maker = new CoffeeMaker(32); constructor가 private이기 때문에 new 생성자 함수를 사용할 수 없다 -> method 존재 유추
    const maker = CoffeeMaker.makeMachine(32); // method 사용하여 객체 생성
    // maker.coffeeBeans = -34; // 잘못된 할당.. 외부에서 에러 요소 -> private으로 설정하여 접근 못하도록
    maker.fillCoffeeBeans(32);

    // class User {
    //     firstName: string;
    //     lastName: string;
    //     fullName: string
    //
    //
    //     constructor(firstName: string, lastName: string) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.fullName = `${firstName} ${lastName}`
    //     }
    // }
    //
    // const user = new User('steve', 'jobs');
    // console.log(user.fullName); // steve jobs
    // user.firstName = 'Giyoun';
    // console.log(user.fullName); // steve jobs 동일 출력 처음 할당 되면 그대로 유지

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num){
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }

    const user = new User('steve', 'jobs');
    user.age = 6;
    console.log(user.fullName);
}

