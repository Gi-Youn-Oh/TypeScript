{
    interface Employee {
        pay(): void;

    }

    class FullTimeEmployee implements Employee {
        pay() {
            console.log(`full time`);
        }
        workFullTime() {

        }
    }

    class PartTimeEmployee implements Employee {
        pay(): void {
            console.log(`part time`);
        }
        workPartTime(){}
    }

    // 인자를 fulltime으로 받아도 return은 그냥 interface Employee로 반환 하기 때문에 pay함수 실행 이후에는 더이상 일을 못함.. 즉 세부 클래스 메서드 사용불가
    // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 정말 좋지 않다.
    function payBad(employee: Employee): Employee { 
        employee.pay();
        return employee;
    }

    // genric 활용
    // 조건부 제네릭
    function pay <T extends Employee> (employee: T): T {
        employee.pay(); // <T> => employee에 어떤 타입도 들어올 수 있기 때문에 pay() 없다. <T extends Employee> 제네릭이긴 한데 Employee를 확장한 아이만 가능
        return employee
    }

    const giyoun = new FullTimeEmployee();
    const noye = new PartTimeEmployee();
    giyoun.workFullTime();
    noye.workPartTime();

    // const giyounAfterPay = pay(giyoun);
    // const noyeAfterPay = pay(noye);
    // giyounAfterPay.workFullTime(); 접근 못함

    // const giyounAfterPay = pay(giyoun) as FullTimeEmployee; // 확신이 있다면 but 좋지 않음 as 사용은
    // const noyeAfterPay = pay(noye) as PartTimeEmployee;
    // giyounAfterPay.workFullTime(); //가능은함

    const giyounAfterPay = pay(giyoun);
    const noyeAfterPay = pay(noye);

    giyounAfterPay.workFullTime(); // 제네릭으로 가능
    
    const obj = {
        name: 'giyoun',
        age: 30,
    };

    const obj2 = {
        animal: 'dog',
    };

    // T = object
    // K extends keyof T = T 객체 안에 들어있는 키중 하나
    function getValue<T, K extends keyof T> (object: T, key: K): T[K] {
        return object[key];
    }

    console.log(getValue(obj, 'name')); // giyoun
    console.log(getValue(obj, 'age')); // 30
    console.log(getValue(obj2, 'animal')); // dog
}